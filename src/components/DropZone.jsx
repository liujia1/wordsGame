import React from 'react';
import DraggableWord from './DraggableWord';

/**
 * 放置区域组件（横线）- 配合鼠标拖拽
 */
const DropZone = ({ index, acceptedWord = null, originalIndex = null, onWordPlace, onCancel, isSubmitted = false }) => {
  const hasWord = acceptedWord !== null;

  return (
    <div
      data-dropzone={index}
      className={`
        inline-block
        min-w-[100px] 
        h-16 
        m-2 
        border-b-4 
        ${hasWord ? 'border-cyan-500 bg-cyan-50' : 'border-gray-400 bg-gray-50'}
        ${isSubmitted ? 'border-gray-300 bg-gray-100' : ''}
        ${!isSubmitted && !hasWord ? 'hover:bg-blue-50 hover:border-blue-400 cursor-pointer' : ''}
        flex 
        items-center 
        justify-center
        transition-all
        duration-200
        relative
        rounded-lg
      `}
    >
      {hasWord && !isSubmitted && originalIndex !== null && (
        <DraggableWord
          word={acceptedWord}
          originalIndex={originalIndex}
          status="placed"
          onDrop={onWordPlace}
          onCancel={onCancel}
        />
      )}
      
      {hasWord && isSubmitted && (
        <div 
          className="
            bg-cyan-500 text-white 
            px-4 py-2 
            rounded-lg 
            font-bold 
            text-lg
            shadow-md
            select-none
          "
        >
          {acceptedWord}
        </div>
      )}
      
      {!hasWord && !isSubmitted && (
        <div className="text-gray-400 text-sm select-none pointer-events-none">
          拖拽到这里
        </div>
      )}
    </div>
  );
};

export default DropZone;
