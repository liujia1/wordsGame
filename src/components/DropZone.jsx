import React from 'react';
import { useDrop } from 'react-dnd';

/**
 * 放置区域组件（横线）
 * @param {Object} props - 组件属性
 * @param {number} props.index - 放置区域的索引
 * @param {string|null} props.acceptedWord - 已接受的单词
 * @param {Function} props.onWordPlace - 放置单词的回调函数
 * @param {boolean} props.isSubmitted - 是否已提交答案
 */
const DropZone = ({ index, acceptedWord = null, onWordPlace, isSubmitted = false }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    type: 'WORD',
    accept: 'WORD', // 添加这一行
    drop: (item) => {
      if (item.status === 'available' || item.status === 'placed') {
        onWordPlace(index, item.word, item.index);
      }
      return { index: index };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = isOver && canDrop;
  const hasWord = acceptedWord !== null;

  return (
    <div
      ref={drop}
      className={`
        inline-block
        min-w-[80px] 
        h-12 
        m-2 
        border-b-4 
        ${hasWord ? 'border-secondary' : 'border-gray-400'}
        ${isActive ? 'bg-blue-100 border-blue-500' : ''}
        ${isSubmitted ? 'border-gray-300' : ''}
        flex 
        items-center 
        justify-center
        transition-all
        duration-200
        relative
      `}
    >
      {hasWord && (
        <div className="text-lg font-bold text-secondary px-2">
          {acceptedWord}
        </div>
      )}
      
      {!hasWord && !isSubmitted && (
        <div className="text-gray-300 text-sm select-none">
          拖拽到这里
        </div>
      )}
    </div>
  );
};

export default DropZone;
