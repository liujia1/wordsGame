import React, { useState, useEffect, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import WordSlide from './WordSlide';
import { selectQuestions, checkAnswer, splitSentence } from '../utils/gameHelpers';

// 导入 Swiper 样式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  const swiperRef = useRef(null);

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
    setGameStarted(true);
  };

  // 处理答案变化
  const handleAnswerChange = (slideIndex, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [slideIndex]: answer,
    }));
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
  };

  // 重新开始
  const handleRestart = () => {
    setGameStarted(false);
    setTimeout(() => {
      startGame();
    }, 100);
  };

  // 渲染分数显示
  const renderScore = () => {
    const totalQuestions = questions.length;
    const answeredCount = Object.keys(userAnswers).filter(
      key => userAnswers[key] && userAnswers[key].length > 0
    ).length;

    return (
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">🎮 单词组合句子游戏</h1>
            <p className="text-sm mt-1">
              进度：{answeredCount} / {totalQuestions}
            </p>
          </div>
          
          {gameStarted && (
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm opacity-90">得分</p>
                <p className="text-3xl font-bold">{score} / 100</p>
              </div>
              <button
                onClick={handleRestart}
                className="bg-white text-primary px-4 py-2 rounded-lg font-bold hover:bg-yellow-100 transition-colors shadow-md"
              >
                🔄 再来一次
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // 渲染开始界面
  const renderStartScreen = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl m-8 p-8">
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
        {/* Swiper 幻灯片区域 */}
        <div className="flex-1 p-4 min-h-0">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="h-full rounded-2xl shadow-xl bg-white"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {questions.map((sentence, index) => (
              <SwiperSlide key={index}>
                <div className="h-full overflow-auto">
                  <WordSlide
                    sentence={sentence}
                    slideIndex={index}
                    isSubmitted={submitted[index]?.submitted || false}
                    isCorrect={submitted[index]?.correct || false}
                    onAnswerChange={handleAnswerChange}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 提交按钮 */}
        {!Object.values(submitted).some(s => s.submitted) && (
          <div className="p-4 flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-success hover:bg-green-400 text-white text-xl font-bold px-16 py-4 rounded-full shadow-lg transform transition-all hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={Object.keys(userAnswers).length === 0}
            >
              ✅ 提交答案
            </button>
          </div>
        )}

        {/* 提交后显示最终分数和提示 */}
        {Object.values(submitted).some(s => s.submitted) && (
          <div className="p-4 flex justify-center">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <p className="text-3xl font-bold text-primary mb-2">
                🏆 最终得分：{score} / 100
              </p>
              <p className="text-gray-600 mb-4">
                {score === 100 
                  ? '太棒了！全对！🎉' 
                  : score >= 80 
                  ? '很不错！继续加油！💪' 
                  : score >= 60 
                  ? '及格了！还需要努力哦~📚' 
                  : '多多练习，你会更棒的！✨'}
              </p>
              <button
                onClick={handleRestart}
                className="bg-primary hover:bg-red-500 text-white font-bold px-8 py-3 rounded-lg shadow-md transition-colors"
              >
                🔄 再做一次
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
        {renderScore()}
        
        <div className="container mx-auto">
          {!gameStarted ? renderStartScreen() : renderGame()}
        </div>
      </div>
    </DndProvider>
  );
};

export default SentenceGame;
