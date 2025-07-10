import React from 'react';

export default function AnimatedServerArt() {
  return (
    <div className="relative pb-[calc(var(--ascii-aspect-h)_/_var(--ascii-aspect-w)_*_100%)]">
      <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0">
        <pre 
          className="m-0 font-normal absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"
          style={{
            fontFamily: 'GT_America_Mono, monospace',
            fontFeatureSettings: '"ss06" on',
            fontSize: 'var(--ascii-xs-font-size)',
            fontStretch: 'normal',
            lineHeight: 'initial',
            letterSpacing: 'initial',
            color: 'var(--ascii-foreground-p3)'
          }}
        >
          <div className="whitespace-pre leading-tight">
          {` ┌───┐ ┌───┐ ┌───┐ ┌───┐
┌┴──┐│┌┴──┐│┌┴──┐│┌┴──┐│
│`}
          <span className="animate-pulse">▊▊▊</span>
          {`│││`}
          <span className="animate-pulse">▊▊▊</span>
          {`│││`}
          <span className="animate-bounce">⎕⎕⎕</span>
          {`│││`}
          <span className="animate-bounce">⎕⎕⎕</span>
          {`││
│`}
          <span className="animate-pulse">▊▊▊</span>
          {`│││`}
          <span className="animate-pulse">▊▊▊</span>
          {`│││`}
          <span className="animate-bounce">⎕⎕⎕</span>
          {`│││`}
          <span className="animate-bounce">⎕⎕⎕</span>
          {`││
│───│││───│││───│││───││
│───│││───│││───│││───││
│`}
          <span className="animate-pulse">▊▊▊</span>
          {`│││`}
          <span className="animate-pulse">▊▊▊</span>
          {`│││`}
          <span className="animate-bounce">⎕⎕⎕</span>
          {`│││`}
          <span className="animate-bounce">⎕⎕⎕</span>
          {`││
│`}
          <span className="animate-pulse">▊▊▊</span>
          {`├┘│`}
          <span className="animate-pulse">▊▊▊</span>
          {`├┘│`}
          <span className="animate-bounce">⎕⎕⎕</span>
          {`├┘│`}
          <span className="animate-bounce">⎕⎕⎕</span>
          {`├┘
└───┘ └───┘ └───┘ └───┘`}
          </div>
        </pre>
      </div>
    </div>
  );
}