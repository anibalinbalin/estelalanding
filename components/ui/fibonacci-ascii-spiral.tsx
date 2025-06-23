import React, { useEffect, useState } from 'react';

const FibonacciASCIISpiral = () => {
  const [asciiPattern, setAsciiPattern] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let time = 0;
    let animationFrameId: number | null = null;
    const chars = ['.', '–', '=', '▂', '▄', '▆', '█'];

    const generateASCIIPattern = (rectangleCount: number) => {
      let pattern = '';
      const rows = 25;
      const cols = 60;
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const centerX = cols / 2;
          const centerY = rows / 2;
          const distance = Math.sqrt((col - centerX) ** 2 + (row - centerY) ** 2);
          const angle = Math.atan2(row - centerY, col - centerX);
          
          // Create fibonacci spiral pattern
          const spiralValue = (angle + Math.PI) / (2 * Math.PI) + distance * 0.08;
          
          const wave = Math.sin(spiralValue * rectangleCount * 0.075 + time * 0.005);
          let charIndex = Math.floor((wave + 1) * chars.length / 2);
          
          // Ensure charIndex is within bounds
          charIndex = Math.max(0, Math.min(chars.length - 1, charIndex));
          
          pattern += chars[charIndex];
        }
        pattern += '\n';
      }
      return pattern;
    };

    const animate = () => {
      const maxRectangles = Math.min(60, Math.floor((time * 0.01) % 80));
      
      // Generate ASCII pattern for current frame
      setAsciiPattern(generateASCIIPattern(maxRectangles));
      
      // When hovered, rewind (subtract from time), otherwise play forward
      if (isHovered) {
        time -= 0.375; // Rewind
      } else {
        time += 0.375; // Play forward
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);

  return (
    <div className="flex items-center justify-center w-full h-full p-3">
      <div 
        className="w-full h-full rounded border p-3" 
        style={{
          backgroundColor: '#39301f'
        }}
      >
        <div 
          className="w-full h-full rounded"
          style={{
            backgroundColor: '#39301f'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <pre 
            className="font-mono text-xs leading-tight whitespace-pre overflow-x-auto text-center w-full h-full flex items-center justify-center m-0 p-3" 
            style={{
              color: 'color(display-p3 0.92 0.73 0.35)',
              fontFamily: 'GT_America_Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation_Mono, Courier_New, monospace',
              fontFeatureSettings: '"calt" 0',
              textTransform: 'none'
            }}
          >
            {asciiPattern}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default FibonacciASCIISpiral;