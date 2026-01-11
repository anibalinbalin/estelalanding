'use client'

import { Link } from 'next-view-transitions'
import HexagonalSlidingBars from '@/components/ui/hexagonal-sliding-bars'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/language-provider'

const content = {
  en: {
    breadcrumb: { home: 'Estela', method: 'Method', current: 'Philosophy' },
    title: 'Our Philosophy',
    lead: 'The deeper thinking that shapes everything we build.',
    hexagonTitle: '5.1 The Hexagon Principle',
    hexagonIntro: "Pythagoras devoted his life to numbers. Euclid, to shapes. We reached the hexagon by the shortest path: a headcount.",
    hexagonP1: "And since we mentioned Euclid...",
    hexagonListTitle: '',
    hexagonList: [],
    hexagonP2: '',
    hexagonP3: '',
    hexagonConclusion: '',
    historyTitle: '5.2 Learning from History',
    historyIntro: "Grace Hopper simplified computing for humans. Euclid built vast truths from fundamental axioms. We apply timeless principles to modern problems.",
    historyP1: "Technology changes. Human nature doesn't. The challenges we face today—complexity, scale, integration—aren't new. They're ancient problems in modern dress.",
    hopperTitle: 'From Grace Hopper',
    hopperQuote: '"The most dangerous phrase in the language is \'we\'ve always done it this way.\'"',
    hopperText: "She invented the compiler because she was tired of writing the same code repeatedly. We automate not because it's trendy, but because repetition breeds errors and wastes human potential.",
    euclidTitle: 'From Euclid',
    euclidText: "He demonstrated how vast geometric truths could be built from a few fundamental axioms and logical deduction. We believe enduring technology is similarly built—on sound first principles and clear, rational design, creating systems that are both complex and comprehensible.",
    bauhausTitle: 'From the Bauhaus Movement',
    bauhausText: "They sought a radical unity of art, craft, and technology, believing that even everyday objects should be designed with both functional integrity and aesthetic clarity. We see our systems through a similar lens—where elegant design serves practical purpose, and robust function possesses its own inherent beauty.",
    historyConclusion: "History's greatest innovations came from connecting ideas that seemed unrelated. We do the same.",
    artTitle: '5.3 The Art Connection',
    artIntro: "Why does our CEO study Renaissance paintings? Because system design is composition. Balance. Seeing the whole while perfecting the details.",
    artP1: "Most see art and technology as opposites. We see them as variations on a theme: creating order from chaos, finding patterns in complexity, communicating ideas that transcend their medium.",
    compositionTitle: 'Composition',
    compositionText: "Every painting has a focal point, supporting elements, and negative space. So does every network. The critical servers draw focus. Redundant systems provide support. Proper segmentation creates breathing room.",
    colorTitle: 'Color Theory',
    colorText: "Artists know that colors affect each other—red looks different next to blue than next to orange. Systems have the same interdependence. A fast NVME impacts more than just storage. Quality switches improve more than just networking.",
    perspectiveTitle: 'Perspective',
    perspectiveText: "Renaissance artists discovered that showing depth required understanding viewpoint. We apply the same principle: your infrastructure looks different from the user's desk than from the server room. Both perspectives matter.",
    restorationTitle: 'Restoration',
    restorationText: "Our CEO doesn't just study paintings—he restores them. Taking something damaged by time and neglect, understanding its original intent, and carefully bringing it back to life. We do the same with legacy systems.",
    artConclusion1: "Art isn't decoration. It's a way of seeing.",
    artConclusion2: "Technology isn't just function. It's a way of thinking.",
    resultsTitle: '5.4 Results, Not Reports',
    resultsIntro: "We measure success by one metric: Does your technology make your work better? Everything else is vanity.",
    resultsP1: "The IT industry drowns in metrics. Uptime percentages. Ticket closure rates. Bandwidth utilization. Compliance scores. Numbers that impress auditors but ignore the only question that matters: is your technology helping or hindering?",
    metricsTitle: 'Our Success Metrics',
    metric1: ['Not:', 'How many tickets we closed', 'But:', 'How many tickets never opened'],
    metric2: ['Not:', 'How fast we responded', 'But:', 'How rarely you need us'],
    metric3: ['Not:', 'How much technology we installed', 'But:', 'How invisible it became'],
    metric4: ['Not:', 'How many reports we generated', 'But:', 'How many decisions they enabled'],
    resultsP2: "We've seen companies with 99.99% uptime whose employees waste hours daily fighting their tools. We've seen others with modest infrastructure whose teams flow effortlessly through their work.",
    resultsP3: "The difference isn't in the specifications. It's in the philosophy: technology should disappear into productivity. The best system is the one you never think about because it never fails you.",
    resultsP4: "When clients thank us, it's rarely for technical feats. It's for giving them back their time, their focus, their ability to do what they do best.",
    resultsConclusion: "That's the only result that matters.",
    closingP1: "These philosophies aren't abstract concepts.",
    closingP2: "They're the foundation of every decision we make.",
    closingP3: "From the hexagonal efficiency of our network designs to the artistic attention we bring to cable management. From the historical lessons that guide our strategies to the results-focused metrics that prove our worth.",
    closingP4: "Philosophy without practice is just theory.",
    closingP5: "Practice without philosophy is just habit.",
    closingP6: "Together, they create systems that transcend their specifications to become something more:",
    thanks: "Thank you for reading The Estela Method.",
    cta: "Now let's put it to work.",
    prevLink: '← Previous: Practices',
    backLink: 'Back to Method Overview'
  },
  es: {
    breadcrumb: { home: 'Estela', method: 'Método', current: 'Filosofía' },
    title: 'Nuestra Filosofía',
    lead: 'El porqué detrás del cómo.',
    hexagonTitle: '5.1 El Hexágono',
    hexagonIntro: "Pitágoras dedicó su vida a los números. Euclides, a las formas. Nosotros llegamos al hexágono por el camino más corto: contarnos.",
    hexagonP1: "Y ya que mencionamos a Euclides...",
    hexagonListTitle: '',
    hexagonList: [],
    hexagonP2: '',
    hexagonP3: '',
    hexagonConclusion: '',
    historyTitle: '5.2 Aprendiendo de la Historia',
    historyIntro: "Grace Hopper simplificó la computación. Euclides, la geometría. Nosotros tomamos prestado de los dos.",
    historyP1: "La tecnología cambia. La naturaleza humana, no. Lo que enfrentamos hoy ya lo enfrentaron otros — pero nunca tan rápido.",
    hopperTitle: 'De Grace Hopper',
    hopperQuote: '"La frase más peligrosa del lenguaje es \'siempre lo hemos hecho así\'."',
    hopperText: "Inventó el compiler porque odiaba repetirse. Nosotros también.",
    euclidTitle: 'De Euclides',
    euclidText: "De pocos axiomas, infinitas verdades. Así construimos: desde lo fundamental.",
    bauhausTitle: 'Del Movimiento Bauhaus',
    bauhausText: "Lo útil puede ser bello. Lo bello, útil.",
    historyConclusion: "Entendemos que las mayores innovaciones de la historia surgieron de conectar ideas que parecían no relacionadas.",
    artTitle: '5.3 La Conexión Artística',
    artIntro: "El Renacimiento entendió algo: el todo importa tanto como el detalle.",
    artP1: "Arte y tecnología: dos formas de crear orden.",
    compositionTitle: 'Composición',
    compositionText: "",
    colorTitle: 'Teoría del Color',
    colorText: "",
    perspectiveTitle: 'Perspectiva',
    perspectiveText: "",
    restorationTitle: 'Restauración',
    restorationText: "",
    artConclusion1: "El arte enseña a ver. La tecnología, a pensar.",
    artConclusion2: "",
    resultsTitle: '5.4 Resultados, No Informes',
    resultsIntro: "Medimos el éxito con una sola métrica: ¿La tecnología hace mejor su trabajo diario?",
    resultsP1: "",
    metricsTitle: '',
    metric1: ['', '', '', ''],
    metric2: ['', '', '', ''],
    metric3: ['', '', '', ''],
    metric4: ['', '', '', ''],
    resultsP2: "",
    resultsP3: "La diferencia no está en las especificaciones. Está en que nunca tengas que pensar en ellas.",
    resultsP4: "",
    resultsConclusion: "Ese es el único resultado que importa.",
    closingP1: "",
    closingP2: "",
    closingP3: "Hexágonos, historia, arte, resultados. Disperso en apariencia. Coherente en práctica.",
    closingP4: "Filosofía sin práctica es solo teoría.",
    closingP5: "Práctica sin filosofía es solo hábito.",
    closingP6: "",
    thanks: "Si llegó hasta aquí, ya sabe cómo pensamos.",
    cta: "Ahora falta ver cómo trabajamos.",
    prevLink: '← Anterior: Prácticas',
    backLink: 'Volver a Vista General del Método'
  }
}

