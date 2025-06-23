"use client";

export default function TestFooter() {
  return (
    <div className="min-h-screen bg-white dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl mb-8">Footer Partners Text Centering Test</h1>
        
        {/* Test 1: Simple equal padding */}
        <div className="mb-12">
          <h2 className="text-lg mb-4">Test 1: Equal py-4 padding</h2>
          <div className="border-t border-gray-300 dark:border-gray-600">
            <div className="py-4 text-center">
              <p className="text-sm font-normal leading-[1.125rem] tracking-wider text-gray-600 dark:text-gray-400">
                <span className="uppercase text-xs font-mono">PARTNERS:</span> Lenovo | UniFi | Synology | SentinelOne
              </p>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-600"></div>
          </div>
        </div>

        {/* Test 2: Flexbox centering */}
        <div className="mb-12">
          <h2 className="text-lg mb-4">Test 2: Flexbox vertical centering</h2>
          <div className="border-t border-gray-300 dark:border-gray-600">
            <div className="h-16 flex items-center justify-center">
              <p className="text-sm font-normal leading-[1.125rem] tracking-wider text-gray-600 dark:text-gray-400">
                <span className="uppercase text-xs font-mono">PARTNERS:</span> Lenovo | UniFi | Synology | SentinelOne
              </p>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-600"></div>
          </div>
        </div>

        {/* Test 3: Smaller equal padding */}
        <div className="mb-12">
          <h2 className="text-lg mb-4">Test 3: Equal py-3 padding</h2>
          <div className="border-t border-gray-300 dark:border-gray-600">
            <div className="py-3 text-center">
              <p className="text-sm font-normal leading-[1.125rem] tracking-wider text-gray-600 dark:text-gray-400">
                <span className="uppercase text-xs font-mono">PARTNERS:</span> Lenovo | UniFi | Synology | SentinelOne
              </p>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-600"></div>
          </div>
        </div>

        {/* Test 4: Using CSS variables like the actual footer */}
        <div className="mb-12">
          <h2 className="text-lg mb-4">Test 4: Using actual footer styles</h2>
          <div 
            className="border-t"
            style={{ borderTopColor: 'var(--stroke-secondary-p3)' }}
          >
            <div className="py-4 text-center">
              <p 
                className="text-sm font-normal leading-[1.125rem] tracking-wider"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-quaternary-p3)'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'GT_America_Mono, monospace',
                    fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off',
                    textTransform: 'uppercase',
                    fontSize: '.75rem'
                  }}
                >
                  PARTNERS:
                </span>{' '}
                Lenovo | UniFi | Synology | SentinelOne
              </p>
            </div>
            <div 
              className="border-t"
              style={{ borderTopColor: 'var(--stroke-secondary-p3)' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}