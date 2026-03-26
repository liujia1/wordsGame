import React, { useState, useEffect } from 'react';
import WordSlide from './WordSlide';
import { selectQuestions, checkAnswer, splitSentence } from '../utils/gameHelpers';

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

  // 读取句子文件
  useEffect(() => {
    // 直接在代码中定义默认句子（避免路径问题）
    const defaultSentences = [
      'I love you.',
      'She is a teacher.',
      'They play basketball.',
      'He reads a book.',
      'We go to school.',
      'The cat is cute.',
      'My name is Tom.',
      'It is sunny today.',
      'They are happy.',
      'She likes apples.',
      'He can swim fast.',
      'The dog runs quickly.',
      'I have a dream.',
      'You are my friend.',
      'We study English.',
      'The bird sings beautifully.',
      'She dances very well.',
      'He plays the piano.',
      'They watch TV together.',
      'I eat breakfast at 7.',
    ];
    setSentences(defaultSentences);
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

  // 切换到上一题
  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // 切换到下一题
  const goToNext = () => {
    if (currentSlide < questions.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // 处理答案变化
  const handleAnswerChange = (slideIndex, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [slideIndex]: answer,
    }));
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
      
      // 3秒后隐藏庆祝效果
      setTimeout(() => {
        setShowCelebration(false);
      }, 3000);
    } else {
      setIsPerfectScore(false);
      // 播放泄气音效
      playDeflateSound();
      // 显示鼓励文字
      setShowEncouragement(true);
      // 延迟播放鼓励语音
      setTimeout(() => {
        speakEncouragement();
      }, 500);
      // 1.5秒后隐藏鼓励文字
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
    setSubmitted({});
    setScore(0);
    setCurrentSlide(0);
    setIsPerfectScore(false);
    setShowCelebration(false);
    setShowEncouragement(false);
    // 保持 gameStarted 为 true，不跳转到开始界面
  };

  // 切换到指定题目
  const goToSlide = (index) => {
    setCurrentSlide(index);
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
          <div className="text-4xl font-bold text-white mt-4 drop-shadow-lg">
            100分！太棒了！
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
        <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
          将散乱的单词拖到横线上，组成完整的句子吧！
        </p>
        
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8 max-w-md">
          <h3 className="font-bold text-lg mb-3 text-gray-700">📋 游戏规则：</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✅ 共有 10 道题目</li>
            <li>✅ 拖动单词到下方横线</li>
            <li>✅ 双击已放置的单词可以取消</li>
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
        {/* 题目切换按钮 */}
        <div className="flex justify-between items-center p-4 bg-white rounded-t-2xl shadow-md">
          <button
            onClick={goToPrevious}
            disabled={currentSlide === 0}
            className={`
              px-6 py-3 rounded-lg font-bold text-lg transition-all
              ${currentSlide === 0 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-red-500 hover:scale-105'}
            `}
          >
            ⬅️ 上一题
          </button>
          
          <div className="text-center flex flex-col items-center">
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
                {isPerfectScore ? '🏆' : ''} 得分：{score} / 100 {isPerfectScore ? '🏆' : ''}
              </div>
            )}
          </div>
          
          <button
            onClick={goToNext}
            disabled={currentSlide === questions.length - 1}
            className={`
              px-6 py-3 rounded-lg font-bold text-lg transition-all
              ${currentSlide === questions.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-secondary text-white hover:bg-cyan-500 hover:scale-105'}
            `}
          >
            下一题 ➡️
          </button>
        </div>

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
            key={questions[currentSlide]}
            sentence={questions[currentSlide]}
            slideIndex={currentSlide}
            isSubmitted={submitted[currentSlide]?.submitted || false}
            isCorrect={submitted[currentSlide]?.correct || false}
            onAnswerChange={handleAnswerChange}
            initialAnswer={userAnswers[currentSlide] || null}
          />
        </div>

        {/* 分页指示器 */}
        <div className="flex justify-center gap-2 p-4 bg-white border-t">
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

        {/* 提交按钮和重新开始按钮 */}
        <div className="p-4 flex justify-center gap-4">
          {!Object.values(submitted).some(s => s.submitted) && (
            <button
              onClick={handleSubmit}
              className="bg-success hover:bg-green-400 text-white text-xl font-bold px-16 py-4 rounded-full shadow-lg transform transition-all hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={Object.keys(userAnswers).length < questions.length || Object.values(userAnswers).some(answer => !answer || answer.length === 0)}
            >
              ✅ 提交答案
            </button>
          )}
          
          <button
            onClick={handleRestart}
            className="bg-primary hover:bg-red-500 text-white font-bold px-8 py-4 rounded-lg shadow-md transition-colors"
          >
            🔄 再来一次
          </button>
        </div>
        
        {/* 提交后显示满分庆祝 - 只在满分时显示 */}
        {Object.values(submitted).some(s => s.submitted) && isPerfectScore && (
          <div className="p-4 flex justify-center">
            <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-xl px-6 py-3 shadow-lg text-center animate-pulse">
              <p className="text-2xl font-bold text-white">
                🏆 最终得分：{score} / 100 🏆
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 pt-4">
      {showCelebration && <ConfettiEffect />}
      {showCelebration && <PerfectScoreCelebration />}
      <div className="container mx-auto pb-4">
        {!gameStarted ? renderStartScreen() : renderGame()}
      </div>
    </div>
  );
};

export default SentenceGame;
