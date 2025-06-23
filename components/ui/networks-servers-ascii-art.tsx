'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface NetworksServersAsciiArtProps {
  isVisible?: boolean
  className?: string
}

export function NetworksServersAsciiArt({ isVisible = true, className = '' }: NetworksServersAsciiArtProps) {
  const canvasRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const [frame, setFrame] = useState(0)

  const getGridDimensions = () => {
    return { width: 80, height: 30 }  // Adjusted for 4:3 aspect ratio
  }

  const render = useCallback(() => {
    if (!canvasRef.current || !isVisible) return

    const { width, height } = getGridDimensions()
    const t = frame * 0.01
    
    // Create grid with characters and colors
    const grid: { char: string; color: string }[][] = []
    
    // Network pattern characters
    const nodeChars = ['◆', '■', '●', '▲']
    const dataFlowChars = ['▸', '▹', '·', '•']
    
    // Initialize grid with spaces
    for (let y = 0; y < height; y++) {
      grid[y] = []
      for (let x = 0; x < width; x++) {
        grid[y][x] = { char: ' ', color: '#f5b944' }
      }
    }
    
    // Helper to set character at position with color
    const setChar = (x: number, y: number, char: string, useContrastColor: boolean = false) => {
      if (x >= 0 && x < width && y >= 0 && y < height) {
        grid[y][x] = {
          char,
          color: useContrastColor ? '#ebba5a' : '#f5b944'
        }
      }
    }
    
    // Draw network backbone (10Gb)
    const backboneY = Math.floor(height / 2)
    for (let x = 10; x < width - 10; x++) {
      const useContrast = (x % 8 === 0 || x % 8 === 1) || (x % 16 === 7 || x % 16 === 8)
      setChar(x, backboneY, '═', useContrast)
    }
    
    // Draw main nodes
    const nodePositions = [
      { x: 15, y: backboneY, label: 'CORE' },
      { x: 40, y: backboneY, label: 'SWITCH' },
      { x: 65, y: backboneY, label: 'ROUTER' }
    ]
    
    nodePositions.forEach((node, idx) => {
      const char = nodeChars[idx % nodeChars.length]
      const useContrast = idx === 1
      setChar(node.x, node.y, char, useContrast)
      
      // Draw label
      for (let i = 0; i < node.label.length; i++) {
        setChar(node.x - Math.floor(node.label.length / 2) + i, node.y - 2, node.label[i], useContrast)
      }
    })
    
    // Draw server racks
    const serverY = backboneY + 6
    for (let i = 0; i < 3; i++) {
      const x = 20 + i * 20
      const useContrast = i === 1
      
      // Rack outline
      for (let dy = 0; dy < 4; dy++) {
        setChar(x - 3, serverY + dy, '│', useContrast)
        setChar(x + 3, serverY + dy, '│', useContrast)
      }
      setChar(x - 3, serverY - 1, '┌', useContrast)
      setChar(x + 3, serverY - 1, '┐', useContrast)
      setChar(x - 3, serverY + 4, '└', useContrast)
      setChar(x + 3, serverY + 4, '┘', useContrast)
      
      for (let dx = -2; dx <= 2; dx++) {
        setChar(x + dx, serverY - 1, '─', useContrast)
        setChar(x + dx, serverY + 4, '─', useContrast)
      }
      
      // Server units with animation
      for (let dy = 0; dy < 4; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const isActive = Math.sin(t + i * 2 + dy * 0.5) > 0.3
          const char = isActive ? '█' : '▓'
          setChar(x + dx, serverY + dy, char, useContrast && dy % 2 === 0)
        }
      }
      
      // Connection to backbone
      for (let dy = 1; dy < serverY - backboneY - 1; dy++) {
        const char = dy % 2 === Math.floor(t) % 2 ? '│' : '┊'
        const animatedContrast = (dy + Math.floor(t)) % 3 === 0
        setChar(x, backboneY + dy, char, animatedContrast)
      }
    }
    
    // Draw storage arrays (Synology)
    const storageY = backboneY - 7
    for (let i = 0; i < 2; i++) {
      const x = 30 + i * 20
      const useContrast = i === 0
      
      // Storage unit
      for (let dy = 0; dy < 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const char = '▬'
          setChar(x + dx, storageY + dy, char, useContrast && (dx + dy) % 3 === 0)
        }
      }
      
      // Connection to backbone
      for (let dy = 1; dy < backboneY - storageY - 4; dy++) {
        const flowChar = dataFlowChars[Math.floor((t + dy) / 2) % dataFlowChars.length]
        const animatedContrast = Math.sin(t + dy * 0.3) > 0
        setChar(x, storageY + 4 + dy, flowChar, animatedContrast)
      }
    }
    
    // Draw data flow animation
    const flowOffset = Math.floor(t) % 10
    for (let x = 10 + flowOffset; x < width - 10; x += 10) {
      const flowChar = dataFlowChars[Math.floor(t) % dataFlowChars.length]
      setChar(x, backboneY + 1, flowChar, true)  // Always use contrast for flow
      setChar(x + 5, backboneY - 1, flowChar, true)  // Always use contrast for flow
    }
    
    // VMware cluster representation
    const vmX = 12
    const vmY = 3
    const clusterChars = ['[VM]', '[VM]', '[VM]']
    clusterChars.forEach((vm, idx) => {
      const useContrast = idx === 1
      for (let i = 0; i < vm.length; i++) {
        setChar(vmX + idx * 5 + i, vmY, vm[i], useContrast)
      }
    })
    
    // UniFi AP representation (wireless signals)
    const apX = width - 20
    const apY = 3
    const apPattern = ['  )', ' ))', ')))', ' ))', '  )']
    const apFrame = Math.floor(t / 2) % apPattern.length
    for (let i = 0; i < apPattern[apFrame].length; i++) {
      const useContrast = apPattern[apFrame][i] !== ' '
      setChar(apX + i, apY, apPattern[apFrame][i], useContrast)
    }
    
    // Power redundancy indicator
    const powerX = width - 15
    const powerY = height - 3
    const powerStatus = Math.sin(t * 0.5) > 0 ? 'PWR1' : 'PWR2'
    for (let i = 0; i < powerStatus.length; i++) {
      setChar(powerX + i, powerY, powerStatus[i], i % 2 === 0)
    }
    
    // Build HTML output with colored spans
    let htmlOutput = '<pre style="margin: 0; white-space: pre; font-family: \'Courier New\', monospace; line-height: 1.2;">'
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const cell = grid[y][x]
        htmlOutput += `<span style="color: ${cell.color}">${cell.char}</span>`
      }
      if (y < height - 1) htmlOutput += '\n'
    }
    
    htmlOutput += '</pre>'
    
    canvasRef.current.innerHTML = htmlOutput
    
    setFrame(prev => prev + 1)
  }, [frame, isVisible])

  useEffect(() => {
    if (!isVisible) return

    const animate = () => {
      render()
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible, render])

  return (
    <div 
      className={`w-full h-full ${className}`}
      style={{
        fontFamily: '"Courier New", monospace',
        fontSize: '10px',
        lineHeight: '1.2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        color: '#f5b944'
      }}
    >
      <div
        ref={canvasRef}
        style={{
          width: 'fit-content',
          height: 'fit-content'
        }}
      />
    </div>
  )
}