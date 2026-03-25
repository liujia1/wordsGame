import React from 'react';
import { useDrag } from 'react-dnd';

/**
 * 可拖拽的单词组件
 * @param {Object} props - 组件属性
 * @param {string} props.word - 要显示的单词
 * @param {number} props.index - 单词在数组中的索引
 * @param {string} props.status - 单词状态：'available'(可用), 'placed'(已放置), 'disabled'(禁用)
 * @param {Function} props.onReset - 重置单词的回调函数
 */
const DraggableWord = ({ word, index, status = 'available', onReset }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'WORD',
    item: { word, index, status },
    canDrag: status === 'available' || status === 'placed',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    end: (item, monitor) => {
      // 如果没有放置到任何区域，重置单词
      if (!monitor.didDrop() && item.status === 'available') {
        // 不做任何操作，保持在原位
      }
    },
  }));

  const handleDoubleClick = () => {
    if (status === 'placed' && onReset) {
      onReset(index);
    }
  };

  const getBackgroundColor = () => {
    switch (status) {
      case 'available':
        return 'bg-accent hover:bg-yellow-300';
      case 'placed':
        return 'bg-secondary text-white';
      case 'disabled':
        return 'bg-gray-300 cursor-not-allowed';
      default:
        return 'bg-accent';
    }
  };

  return (
    <div
      ref={status !== 'disabled' ? drag : null}
      className={`
        ${getBackgroundColor()} 
        px-4 py-2 
        m-2 
        rounded-lg 
        font-bold 
        text-lg 
        cursor-grab 
        select-none
        transition-all 
        duration-200
        shadow-md
        ${isDragging ? 'opacity-50 scale-110' : 'opacity-100'}
        ${status === 'disabled' ? 'cursor-not-allowed' : 'hover:shadow-lg hover:scale-105'}
      `}
      onDoubleClick={handleDoubleClick}
      title={status === 'placed' ? '双击返回' : ''}
    >
      {word}
    </div>
  );
};

export default DraggableWord;
