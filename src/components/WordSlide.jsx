import React, { useState, useCallback, useEffect } from 'react';
import { splitSentence, seededShuffle } from '../utils/gameHelpers';

/**
 * 单词卡片组件（点击式）
 */
const WordCard = ({ word, status, onClick, disabled }) => {
  const baseClasses = "px-4 py-2 rounded-lg text-lg font-medium cursor-pointer transition-all duration-200 select-none card-hover";
  
  const statusClasses = {
    available: "bg-white border-2 border-gray-300 text-gray-700 shadow-sm word-card-available",
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
      className={`px-3 py-1.5 rounded-lg text-base font-medium cursor-pointer transition-all duration-200 select-none bg-blue-500 border-2 border-blue-600 text-white shadow-md answer-card card-hover ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
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
  initialAnswer = null,
  onRestartGame,
  onNextQuestion,
  autoSwitch = false,
  onAutoSwitchChange,
  hasModified = false // 新增：这道题是否有过答题操作
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

  // 当答案变化时，检查是否填满且开启了自动切换
  useEffect(() => {
    // 只有当自动切换开启、这道题被修改过、答案填满时才自动切换
    if (autoSwitch && hasModified && userAnswer.length === words.length && userAnswer.length > 0) {
      // 延迟 500ms 切换，让用户看到最后一个单词被放置
      const timer = setTimeout(() => {
        if (onNextQuestion) {
          onNextQuestion();
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [userAnswer, words.length, autoSwitch, hasModified, onNextQuestion]);

  // 当 initialAnswer 变化时，恢复答案
  useEffect(() => {
    if (initialAnswer && initialAnswer.length > 0) {
      // 直接使用 initialAnswer（已经是对象数组）
      setUserAnswer(initialAnswer);
      
      // 更新单词状态：根据 originalIndex 精确匹配
      const newStatuses = shuffledWords.map(() => 'available');
      
      initialAnswer.forEach(item => {
        // 通过 originalIndex 精确找到对应的单词卡片
        const wordIndex = shuffledWords.findIndex(w => w.originalIndex === item.originalIndex);
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

  // 点击单词卡片 -> 放入或移除答案区
  const handleWordClick = useCallback((word, originalIndex) => {
    if (isSubmitted) return;
    
    // 检查是否已经放置（通过 originalIndex 判断）
    const wordIndexInShuffled = shuffledWords.findIndex(w => w.originalIndex === originalIndex);
    if (wordIndexInShuffled === -1) {
      return;
    }
    
    // 如果已经放置，则从答案区移除（取消选择）
    if (wordStatuses[wordIndexInShuffled] === 'placed') {
      // 在答案区找到这个单词（通过 originalIndex 精确匹配）
      const answerIndex = userAnswer.findIndex(w => w.originalIndex === originalIndex);
      if (answerIndex !== -1) {
        // 从答案区移除
        const newAnswer = userAnswer.filter((_, i) => i !== answerIndex);
        setUserAnswer(newAnswer);
        
        // 更新单词状态
        const newStatuses = [...wordStatuses];
        newStatuses[wordIndexInShuffled] = 'available';
        setWordStatuses(newStatuses);
        
        // 通知父组件
        if (onAnswerChange) {
          onAnswerChange(slideIndex, newAnswer);
        }
      }
      return;
    }
    
    // 添加到答案区（保存完整的单词信息：单词文本 + originalIndex）
    const newAnswer = [...userAnswer, { word, originalIndex }];
    
    // 更新单词状态
    const newStatuses = [...wordStatuses];
    newStatuses[wordIndexInShuffled] = 'placed';
    
    // 检查是否只剩最后一个空位，如果是则自动填充最后一个单词
    if (newAnswer.length === shuffledWords.length - 1) {
      // 找到最后一个可用的单词
      const lastAvailableIndex = newStatuses.findIndex(status => status === 'available');
      if (lastAvailableIndex !== -1) {
        const lastWord = shuffledWords[lastAvailableIndex].word;
        const lastOriginalIndex = shuffledWords[lastAvailableIndex].originalIndex;
        newAnswer.push({ word: lastWord, originalIndex: lastOriginalIndex });
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
    
    // 安全检查：确保 index 在有效范围内
    if (index < 0 || index >= userAnswer.length) {
      console.error('Invalid answer index:', index);
      return;
    }
    
    const answerItem = userAnswer[index];
    
    // 安全检查：确保 answerItem 存在且有 originalIndex
    if (!answerItem || answerItem.originalIndex === undefined) {
      console.error('Invalid answer item at index:', index, answerItem);
      return;
    }
    
    const originalIndex = answerItem.originalIndex;
    
    // 找到这个单词在 shuffledWords 中的索引（通过 originalIndex 精确匹配）
    const wordIndexInShuffled = shuffledWords.findIndex(w => w.originalIndex === originalIndex);
    
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
            word={userAnswer[i].word} // 提取单词文本显示
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
          <div className="flex gap-2">
            <button
              onClick={handleReset}
              disabled={isSubmitted}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isSubmitted 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-orange-500 text-white hover:bg-orange-600 shadow-md'
              }`}
            >
              🗑️ 清空
            </button>
            <button
              onClick={onRestartGame}
              className="px-4 py-2 rounded-lg font-medium bg-primary text-white hover:bg-red-500 shadow-md transition-all duration-200"
            >
              🔄 再来一次
            </button>
          </div>
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
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-600 text-center">
            点击下面的单词按顺序组成句子
          </h3>
          <div className="flex items-center gap-2">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input 
                  type="checkbox" 
                  className="sr-only" 
                  checked={autoSwitch}
                  onChange={(e) => onAutoSwitchChange && onAutoSwitchChange(e.target.checked)}
                  disabled={isSubmitted}
                />
                <div className={`block w-14 h-8 rounded-full transition-colors ${
                  autoSwitch ? 'bg-blue-500' : 'bg-gray-300'
                } ${isSubmitted ? 'opacity-50' : ''}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                  autoSwitch ? 'transform translate-x-6' : ''
                }`}></div>
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">
                自动切换
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center min-h-[100px] bg-white rounded-xl p-4 shadow-inner gap-2">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default WordSlide;
