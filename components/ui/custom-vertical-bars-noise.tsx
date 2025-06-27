'use client'

import { useEffect, useRef, useCallback } from 'react';

const CustomVerticalBarsNoise = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const mouseRef = useRef({ x: 340, y: 150, isPressed: false });
  
  // Your custom parameters
  const params = {
    speed: 0.0005,
    density: 50,
    noiseThreshold: 0.50,
    mouseInfluence: 3.0,
    waveAmplitude: 20
  };

  const noise = (x: number, y: number, t: number, mouseX = 340, mouseY = 150, mouseInfluence = 3.0) => {
    const mouseDist = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
    const mouseEffect = mouseInfluence * Math.exp(-mouseDist / 100);
    
    const n = Math.sin(x * 0.01 + t + mouseEffect) * Math.cos(y * 0.01 + t) + 
              Math.sin(x * 0.015 - t + mouseEffect * 0.5) * Math.cos(y * 0.005 + t);
    return (n + 1) / 2;
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  }, []);

  const handleMouseDown = useCallback(() => {
    mouseRef.current.isPressed = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    mouseRef.current.isPressed = false;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.isPressed = false;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match container
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    const animate = () => {
      timeRef.current += params.speed;
      
      const bgGradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 200
      );
      
      if (mouseRef.current.isPressed) {
        bgGradient.addColorStop(0, '#4a3a20');
        bgGradient.addColorStop(1, '#3d3019');
      } else {
        bgGradient.addColorStop(0, '#3d3019');
        bgGradient.addColorStop(1, '#3d3019');
      }
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const numLines = Math.floor(params.density * (canvas.height / 550)); // Scale density to canvas height
      const lineSpacing = canvas.height / numLines;
      
      for (let i = 0; i < numLines; i++) {
        const y = i * lineSpacing + lineSpacing / 2;
        
        const lineDistFromMouse = Math.abs(y - mouseRef.current.y);
        const lineAlpha = mouseRef.current.isPressed ? 
          Math.max(0.2, 1 - lineDistFromMouse / 200) : 0.4;
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(245, 185, 68, ${lineAlpha})`;
        ctx.lineWidth = mouseRef.current.isPressed && lineDistFromMouse < 50 ? 2 : 1;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
        
        for (let x = 0; x < canvas.width; x += 8) {
          const noiseVal = noise(
            x, y, timeRef.current, 
            mouseRef.current.x, mouseRef.current.y, 
            params.mouseInfluence
          );
          
          const threshold = mouseRef.current.isPressed ? 
            params.noiseThreshold * 0.7 : params.noiseThreshold;
          
          if (noiseVal > threshold) {
            const mouseDist = Math.sqrt(
              (x - mouseRef.current.x) ** 2 + (y - mouseRef.current.y) ** 2
            );
            const mouseProximity = Math.max(0, 1 - mouseDist / 150);
            
            const barWidth = 3 + noiseVal * 10 + (mouseRef.current.isPressed ? mouseProximity * 5 : 0);
            const barHeight = 2 + noiseVal * 3 + (mouseRef.current.isPressed ? mouseProximity * 2 : 0);
            
            const waveEffect = mouseRef.current.isPressed ? params.waveAmplitude * 1.5 : params.waveAmplitude;
            const animatedX = x + Math.sin(timeRef.current + y * 0.0375) * waveEffect * noiseVal;
            
            const alpha = mouseRef.current.isPressed ? 
              Math.min(1, 0.6 + mouseProximity * 0.4) : 1;
            
            ctx.fillStyle = `rgba(245, 185, 68, ${alpha})`;
            ctx.fillRect(animatedX - barWidth/2, y - barHeight/2, barWidth, barHeight);
          }
        }
      }
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      timeRef.current = 0;
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        display: 'block',
        width: '100%',
        height: '100%',
        cursor: 'crosshair'
      }} 
    />
  );
};

export default CustomVerticalBarsNoise;