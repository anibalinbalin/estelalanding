'use client'

import { useState, useCallback, useEffect } from 'react'
import { Link } from 'next-view-transitions'
import Waves, { type LineInteraction } from '@/components/ui/waves'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/components/language-provider'
import { useWaveAudio } from '@/hooks/use-wave-audio'

const content = {
  en: {
    breadcrumb: { home: 'Estela', method: 'Method', current: 'Implementation' },
    title: 'How We Work',
    lead: 'Our proven methodology for turning complex problems into simple solutions.',
    phases: [
      {
        number: '3.1',
        title: 'Understanding',
        intro: "We don't start with solutions. We start with questions.",
        content: [
          'Shadow your team for a day',
          'Map your actual workflows (not the ideal ones)',
          'Identify pain points and possibilities',
          'Document everything'
        ],
        time: 'Time: 1-2 days'
      },
      {
        number: '3.2',
        title: 'Architecture',
        intro: 'Design the system that fits reality.',
        content: [
          'Create detailed blueprints',
          'Plan for today and tomorrow',
          'Choose tools that talk to each other',
          "Design for your team's skill level"
        ],
        time: 'Time: 1-2 weeks'
      },
      {
        number: '3.3',
        title: 'Implementation',
        intro: 'Build without breaking what works.',
        content: [
          'Staged rollouts, no big bangs',
          'Test with users in test bed',
          'Document as we build',
          'Train as we go'
        ],
        time: 'Time: 2-8 weeks (depending on scope)'
      },
      {
        number: '3.4',
        title: 'Evolution',
        intro: 'Technology is never "done."',
        content: [
          'Regular health checks',
          'Proactive improvements',
          'Continuous education',
          'Grow with your needs'
        ],
        time: 'Time: Ongoing'
      }
    ],
    closing: {
      line1: "This methodology isn't theoretical.",
      line2: "It's refined through 13 years of real-world projects.",
      body: "From 5-person companies to 100-person organizations. From simple network upgrades to complete digital transformations. Every project teaches us something new.",
      detail1: 'The phases are flexible, not rigid.',
      detail2: 'The timeline adapts to your reality.',
      detail3: 'The outcome is always the same:',
      highlight: 'Technology that just works.'
    },
    prevLink: '← Previous: Principles',
    nextLink: 'Next: Practices →'
  },
  es: {
    breadcrumb: { home: 'Estela', method: 'Método', current: 'Implementación' },
    title: 'Cómo Trabajamos',
    lead: 'Una cuerda bien afinada no hace ruido —hace música. Nuestra metodología para convertir problemas diarios en soluciones escalables.',
    phases: [
      {
        number: '3.1',
        title: 'Entendimiento',
        intro: 'No empezamos con soluciones. Empezamos con preguntas.',
        content: [
          'Observar a su equipo por un día',
          'Mapear sus flujos de trabajo reales (no los ideales)',
          'Identificar problemas y posibilidades',
          'Documentar todo'
        ],
        time: 'Tiempo: 1-2 días'
      },
      {
        number: '3.2',
        title: 'Arquitectura',
        intro: 'Diseñar el sistema que se ajusta a la realidad.',
        content: [
          'Crear lineas de tiempo claras',
          'Planificar a largo plazo',
          'Elegir herramientas que se comuniquen entre sí',
          'Diseñar los cambios de forma progresiva'
        ],
        time: 'Tiempo: 1-2 semanas'
      },
      {
        number: '3.3',
        title: 'Implementación',
        intro: 'Construir sin romper lo que funciona.',
        content: [
          'Desarrollos por etapas',
          'Probar con usuarios en test bed',
          'Ir documentando mientras avanzamos',
          'Enseñar sobre la marcha'
        ],
        time: 'Tiempo: 2-8 semanas (según el alcance)'
      },
      {
        number: '3.4',
        title: 'Evolución',
        intro: 'La tecnología nunca está "terminada".',
        content: [
          'Chequeos regulares',
          'Mejoras proactivas',
          'Transmitir nuevos cambios',
          'Crecer con las necesidades de la empresa'
        ],
        time: 'Tiempo: Continuo'
      }
    ],
    closing: null,
    prevLink: '← Anterior: Principios',
    nextLink: 'Siguiente: Prácticas →'
  }
}

const styles = {
  bodyText: {
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '27.2px',
    letterSpacing: 'normal',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'var(--content-secondary-p3)',
    marginBottom: '24px'
  },
  navLink: {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'var(--content-secondary-p3)',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '400',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    transition: 'color 0.2s'
  }
} as const

function SoundOnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

function SoundOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function Spacer() {
  return <div style={{ height: '1px', marginBottom: '48px' }} />
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      style={styles.navLink}
      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--content-secondary-p3)'}
    >
      {children}
    </Link>
  )
}

