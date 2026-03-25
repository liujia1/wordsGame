import React, { useState, useCallback } from 'react';
import DraggableWord from './DraggableWord';
import DropZone from './DropZone';
import { splitSentence, shuffleArray } from '../utils/gameHelpers';

/**
 * 单词幻灯片组件（单个游戏）
 * @param {Object} props - 组件属性
 * @param {string} props.sentence - 完整的句子
 * @param {number} props.slideIndex - 幻灯片索引
 * @param {boolean} props.isSubmitted - 是否已提交答案
 * @param {boolean} props.isCorrect - 答案是否正确
 * @param {Function} props.onAnswerChange - 答案变化回调
 * @param {Function} props.onResetWord - 重置单词回调
 */
const WordSlide = ({ 
  sentence, 
  slideIndex, 
  isSubmitted = false, 
  isCorrect = false,
  onAnswerChange,
  onResetWord 
}) => {
  // 将句子拆分为单词
  const words = splitSentence(sentence);
  
  // 打乱单词顺序（只在初始化时）
  const [shuffledWords] = useState(() => shuffleArray(words.map((w, i) => ({ word: w, originalIndex: i }))));
  
  // 用户的答案
  const [userAnswer, setUserAnswer] = useState(Array(words.length).fill(null));
  
  // 单词状态：'available'(可用), 'placed'(已放置), 'disabled'(禁用)
  const [wordStatuses, setWordStatuses] = useState(
    shuffledWords.map(() => 'available')
  );

  // 处理放置单词
  const handleWordPlace = useCallback((zoneIndex, word, wordIndex) => {
    if (isSubmitted) return;
    
    // 如果该位置已经有单词，先移除
    const existingWordIndex = userAnswer.findIndex((w, idx) => idx === zoneIndex && w !== null);
    
    setUserAnswer(prev => {
      const newAnswer = [...prev];
      newAnswer[zoneIndex] = word;
      return newAnswer;
    });
    
    // 更新单词状态
    setWordStatuses(prev => {
      const newStatuses = [...prev];
      newStatuses[wordIndex] = 'placed';
      return newStatuses;
    });
    
    // 通知父组件答案变化
    if (onAnswerChange) {
      setTimeout(() => {
        const updatedAnswer = userAnswer.map((w, idx) => idx === zoneIndex ? word : w);
        onAnswerChange(slideIndex, updatedAnswer.filter(w => w !== null));
      }, 0);
    }
  }, [isSubmitted, onAnswerChange, slideIndex, userAnswer]);

  // 重置单词（双击）
  const handleResetWord = useCallback((wordIndex) => {
    if (isSubmitted) return;
    
    const wordToReset = shuffledWords[wordIndex].word;
    
    // 找到这个单词在答案中的位置
    const answerIndex = userAnswer.findIndex(w => w === wordToReset);
    
    if (answerIndex !== -1) {
      setUserAnswer(prev => {
        const newAnswer = [...prev];
        newAnswer[answerIndex] = null;
        return newAnswer;
      });
      
      setWordStatuses(prev => {
        const newStatuses = [...prev];
        newStatuses[wordIndex] = 'available';
        return newStatuses;
      });
      
      // 通知父组件
      if (onResetWord) {
        setTimeout(() => {
          const updatedAnswer = userAnswer.filter((w, idx) => idx !== answerIndex);
          onResetWord(slideIndex, updatedAnswer.filter(w => w !== null));
        }, 0);
      }
    }
  }, [isSubmitted, onResetWord, slideIndex, shuffledWords, userAnswer]);

  // 渲染可用的单词（未被放置的）
  const renderAvailableWords = () => {
    return shuffledWords.map((item, index) => {
      if (wordStatuses[index] === 'available') {
        return (
          <DraggableWord
            key={`available-${index}`}
            word={item.word}
            index={index}
            status="available"
          />
        );
      }
      return null;
    });
  };

  // 渲染已放置的单词（可以拖拽返回）
  const renderPlacedWords = () => {
    return shuffledWords.map((item, index) => {
      if (wordStatuses[index] === 'placed') {
        return (
          <DraggableWord
            key={`placed-${index}`}
            word={item.word}
            index={index}
            status="placed"
            onReset={handleResetWord}
          />
        );
      }
      return null;
    });
  };

  // 渲染横线区域
  const renderDropZones = () => {
    return words.map((_, index) => (
      <DropZone
        key={`zone-${index}`}
        index={index}
        acceptedWord={userAnswer[index]}
        onWordPlace={handleWordPlace}
        isSubmitted={isSubmitted}
      />
    ));
  };

  return (
    <div className="flex flex-col h-full p-6">
      {/* 上部：散乱的单词区 */}
      <div className="flex-none mb-4">
        <h3 className="text-xl font-bold text-gray-600 mb-4 text-center">
          拖动下面的单词到横线上
        </h3>
        <div className="flex flex-wrap justify-center items-center min-h-[100px] bg-white rounded-xl p-4 shadow-inner">
          {renderAvailableWords()}
          {renderPlacedWords()}
        </div>
      </div>
      
      {/* 下部：横线放置区 */}
      <div className="flex-1 overflow-auto">
        <h3 className="text-xl font-bold text-gray-600 mb-4 text-center">
          组成完整的句子
        </h3>
        <div className="flex flex-wrap justify-center items-center min-h-[120px] bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
          {renderDropZones()}
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
    </div>
  );
};

export default WordSlide;
