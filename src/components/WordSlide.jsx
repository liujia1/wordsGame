import React, { useState, useCallback, useEffect } from 'react';
import { splitSentence, seededShuffle } from '../utils/gameHelpers';

/**
 * 单词卡片组件（点击式）
 */
const WordCard = ({ word, status, onClick, disabled }) => {
  const baseClasses = "px-4 py-2 rounded-lg text-lg font-medium cursor-pointer transition-all duration-200 select-none";
  
  const statusClasses = {
    available: "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50 shadow-sm",
    placed: "bg-blue-500 border-2 border-blue-600 text-white shadow-md",
  };
  
  const disabledClasses = "opacity-50 cursor-not-allowed";
  
  const className = `${baseClasses} ${statusClasses[status]} ${disabled ? disabledClasses : ""}`;
  
  return (
    <div
      className={className}
      onClick={disabled ? null : onClick}
    >
      {word}
    </div>
  );
};

/**
 * 答案区单词卡片组件
 */
const AnswerCard = ({ word, onClick, disabled }) => {
  return (
    <div
      className={`px-4 py-2 rounded-lg text-lg font-medium cursor-pointer transition-all duration-200 select-none bg-blue-500 border-2 border-blue-600 text-white shadow-md hover:bg-blue-600 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={disabled ? null : onClick}
    >
      {word}
    </div>
  );
};

/**
 * 单词幻灯片组件（单个游戏）
 */
const WordSlide = ({ 
  sentence, 
  slideIndex, 
  isSubmitted = false, 
  isCorrect = false,
  onAnswerChange,
  initialAnswer = null 
}) => {
  // 将句子拆分为单词
  const words = splitSentence(sentence);
  
  // 使用句子内容作为种子进行确定性洗牌（确保同一个题目每次洗牌结果相同）
  const [shuffledWords] = useState(() => 
    seededShuffle(words.map((w, i) => ({ word: w, originalIndex: i })), sentence)
  );
  
  // 用户的答案（按顺序放置）
  const [userAnswer, setUserAnswer] = useState([]);
  
  // 单词状态：'available'(可用), 'placed'(已放置)
  const [wordStatuses, setWordStatuses] = useState(
    shuffledWords.map(() => 'available')
  );

  // 当 initialAnswer 变化时，恢复答案
  useEffect(() => {
    if (initialAnswer && initialAnswer.length > 0) {
      setUserAnswer(initialAnswer);
      
      // 更新单词状态
      const newStatuses = shuffledWords.map(() => 'available');
      initialAnswer.forEach(word => {
        const wordIndex = shuffledWords.findIndex(w => w.word === word);
        if (wordIndex !== -1) {
          newStatuses[wordIndex] = 'placed';
        }
      });
      setWordStatuses(newStatuses);
    } else {
      setUserAnswer([]);
      setWordStatuses(shuffledWords.map(() => 'available'));
    }
  }, [initialAnswer, shuffledWords]);

  // 点击单词卡片 -> 放入答案区
  const handleWordClick = useCallback((word, originalIndex) => {
    if (isSubmitted) return;
    
    // 检查是否已经放置
    const wordIndexInShuffled = shuffledWords.findIndex(w => w.originalIndex === originalIndex);
    if (wordIndexInShuffled === -1 || wordStatuses[wordIndexInShuffled] === 'placed') {
      return;
    }
    
    // 添加到答案区
    const newAnswer = [...userAnswer, word];
    
    // 更新单词状态
    const newStatuses = [...wordStatuses];
    newStatuses[wordIndexInShuffled] = 'placed';
    
    // 检查是否只剩最后一个空位，如果是则自动填充最后一个单词
    if (newAnswer.length === shuffledWords.length - 1) {
      // 找到最后一个可用的单词
      const lastAvailableIndex = newStatuses.findIndex(status => status === 'available');
      if (lastAvailableIndex !== -1) {
        const lastWord = shuffledWords[lastAvailableIndex].word;
        newAnswer.push(lastWord);
        newStatuses[lastAvailableIndex] = 'placed';
      }
    }
    
    setUserAnswer(newAnswer);
    setWordStatuses(newStatuses);
    
    // 通知父组件
    if (onAnswerChange) {
      onAnswerChange(slideIndex, newAnswer);
    }
  }, [isSubmitted, onAnswerChange, slideIndex, userAnswer, shuffledWords, wordStatuses]);

  // 点击答案区的单词 -> 移除
  const handleAnswerClick = useCallback((index) => {
    if (isSubmitted) return;
    
    const word = userAnswer[index];
    
    // 找到这个单词在 shuffledWords 中的索引
    const wordIndexInShuffled = shuffledWords.findIndex(w => w.word === word);
    
    // 从答案区移除
    const newAnswer = userAnswer.filter((_, i) => i !== index);
    setUserAnswer(newAnswer);
    
    // 更新单词状态
    if (wordIndexInShuffled !== -1) {
      setWordStatuses(prev => {
        const newStatuses = [...prev];
        newStatuses[wordIndexInShuffled] = 'available';
        return newStatuses;
      });
    }
    
    // 通知父组件
    if (onAnswerChange) {
      onAnswerChange(slideIndex, newAnswer);
    }
  }, [isSubmitted, onAnswerChange, slideIndex, userAnswer, shuffledWords]);

  // 重置答案区
  const handleReset = useCallback(() => {
    if (isSubmitted) return;
    
    setUserAnswer([]);
    setWordStatuses(shuffledWords.map(() => 'available'));
    
    // 通知父组件
    if (onAnswerChange) {
      onAnswerChange(slideIndex, []);
    }
  }, [isSubmitted, onAnswerChange, slideIndex, shuffledWords]);

  // 渲染单词区的单词
  const renderWords = () => {
    return shuffledWords.map((item, index) => (
      <WordCard
        key={`word-${index}`}
        word={item.word}
        status={wordStatuses[index]}
        onClick={() => handleWordClick(item.word, item.originalIndex)}
        disabled={isSubmitted}
      />
    ));
  };

  // 渲染答案区
  const renderAnswer = () => {
    const elements = [];
    
    // 使用 shuffledWords 的长度，因为这才是实际的单词数量
    for (let i = 0; i < shuffledWords.length; i++) {
      if (i < userAnswer.length) {
        elements.push(
          <AnswerCard
            key={`answer-${i}`}
            word={userAnswer[i]}
            onClick={() => handleAnswerClick(i)}
            disabled={isSubmitted}
          />
        );
      } else {
        elements.push(
          <div
            key={`slot-${i}`}
            className="w-16 h-10 border-b-2 border-gray-400 flex items-center justify-center"
          />
        );
      }
    }
    
    return elements;
  };

  return (
    <div className="flex flex-col h-full p-6">
      {/* 上部：答案放置区 */}
      <div className="flex-1 overflow-auto mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-600 text-center flex-1">
            你的答案
          </h3>
          <button
            onClick={handleReset}
            disabled={isSubmitted}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              isSubmitted 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-orange-500 text-white hover:bg-orange-600 shadow-md'
            }`}
          >
            🔄 重新开始
          </button>
        </div>
        <div className="flex flex-wrap justify-center items-center min-h-[120px] bg-blue-50 rounded-xl p-4 border-2 border-blue-200 gap-3">
          {renderAnswer()}
        </div>
        
        {/* 提交后显示反馈 */}
        {isSubmitted && (
          <div className={`mt-4 p-4 rounded-lg text-center ${
            isCorrect ? 'bg-green-100 border-2 border-green-400' : 'bg-red-100 border-2 border-red-400'
          }`}>
            <p className={`text-xl font-bold ${
              isCorrect ? 'text-green-700' : 'text-red-700'
            }`}>
              {isCorrect ? '🎉 太棒了！完全正确！' : '❌ 再想想看哦~'}
            </p>
            {!isCorrect && (
              <p className="text-gray-600 mt-2">
                正确答案：<span className="font-bold text-secondary">{sentence}</span>
              </p>
            )}
          </div>
        )}
      </div>
      
      {/* 下部：散乱的单词区 */}
      <div className="flex-none">
        <h3 className="text-xl font-bold text-gray-600 mb-4 text-center">
          点击下面的单词按顺序组成句子
        </h3>
        <div className="flex flex-wrap justify-center items-center min-h-[100px] bg-white rounded-xl p-4 shadow-inner gap-2">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default WordSlide;
