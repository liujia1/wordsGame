import React, { useState, useEffect } from 'react';

/**
 * 可拖拽的单词组件（使用鼠标事件模拟拖拽）
 */
const DraggableWord = ({ word, originalIndex, status = 'available', onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = React.useRef(null);
  const dragOffsetRef = React.useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (status !== 'available' && status !== 'placed') return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const rect = e.currentTarget.getBoundingClientRect();
    dragOffsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    
    elementRef.current = e.currentTarget;
    setIsDragging(true);
    setPosition({
      x: e.clientX - dragOffsetRef.current.x,
      y: e.clientY - dragOffsetRef.current.y
    });
  };

  const handleMouseMove = React.useCallback((e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    setPosition({
      x: e.clientX - dragOffsetRef.current.x,
      y: e.clientY - dragOffsetRef.current.y
    });
  }, [isDragging]);

  const handleMouseUp = React.useCallback((e) => {
    if (!isDragging || !elementRef.current) return;
    
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    console.log('松开鼠标，检测放置位置');
    
    // 检查是否放置在 DropZone 上
    const dropZones = document.querySelectorAll('[data-dropzone]');
    console.log('找到 DropZones:', dropZones.length);
    
    for (let i = 0; i < dropZones.length; i++) {
      const zone = dropZones[i];
      const rect = zone.getBoundingClientRect();
      console.log(`DropZone ${i}:`, rect);
      console.log(`鼠标位置：(${e.clientX}, ${e.clientY})`);
      
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const zoneIndex = parseInt(zone.getAttribute('data-dropzone'));
        console.log('放置在 Zone:', zoneIndex, '单词:', word, '索引:', originalIndex);
        if (onDrop) {
          onDrop(zoneIndex, word, originalIndex);
        }
        return;
      }
    }
    
    console.log('未放置在任何 DropZone 上');
  }, [isDragging, word, originalIndex, onDrop]);

  // 添加全局鼠标事件监听
  useEffect(() => {
    if (!isDragging) return;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      setIsDragging(false);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const getBackgroundColor = () => {
    switch (status) {
      case 'available':
        return 'bg-yellow-200 hover:bg-yellow-300';
      case 'placed':
        return 'bg-cyan-500 text-white';
      case 'disabled':
        return 'bg-gray-300 cursor-not-allowed';
      default:
        return 'bg-yellow-200';
    }
  };

  if (isDragging) {
    return (
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          zIndex: 9999,
          pointerEvents: 'none'
        }}
        className={`
          ${getBackgroundColor()} 
          px-4 py-2 
          rounded-lg 
          font-bold 
          text-lg 
          shadow-xl
        `}
      >
        {word}
      </div>
    );
  }

  return (
    <div
      onMouseDown={handleMouseDown}
      className={`
        ${getBackgroundColor()} 
        px-4 py-2 
        m-2 
        rounded-lg 
        font-bold 
        text-lg 
        ${status === 'disabled' ? 'cursor-not-allowed' : 'cursor-grab'}
        select-none
        shadow-md
        hover:shadow-lg 
        inline-block
      `}
      title={status === 'placed' ? '双击返回' : ''}
    >
      {word}
    </div>
  );
};

export default DraggableWord;
