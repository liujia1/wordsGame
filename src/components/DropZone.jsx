import React from 'react';

/**
 * 放置区域组件（横线）- 配合鼠标拖拽
 */
const DropZone = ({ index, acceptedWord = null, onWordPlace, isSubmitted = false }) => {
  const hasWord = acceptedWord !== null;

  return (
    <div
      data-dropzone={index}
      className={`
        inline-block
        min-w-[80px] 
        h-12 
        m-2 
        border-b-4 
        ${hasWord ? 'border-cyan-500' : 'border-gray-400'}
        ${isSubmitted ? 'border-gray-300' : ''}
        ${!isSubmitted && !hasWord ? 'hover:bg-blue-50 hover:border-blue-400 cursor-pointer' : ''}
        flex 
        items-center 
        justify-center
        transition-all
        duration-200
        relative
      `}
    >
      {hasWord && (
        <div className="text-lg font-bold text-cyan-600 px-2">
          {acceptedWord}
        </div>
      )}
      
      {!hasWord && !isSubmitted && (
        <div className="text-gray-300 text-sm select-none pointer-events-none">
          拖拽到这里
        </div>
      )}
    </div>
  );
};

export default DropZone;
