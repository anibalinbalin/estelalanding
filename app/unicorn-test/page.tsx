'use client'

import { useState, useEffect } from 'react'

export default function UnicornTestPage() {
  const [bgImage, setBgImage] = useState('hermes_desktop_hd.png')

  useEffect(() => {
    const updateBackgroundImage = () => {
      const width = window.innerWidth
      
      if (width <= 640) {
        setBgImage('hermes_mobile.png')
      } else if (width <= 768) {
        setBgImage('hermes_tablet.png')
      } else if (width <= 1440) {
        setBgImage('hermes_desktop_hd.png')
      } else {
        setBgImage('hermes_desktop_retina.png')
      }
    }
    
    updateBackgroundImage()
    window.addEventListener('resize', updateBackgroundImage)
    
    return () => window.removeEventListener('resize', updateBackgroundImage)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Hermes background image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(/hermes/${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Unicorn effect overlay */}
      <div className="relative z-10 min-h-screen">
        <div className="text-center pt-8">
          <h1 className="mb-8 text-3xl font-bold text-white">Unicorn Studio Effect Test</h1>
          <div 
            data-us-project="aTdZ2iREcvCidTnZebRS" 
            style={{ 
              width: '100vw', 
              height: '100vh',
              position: 'absolute',
              top: 0,
              left: 0,
              mixBlendMode: 'screen',
            }}
            className="pointer-events-none"
          ></div>
        </div>
      </div>
    </div>
  )
}