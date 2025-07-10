import React from 'react';

export default function AnimatedUUIDEstelaArt() {
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
            color: '#f5b944'
          }}
        >
          <div className="whitespace-pre leading-relaxed text-left">
            {`550E800-`}
            <span className="animate-pulse">ESTELA</span>
            {`-41D4-A7
16-446655440000-A0899
594-7F0C-468B-`}
            <span className="animate-pulse">ESTELA</span>
            {`-D
DAED058768-7D2A877C-F
13B-495D-6E7-8FCD9066
1AFB-`}
            <span className="animate-pulse">ESTELA</span>
            {`-3CA279074-
550E8400-E29B-41D4-A7
16-446655440000-`}
            <span className="animate-pulse">ESTELA</span>
          </div>
        </pre>
      </div>
    </div>
  );
}