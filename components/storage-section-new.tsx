"use client";

import { useLanguage } from "@/components/language-provider";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Database, Camera, RotateCcw, Key, Shield, Router } from "lucide-react";

export const StorageSectionNew = () => {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      title: "Storage",
      subtitle: "Distributed Block Storage",
      description: "High-performance, NVMe-based persistent block storage service with configurable capacity and IOPS per volume. Redundancy assures high availability for business-critical workloads.",
      additionalInfo: "Integrate with external storage over our high-performance egress/ingress network.",
      features: [
        "Scale up volume size on demand",
        "Promote snapshots into images used as VM templates", 
        "Support mixed workloads"
      ],
      sectionsTitle: "Resilient and Reliable Storage",
      sectionsSubtitle: "with Built-in Snapshot Management",
      onDemandTitle: "On-Demand Snapshots",
      onDemandDesc1: "Oxide offers users instantaneous, point-in-time virtual disk snapshots to use for recovery and off-rack backup.",
      onDemandDesc2: "Snapshots are committed immediately then streamed to newly allocated regions. This provides consistent snapshots with easy-to-understand storage accounting.",
      openZfsTitle: "Powered by OpenZFS",
      openZfsDesc: "The storage service uses OpenZFS for all data storage. This marries Oxide's distributed data storage and multi-node failure resiliency with the dependability and efficiency OpenZFS has earned in its 20 years of running demanding workloads.",
      protectionTitle: "Proactive Data Protection", 
      protectionDesc1: "The Oxide control plane monitors performance metrics as another early signal of component failure. As sleds and SSDs are rotated in and out, the Oxide control plane migrates storage regions to ensure the appropriate redundancy.",
      protectionDesc2: "OpenZFS checksums and scrubs all data for early failure detection. Virtual disks constantly validate the integrity of your data, correcting failures as soon as they are discovered.",
      coDesignTitle: "Hardware and Software Co-Design",
      coDesignFeatures: [
        "Data encrypted both at rest and in transit, with data keys protected by a hardware root-of-trust.",
        "Checksumming to ensure data integrity and anticipate device failure.",
        "Automated rebalancing of data to preserve redundancy in the face of drive or sled removal."
      ],
      ctaTitle: "The cloud you own",
      ctaSubtitle: "Try it now",
      tryButton: "Try it now",
      contactButton: "Contact us",
      specsTitle: "Specifications",
      specs: [
        { label: "Storage", value: "1024TB of raw storage in NVMe" },
        { label: "Compute sleds (per rack)", value: "32" },
        { label: "Storage capacity (per sled)", value: "10 x U.2 2.5-inch (15mm) Bays" },
        { label: "Storage configuration (per sled)", value: "32 TB" }
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
      onDemandDesc1: "Oxide ofrece a los usuarios instantáneas instantáneas de discos virtuales punto en el tiempo para usar en recuperación y respaldo fuera del rack.",
      onDemandDesc2: "Las instantáneas se confirman inmediatamente y luego se transmiten a las regiones recién asignadas. Esto proporciona instantáneas consistentes con contabilidad de almacenamiento fácil de entender.",
      openZfsTitle: "Impulsado por OpenZFS",
      openZfsDesc: "El servicio de almacenamiento utiliza OpenZFS para todo el almacenamiento de datos. Esto une el almacenamiento de datos distribuido de Oxide y la resistencia a fallas de múltiples nodos con la confiabilidad y eficiencia que OpenZFS ha ganado en sus 20 años ejecutando cargas de trabajo exigentes.",
      protectionTitle: "Protección Proactiva de Datos",
      protectionDesc1: "El plano de control de Oxide monitorea las métricas de rendimiento como otra señal temprana de falla de componentes. A medida que se rotan los sleds y SSD, el plano de control de Oxide migra las regiones de almacenamiento para garantizar la redundancia apropiada.",
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
    <section className="w-full py-20 lg:py-40">
      {/* Header Section */}
      <div className="container mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-center mb-16">
          <div className="mb-4 lg:mb-8 rounded-lg p-3 text-green-600 bg-green-100">
            <Database className="h-9 lg:h-16 w-9 lg:w-16" />
          </div>
          
          <h1 
            className="text-4xl lg:text-5xl font-normal text-center"
            style={{
              fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
              color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a',
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
      <div className="w-full px-5 sm:px-10">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="relative order-1 col-span-12 min-[800px]:col-span-6 min-[800px]:grid min-[800px]:grid-cols-[repeat(6,minmax(0,1fr))]">
            <div className="relative col-span-5 overflow-hidden border bg-card border-border rounded-lg min-[600px]:rounded-xl">
              <div className="relative items-center w-full flex h-full justify-center">
                <Image
                  src="https://oxide-computer.imgix.net/oxide-storage-create-disk.png?w=430&dpr=2&fm=webp"
                  width={430}
                  height={437}
                  alt="A pane with a form to create a new disk"
                  className="w-full max-w-full h-auto block align-middle"
                />
              </div>
            </div>
            <div className="relative col-start-4 col-span-3 hidden min-[800px]:block">
              <div className="relative items-center w-full flex h-full justify-center">
                <Image
                  src="https://oxide-computer.imgix.net/oxide-storage-create-disk-dropdown.png?w=259&dpr=2&fm=webp"
                  width={259}
                  height={166}
                  alt="Dropdown showing a selection of disk actions"
                  className="w-full max-w-full h-auto block align-middle absolute bottom-[-54px] right-0 shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 min-[600px]:col-span-11 min-[1000px]:col-start-8 min-[1000px]:col-span-5 pl-0 min-[800px]:pl-10 min-[1000px]:pl-0 mb-4 min-[800px]:mb-0 min-[800px]:order-1">
            <h2 
              className="mb-4 text-balance m-0 text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a'
              }}
            >
              {t.subtitle}
            </h2>
            <div>
              <p className="my-4 m-0 text-muted-foreground font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.description}
              </p>
              <p className="m-0 text-muted-foreground font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.additionalInfo}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-36 mb-20 lg:mb-36">
        {/* Features Grid */}
        <div className="w-full px-5 sm:px-10">
          <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
            <div className="col-span-4 items-center text-center flex flex-col min-[1000px]:px-12">
              <div className="mb-3 rounded p-2 text-green-600 bg-green-100">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-balance m-0 mb-1 text-muted-foreground text-sm min-[1000px]:text-base font-normal leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.features[0]}
              </h3>
            </div>
            <div className="col-span-4 items-center text-center flex flex-col min-[1000px]:px-12">
              <div className="mb-3 rounded p-2 text-green-600 bg-green-100">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-balance m-0 mb-1 text-muted-foreground text-sm min-[1000px]:text-base font-normal leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.features[1]}
              </h3>
            </div>
            <div className="col-span-4 items-center text-center flex flex-col min-[1000px]:px-12">
              <div className="mb-3 rounded p-2 text-green-600 bg-green-100">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-balance m-0 mb-1 text-muted-foreground text-sm min-[1000px]:text-base font-normal leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.features[2]}
              </h3>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 min-[800px]:my-10">
          <div className="h-px w-full border-b border-border"></div>
        </div>

        {/* Section Title */}
        <div className="w-full px-5 sm:px-10">
          <div className="m-auto max-w-[1200px]">
            <h2 
              className="text-balance m-0 mt-24 text-center text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a'
              }}
            >
              {t.sectionsTitle} <br className="hidden min-[800px]:block"/>
              <span className="text-muted-foreground">{t.sectionsSubtitle}</span>
            </h2>
          </div>
        </div>
      </div>

      {/* On-Demand Snapshots Section */}
      <div className="w-full px-5 sm:px-10 mt-20 lg:mt-36 mb-20 lg:mb-36">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[600px]:col-span-11 min-[1000px]:col-span-5 pr-0 min-[800px]:pr-10 min-[1000px]:pr-0 mb-4 min-[800px]:mb-0">
            <h2 
              className="mb-4 text-balance m-0 text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a'
              }}
            >
              {t.onDemandTitle}
            </h2>
            <div>
              <p className="my-4 m-0 text-muted-foreground font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.onDemandDesc1}
              </p>
              <p className="m-0 text-muted-foreground font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.onDemandDesc2}
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden border bg-card border-border col-span-12 min-[800px]:col-start-7 min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg min-[600px]:rounded-xl">
            <div className="relative items-center w-full flex h-full justify-center">
              <Image
                src="https://oxide-computer.imgix.net/oxide-storage-create-snapshot.png?w=516&dpr=2&fm=webp"
                width={516}
                height={374}
                alt="A pane showing a disk, a dropdown is visible with one item highlighted – Create snapshot from disk"
                className="w-full max-w-full h-auto block align-middle"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Powered by OpenZFS Section */}
      <div className="w-full px-5 sm:px-10 mt-20 lg:mt-36 mb-20 lg:mb-36">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[600px]:col-span-11 min-[800px]:col-start-7 min-[1000px]:col-span-5 mb-4 min-[800px]:mb-0 min-[800px]:order-1 pl-0 min-[800px]:pl-10 min-[1000px]:pl-0">
            <h2 
              className="mb-4 text-balance m-0 text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a'
              }}
            >
              {t.openZfsTitle}
            </h2>
            <div>
              <p className="my-4 m-0 text-muted-foreground font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.openZfsDesc}
              </p>
            </div>
          </div>
          <div className="relative col-start-1 overflow-hidden border bg-card border-border col-span-12 min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg min-[600px]:rounded-xl">
            <Image
              src="https://oxide.computer/img/oxide-storage-openzfs.svg"
              width={516}
              height={371}
              alt="OpenZFS storage diagram"
              className="w-full max-w-full h-auto block align-middle"
            />
          </div>
        </div>
      </div>

      {/* Proactive Data Protection Section */}
      <div className="w-full px-5 sm:px-10 mt-20 lg:mt-36 mb-20 lg:mb-36">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[600px]:col-span-11 min-[1000px]:col-span-5 pr-0 min-[800px]:pr-10 min-[1000px]:pr-0 mb-4 min-[800px]:mb-0">
            <h2 
              className="mb-4 text-balance m-0 text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a'
              }}
            >
              {t.protectionTitle}
            </h2>
            <div>
              <p className="my-4 m-0 text-muted-foreground font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.protectionDesc1}
              </p>
              <p className="m-0 text-muted-foreground font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                {t.protectionDesc2}
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden border border-border col-span-12 min-[800px]:col-start-7 min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg min-[600px]:rounded-xl">
            <Image
              src="https://oxide.computer/img/oxide-storage-errors.svg"
              width={426}
              height={512}
              alt="Storage error monitoring visualization"
              className="w-full max-w-full h-auto block align-middle bg-card"
            />
          </div>
        </div>
      </div>

      {/* Hardware and Software Co-Design Section */}
      <div className="w-full px-5 sm:px-10 mt-20 lg:mt-36 mb-20 lg:mb-36">
        <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
          <div className="col-span-12 min-[800px]:col-span-5">
            <h2 
              className="text-balance m-0 mb-4 text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a'
              }}
            >
              {t.coDesignTitle}
            </h2>
          </div>
          <div className="col-span-12 min-[800px]:col-start-7 min-[800px]:col-span-6 min-[1000px]:col-span-5 pl-0 min-[600px]:pl-10">
            <div className="flex flex-row items-start gap-4">
              <div className="mb-3 rounded p-2 text-green-600 bg-green-100">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-balance m-0 mb-1 text-muted-foreground text-sm min-[1000px]:text-base font-normal leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                  {t.coDesignFeatures[0]}
                </h3>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4 mt-6 mb-6">
              <div className="mb-3 rounded p-2 text-green-600 bg-green-100">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-balance m-0 mb-1 text-muted-foreground text-sm min-[1000px]:text-base font-normal leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                  {t.coDesignFeatures[1]}
                </h3>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4 mt-6 mb-6">
              <div className="mb-3 rounded p-2 text-green-600 bg-green-100">
                <Router className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-balance m-0 mb-1 text-muted-foreground text-sm min-[1000px]:text-base font-normal leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                  {t.coDesignFeatures[2]}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full px-5 sm:px-10 mt-20 lg:mt-36 mb-20 lg:mb-36">
        <div className="relative m-auto max-w-[1200px] my-4 min-[900px]:my-12">
          <div className="relative flex items-center justify-between gap-4 border p-4 bg-card border-border shadow-lg min-[600px]:px-10 py-6 min-[600px]:py-8 rounded-lg min-[600px]:rounded-lg max-[399px]:flex-col">
            <div>
              <h2 
                className="text-balance m-0 text-lg min-[500px]:text-[1.5625rem] min-[900px]:text-4xl font-normal leading-[1.625rem] min-[500px]:leading-8 min-[900px]:leading-[2.625rem] tracking-wide min-[500px]:tracking-wide min-[900px]:tracking-normal max-[399px]:text-center"
                style={{
                  fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                  color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a'
                }}
              >
                {t.ctaTitle}<br/>
                <span className="text-muted-foreground">{t.ctaSubtitle}</span>
              </h2>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <Link 
                href="/remote-access" 
                className="inline-flex items-center justify-center h-8 px-3 text-green-600 bg-green-100 rounded text-xs font-mono uppercase tracking-wider shadow hover:bg-green-200 transition-colors"
              >
                {t.tryButton}
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center h-8 px-3 text-muted-foreground border border-current rounded text-xs font-mono uppercase tracking-wider hover:bg-accent transition-colors"
              >
                {t.contactButton}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-20 lg:mt-36">
        <div className="w-full px-5 sm:px-10">
          <div className="m-auto max-w-[1200px]">
            <h2 
              className="text-balance m-0 mb-12 text-[1.5625rem] min-[1000px]:text-4xl font-normal leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal"
              style={{
                fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                color: mounted && resolvedTheme === 'dark' ? '#d7d8d9' : '#08090a'
              }}
            >
              {t.specsTitle}
            </h2>
          </div>
        </div>
        <div className="w-full px-5 sm:px-10">
          <div className="py-8 m-auto max-w-[1200px] border bg-card border-border shadow rounded-lg min-[600px]:rounded-xl">
            {t.specs.map((spec, index) => (
              <div key={index}>
                <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                  <div className="pl-0 basis-1/2 font-normal leading-[1.625rem] text-lg tracking-wide text-muted-foreground" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
                    {spec.label}
                  </div>
                  <div className="basis-1/2 font-normal leading-6 text-base tracking-wide text-muted-foreground max-[599px]:pl-4 min-[600px]:pl-0" style={{ fontFamily: 'SuisseIntl, sans-serif' }}>
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
                {index < t.specs.length - 1 && <div className="my-3 w-full h-px border-b border-border"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};