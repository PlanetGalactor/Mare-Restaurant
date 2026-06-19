import React from 'react';

const BrushDivider = ({ className = '', height = '120px' }) => {
  return (
    <div 
      className={`brush-divider-container ${className}`} 
      style={{
        position: 'relative',
        height: height,
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        overflow: 'hidden'
      }}
    >
      {/* Blue Stroke */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          left: '2%',
          width: '96%',
          height: '16px',
          backgroundColor: 'var(--color-blue)',
          borderRadius: '14px',
          transform: 'rotate(-4deg)',
          opacity: 0.95
        }} 
      />
      {/* Orange Stroke */}
      <div 
        style={{
          position: 'absolute',
          top: '45%',
          left: '10%',
          width: '80%',
          height: '16px',
          backgroundColor: 'var(--color-orange)',
          borderRadius: '14px',
          transform: 'rotate(-3deg)',
          opacity: 0.95
        }} 
      />
      {/* Green Stroke */}
      <div 
        style={{
          position: 'absolute',
          top: '75%',
          left: '24%',
          width: '52%',
          height: '14px',
          backgroundColor: 'var(--color-green)',
          borderRadius: '14px',
          transform: 'rotate(-2deg)',
          opacity: 0.95
        }} 
      />
    </div>
  );
};

export default BrushDivider;
