import React, { useEffect, useRef } from 'react';

const HexagonalSlidingBars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const noise = (x: number, y: number, t: number) => {
    const n = Math.sin(x * 0.02 + t) * Math.cos(y * 0.02 + t) + Math.sin(x * 0.03 - t) * Math.cos(y * 0.01 + t);
    return (n + 1) / 2;
  };

  const createHexagonEdgePoints = (centerX: number, centerY: number, radius: number, barsPerEdge = 10) => {
    const points = [];
    
    for (let side = 0; side < 6; side++) {
      const angle1 = (side * Math.PI) / 3 - Math.PI / 2;
      const angle2 = ((side + 1) * Math.PI) / 3 - Math.PI / 2;
      
      const x1 = centerX + radius * Math.cos(angle1);
      const y1 = centerY + radius * Math.sin(angle1);
      const x2 = centerX + radius * Math.cos(angle2);
      const y2 = centerY + radius * Math.sin(angle2);
      
      for (let i = 0; i < barsPerEdge; i++) {
        const t = i / barsPerEdge;
        const x = x1 + (x2 - x1) * t;
        const y = y1 + (y2 - y1) * t;
        points.push({ x, y });
      }
    }
    
    return points;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle resize
    const handleResize = () => {
      const containerWidth = canvas.parentElement?.clientWidth || 680;
      canvas.width = containerWidth;
      canvas.height = 300;
    };

    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);

    // Set canvas to match container dimensions
    const containerWidth = canvas.parentElement?.clientWidth || 680;
    canvas.width = containerWidth;
    canvas.height = 300;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    // Calculate proper hexagon radius to maintain proportions in 300px height
    const hexRadius = Math.min(canvas.width * 0.144, 120); // 20% bigger: 0.12 * 1.2 = 0.144, max 120px
    const numLines = Math.floor(canvas.width / 12); // Adjust number of lines based on width
    const lineSpacing = canvas.width / numLines;

    // Create hexagon edge points
    const hexagonPoints = createHexagonEdgePoints(centerX, centerY, hexRadius, 12);

    const generatePattern = (seed: number) => {
      const pattern = [];
      for (let i = 0; i < numLines; i++) {
        const lineBars = [];
        let currentY = 0;
        while (currentY < canvas.height) {
          const noiseVal = noise(i * lineSpacing, currentY, seed);
          if (noiseVal > 0.5) {
            const barLength = 10 + noiseVal * 30;
            const barWidth = 2 + noiseVal * 3;
            lineBars.push({
              y: currentY + barLength / 2,
              height: barLength,
              width: barWidth
            });
            currentY += barLength + 15;
          } else {
            currentY += 15;
          }
        }
        pattern.push(lineBars);
      }
      return pattern;
    };

    const generateHexagonPattern = () => {
      const pattern = [];
      
      for (let i = 0; i < numLines; i++) {
        const x = i * lineSpacing + lineSpacing / 2;
        const lineBars = [];
        
        // Find the closest hexagon points to this vertical line
        const closestPoints = hexagonPoints
          .map(point => ({
            ...point,
            distance: Math.abs(point.x - x)
          }))
          .filter(point => point.distance < lineSpacing * 1.2)
          .sort((a, b) => a.distance - b.distance);

        // Add bars for the closest hexagon points
        closestPoints.forEach(point => {
          lineBars.push({
            y: point.y,
            height: 20,
            width: 4
          });
        });

        // If no hexagon points on this line, create off-screen bars
        if (lineBars.length === 0) {
          // Alternate between top and bottom based on line index
          const goToTop = i % 2 === 0;
          lineBars.push({
            y: goToTop ? -50 : canvas.height + 50,
            height: 15,
            width: 3
          });
        }
        
        pattern.push(lineBars);
      }
      return pattern;
    };

    const pattern1 = generatePattern(0);
    const pattern2 = generateHexagonPattern();

    const animate = () => {
      timeRef.current += 0.003; // Slower animation speed
      const cycleTime = timeRef.current % (Math.PI * 6); // Much longer cycle for 6 second hold

      let easingFactor;
      if (cycleTime < Math.PI * 0.25) {
        // Initial random pattern (increased to 0.25 for more delay)
        easingFactor = 0;
      } else if (cycleTime < Math.PI * 0.65) {
        // Transition to hexagon (now 0.25 to 0.65 for slower formation)
        const transitionProgress = (cycleTime - Math.PI * 0.25) / (Math.PI * 0.4);
        easingFactor = transitionProgress;
      } else if (cycleTime < Math.PI * 5.1) {
        // Hold hexagon shape for much longer (about 6 seconds)
        easingFactor = 1;
      } else if (cycleTime < Math.PI * 5.4) {
        // Transition back to random
        const transitionProgress = (cycleTime - Math.PI * 5.1) / (Math.PI * 0.3);
        easingFactor = 1 - transitionProgress;
      } else {
        // Back to random pattern
        easingFactor = 0;
      }

      const smoothEasing = easingFactor < 0.5 
        ? 4 * easingFactor * easingFactor * easingFactor 
        : 1 - Math.pow(-2 * easingFactor + 2, 3) / 2;

      ctx.fillStyle = '#3d3019';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numLines; i++) {
        const x = i * lineSpacing + lineSpacing / 2;

        ctx.beginPath();
        ctx.strokeStyle = '#f5b944';
        ctx.lineWidth = 1;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        const bars1 = pattern1[i];
        const bars2 = pattern2[i];
        const maxBars = Math.max(bars1.length, bars2.length);

        for (let j = 0; j < maxBars; j++) {
          let bar1 = bars1[j];
          let bar2 = bars2[j];

          if (!bar1) bar1 = { y: bar2.y + 200, height: 0, width: 0 };
          if (!bar2) bar2 = { y: bar1.y > centerY ? canvas.height + 100 : -100, height: 0, width: 0 };

          const waveOffset = Math.sin(i * 0.3 + j * 0.5 + timeRef.current * 2) * 10 * (smoothEasing * (1 - smoothEasing) * 4);
          const y = bar1.y + (bar2.y - bar1.y) * smoothEasing + waveOffset;
          const height = bar1.height + (bar2.height - bar1.height) * smoothEasing;
          const width = bar1.width + (bar2.width - bar1.width) * smoothEasing;

          if (height > 0.1 && width > 0.1) {
            ctx.fillStyle = '#f5b944';
            ctx.fillRect(x - width/2, y - height/2, width, height);
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      timeRef.current = 0;
      animationFrameId.current = null;
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#F0EEE6' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default HexagonalSlidingBars;