export function MethodImplementation() {
  const { resolvedTheme } = useTheme()
  const { language } = useLanguage()
  const t = content[language]
  const [mounted, setMounted] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)
  const isLight = mounted && resolvedTheme === 'light'

  useEffect(() => {
    setMounted(true)
  }, [])

  const audio = useWaveAudio({
    mode: 'pluck',
    scale: 'guitar',
    volume: 0.3,
    oscillatorType: 'triangle',
  })

  const toggleAudio = useCallback(() => {
    if (audioEnabled) {
      audio.disable()
      setAudioEnabled(false)
    } else {
      audio.enable()
      setAudioEnabled(true)
    }
  }, [audio, audioEnabled])

  const handleLineInteraction = useCallback(
    (interaction: LineInteraction) => {
      if (!audioEnabled) return
      audio.triggerNote(
        interaction.lineIndex,
        interaction.totalLines,
        interaction.velocity
      )
    },
    [audio, audioEnabled]
  )

  return (
    <div style={{
      backgroundColor: 'var(--background)',
      color: 'var(--foreground)',
      minHeight: '100vh',
      fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
      overflowX: 'hidden'
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '120px 32px' }}>
        <div style={{ marginBottom: '32px' }}>
          <Breadcrumb
            items={[
              { label: t.breadcrumb.home, href: '/' },
              { label: t.breadcrumb.method, href: '/method' },
              { label: t.breadcrumb.current }
            ]}
          />

          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#1a2224',
              color: '#fff',
              fontSize: '1.125rem',
              fontFamily: 'GT_America_Mono, monospace'
            }}>
              3
            </div>
          </div>

          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '400',
            lineHeight: '2.75rem',
            letterSpacing: 'normal',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--foreground)',
            margin: 0,
            marginBottom: '24px'
          }}>
            {t.title}
          </h1>

          <Spacer />

          <p style={{
            fontSize: '19px',
            fontWeight: '400',
            lineHeight: '30.4px',
            fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
            color: 'var(--content-secondary-p3)',
            marginBottom: '48px'
          }}>
            {t.lead}
          </p>

          {/* Waves Effect */}
          <div style={{
            position: 'relative',
            marginBottom: '48px',
            borderRadius: '8px',
            border: isLight ? '1px solid #d5d5d5' : '1px solid var(--border)',
            height: '300px',
            width: '100%',
            overflow: 'hidden'
          }}>
            <button
              onClick={toggleAudio}
              aria-label={audioEnabled ? 'Disable sound' : 'Enable sound'}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 10,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: audioEnabled
                  ? (isLight ? '#333' : '#f5b944')
                  : (isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'),
                color: audioEnabled
                  ? (isLight ? '#fff' : '#000')
                  : (isLight ? '#666' : '#888'),
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              {audioEnabled ? <SoundOnIcon /> : <SoundOffIcon />}
            </button>
            <Waves
              lineColor={isLight ? '#666666' : '#f5b944'}
              backgroundColor={isLight ? '#f5f5f5' : '#3d3019'}
              waveSpeedX={0}
              waveSpeedY={0}
              waveAmpX={0}
              waveAmpY={0}
              friction={0.92}
              tension={0.008}
              maxCursorMove={100}
              xGap={14}
              yGap={32}
              onLineInteraction={handleLineInteraction}
            />
          </div>
        </div>

        <Spacer />

        {t.phases.map((phase, index) => (
          <div key={phase.number} style={{ marginBottom: '48px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--foreground)',
                marginBottom: '24px',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '8px'
              }}>
                {phase.number} {phase.title}
              </h2>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <p style={{
                fontSize: '17px',
                fontWeight: '500',
                lineHeight: '27.2px',
                letterSpacing: 'normal',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--foreground)',
                marginBottom: '24px'
              }}>
                {phase.intro}
              </p>

              <div style={{ marginLeft: '24px', marginBottom: '24px' }}>
                <ul style={{
                  fontSize: '17px',
                  fontWeight: '400',
                  lineHeight: '27.2px',
                  letterSpacing: 'normal',
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)',
                  marginLeft: '16px',
                  listStyle: 'none',
                  padding: '0'
                }}>
                  {phase.content.map((item) => (
                    <li key={item} style={{ marginBottom: '8px' }}>• {item}</li>
                  ))}
                </ul>
              </div>

              <p style={{
                fontSize: '0.875rem',
                fontFamily: 'GT_America_Mono, monospace',
                color: 'var(--content-secondary-p3)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '24px'
              }}>
                {phase.time}
              </p>
            </div>

            {index < t.phases.length - 1 && <Spacer />}
          </div>
        ))}

        <Spacer />

        {t.closing && (
          <section style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{
              fontSize: '1.125rem',
              fontWeight: '500',
              color: 'var(--foreground)',
              marginBottom: '16px'
            }}>
              {t.closing.line1}<br />
              {t.closing.line2}
            </p>

            <p style={styles.bodyText}>{t.closing.body}</p>
            <p style={styles.bodyText}>{t.closing.detail1}</p>
            <p style={styles.bodyText}>{t.closing.detail2}</p>
            <p style={styles.bodyText}>{t.closing.detail3}</p>

            <p style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              color: 'var(--foreground)',
              marginBottom: '16px'
            }}>
              {t.closing.highlight}
            </p>
          </section>
        )}

        <Spacer />

        <div style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <NavLink href="/method/principles">{t.prevLink}</NavLink>
          <NavLink href="/method/practices">{t.nextLink}</NavLink>
        </div>
      </div>
    </div>
  )
}
