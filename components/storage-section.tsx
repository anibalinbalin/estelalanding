"use client";

import { useLanguage } from "@/components/language-provider";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";

export const StorageSection = () => {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      title: "Our Principles",
      subtitle: "At Estela, our principles are not corporate decorations",
      description: "they are the soul of why we've chosen depth over scale, why our clients stay with us, and why we remain personally invested after 13 years.",
      additionalInfo: "",
      features: [
        "Truth Over Comfort",
        "People Over Profit", 
        "Craft Over Speed"
      ],
      sectionsTitle: "The Why Behind Our How",
      sectionsSubtitle: "",
      onDemandTitle: "Truth Over Comfort",
      onDemandDesc1: "We tell clients when they don't need new hardware. We admit when we're not the right fit. We lead with transparency in every conversation.",
      onDemandDesc2: "This approach creates relationships built on trust.",
      openZfsTitle: "People Over Profit",
      openZfsDesc: "We choose clients who share our values. We respond to emergencies as part of our commitment, not as an opportunity. Because relationships outlast transactions.",
      protectionTitle: "Craft Over Speed", 
      protectionDesc1: "We could work faster. We choose to work better. Every cable is labeled. Every setting documented. Every solution built to outlast us.",
      protectionDesc2: "Some call it obsessive. Our clients call it essential.",
      coDesignTitle: "Small Over Scale",
      coDesignFeatures: [
        "We are 6 people by choice, not circumstance. We've had offers to grow 10x. We said no.",
        "Because we've learned: the magic happens at this size. Your project doesn't get handed off.",
        "Your relationship doesn't get 'managed.' You get us. All of us. Always."
      ],
      ctaTitle: "We are 6 people by choice, not circumstance",
      ctaSubtitle: "The magic happens at this size",
      tryButton: "Read The Full Estela Method",
      contactButton: "Meet Our Team",
      specsTitle: "The Numbers That Prove It",
      specs: [
        { label: "2 People", value: "Left in 13 years" },
        { label: "25% Projects", value: "Accepted" },
        { label: "7+ Years", value: "Average Client" },
        { label: "100% Happy", value: "Client Retention" }
      ]
    },
    es: {
      title: "Almacenamiento",
      subtitle: "Almacenamiento de Bloques Distribuido",
      description: "Servicio de almacenamiento de bloques persistente de alto rendimiento basado en NVMe con capacidad e IOPS configurables por volumen. La redundancia asegura alta disponibilidad para cargas de trabajo críticas para el negocio.",
      additionalInfo: "Integre con almacenamiento externo a través de nuestra red de egreso/ingreso de alto rendimiento.",
      features: [
        "Escalar el tamaño del volumen bajo demanda",
        "Promover instantáneas a imágenes utilizadas como plantillas de VM",
        "Soportar cargas de trabajo mixtas"
      ],
      sectionsTitle: "Almacenamiento Resiliente y Confiable",
      sectionsSubtitle: "con Gestión de Instantáneas Integrada",
      onDemandTitle: "Instantáneas Bajo Demanda",
      onDemandDesc1: "Estela ofrece a los usuarios instantáneas instantáneas de discos virtuales punto en el tiempo para usar en recuperación y respaldo fuera del rack.",
      onDemandDesc2: "Las instantáneas se confirman inmediatamente y luego se transmiten a las regiones recién asignadas. Esto proporciona instantáneas consistentes con contabilidad de almacenamiento fácil de entender.",
      openZfsTitle: "Impulsado por OpenZFS",
      openZfsDesc: "El servicio de almacenamiento utiliza OpenZFS para todo el almacenamiento de datos. Esto une el almacenamiento de datos distribuido de Estela y la resistencia a fallas de múltiples nodos con la confiabilidad y eficiencia que OpenZFS ha ganado en sus 20 años ejecutando cargas de trabajo exigentes.",
      protectionTitle: "Protección Proactiva de Datos",
      protectionDesc1: "El plano de control de Estela monitorea las métricas de rendimiento como otra señal temprana de falla de componentes. A medida que se rotan los sleds y SSD, el plano de control de Estela migra las regiones de almacenamiento para garantizar la redundancia apropiada.",
      protectionDesc2: "OpenZFS hace checksums y depura todos los datos para la detección temprana de fallas. Los discos virtuales validan constantemente la integridad de sus datos, corrigiendo fallas tan pronto como se descubren.",
      coDesignTitle: "Co-Diseño de Hardware y Software",
      coDesignFeatures: [
        "Datos encriptados tanto en reposo como en tránsito, con claves de datos protegidas por una raíz de confianza de hardware.",
        "Checksumming para asegurar la integridad de los datos y anticipar fallas de dispositivos.",
        "Rebalanceo automatizado de datos para preservar la redundancia ante la eliminación de unidades o sleds."
      ],
      ctaTitle: "La nube que posees",
      ctaSubtitle: "Pruébala ahora",
      tryButton: "Pruébala ahora",
      contactButton: "Contáctanos",
      specsTitle: "Especificaciones",
      specs: [
        { label: "Almacenamiento", value: "1024TB de almacenamiento crudo en NVMe" },
        { label: "Sleds de cómputo (por rack)", value: "32" },
        { label: "Capacidad de almacenamiento (por sled)", value: "10 x U.2 2.5-inch (15mm) Bays" },
        { label: "Configuración de almacenamiento (por sled)", value: "32 TB" }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="w-full section-spacing">
      {/* Header Section */}
      <div className="container mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center mb-16">
          {/* Icon */}
          <div className="mb-4 lg:mb-8 rounded-lg p-3 text-green-600 bg-green-100">
            <svg width="24" height="24" className="h-9 lg:h-16 w-9 lg:w-16">
              <rect width="20" height="16" x="2" y="4" rx="2" fill="currentColor" opacity="0.2"/>
              <rect width="20" height="16" x="2" y="4" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <rect width="4" height="4" x="6" y="8" rx="1" fill="currentColor"/>
              <rect width="4" height="4" x="12" y="8" rx="1" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Title */}
          <h1 
            className="text-4xl lg:text-5xl font-normal text-center"
            style={{
              fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
              color: 'var(--content-raise-p3)',
              lineHeight: '1.2'
            }}
          >
            {t.title}
          </h1>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-16">
        <div className="h-px w-full border-b border-border"></div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center mb-20 lg:mb-36">
          {/* Images */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <div className="relative overflow-hidden border border-border bg-card rounded-lg">
                <Image
                  src="/assets/estela-storage-create-disk.webp"
                  width={430}
                  height={437}
                  alt="Storage create disk interface"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute bottom-[-54px] right-0 lg:block hidden">
                <Image
                  src="/assets/estela-storage-create-disk-dropdown.webp"
                  width={259}
                  height={166}
                  alt="Storage dropdown menu"
                  className="shadow-lg rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-8">
            <h2 
              className="text-2xl lg:text-4xl font-normal mb-4"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                color: 'var(--content-raise-p3)'
              }}
            >
              {t.subtitle}
            </h2>
            <div className="space-y-4">
              <p className="text-base lg:text-lg text-muted-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.description}
              </p>
              <p className="text-base lg:text-lg text-muted-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.additionalInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 lg:mb-36">
          {t.features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-3 rounded p-2 text-green-600 bg-green-100 inline-block">
                <svg width="24" height="24" className="block">
                  {index === 0 && <path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7M3 7h18" stroke="currentColor" strokeWidth="2" fill="none"/>}
                  {index === 1 && <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>}
                  {index === 2 && <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>}
                </svg>
              </div>
              <h3 className="text-sm lg:text-base font-normal text-muted-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {feature}
              </h3>
            </div>
          ))}
        </div>

        {/* On-Demand Snapshots Section */}
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 mb-20 lg:mb-36">
          <div className="col-span-12 min-[600px]:col-span-11 min-[800px]:col-span-6 min-[1000px]:col-span-5 pr-0 min-[800px]:pr-10 min-[1000px]:pr-0 mb-4 min-[800px]:mb-0">
            <h2 
              className="mb-4 text-balance m-0 text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                color: 'var(--content-raise-p3)'
              }}
            >
              {t.onDemandTitle}
            </h2>
            <div>
              <p 
                className="my-4 m-0 font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide text-muted-foreground"
                style={{ fontFamily: 'SuisseIntl, sans-serif' }}
              >
                {t.onDemandDesc1}
              </p>
              <p 
                className="m-0 mt-[calc(.5rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(.5rem_*_var(--tw-space-y-reverse))] font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide text-muted-foreground"
                style={{ fontFamily: 'SuisseIntl, sans-serif' }}
              >
                {t.onDemandDesc2}
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden border bg-card border-border col-span-12 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg min-[600px]:rounded-xl">
            <div className="relative items-center w-[100%] flex h-[100%] justify-center">
              <Image
                src="/assets/estela-storage-create-snapshot.webp"
                width={516}
                height={374}
                alt="A pane showing a disk, a dropdown is visible with one item highlighted – Create snapshot from disk"
                className="w-[100%] max-w-[100%] h-auto block align-middle"
              />
            </div>
          </div>
        </div>

        {/* Powered by OpenZFS Section */}
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 mb-20 lg:mb-36">
          <div className="col-span-12 min-[600px]:col-span-11 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5 pl-0 min-[800px]:pl-10 min-[1000px]:pl-0 mb-4 min-[800px]:mb-0 min-[800px]:order-[1]">
            <h2 
              className="mb-4 text-balance m-0 text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--content-raise-p3)'
              }}
            >
              {t.openZfsTitle}
            </h2>
            <div>
              <p 
                className="my-4 m-0 font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)'
                }}
              >
                {t.openZfsDesc}
              </p>
            </div>
          </div>
          <div 
            className="relative col-start-[1] overflow-hidden border col-span-12 min-[800px]:col-span-6 min-[1000px]:col-span-5"
            style={{
              backgroundColor: 'var(--surface-tertiary-p3)',
              borderColor: 'var(--stroke-secondary-p3)',
              borderRadius: 'var(--border-radius-lg)'
            }}
          >
            <Image 
              src="/img/estela-storage-create-snapshot.svg" 
              width={516} 
              height={371} 
              alt="OpenZFS storage visualization"
              className="w-[100%] max-w-[100%] h-auto block align-middle"
            />
          </div>
        </div>

        {/* Proactive Data Protection Section */}
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 mb-20 lg:mb-36">
          <div className="col-span-12 min-[600px]:col-span-11 min-[800px]:col-span-6 min-[1000px]:col-span-5 pr-0 min-[800px]:pr-10 min-[1000px]:pr-0 mb-4 min-[800px]:mb-0">
            <h2 
              className="mb-4 text-balance m-0 text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                color: 'var(--content-raise-p3)'
              }}
            >
              {t.protectionTitle}
            </h2>
            <div>
              <p 
                className="my-4 m-0 font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)'
                }}
              >
                {t.protectionDesc1}
              </p>
              <p 
                className="m-0 mt-[calc(.5rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(.5rem_*_var(--tw-space-y-reverse))]"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)',
                  fontWeight: 'normal',
                  lineHeight: '1.5rem',
                  fontSize: '1rem',
                  letterSpacing: '0.03rem'
                }}
              ></p>
              <p 
                className="m-0 mt-[calc(.5rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(.5rem_*_var(--tw-space-y-reverse))] font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)'
                }}
              >
                {t.protectionDesc2}
              </p>
            </div>
          </div>
          <div 
            className="relative overflow-hidden border col-span-12 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5"
            style={{
              borderColor: 'var(--stroke-secondary-p3)',
              borderRadius: 'var(--border-radius-lg)'
            }}
          >
            <Image 
              src="/img/estela-storage-create-snapshot.svg" 
              width={426} 
              height={512} 
              alt="Storage errors visualization"
              className="w-[100%] max-w-[100%] h-auto block align-middle"
              style={{ backgroundColor: 'var(--surface-raise-p3)' }}
            />
          </div>
        </div>


        {/* Small Over Scale Section */}
        <div className="container mx-auto px-5 sm:px-10 mb-20 lg:mb-36">
          <div className="estela-cta-card relative flex items-center justify-between border p-4 min-[600px]:px-10 py-6 min-[600px]:py-8 gap-4 min-[600px]:gap-6 rounded-lg min-[600px]:rounded-lg max-[399px]:flex-col">
            <div>
              <h2 className="estela-cta-title text-balance m-0 text-lg min-[500px]:text-[1.5625rem] min-[900px]:text-4xl font-normal leading-[1.625rem] min-[500px]:leading-8 min-[900px]:leading-[2.625rem] tracking-wide min-[500px]:tracking-wide min-[900px]:tracking-normal max-[399px]:text-center">
                {t.coDesignTitle}<br/>
                <span className="estela-cta-subtitle">
                  {t.coDesignFeatures[0]}
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <Link
                href="/method"
                className="estela-button-primary px-3 items-center inline-flex h-8 justify-center rounded align-top font-normal leading-4 text-[.75rem] tracking-wider uppercase shadow-sm relative no-underline transition-colors"
              >
                {t.tryButton}
              </Link>
              <Link
                href="/contact"
                className="estela-button-secondary px-3 items-center inline-flex h-8 justify-center rounded align-top font-normal leading-4 text-[.75rem] tracking-wider uppercase shadow-sm relative no-underline transition-colors"
              >
                {t.contactButton}
              </Link>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-20 lg:mb-36">
          <h2 
            className="text-2xl lg:text-4xl font-normal"
            style={{
              fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
              color: 'var(--content-raise-p3)'
            }}
          >
            {t.sectionsTitle} <br className="hidden lg:block"/>
            <span className="text-muted-foreground">{t.sectionsSubtitle}</span>
          </h2>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-5 sm:px-10 mb-20 lg:mb-36">
        <div className="relative">
          <div className="flex items-center justify-between gap-4 border p-4 sm:px-10 py-6 sm:py-8 bg-card border-border shadow-lg rounded-lg max-sm:flex-col">
            <div>
              <h2 
                className="text-lg sm:text-2xl lg:text-4xl font-normal max-sm:text-center"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                  color: 'var(--content-raise-p3)'
                }}
              >
                {t.ctaTitle}<br/>
                <span className="text-muted-foreground">{t.ctaSubtitle}</span>
              </h2>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <Link
                href="/method"
                className="estela-nav-button estela-nav-button-primary"
              >
                {t.tryButton}
              </Link>
              <Link
                href="/contact"
                className="estela-nav-button estela-nav-button-outline"
              >
                {t.contactButton}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="container mx-auto px-5 sm:px-10">
        <div className="mb-12">
          <h2 
            className="text-2xl lg:text-4xl font-normal"
            style={{
              fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
              color: 'var(--content-raise-p3)'
            }}
          >
            {t.specsTitle}
          </h2>
        </div>
        
        <div className="py-8 border bg-card border-border shadow rounded-lg">
          {t.specs.map((spec, index) => (
            <div key={index}>
              <div className="px-4 sm:px-6 py-4 sm:flex items-baseline">
                <div className="sm:basis-1/2 text-lg text-muted-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                  {spec.label}
                </div>
                <div className="sm:basis-1/2 text-base text-muted-foreground max-sm:pl-4" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                  {spec.value}
                  {index === t.specs.length - 1 && (
                    <Link 
                      href="/product/specifications" 
                      className="text-green-600 flex items-center mt-4 text-xs font-mono uppercase tracking-wider hover:text-green-700"
                    >
                      View whole rack specs
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  )}
                </div>
              </div>
              {index < t.specs.length - 1 && <div className="h-px w-full border-b border-border"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-5 sm:px-10 mt-20 lg:mt-36 mb-20 lg:mb-36">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[800px]:col-span-10 min-[1100px]:col-span-6 flex flex-col justify-between border-b pb-4 text-left"
            style={{ borderBottomColor: 'var(--stroke-secondary-p3)' }}
          >
            <div>
              <div 
                className="font-normal leading-[2.625rem] min-[1000px]:leading-[110%] text-4xl min-[1000px]:text-[3.125rem] tracking-normal min-[1000px]:tracking-normal"
                style={{ fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif' }}
              >
                <div 
                  className="min-[1100px]:mt-6"
                  style={{ color: 'var(--content-raise-p3)' }}
                >
                  Contact us
                </div>
                <div style={{ color: 'var(--content-secondary-p3)' }}>
                  Get in touch
                </div>
              </div>
              <div 
                className="mx-auto min-[600px]:mx-0 mb-8 mt-4 max-w-[24rem] font-normal leading-[1.625rem] text-lg tracking-wide"
                style={{ 
                  fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                  color: 'var(--content-secondary-p3)'
                }}
              >
                <p className="m-0">
                  Own the computer that runs your cloud. Reach out here to learn more or skip to{' '}
                  <a 
                    href="/remote-access" 
                    className="hover:opacity-80"
                    style={{ 
                      color: 'var(--content-accent-secondary-p3)',
                      textDecoration: 'inherit'
                    }}
                  >
                    running your own demo silo
                  </a>
                  {' '}on an Estela rack.
                </p>
                <div className="flex flex-col gap-1 pt-3 mt-[calc(.5rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(.5rem_*_var(--tw-space-y-reverse))]">
                  <li className="flex items-baseline">
                    <svg width="12" height="12" className="block align-middle mr-2 shrink-0" style={{ color: 'var(--content-accent-secondary-p3)' }}>
                      <circle cx="6" cy="6" r="2" fill="currentColor"/>
                    </svg>
                    <div 
                      className="font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide"
                      style={{ 
                        color: 'var(--content-secondary-p3)',
                        fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                      }}
                    >
                      Learn more about the product
                    </div>
                  </li>
                  <li className="flex items-baseline">
                    <svg width="12" height="12" className="block align-middle mr-2 shrink-0" style={{ color: 'var(--content-accent-secondary-p3)' }}>
                      <circle cx="6" cy="6" r="2" fill="currentColor"/>
                    </svg>
                    <div 
                      className="font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide"
                      style={{ 
                        color: 'var(--content-secondary-p3)',
                        fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                      }}
                    >
                      Get personalized savings evaluation
                    </div>
                  </li>
                  <li className="flex items-baseline">
                    <svg width="12" height="12" className="block align-middle mr-2 shrink-0" style={{ color: 'var(--content-accent-secondary-p3)' }}>
                      <circle cx="6" cy="6" r="2" fill="currentColor"/>
                    </svg>
                    <div 
                      className="font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide"
                      style={{ 
                        color: 'var(--content-secondary-p3)',
                        fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
                      }}
                    >
                      Get personalized sustainability report
                    </div>
                  </li>
                </div>
              </div>
            </div>
            <div 
              className="hidden min-[1100px]:block min-[600px]:font-normal min-[600px]:leading-6 min-[600px]:text-base min-[600px]:tracking-wide"
              style={{ 
                color: 'var(--content-tertiary-p3)',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
              }}
            >
              Contact us directly at{' '}
              <a 
                href="mailto:hola@este.la" 
                className="hover:opacity-80"
                style={{ 
                  color: 'var(--content-accent-secondary-p3)',
                  textDecoration: 'inherit'
                }}
              >
                hola@este.la
              </a>
            </div>
          </div>
          <div className="col-span-12 min-[800px]:col-span-10 min-[1100px]:col-span-6">
            <div 
              className="border"
              style={{
                borderRadius: 'var(--border-radius-lg)',
                backgroundColor: 'var(--surface-raise-p3)',
                borderColor: 'var(--stroke-secondary-p3)'
              }}
            >
              <div className="w-[100%]">
                <form>
                  <div className="flex flex-col">
                    <div 
                      className="flex min-[800px]:grid min-[800px]:grid-cols-[repeat(12,minmax(0,1fr))] flex-col border-b gap-x-4 gap-y-6 p-6"
                      style={{ borderBottomColor: 'var(--stroke-secondary-p3)' }}
                    >
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label 
                            className="flex items-center font-normal leading-[1.125rem] text-[.875rem] tracking-wider"
                            style={{ 
                              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                              color: 'var(--content-secondary-p3)'
                            }}
                          >
                            Your name
                          </label>
                        </div>
                        <div 
                          className="flex border items-center hover:border-opacity-80"
                          style={{
                            borderRadius: 'var(--border-radius)',
                            borderColor: 'var(--stroke-default-p3)'
                          }}
                        >
                          <input 
                            name="name" 
                            placeholder="Alan Turing" 
                            className="px-3 py-[.6875rem] w-[100%] font-normal leading-[1.125rem] text-[.875rem] tracking-wider m-0 p-0 border-none !outline-offset-[1px]"
                            style={{
                              borderRadius: 'var(--border-radius)',
                              backgroundColor: 'var(--surface-default-p3)',
                              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                              color: 'var(--content-raise-p3)'
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label 
                            className="flex items-center font-normal leading-[1.125rem] text-[.875rem] tracking-wider"
                            style={{ 
                              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                              color: 'var(--content-secondary-p3)'
                            }}
                          >
                            Your work email
                          </label>
                        </div>
                        <div 
                          className="flex border items-center hover:border-opacity-80"
                          style={{
                            borderRadius: 'var(--border-radius)',
                            borderColor: 'var(--stroke-default-p3)'
                          }}
                        >
                          <input 
                            name="email" 
                            type="email" 
                            placeholder="alan@turing.org" 
                            className="px-3 py-[.6875rem] w-[100%] font-normal leading-[1.125rem] text-[.875rem] tracking-wider m-0 p-0 border-none !outline-offset-[1px]"
                            style={{
                              borderRadius: 'var(--border-radius)',
                              backgroundColor: 'var(--surface-default-p3)',
                              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                              color: 'var(--content-raise-p3)'
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label 
                            className="flex items-center font-normal leading-[1.125rem] text-[.875rem] tracking-wider"
                            style={{ 
                              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                              color: 'var(--content-secondary-p3)'
                            }}
                          >
                            Company name
                          </label>
                        </div>
                        <div 
                          className="flex border items-center hover:border-opacity-80"
                          style={{
                            borderRadius: 'var(--border-radius)',
                            borderColor: 'var(--stroke-default-p3)'
                          }}
                        >
                          <input 
                            name="companyName" 
                            type="text" 
                            placeholder="Maze War" 
                            className="px-3 py-[.6875rem] w-[100%] font-normal leading-[1.125rem] text-[.875rem] tracking-wider m-0 p-0 border-none !outline-offset-[1px]"
                            style={{
                              borderRadius: 'var(--border-radius)',
                              backgroundColor: 'var(--surface-default-p3)',
                              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                              color: 'var(--content-raise-p3)'
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label 
                            className="flex items-center font-normal leading-[1.125rem] text-[.875rem] tracking-wider"
                            style={{ 
                              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                              color: 'var(--content-secondary-p3)'
                            }}
                          >
                            How did you hear about us?
                          </label>
                        </div>
                        <div 
                          className="flex border items-center hover:border-opacity-80"
                          style={{
                            borderRadius: 'var(--border-radius)',
                            borderColor: 'var(--stroke-default-p3)'
                          }}
                        >
                          <input 
                            name="discoverySource" 
                            type="text" 
                            className="px-3 py-[.6875rem] w-[100%] font-normal leading-[1.125rem] text-[.875rem] tracking-wider m-0 p-0 border-none !outline-offset-[1px]"
                            style={{
                              borderRadius: 'var(--border-radius)',
                              backgroundColor: 'var(--surface-default-p3)',
                              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                              color: 'var(--content-raise-p3)'
                            }}
                          />
                        </div>
                      </div>
                      <div 
                        className="border-b w-[100%] col-span-12"
                        style={{ borderBottomColor: 'var(--stroke-secondary-p3)' }}
                      ></div>
                      <div className="col-span-12 relative">
                        <div className="mb-2">
                          <label 
                            className="flex items-center font-normal leading-[1.125rem] text-[.875rem] tracking-wider"
                            style={{ 
                              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                              color: 'var(--content-secondary-p3)'
                            }}
                          >
                            Notes
                          </label>
                        </div>
                        <div 
                          className="flex border items-center hover:border-opacity-80"
                          style={{
                            borderRadius: 'var(--border-radius)',
                            borderColor: 'var(--stroke-default-p3)'
                          }}
                        >
                          <textarea 
                            placeholder="Anything else you'd like to share with the Estela team?" 
                            className="px-3 py-[.6875rem] w-[100%] resize-vertical font-normal leading-[1.125rem] text-[.875rem] tracking-wider m-0 p-0 border-none !outline-offset-[1px]"
                            style={{
                              borderRadius: 'var(--border-radius)',
                              backgroundColor: 'var(--surface-default-p3)',
                              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                              color: 'var(--content-raise-p3)'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 flex items-center justify-end min-[800px]:col-span-12">
                      <button 
                        type="submit" 
                        className="estela-nav-button estela-nav-button-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div 
            className="col-span-12 min-[600px]:font-normal min-[600px]:leading-6 min-[600px]:text-base min-[600px]:tracking-wide min-[1100px]:hidden"
            style={{ 
              color: 'var(--content-tertiary-p3)',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif'
            }}
          >
            Contact us directly at{' '}
            <a 
              href="mailto:hola@este.la" 
              className="hover:opacity-80"
              style={{ 
                color: 'var(--content-accent-secondary-p3)',
                textDecoration: 'inherit'
              }}
            >
              hola@este.la
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};