import React, { useRef, useEffect, useState } from 'react';

const InteractiveLinesGrid = ({
  cols = 25,
  rows = 8,
  lineLength = 20,
  lineWidth = 1.5,
  color = '#666',
  hoverColor = '#fff',
  backgroundColor = '#0a0a0a',
  showDot = true,
  dotSize = 9,
  className = '',
  style = {},
  width = '100%',
  height = 240
}) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const wrapper = wrapperRef.current;

    const resizeCanvas = () => {
      const rect = wrapper.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const getAngleToMouse = (x, y, mouseX, mouseY) => {
      const dx = mouseX - x;
      const dy = mouseY - y;
      return Math.atan2(dy, dx);
    };

    const getDistanceToMouse = (x, y, mouseX, mouseY) => {
      const dx = mouseX - x;
      const dy = mouseY - y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cellWidth = canvas.width / cols;
      const cellHeight = canvas.height / rows;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellWidth + cellWidth / 2;
          const y = row * cellHeight + cellHeight / 2;

          let angle = -Math.PI / 2;
          let opacity = 0.3;

          if (isMouseOver) {
            angle = getAngleToMouse(x, y, mousePos.x, mousePos.y);
            const distance = getDistanceToMouse(x, y, mousePos.x, mousePos.y);
            const maxDistance = Math.min(canvas.width, canvas.height) / 2;
            opacity = Math.max(0.3, 1 - (distance / maxDistance));
          }

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);

          ctx.beginPath();
          ctx.moveTo(0, -lineLength / 2);
          ctx.lineTo(0, lineLength / 2);

          ctx.strokeStyle = isMouseOver ? hoverColor : color;
          ctx.globalAlpha = opacity;
          ctx.lineWidth = lineWidth;
          ctx.stroke();

          ctx.restore();
        }
      }
    };

    const animate = () => {
      drawLines();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cols, rows, lineLength, lineWidth, color, hoverColor, isMouseOver, mousePos]);

  const handleMouseMove = (e) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = (e) => {
    setIsMouseOver(true);
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        position: 'relative',
        width,
        height,
        backgroundColor,
        cursor: 'pointer',
        ...style
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          margin: 0,
          padding: 0,
          border: 0
        }}
      />
      {showDot && (
        <div
          style={{
            position: 'absolute',
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            borderRadius: '50%',
            backgroundColor: hoverColor,
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s',
            opacity: isMouseOver ? 1 : 0,
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  );
};

export default InteractiveLinesGrid;