export function MethodPhilosophy() {
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const t = content[language]
  
  const pageStyles = {
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    minHeight: '100vh',
    overflowX: 'hidden' as const
  }

  const badgeStyle = {
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    fontFamily: 'GT_America_Mono, monospace',
    color: 'var(--content-secondary-p3)',
    marginBottom: '24px'
  }

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '400',
    lineHeight: '2.75rem',
    letterSpacing: 'normal',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--foreground)',
    margin: 0,
    marginBottom: '24px'
  }

  const dividerStyle = {
    height: '1px',
    marginBottom: '48px'
  }

  const leadStyle = {
    fontSize: '19px',
    fontWeight: '400',
    lineHeight: '30.4px',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginBottom: '48px'
  }

  const paragraphStyle = {
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '27.2px',
    letterSpacing: 'normal',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginBottom: '24px'
  }

  return (
    <div style={pageStyles}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 32px' }}>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: t.breadcrumb.home, href: '/' },
            { label: t.breadcrumb.method, href: '/method' },
            { label: t.breadcrumb.current }
          ]}
        />

        <div style={dividerStyle} />

        {/* Section Number */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--step-indicator-p3)',
            color: '#fff',
            fontSize: '1.125rem', 
            fontFamily: 'GT_America_Mono, monospace'
          }}>
            5
          </div>
        </div>

        {/* Title */}
        <h1 style={titleStyle}>
          {t.title}
        </h1>

        <div style={dividerStyle} />

        {/* Chapter Content Lead */}
        <p style={leadStyle}>
          {t.lead}
        </p>

        {/* Hexagonal Sliding Bars Animation */}
        <div style={{ 
          position: 'relative',
          marginBottom: '48px',
          borderRadius: '8px',
          border: resolvedTheme === 'light' ? '1px solid #d5d5d5' : '1px solid var(--border)',
          height: '300px',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <HexagonalSlidingBars 
            backgroundColor={resolvedTheme === 'light' ? '#f5f5f5' : '#3d3019'}
            lineColor={resolvedTheme === 'light' ? '#666666' : '#f5b944'}
            fillColor={resolvedTheme === 'light' ? '#666666' : '#f5b944'}
            containerBackgroundColor={resolvedTheme === 'light' ? '#f5f5f5' : '#F0EEE6'}
          />
        </div>

        <div style={dividerStyle} />

        {/* 5.1 The Hexagon Principle */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--foreground)',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '8px'
          }}>
            {t.hexagonTitle}
          </h2>

          <p style={paragraphStyle}>
            {t.hexagonIntro}
          </p>

          <p style={paragraphStyle}>
            {t.hexagonP1}
          </p>

          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                {t.hexagonListTitle}
              </h3>
              <ul style={{ ...paragraphStyle, marginLeft: '16px' }}>
                {t.hexagonList.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <p style={paragraphStyle}>
            {t.hexagonP2}
          </p>

          <p style={paragraphStyle}>
            {t.hexagonP3}
          </p>

          <p style={{ ...paragraphStyle, fontStyle: 'italic' }}>
            {t.hexagonConclusion}
          </p>
        </section>

        <div style={dividerStyle} />

        {/* 5.2 Learning from History */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--foreground)',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '8px'
          }}>
            {t.historyTitle}
          </h2>

          <p style={paragraphStyle}>
            {t.historyIntro}
          </p>

          <p style={paragraphStyle}>
            {t.historyP1}
          </p>

          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                {t.hopperTitle}
              </h3>
              <p style={{ ...paragraphStyle, fontStyle: 'italic' }}>
                {t.hopperQuote}
              </p>
              <p style={paragraphStyle}>
                {t.hopperText}
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                {t.euclidTitle}
              </h3>
              <p style={paragraphStyle}>
                {t.euclidText}
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                {t.bauhausTitle}
              </h3>
              <p style={paragraphStyle}>
                {t.bauhausText}
              </p>
            </div>
          </div>

          <p style={paragraphStyle}>
            {t.historyConclusion}
          </p>
        </section>

        <div style={dividerStyle} />

        {/* 5.3 The Art Connection */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--foreground)',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '8px'
          }}>
            {t.artTitle}
          </h2>

          <p style={paragraphStyle}>
            {t.artIntro}
          </p>

          <p style={paragraphStyle}>
            {t.artP1}
          </p>

          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                {t.compositionTitle}
              </h3>
              <p style={paragraphStyle}>
                {t.compositionText}
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                {t.colorTitle}
              </h3>
              <p style={paragraphStyle}>
                {t.colorText}
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                {t.perspectiveTitle}
              </h3>
              <p style={paragraphStyle}>
                {t.perspectiveText}
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                {t.restorationTitle}
              </h3>
              <p style={paragraphStyle}>
                {t.restorationText}
              </p>
            </div>
          </div>

          <p style={paragraphStyle}>
            {t.artConclusion1}
          </p>
          <p style={paragraphStyle}>
            {t.artConclusion2}
          </p>
        </section>

        <div style={dividerStyle} />

        {/* 5.4 Results, Not Reports */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '400',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--foreground)',
            marginBottom: '24px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '8px'
          }}>
            {t.resultsTitle}
          </h2>

          <p style={paragraphStyle}>
            {t.resultsIntro}
          </p>

          <p style={paragraphStyle}>
            {t.resultsP1}
          </p>

          <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ ...paragraphStyle, fontWeight: '500', color: 'var(--foreground)', marginBottom: '8px' }}>
                {t.metricsTitle}
              </h3>
              <p style={paragraphStyle}>
                <strong>{t.metric1[0]}</strong> {t.metric1[1]}<br />
                <strong>{t.metric1[2]}</strong> {t.metric1[3]}
              </p>
              <p style={paragraphStyle}>
                <strong>{t.metric2[0]}</strong> {t.metric2[1]}<br />
                <strong>{t.metric2[2]}</strong> {t.metric2[3]}
              </p>
              <p style={paragraphStyle}>
                <strong>{t.metric3[0]}</strong> {t.metric3[1]}<br />
                <strong>{t.metric3[2]}</strong> {t.metric3[3]}
              </p>
              <p style={paragraphStyle}>
                <strong>{t.metric4[0]}</strong> {t.metric4[1]}<br />
                <strong>{t.metric4[2]}</strong> {t.metric4[3]}
              </p>
            </div>
          </div>

          <p style={paragraphStyle}>
            {t.resultsP2}
          </p>

          <p style={paragraphStyle}>
            {t.resultsP3}
          </p>

          <p style={paragraphStyle}>
            {t.resultsP4}
          </p>

          <p style={{ ...paragraphStyle, fontStyle: 'italic' }}>
            {t.resultsConclusion}
          </p>
        </section>

        <div style={dividerStyle} />

        {/* Closing Statement */}
        <section style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            ...paragraphStyle,
            fontSize: '1.125rem',
            fontWeight: '500',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>
            {t.closingP1}<br />
            {t.closingP2}
          </p>

          <p style={paragraphStyle}>
            {t.closingP3}
          </p>

          <p style={paragraphStyle}>
            {t.closingP4}
          </p>
          <p style={paragraphStyle}>
            {t.closingP5}
          </p>

          <p style={paragraphStyle}>
            {t.closingP6}
          </p>

          <p style={{
            ...paragraphStyle,
            fontSize: '1.5rem',
            fontWeight: '500',
            color: 'var(--foreground)',
            marginBottom: '16px'
          }}>

          </p>

          <div style={dividerStyle} />

          <p style={paragraphStyle}>
            {t.thanks}
          </p>
          <p style={{
            ...paragraphStyle,
            fontSize: '1.125rem',
            color: 'var(--foreground)'
          }}>
            {t.cta}
          </p>
        </section>

        <div style={dividerStyle} />

        {/* Navigation */}
        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <Link
            href="/method/practices"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'var(--content-secondary-p3)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '400',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--content-secondary-p3)'}
          >
            {t.prevLink}
          </Link>
          <Link
            href="/method"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: 'var(--content-secondary-p3)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '400',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--content-secondary-p3)'}
          >
            {t.backLink}
          </Link>
        </div>
      </div>
    </div>
  );
}