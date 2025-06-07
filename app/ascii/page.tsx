export default function ASCIIPage() {
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
          Estela / ASCII Art / Infrastructure
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
          Infrastructure Stack
        </h1>

        <p style={{
          fontSize: '19px',
          fontWeight: '400',
          lineHeight: '30.4px',
          fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
          color: 'rgb(126, 131, 133)',
          marginBottom: '48px'
        }}>
          Foundations that don&apos;t fail. Visualized in ASCII art with proper depth and dimensionality.
        </p>

        <div style={{
          height: '1px',
          backgroundColor: 'rgba(126, 131, 133, 0.3)',
          marginBottom: '48px'
        }} />

        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          padding: '32px',
          borderRadius: '8px',
          border: '1px solid rgba(126, 131, 133, 0.2)',
          marginBottom: '48px'
        }}>
          <pre style={{
            margin: 0,
            fontSize: '14px',
            lineHeight: '1.2',
            whiteSpace: 'pre',
            overflow: 'auto',
            fontFamily: 'GT_America_Mono, monospace'
          }}>
{/* Complex Isometric Infrastructure */}
<span style={{ color: '#b8bbbc' }}>+------------------+</span><span style={{ color: '#404647' }}>.</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span> <span style={{ color: '#404647' }}>`.               |</span> <span style={{ color: '#404647' }}>`.   </span><span style={{ color: '#A1A4A5' }}>[VMWARE]</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>   <span style={{ color: '#5B5F61' }}>`+------------------+</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>    <span style={{ color: '#5B5F61' }}>|</span>              <span style={{ color: '#5B5F61' }}>|</span>    <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>    <span style={{ color: '#FB6E88' }}>|══════════════════|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span><span style={{ color: '#5B5F61' }}>----|</span><span style={{ color: '#954553' }}>-┌────────┐</span><span style={{ color: '#404647' }}>.</span><span style={{ color: '#5B5F61' }}>--+.</span>   <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>    <span style={{ color: '#954553' }}>|─┘</span> <span style={{ color: '#A1A4A5' }}>10GB</span>  <span style={{ color: '#954553' }}>└────────|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>    <span style={{ color: '#5B5F61' }}>|</span>          <span style={{ color: '#5B5F61' }}>|</span>    <span style={{ color: '#5B5F61' }}>+---+</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>    <span style={{ color: '#5B5F61' }}>|</span>          <span style={{ color: '#5B5F61' }}>|</span>    <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>    <span style={{ color: '#5B5F61' }}>|</span>          <span style={{ color: '#5B5F61' }}>|</span>    <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>+</span><span style={{ color: '#5B5F61' }}>----|----|</span><span style={{ color: '#404647' }}>.</span><span style={{ color: '#5B5F61' }}>--+</span><span style={{ color: '#404647' }}>.</span><span style={{ color: '#5B5F61' }}>----|</span><span style={{ color: '#404647' }}>.</span>{'\n'}
 <span style={{ color: '#404647' }}>`.  |</span>    <span style={{ color: '#404647' }}>|</span> <span style={{ color: '#404647' }}>`. `.</span> <span style={{ color: '#404647' }}>|</span> <span style={{ color: '#404647' }}>`.   </span><span style={{ color: '#A1A4A5' }}>[UNIFI]</span>{'\n'}
   <span style={{ color: '#5B5F61' }}>`+----------+---+---+</span>{'\n'}
         <span style={{ color: '#5B5F61' }}>|</span>    <span style={{ color: '#5B5F61' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>    <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
         <span style={{ color: '#FB6E88' }}>|    |   |    |</span>{'\n'}
    <span style={{ color: '#b8bbbc' }}>+</span><span style={{ color: '#5B5F61' }}>----|</span><span style={{ color: '#404647' }}>.</span><span style={{ color: '#5B5F61' }}>---|---+</span><span style={{ color: '#404647' }}>.</span>   <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
    <span style={{ color: '#b8bbbc' }}>|</span><span style={{ color: '#404647' }}>`.   `.</span> <span style={{ color: '#404647' }}>|</span>     <span style={{ color: '#404647' }}>`. |   </span><span style={{ color: '#A1A4A5' }}>[SYNOLOGY]</span>{'\n'}
    <span style={{ color: '#b8bbbc' }}>|</span>  <span style={{ color: '#5B5F61' }}>+------+---+---+</span>{'\n'}
    <span style={{ color: '#b8bbbc' }}>|</span>  <span style={{ color: '#5B5F61' }}>|</span>      <span style={{ color: '#5B5F61' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
    <span style={{ color: '#b8bbbc' }}>|</span>  <span style={{ color: '#FB6E88' }}>|      |   |   |</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>+</span><span style={{ color: '#5B5F61' }}>----|--|------+</span><span style={{ color: '#404647' }}>.</span><span style={{ color: '#5B5F61' }}>-|</span><span style={{ color: '#404647' }}>.</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span><span style={{ color: '#404647' }}>`.  `.|</span>        <span style={{ color: '#404647' }}>`|</span> <span style={{ color: '#404647' }}>`.   </span><span style={{ color: '#A1A4A5' }}>[INFRA]</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>  <span style={{ color: '#5B5F61' }}>`+--+-----------+---+</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span><span style={{ color: '#FB6E88' }}>~&gt;</span> <span style={{ color: '#A1A4A5' }}>NETWORK</span>    <span style={{ color: '#5B5F61' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span><span style={{ color: '#A1A4A5' }}>STRUCTURED</span>    <span style={{ color: '#5B5F61' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span><span style={{ color: '#5B5F61' }}>---|</span><span style={{ color: '#A1A4A5' }}>CABLING CAT6A</span><span style={{ color: '#5B5F61' }}>-+</span><span style={{ color: '#404647' }}>.</span>  <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>  <span style={{ color: '#5B5F61' }}>|</span> <span style={{ color: '#404647' }}>`.       `.</span> <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>  <span style={{ color: '#5B5F61' }}>|</span>   <span style={{ color: '#5B5F61' }}>+----------+</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>  <span style={{ color: '#5B5F61' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>  <span style={{ color: '#5B5F61' }}>|</span>   <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
<span style={{ color: '#b8bbbc' }}>+</span><span style={{ color: '#5B5F61' }}>---|--+</span><span style={{ color: '#404647' }}>.</span>  <span style={{ color: '#5B5F61' }}>|</span>{'\n'}
 <span style={{ color: '#404647' }}>`. |</span>    <span style={{ color: '#404647' }}>`.|</span>{'\n'}
   <span style={{ color: '#5B5F61' }}>`+------+</span>
          </pre>
        </div>

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
            Advanced Depth Color System
          </h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#b8bbbc', fontFamily: 'GT_America_Mono, monospace', fontSize: '16px' }}>█</span>
              <strong style={{ color: '#b8bbbc' }}>Front faces (#b8bbbc)</strong>
              <span style={{ color: 'rgb(126, 131, 133)' }}>— Brightest elements, primary structure</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#5B5F61', fontFamily: 'GT_America_Mono, monospace', fontSize: '16px' }}>█</span>
              <strong style={{ color: '#5B5F61' }}>Connecting lines (#5B5F61)</strong>
              <span style={{ color: 'rgb(126, 131, 133)' }}>— Medium depth, structural connections</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#404647', fontFamily: 'GT_America_Mono, monospace', fontSize: '16px' }}>█</span>
              <strong style={{ color: '#404647' }}>Background/sides (#404647)</strong>
              <span style={{ color: 'rgb(126, 131, 133)' }}>— Darkest, receding surfaces</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#FB6E88', fontFamily: 'GT_America_Mono, monospace', fontSize: '16px' }}>█</span>
              <strong style={{ color: '#FB6E88' }}>Primary accent (#FB6E88)</strong>
              <span style={{ color: 'rgb(126, 131, 133)' }}>— Critical system elements</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#954553', fontFamily: 'GT_America_Mono, monospace', fontSize: '16px' }}>█</span>
              <strong style={{ color: '#954553' }}>Secondary accent (#954553)</strong>
              <span style={{ color: 'rgb(126, 131, 133)' }}>— Interface details, hierarchy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#A1A4A5', fontFamily: 'GT_America_Mono, monospace', fontSize: '16px' }}>█</span>
              <strong style={{ color: '#A1A4A5' }}>Labels (#A1A4A5)</strong>
              <span style={{ color: 'rgb(126, 131, 133)' }}>— Text and identification</span>
            </div>
          </div>
          
          <div style={{
            marginTop: '16px',
            padding: '16px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '4px',
            fontSize: '15px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'rgb(126, 131, 133)',
            lineHeight: '1.4'
          }}>
            <strong style={{ color: 'rgb(215, 216, 217)' }}>Isometric principle:</strong> This color depth system 
            creates convincing 3D illusion by assigning different brightness values based on surface orientation. 
            Front-facing elements are brightest, side elements are medium, and receding surfaces are darkest.
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '1.125rem',
            fontWeight: '500',
            color: 'rgb(215, 216, 217)',
            marginBottom: '8px'
          }}>
            Infrastructure that speaks for itself
          </p>
          <p style={{
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'rgb(126, 131, 133)'
          }}>
            Even in ASCII, reliability is visible
          </p>
        </div>
      </div>
    </div>
  );
}