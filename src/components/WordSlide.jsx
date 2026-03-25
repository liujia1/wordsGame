import React, { useState, useCallback, useEffect } from 'react';
import DraggableWord from './DraggableWord';
import DropZone from './DropZone';
import { splitSentence, shuffleArray } from '../utils/gameHelpers';

/**
 * 单词幻灯片组件（单个游戏）
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
  const handleWordPlace = useCallback((zoneIndex, word, originalIndex) => {
    if (isSubmitted) return;
    
    console.log('放置单词 - Zone:', zoneIndex, '单词:', word, '原索引:', originalIndex);
    
    // 找到这个单词在 shuffledWords 中的实际索引
    const wordIndexInArray = shuffledWords.findIndex(w => w.originalIndex === originalIndex);
    
    if (wordIndexInArray === -1) {
      console.log('找不到单词对象');
      return;
    }
    
    console.log('单词在数组中的索引:', wordIndexInArray);
    
    // 检查这个单词是否已经被放置在某个位置
    const existingZoneIndex = userAnswer.findIndex(w => {
      if (!w) return false;
      const existingWordObj = shuffledWords.find(ww => ww.word === w);
      return existingWordObj && existingWordObj.originalIndex === originalIndex;
    });
    
    console.log('单词当前在位置:', existingZoneIndex);
    
    // 使用单次状态更新来完成所有操作
    setUserAnswer(prev => {
      const newAnswer = [...prev];
      
      // 如果单词已经在其他位置，先清除那个位置
      if (existingZoneIndex !== -1 && existingZoneIndex !== zoneIndex) {
        console.log('清除原位置:', existingZoneIndex);
        newAnswer[existingZoneIndex] = null;
      }
      
      // 检查目标位置是否已经有其他单词
      if (newAnswer[zoneIndex] !== null && newAnswer[zoneIndex] !== word) {
        const oldWord = newAnswer[zoneIndex];
        console.log('目标位置已有单词:', oldWord);
        
        // 找到被替换单词的数组索引
        const oldWordObj = shuffledWords.find(w => w.word === oldWord);
        const oldWordIndexInArray = oldWordObj ? shuffledWords.findIndex(w => w.originalIndex === oldWordObj.originalIndex) : -1;
        
        // 更新被替换单词的状态为 available
        if (oldWordIndexInArray !== -1) {
          setWordStatuses(prevStatuses => {
            const newStatuses = [...prevStatuses];
            newStatuses[oldWordIndexInArray] = 'available';
            console.log('清除被替换单词状态，数组索引:', oldWordIndexInArray);
            return newStatuses;
          });
        }
      }
      
      // 放置单词到目标位置
      newAnswer[zoneIndex] = word;
      console.log('新的答案:', newAnswer);
      return newAnswer;
    });
    
    // 更新当前单词状态为 placed
    setWordStatuses(prev => {
      const newStatuses = [...prev];
      newStatuses[wordIndexInArray] = 'placed';
      console.log('设置单词状态为 placed，数组索引:', wordIndexInArray);
      return newStatuses;
    });
    
    // 通知父组件答案变化
    if (onAnswerChange) {
      setTimeout(() => {
        const updatedAnswer = userAnswer.map((w, idx) => idx === zoneIndex ? word : w);
        onAnswerChange(slideIndex, updatedAnswer.filter(w => w !== null));
      }, 0);
    }
  }, [isSubmitted, onAnswerChange, slideIndex, userAnswer, shuffledWords]);

  // 重置单词（双击）
  const handleResetWord = useCallback((wordIndex) => {
    if (isSubmitted) return;
    
    const wordToReset = shuffledWords[wordIndex].word;
    console.log('双击重置单词:', wordToReset, '索引:', wordIndex);
    
    // 找到这个单词在答案中的位置
    const answerIndex = userAnswer.findIndex(w => {
      if (!w) return false;
      const wordObj = shuffledWords.find(ww => ww.word === w);
      return wordObj && wordObj.originalIndex === wordIndex;
    });
    
    console.log('找到答案位置:', answerIndex);
    
    if (answerIndex !== -1) {
      // 清除答案
      setUserAnswer(prev => {
        const newAnswer = [...prev];
        newAnswer[answerIndex] = null;
        console.log('清除后的答案:', newAnswer);
        return newAnswer;
      });
      
      // 更新状态为可用
      setWordStatuses(prev => {
        const newStatuses = [...prev];
        newStatuses[wordIndex] = 'available';
        console.log('清除后的状态:', newStatuses);
        return newStatuses;
      });
      
      // 通知父组件
      if (onResetWord) {
        setTimeout(() => {
          const updatedAnswer = userAnswer.filter(w => w !== null);
          onResetWord(slideIndex, updatedAnswer);
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
            originalIndex={item.originalIndex}
            status="available"
            onDrop={handleWordPlace}
          />
        );
      }
      return null;
    });
  };

  // 渲染已放置的单词（可以拖动到新位置）
  const renderPlacedWords = () => {
    return shuffledWords.map((item, index) => {
      if (wordStatuses[index] === 'placed') {
        return (
          <DraggableWord
            key={`placed-${index}`}
            word={item.word}
            originalIndex={item.originalIndex}
            status="placed"
            onDrop={handleWordPlace}  // 使用同一个放置处理函数
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
