import React, { useState, useEffect } from 'react';
import WordSlide from './WordSlide';
import { selectQuestions, checkAnswer, splitSentence } from '../utils/gameHelpers';
import sentencesData from '../data/sentences.txt?raw';

/**
 * 句子游戏主组件
 */
const SentenceGame = () => {
  const [sentences, setSentences] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPerfectScore, setIsPerfectScore] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [comboCount, setComboCount] = useState(0); // 连击次数
  const [showComboEffect, setShowComboEffect] = useState(false); // 显示连击特效
  const [autoSwitch, setAutoSwitch] = useState(false); // 自动切换开关（全局状态）
  const [modifiedSlides, setModifiedSlides] = useState({}); // 记录每道题是否有过答题操作（独立变量）
  const [gameRound, setGameRound] = useState(0); // 游戏轮次，用于强制刷新组件

  // 读取句子文件
  useEffect(() => {
    try {
      // 从 sentences.txt 文件读取句子（使用 Vite 的 ?raw 导入）
      const loadedSentences = sentencesData
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);
      
      if (loadedSentences.length === 0) {
        console.warn('句子文件为空，使用默认句子');
        // 如果文件为空，使用默认句子
        setSentences([
          'I love you.',
          'She is a teacher.',
          'They play basketball.',
          'He reads a book.',
          'We go to school.',
        ]);
      } else {
        setSentences(loadedSentences);
      }
    } catch (error) {
      console.error('加载句子文件失败:', error);
      // 出错时使用默认句子
      setSentences([
        'I love you.',
        'She is a teacher.',
        'They play basketball.',
        'He reads a book.',
        'We go to school.',
      ]);
    }
  }, []);

  // 开始游戏
  const startGame = () => {
    if (sentences.length === 0) return;
    
    // 随机抽取 10 题（有放回）
    const selectedQuestions = selectQuestions(sentences, 10);
    setQuestions(selectedQuestions);
    setUserAnswers({});
    setSubmitted({});
    setScore(0);
    setCurrentSlide(0);
    setGameStarted(true);
  };

  // 处理答案变化
  const handleAnswerChange = (slideIndex, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [slideIndex]: answer,
    }));
    
    // 标记这道题已经被修改过
    setModifiedSlides(prev => ({
      ...prev,
      [slideIndex]: true,
    }));
  };

  // 播放连击音效（更激昂的音乐）
  const playComboSound = (comboLevel) => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // 根据连击等级播放不同的音效
      const baseFreq = 523.25; // C5
      const intervals = [];
      
      if (comboLevel === 1) {
        // First Blood：简单的胜利音效
        intervals.push([0, baseFreq]);
        intervals.push([0.15, baseFreq * 1.25]);
        intervals.push([0.3, baseFreq * 1.5]);
      } else if (comboLevel >= 10) {
        // 10 连击：华丽的 ascending arpeggio
        intervals.push([0, baseFreq]);
        intervals.push([0.1, baseFreq * 1.25]);
        intervals.push([0.2, baseFreq * 1.5]);
        intervals.push([0.3, baseFreq * 2]);
        intervals.push([0.4, baseFreq * 2.5]);
      } else if (comboLevel >= 5) {
        // 5 连击：ascending arpeggio
        intervals.push([0, baseFreq]);
        intervals.push([0.15, baseFreq * 1.25]);
        intervals.push([0.3, baseFreq * 1.5]);
        intervals.push([0.45, baseFreq * 2]);
      } else {
        // 3 连击：简单的三和弦
        intervals.push([0, baseFreq]);
        intervals.push([0.1, baseFreq * 1.25]);
        intervals.push([0.2, baseFreq * 1.5]);
      }
      
      intervals.forEach(([delay, frequency]) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + delay);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + delay);
        gainNode.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + delay + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + delay + 0.6);
        
        oscillator.start(audioContext.currentTime + delay);
        oscillator.stop(audioContext.currentTime + delay + 0.8);
      });
    } catch (error) {
      console.log('Combo sound failed:', error);
    }
  };

  // 语音合成 - 连击播报（使用英文游戏术语）
  const speakCombo = (comboLevel) => {
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        let text = '';
        let lang = 'en-US'; // 使用英文语音
        
        if (comboLevel === 1) {
          text = 'First Blood!';
        } else if (comboLevel === 2) {
          text = 'Double Kill!';
        } else if (comboLevel === 3) {
          text = 'Triple Kill!';
        } else if (comboLevel === 4) {
          text = 'Quadra Kill!';
        } else if (comboLevel === 5) {
          text = 'Penta Kill!';
        } else if (comboLevel === 6) {
          text = 'Killing Spree!';
        } else if (comboLevel === 7) {
          text = 'Rampage!';
        } else if (comboLevel === 8) {
          text = 'Unstoppable!';
        } else if (comboLevel === 9) {
          text = 'Godlike!';
        } else if (comboLevel >= 10) {
          text = 'Legendary!';
        }
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.9;
        utterance.pitch = 1.2;
        utterance.volume = 1;
        
        window.speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.log('Combo speech failed:', error);
    }
  };

  // 播放庆祝音效
  const playCelebrationSound = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // 创建多个音符形成和弦
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      
      notes.forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        
        // 音量包络
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
        
        oscillator.start(audioContext.currentTime + index * 0.05);
        oscillator.stop(audioContext.currentTime + 1);
      });
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  // 播放泄气音效
  const playDeflateSound = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // 创建泄气效果的振荡器
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // 使用锯齿波模拟泄气声
      oscillator.type = 'sawtooth';
      
      // 频率从高到低快速下降
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.8);
      
      // 音量包络：先大后小
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.8);
    } catch (error) {
      console.log('Deflate sound failed:', error);
    }
  };

  // 语音合成 - 说"请再接再厉"
  const speakEncouragement = () => {
    try {
      if ('speechSynthesis' in window) {
        // 停止之前的语音
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance('请再接再厉');
        utterance.lang = 'zh-CN';
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        utterance.volume = 1;
        
        window.speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.log('Speech synthesis failed:', error);
    }
  };

  // 提交答案
  const handleSubmit = () => {
    let newScore = 0;
    const newSubmitted = {};

    questions.forEach((sentence, index) => {
      const userAnswer = userAnswers[index] || [];
      const isCorrect = checkAnswer(userAnswer, sentence);
      
      newSubmitted[index] = {
        submitted: true,
        correct: isCorrect,
      };

      if (isCorrect) {
        newScore += 10;
      }
    });

    setSubmitted(newSubmitted);
    setScore(newScore);
        
    // 检查是否满分
    if (newScore === 100) {
      setIsPerfectScore(true);
      setShowCelebration(true);
      playCelebrationSound();
          
      // 连击系统：如果之前也是满分，增加连击数
      setComboCount(prev => {
        const newCombo = prev + 1;
        console.log('连击数:', newCombo);
              
        // 第一次满分或达到连击里程碑时触发语音（不显示特效文字）
        if (newCombo >= 1) {
          playComboSound(newCombo);
          speakCombo(newCombo);
        }
              
        return newCombo;
      });
          
      // 3 秒后隐藏庆祝效果
      setTimeout(() => {
        setShowCelebration(false);
      }, 3000);
    } else {
      setIsPerfectScore(false);
      // 重置连击
      setComboCount(0);
      setShowComboEffect(false);
          
      // 播放泄气音效
      playDeflateSound();
      // 显示鼓励文字
      setShowEncouragement(true);
      // 延迟播放鼓励语音
      setTimeout(() => {
        speakEncouragement();
      }, 500);
      // 1.5 秒后隐藏鼓励文字
      setTimeout(() => {
        setShowEncouragement(false);
      }, 2500);
    }
  };

  // 重新开始（直接重置游戏，不跳转到开始界面）
  const handleRestart = () => {
    if (sentences.length === 0) return;
    
    // 停止语音播放
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    
    // 随机抽取 10 题（有放回）
    const selectedQuestions = selectQuestions(sentences, 10);
    setQuestions(selectedQuestions);
    setUserAnswers({});
    setModifiedSlides({}); // 重置所有题目的修改状态
    setSubmitted({});
    setScore(0);
    setCurrentSlide(0);
    setIsPerfectScore(false);
    setShowCelebration(false);
    setShowEncouragement(false);
    setGameRound(prev => prev + 1); // 增加游戏轮次，强制刷新 WordSlide 组件
    // 保持 gameStarted 为 true，不跳转到开始界面
    // 注意：不重置 comboCount，保持连击记录
    // 注意：不重置 autoSwitch，保持自动切换开关状态
  };

  // 切换到指定题目
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  // 切换到上一题
  const goToPrevious = () => {
    if (currentSlide > 0) {
      // 切换到上一题前，将当前题目的 modified 状态重置为 false
      setModifiedSlides(prev => ({
        ...prev,
        [currentSlide]: false,
      }));
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  // 切换到下一题
  const goToNext = () => {
    if (currentSlide < questions.length - 1) {
      // 切换到下一题前，将当前题目的 modified 状态重置为 false
      setModifiedSlides(prev => ({
        ...prev,
        [currentSlide]: false,
      }));
      setCurrentSlide(currentSlide + 1);
    }
  };

  // 连击特效组件
  const ComboEffect = ({ combo }) => {
    const getComboColor = () => {
      if (combo >= 10) return 'from-yellow-400 via-red-500 to-pink-500';
      if (combo === 5) return 'from-purple-400 via-pink-500 to-red-500';
      if (combo === 4) return 'from-green-400 via-cyan-500 to-blue-500';
      if (combo === 3) return 'from-blue-400 via-green-500 to-cyan-500';
      if (combo === 2) return 'from-orange-400 to-red-500';
      return 'from-red-400 via-orange-500 to-yellow-500';
    };
    
    const getComboText = () => {
      if (combo >= 10) return '🔥 LEGENDARY! 🔥';
      if (combo === 9) return '⚡ GODLIKE! ⚡';
      if (combo === 8) return '💥 UNSTOPPABLE! 💥';
      if (combo === 7) return '🌪️ RAMPAGE! 🌪️';
      if (combo === 6) return '🔥 KILLING SPREE! 🔥';
      if (combo === 5) return '🔥 PENTA KILL! 🔥🔥';
      if (combo === 4) return '🔥 QUADRA KILL! 🔥';
      if (combo === 3) return '🔥 TRIPLE KILL! 🔥';
      if (combo === 2) return '⚡ DOUBLE KILL! ⚡';
      if (combo === 1) return '🩸 FIRST BLOOD! 🩸';
      return `${combo} KILL STREAK!`;
    };
    
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="text-center animate-bounce">
          <div className="text-6xl mb-4 animate-pulse"></div>
          <div className={`text-5xl md:text-6xl font-bold text-white drop-shadow-lg bg-gradient-to-r ${getComboColor()} px-8 py-4 rounded-2xl animate-pulse`}>
            {getComboText()}
          </div>
          <div className="text-3xl text-yellow-300 mt-4 drop-shadow-lg">
            ⭐ x {combo} ⭐
          </div>
        </div>
        <style>{`
          @keyframes combo-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }
        `}</style>
      </div>
    );
  };

  // 彩带特效组件
  const ConfettiEffect = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9', '#fd79a8', '#a29bfe'];
    const confettiCount = 100;
    
    return (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {Array.from({ length: confettiCount }).map((_, i) => {
          const style = {
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            animation: `fall ${2 + Math.random() * 3}s linear ${Math.random() * 2}s forwards`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            width: `${8 + Math.random() * 8}px`,
            height: `${8 + Math.random() * 8}px`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            transform: `rotate(${Math.random() * 360}deg)`,
          };
          
          return <div key={i} className="absolute" style={style} />;
        })}
        <style>{`
          @keyframes fall {
            to {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    );
  };

  // 满分庆祝组件
  const PerfectScoreCelebration = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="text-center animate-bounce">
          <div className="text-8xl mb-4">🎉</div>
          <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg">
            满分！
          </div>
          <div className="text-4xl font-bold text-red-600 mt-4 drop-shadow-lg">
            100 分！太棒了！
          </div>
          <div className="text-2xl text-yellow-300 mt-2 drop-shadow-lg">
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>
    );
  };

  // 渲染开始界面
  const renderStartScreen = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl m-4 p-8">
        <h2 className="text-5xl font-bold text-gray-700 mb-4">
          🎓 英语句子练习
        </h2>
        
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8 max-w-md">
          <h3 className="font-bold text-lg mb-3 text-gray-700">📋 游戏规则：</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✅ 共有 10 道题目</li>
            <li>✅ 点击单词放入答案区</li>
            <li>✅ 点击答案区的单词可以移除</li>
            <li>✅ 每题 10 分，满分 100 分</li>
            <li>✅ 提交后可以看到正确答案</li>
          </ul>
        </div>

        <button
          onClick={startGame}
          className="bg-primary hover:bg-red-500 text-white text-2xl font-bold px-12 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
        >
          🚀 开始游戏
        </button>
      </div>
    );
  };

  // 渲染游戏界面
  const renderGame = () => {
    if (questions.length === 0) return null;

    return (
      <div className="flex flex-col h-[calc(100vh-80px)]">
        {/* 浮动鼓励文字 - 显示在顶部导航栏下方 */}
        {showEncouragement && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-fade-out">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl px-6 py-3 shadow-lg text-center animate-pulse">
              <p className="text-lg font-bold text-gray-700">
                💪 请再接再厉！
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {score >= 80 ? '已经很棒了，继续加油！' : score >= 60 ? '继续努力，你可以做得更好！' : '不要气馁，多练习就会进步！'}
              </p>
            </div>
            <style>{`
              @keyframes fade-out {
                0% {
                  opacity: 1;
                }
                70% {
                  opacity: 1;
                }
                100% {
                  opacity: 0;
                }
              }
              .animate-fade-out {
                animation: fade-out 1.5s ease-in-out forwards;
              }
            `}</style>
          </div>
        )}

        {/* 当前题目幻灯片 */}
        <div className="flex-1 p-4 bg-white">
          <WordSlide
            key={`${gameRound}-${currentSlide}-${questions[currentSlide]}`}
            sentence={questions[currentSlide]}
            slideIndex={currentSlide}
            isSubmitted={submitted[currentSlide]?.submitted || false}
            isCorrect={submitted[currentSlide]?.correct || false}
            onAnswerChange={handleAnswerChange}
            initialAnswer={userAnswers[currentSlide] || null}
            onRestartGame={handleRestart}
            onNextQuestion={goToNext}
            autoSwitch={autoSwitch}
            onAutoSwitchChange={setAutoSwitch}
            hasModified={!!modifiedSlides[currentSlide]} // 传递当前题目的修改状态
          />
        </div>

        {/* 分页指示器 */}
        <div className="flex flex-col items-center gap-2 p-4 bg-white border-t">
          <div className="flex justify-center gap-2 mb-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  w-3 h-3 rounded-full transition-all
                  ${index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'}
                  ${submitted[index]?.submitted 
                    ? submitted[index]?.correct 
                      ? 'bg-green-500' 
                      : 'bg-red-500'
                    : ''}
                `}
                title={`第 ${index + 1} 题`}
              />
            ))}
          </div>
        </div>

        {/* 题目切换按钮和提交按钮 - 移到底部 */}
        <div className="flex flex-wrap justify-between items-center p-4 bg-white border-t gap-2">
          <button
            onClick={goToPrevious}
            disabled={currentSlide === 0}
            className={`
              px-6 py-3 rounded-lg font-bold text-lg transition-all flex-shrink-0
              ${currentSlide === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-red-500 hover:scale-105'}
            `}
          >
            ⬅️ 上一题
          </button>
          
          {/* 中间内容：窄屏时换行到下方居中，宽屏时绝对定位居中 */}
          <div className="w-full flex justify-center order-first md:order-none md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold text-gray-700">
                第 {currentSlide + 1} / {questions.length} 题
              </p>
              {/* 提交后显示得分 */}
              {Object.values(submitted).some(s => s.submitted) && (
                <div className={`
                  mt-1 px-3 py-1 rounded-full text-sm font-bold transition-all
                  ${isPerfectScore 
                    ? 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white' 
                    : 'bg-gray-100 text-primary'}
                `}>
                  {isPerfectScore ? '' : ''} 得分：{score} / 100 {isPerfectScore ? '' : ''}
                </div>
              )}
              {/* 显示连击数 */}
              {comboCount >= 1 && (
                <div className="mt-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 text-white animate-pulse">
                  {comboCount === 1 ? '🩸 FIRST BLOOD!' : comboCount === 2 ? '⚡ DOUBLE KILL!' : comboCount === 3 ? '🔥 TRIPLE KILL!' : comboCount === 4 ? '🔥 QUADRA KILL!' : comboCount === 5 ? '🔥 PENTA KILL!' : comboCount === 6 ? '🔥 KILLING SPREE!' : comboCount === 7 ? '🌪️ RAMPAGE!' : comboCount === 8 ? '💥 UNSTOPPABLE!' : comboCount === 9 ? '⚡ GODLIKE!' : comboCount >= 10 ? '🔥 LEGENDARY!' : `${comboCount} KILL STREAK`}
                </div>
              )}
            </div>
          </div>
          
          {/* 如果不是最后一题，显示下一题按钮；如果是最后一题且未提交，显示提交答案按钮 */}
          <div className="flex-shrink-0">
            {currentSlide < questions.length - 1 ? (
              <button
                onClick={goToNext}
                className="px-6 py-3 rounded-lg font-bold text-lg transition-all bg-secondary text-white hover:bg-cyan-500 hover:scale-105"
              >
                下一题 ➡️
              </button>
            ) : (
              !Object.values(submitted).some(s => s.submitted) && (
                <button
                  onClick={handleSubmit}
                  className="bg-success hover:bg-green-400 text-white text-xl font-bold px-6 py-3 rounded-lg shadow-lg transform transition-all hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={Object.keys(userAnswers).length < questions.length || Object.values(userAnswers).some(answer => !answer || answer.length === 0)}
                >
                  ✅ 提交答案
                </button>
              )
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 pt-4">
      {showCelebration && <ConfettiEffect />}
      {showCelebration && <PerfectScoreCelebration />}
      {showComboEffect && <ComboEffect combo={comboCount} />}
      <div className="container mx-auto pb-4">
        {!gameStarted ? renderStartScreen() : renderGame()}
      </div>
    </div>
  );
};

export default SentenceGame;
