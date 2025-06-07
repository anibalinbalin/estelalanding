export default function ASCII2Page() {
  return (
    <div style={{
      backgroundColor: 'rgb(8, 9, 10)',
      color: 'rgb(215, 216, 217)',
      minHeight: '100vh',
      fontFamily: 'GT_America_Mono, monospace',
      padding: '120px 32px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          fontSize: '0.875rem',
          fontWeight: '400',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'rgb(126, 131, 133)',
          marginBottom: '24px'
        }}>
          Estela / ASCII Art / 3D Rack
        </div>

        <div style={{
          height: '1px',
          backgroundColor: 'rgba(126, 131, 133, 0.3)',
          marginBottom: '48px'
        }} />

        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '400',
          lineHeight: '2.75rem',
          fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
          color: 'rgb(215, 216, 217)',
          margin: 0,
          marginBottom: '24px'
        }}>
          3D Rack Visualization
        </h1>

        <p style={{
          fontSize: '19px',
          fontWeight: '400',
          lineHeight: '30.4px',
          fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
          color: 'rgb(126, 131, 133)',
          marginBottom: '48px'
        }}>
          A complete infrastructure rack with proper 3D perspective and modular organization.
        </p>

        <div style={{
          height: '1px',
          backgroundColor: 'rgba(126, 131, 133, 0.3)',
          marginBottom: '48px'
        }} />

        {/* Original 3D Rack Visualization */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          padding: '40px',
          borderRadius: '8px',
          border: '1px solid rgba(126, 131, 133, 0.2)',
          marginBottom: '48px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            maxWidth: '400px',
            width: '100%'
          }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: 'rgb(215, 216, 217)',
              marginBottom: '16px',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              textAlign: 'center'
            }}>
              Standard 3D Perspective
            </h4>
            <pre style={{
              margin: 0,
              fontSize: '12px',
              lineHeight: '1',
              whiteSpace: 'pre',
              overflow: 'visible',
              textAlign: 'left'
            }}>
              <span style={{ color: '#4ecdc4' }}>            +------------------------------+</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>           /                              /|</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>          /                              / |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         +------------------------------+  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |</span><span style={{ color: 'rgb(215, 216, 217)' }}>           [VMWARE]           </span><span style={{ color: '#4ecdc4' }}>|  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |                              |  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |------------------------------|  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |</span><span style={{ color: 'rgb(215, 216, 217)' }}>            [UNIFI]            </span><span style={{ color: '#4ecdc4' }}>|  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |                              |  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |------------------------------|  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |</span><span style={{ color: 'rgb(215, 216, 217)' }}>          [SYNOLOGY]          </span><span style={{ color: '#4ecdc4' }}>|  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |                              |  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |------------------------------|  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |</span><span style={{ color: 'rgb(215, 216, 217)' }}>          [CABLING]           </span><span style={{ color: '#4ecdc4' }}>|  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         |                              |  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>         +------------------------------+  |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>          \                              \ |</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>           \                              \|</span>{'\n'}
              <span style={{ color: '#4ecdc4' }}>            +------------------------------+</span>
            </pre>
          </div>
        </div>

        {/* Enhanced Isometric Visualization */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '40px',
          borderRadius: '8px',
          border: '1px solid rgba(126, 131, 133, 0.2)',
          marginBottom: '48px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{
            maxWidth: '400px',
            width: '100%'
          }}>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: 'rgb(215, 216, 217)',
              marginBottom: '16px',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              textAlign: 'center'
            }}>
              Enhanced Isometric View
            </h4>
            <pre style={{
              margin: 0,
              fontSize: '12px',
              lineHeight: '1',
              whiteSpace: 'pre',
              overflow: 'visible',
              textAlign: 'left'
            }}>
              <span style={{ color: '#dc3545' }}>     _________________________</span>{'\n'}
              <span style={{ color: '#dc3545' }}>    /                       /│</span>{'\n'}
              <span style={{ color: '#dc3545' }}>   /                       / │</span>{'\n'}
              <span style={{ color: '#dc3545' }}>  /_______________________/  │</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │       </span><span style={{ color: 'rgb(215, 216, 217)' }}>[VMWARE]</span><span style={{ color: 'rgb(126, 131, 133)' }}>        │  │</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │                        │  │</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │</span><span style={{ color: '#c82333' }}>------------------------</span><span style={{ color: 'rgb(126, 131, 133)' }}>│  │</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │        </span><span style={{ color: 'rgb(215, 216, 217)' }}>[UNIFI]</span><span style={{ color: 'rgb(126, 131, 133)' }}>         │  │</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │                        │  │</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │</span><span style={{ color: '#c82333' }}>------------------------</span><span style={{ color: 'rgb(126, 131, 133)' }}>│  │</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │       </span><span style={{ color: 'rgb(215, 216, 217)' }}>[SYNOLOGY]</span><span style={{ color: 'rgb(126, 131, 133)' }}>       │  │</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │                        │  │</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │</span><span style={{ color: '#c82333' }}>------------------------</span><span style={{ color: 'rgb(126, 131, 133)' }}>│  │</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │       </span><span style={{ color: 'rgb(215, 216, 217)' }}>[CABLING]</span><span style={{ color: 'rgb(126, 131, 133)' }}>        │ /</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │                        │ /</span>{'\n'}
              <span style={{ color: 'rgb(126, 131, 133)' }}>  │________________________│/</span>
            </pre>
          </div>
        </div>

        {/* Isometric Design Analysis */}
        <div style={{
          backgroundColor: 'rgba(126, 131, 133, 0.05)',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid rgba(126, 131, 133, 0.1)',
          marginBottom: '48px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '500',
            color: 'rgb(215, 216, 217)',
            marginBottom: '16px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
          }}>
            Enhanced Isometric Approach
          </h3>
          
          <div style={{
            display: 'grid',
            gap: '16px',
            fontSize: '17px',
            fontWeight: '400',
            lineHeight: '27.2px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'rgb(126, 131, 133)'
          }}>
            <div>
              <strong style={{ color: '#dc3545' }}>Strong red edges</strong> — 
              Top face uses underscores and slashes to create the 30° isometric angle, 
              providing stronger visual depth cues.
            </div>
            
            <div>
              <strong style={{ color: '#c82333' }}>Dimmer red dividers</strong> — 
              Horizontal module separators use a subtler red tone to maintain hierarchy 
              while keeping the structure clear.
            </div>
            
            <div>
              <strong style={{ color: 'rgb(215, 216, 217)' }}>Neutral labels</strong> — 
              Module names remain highly readable in white, ensuring the content 
              doesn't compete with the structural elements.
            </div>
            
            <div>
              This two-tone approach mimics the depth perception in your reference image, 
              where different surfaces receive different visual weights based on their 
              orientation to the viewer.
            </div>
          </div>
        </div>

        {/* Construction Details */}
        <div style={{
          backgroundColor: 'rgba(126, 131, 133, 0.05)',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid rgba(126, 131, 133, 0.1)',
          marginBottom: '48px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '500',
            color: 'rgb(215, 216, 217)',
            marginBottom: '16px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
          }}>
            Rack Construction
          </h3>
          
          <div style={{
            display: 'grid',
            gap: '16px',
            fontSize: '17px',
            fontWeight: '400',
            lineHeight: '27.2px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'rgb(126, 131, 133)'
          }}>
            <div>
              <strong style={{ color: 'rgb(215, 216, 217)' }}>1. Top "Lid" (Lines 1-4):</strong><br />
              Defines the slanted top face with proper perspective depth using forward slashes and strategic spacing.
            </div>
            
            <div>
              <strong style={{ color: 'rgb(215, 216, 217)' }}>2. Modules (Lines 5-16):</strong><br />
              Four infrastructure layers, each three lines tall with labels, interior space, and dividers.
            </div>
            
            <div>
              <strong style={{ color: 'rgb(215, 216, 217)' }}>3. Bottom "Feet" (Lines 17-19):</strong><br />
              Completes the 3D effect with backward slashes and closes the front bottom edge.
            </div>
          </div>
        </div>

        {/* Module Breakdown */}
        <div style={{
          backgroundColor: 'rgba(126, 131, 133, 0.05)',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid rgba(126, 131, 133, 0.1)',
          marginBottom: '48px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '500',
            color: 'rgb(215, 216, 217)',
            marginBottom: '16px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
          }}>
            Infrastructure Modules
          </h3>
          
          <div style={{
            display: 'grid',
            gap: '12px',
            fontSize: '17px',
            fontWeight: '400',
            lineHeight: '27.2px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'rgb(126, 131, 133)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'rgb(215, 216, 217)', fontFamily: 'GT_America_Mono, monospace', fontSize: '14px' }}>[VMWARE]</span>
              <span>— ESXi virtualization hosts and vCenter management</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'rgb(215, 216, 217)', fontFamily: 'GT_America_Mono, monospace', fontSize: '14px' }}>[UNIFI]</span>
              <span>— 10GbE switching backbone and wireless infrastructure</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'rgb(215, 216, 217)', fontFamily: 'GT_America_Mono, monospace', fontSize: '14px' }}>[SYNOLOGY]</span>
              <span>— NAS arrays for centralized storage and backup</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: 'rgb(215, 216, 217)', fontFamily: 'GT_America_Mono, monospace', fontSize: '14px' }}>[CABLING]</span>
              <span>— Structured cabling system and patch management</span>
            </div>
          </div>
        </div>

        {/* Color Strategy */}
        <div style={{
          backgroundColor: 'rgba(126, 131, 133, 0.05)',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid rgba(126, 131, 133, 0.1)',
          marginBottom: '48px'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '500',
            color: 'rgb(215, 216, 217)',
            marginBottom: '16px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
          }}>
            Visual Design Strategy
          </h3>
          
          <div style={{
            fontSize: '17px',
            fontWeight: '400',
            lineHeight: '27.2px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'rgb(126, 131, 133)',
            marginBottom: '16px'
          }}>
            <p style={{ marginBottom: '16px' }}>
              <strong style={{ color: '#4ecdc4' }}>Teal wireframe edges</strong> create the 3D structure and depth, 
              making the entire rack "pop" against the dark background.
            </p>
            
            <p style={{ marginBottom: '16px' }}>
              <strong style={{ color: 'rgb(215, 216, 217)' }}>White module labels</strong> maintain readability 
              while the colored structure provides visual hierarchy.
            </p>
            
            <p>
              This approach ensures the ASCII art functions as both technical documentation and 
              engaging visual design — infrastructure that's as clear as it is reliable.
            </p>
          </div>
        </div>

        <div style={{
          height: '1px',
          backgroundColor: 'rgba(126, 131, 133, 0.3)',
          marginBottom: '24px'
        }} />

        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '1.125rem',
            fontWeight: '500',
            color: 'rgb(215, 216, 217)',
            marginBottom: '8px'
          }}>
            Architecture you can see and understand
          </p>
          <p style={{
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'rgb(126, 131, 133)'
          }}>
            3D perspective meets infrastructure clarity
          </p>
        </div>
      </div>
    </div>
  );
}