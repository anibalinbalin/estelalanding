"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ThemeImage } from '@/components/ui/theme-image';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/components/language-provider';

const content = {
  en: {
    title: "Managed Security & Data Protection",
    subtitle: "The complex, simplified. The critical, solved.",
    section1Title: "Complete Business Protection",
    section1Desc: "We work with the best solutions on the market—SentinelOne for endpoints, Wasabi/AWS for cloud backups, Synology for local storage.",
    secOpsTitle: "Unified Security Operations",
    secOps1: "24/7 monitoring.",
    secOps2: "Automated threat response.",
    secOps3: "Single management console.",
    secOps4: "Security reports.",
    secOps5: "Tailored responses.",
    pillar1Title: "Everything in one place",
    pillar1Desc: "One account, one contact.",
    pillar2Title: "Constant attention",
    pillar2Desc: "Real-time alerts and responses before things escalate.",
    pillar3Title: "Zero friction",
    pillar3Desc: "Native integrations. Everything connected from day one.",
    backupTitle: "3-2-1 Backup Strategy",
    backupDesc: "We protect data at multiple levels. We use Synology NAS connected to the LAN for storage and fast data recovery, Wasabi/AWS cloud for older recoveries, and automated off-hours verification to confirm data integrity.",
    storageTitle: "Storage & Recovery",
    storage1: "Instant file recovery.",
    storage2: "Ransomware protection.",
    storage3: "Automated backup scheduling.",
    storage4: "Version control.",
    storage5: "Compliance archiving.",
    stackTitle: "Security stack",
    stackSubtitle: "Every decision, the most optimal.",
    sentinelTitle: "Endpoints: SentinelOne",
    sentinelDesc: "AI-powered EDR. Detects threats, responds automatically, and gives you complete visibility into every device.",
    wasabiTitle: "Cloud Backup (Wasabi)",
    wasabiDesc: "S3-compatible cloud storage with immutable backups. Pay as you go with storage that syncs throughout the day.",
    synologyTitle: "Network Storage (Synology)",
    synologyDesc: "Local NAS with fast local or remote access. Snapshots, change logs, Google Workspace backup.",
    cta: "Security goes unnoticed—until it's missing.",
    contact: "CONTACT",
    altInstance: "Snapshot of the instance create form, with hardware configuration and distro selected",
    altStorageErrors: "Storage errors visualization",
    altCloudBackup: "Cloud backup visualization",
    altCloudStorage: "Cloud computer storage visualization"
  },
  es: {
    title: "Gestión de seguridad y protección de datos",
    subtitle: "Lo complejo, simplificado. Lo crítico, resuelto.",
    section1Title: "Protección integral",
    section1Desc: "Trabajamos con las mejores soluciones del canal —SentinelOne para endpoints, Wasabi / AWS para backups en la nube, Synology para almacenamiento local.",
    secOpsTitle: "Operaciones de Seguridad Unificadas",
    secOps1: "Monitoreo 24/7.",
    secOps2: "Respuesta automatizada ante amenazas.",
    secOps3: "Una única consola de gestión.",
    secOps4: "Informes de seguridad.",
    secOps5: "Respuestas personalizadas.",
    pillar1Title: "Todo en un lugar",
    pillar1Desc: "Una cuenta, un contacto.",
    pillar2Title: "Atención constante",
    pillar2Desc: "Alertas en tiempo real y respuestas antes de que escale.",
    pillar3Title: "Sin fricciones",
    pillar3Desc: "Integraciones nativas. Todo conectado desde el primer día.",
    backupTitle: "Estrategia de respaldo 3-2-1",
    backupDesc: "Protegemos los datos en varios niveles. Utilizamos Synology NAS conectado en la LAN para storage y recuperación rápida de datos, asimismo almacenamos en la nube de Wasabi / AWS para recuperaciones más antiguas y utilizamos verificación automatizada fuera de horas de trabajo para confirmar integridad de datos.",
    storageTitle: "Almacenamiento y Recuperación",
    storage1: "Recuperación instantánea de archivos.",
    storage2: "Protección contra ransomware.",
    storage3: "Programación automatizada de respaldos.",
    storage4: "Control de versiones.",
    storage5: "Archivado para cumplimiento normativo.",
    stackTitle: "Stack de servicios",
    stackSubtitle: "Cada decisión, la más óptima.",
    sentinelTitle: "Endpoints: SentinelOne",
    sentinelDesc: "EDR con IA. Detecta amenazas, responde automáticamente, y le da visibilidad completa de cada dispositivo.",
    wasabiTitle: "Respaldo en la Nube (Wasabi)",
    wasabiDesc: "Almacenamiento en la nube (S3) con respaldos inmutables. Pay as you go con un almacenamiento que se actualiza constantemente durante las horas del dia.",
    synologyTitle: "Almacenamiento en Red (Synology)",
    synologyDesc: "NAS local que permiten acceso local ágil o remoto. Snapshots, historiales y logs de cambios, backup de Google Workspace.",
    cta: "La seguridad no se nota —hasta que falta.",
    contact: "CONTACTO",
    altInstance: "Snapshot del formulario de creación de instancia, con configuración de hardware y distro seleccionados",
    altStorageErrors: "Visualización de errores de almacenamiento",
    altCloudBackup: "Visualización de backup en la nube",
    altCloudStorage: "Visualización de almacenamiento en computadora en la nube"
  }
};

const SecurityPage = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();
  const t = content[language];
  const contactPath = '/contact';

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : 'dark';

  return (
    <>
      <div className="sticky top-0 z-20">
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 border-b bg-[var(--background)]/85 backdrop-blur-sm transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] border-b-[var(--border)]"></div>
        <nav dir="ltr" className="w-[100%]">
            <div className="absolute left-0 right-0 top-[54px] flex shrink items-center justify-center transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.1s]"></div>
        </nav>
      </div>
      <main className="mt-0">
        <div className="flex flex-col gap-20 min-[600px]:gap-28 min-[900px]:gap-48">
          <section>
              <div className="border-b border-b-[var(--stroke-default-p3)]"></div>
          </section>
          <section className="pt-12 sm:pt-0">
            <div className="w-[100%] px-5 min-[600px]:px-10">
              <div className="m-auto max-w-[1200px]">
                <h1 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal min-[600px]:font-normal min-[1000px]:font-normal mb-12 min-[600px]:mb-10 min-[1000px]:mb-14 text-center min-[600px]:text-left font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal min-[800px]:pr-6">
                  {t.title}
                  <br />
                  <span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal" style={{color: 'color(display-p3 0.4941 0.5137 0.5216)', fontStyle: 'normal'}}>
                    {t.subtitle}
                  </span>
                </h1>
              </div>
            </div>
            <div className="relative border-t border-[var(--stroke-default-p3)] border-b min-[900px]:border-b-[0px] mb-16 sm:mb-0">
              <div className="w-[100%] px-5 min-[600px]:px-10">
                <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                  <div className="col-span-12 min-[600px]:col-span-11 min-[1000px]:col-span-5 pr-0 min-[800px]:pr-10 min-[1000px]:pr-0 mb-4">
                    <h2 className="mb-6 min-[600px]:mb-4 text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                      {t.section1Title}
                    </h2>
                    <div>
                      <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                        {t.section1Desc}
                      </p>
                    </div>
                    <div className="mt-8 flex">
                      <div className="flex basis-1/2 flex-col items-start">
                        <div className={`mb-3 rounded-[var(--border-radius)] p-2 ${currentTheme === 'light' ? 'bg-[#e5e5e6]' : 'bg-[#3d3019]'}`}>
                          <svg width="24" height="24" className={`block align-middle ${currentTheme === 'light' ? 'text-[#ecbb5a]' : 'text-[#ebbb5a]'}`}>
                            <use href="/assets/sprite-Dt029LRi.svg#key-24"></use>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-balance m-0 mb-1 text-[var(--content-secondary-p3)] text-[.875rem] min-[1000px]:text-base font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide">
                            {t.secOpsTitle}
                          </h3>
                          <ul className="list-none m-0 p-0 mt-2 space-y-1">
                            <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                              <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#ecbb5a]">
                                <use href="/assets/sprite-Dt029LRi.svg#success-12"></use>
                              </svg>
                              <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-[var(--content-secondary-p3)]">
                                {t.secOps1}
                              </div>
                            </li>
                            <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                              <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#ecbb5a]">
                                <use href="/assets/sprite-Dt029LRi.svg#success-12"></use>
                              </svg>
                              <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-[var(--content-secondary-p3)]">
                                {t.secOps2}
                              </div>
                            </li>
                            <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                              <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#ecbb5a]">
                                <use href="/assets/sprite-Dt029LRi.svg#success-12"></use>
                              </svg>
                              <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-[var(--content-secondary-p3)]">
                                {t.secOps3}
                              </div>
                            </li>
                            <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                              <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#ecbb5a]">
                                <use href="/assets/sprite-Dt029LRi.svg#success-12"></use>
                              </svg>
                              <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-[var(--content-secondary-p3)]">
                                {t.secOps4}
                              </div>
                            </li>
                            <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                              <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#ecbb5a]">
                                <use href="/assets/sprite-Dt029LRi.svg#success-12"></use>
                              </svg>
                              <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-[var(--content-secondary-p3)]">
                                {t.secOps5}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden border bg-[var(--surface-tertiary-p3)] border-[var(--stroke-secondary-p3)] col-span-12 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg">
                    <div className="relative items-center w-[100%] flex h-[100%] justify-center">
                      <ThemeImage
                        darkSrc="/img/estela-compute-instance-create.png"
                        lightSrc="/img/estela-compute-instance-create_light.png"
                        width={427}
                        height={444}
                        className="w-[100%] max-w-[100%] h-auto block align-middle"
                        alt={t.altInstance}
                      />
                      <noscript>
                        <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                          <img className="w-full h-auto" src="/img/estela-compute-instance-create.png" width="427" height="444" alt={t.altInstance} />
                        </div>
                      </noscript>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
              <div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
                    <div className="col-span-12 min-[600px]:col-span-4 !items-center text-center flex flex-col min-[1000px]:px-12">
                      <div className={`mb-3 rounded-[var(--border-radius)] p-2 ${currentTheme === 'light' ? 'bg-[#e5e5e6]' : 'bg-[#3d3019]'}`}>
                        <svg width="24" height="24" className={`block align-middle ${currentTheme === 'light' ? 'text-[#ecbb5a]' : 'text-[#ebbb5a]'}`}>
                          <use href="/assets/sprite-Dt029LRi.svg#router-24"></use>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-balance m-0 mb-1 text-[var(--content-secondary-p3)] text-[.875rem] min-[1000px]:text-base font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide">
                          {t.pillar1Title}
                        </h3>
                        <p className="text-[var(--content-secondary-p3)] text-sm mt-2">
                          {t.pillar1Desc}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-12 min-[600px]:col-span-4 !items-center text-center flex flex-col min-[1000px]:px-12">
                      <div className={`mb-3 rounded-[var(--border-radius)] p-2 ${currentTheme === 'light' ? 'bg-[#e5e5e6]' : 'bg-[#3d3019]'}`}>
                        <svg width="24" height="24" className={`block align-middle ${currentTheme === 'light' ? 'text-[#ecbb5a]' : 'text-[#ebbb5a]'}`}>
                          <use href="/assets/sprite-Dt029LRi.svg#networking-24"></use>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-balance m-0 mb-1 text-[var(--content-secondary-p3)] text-[.875rem] min-[1000px]:text-base font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide">
                          {t.pillar2Title}
                        </h3>
                        <p className="text-[var(--content-secondary-p3)] text-sm mt-2">
                          {t.pillar2Desc}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-12 min-[600px]:col-span-4 !items-center text-center flex flex-col min-[1000px]:px-12">
                      <div className={`mb-3 rounded-[var(--border-radius)] p-2 ${currentTheme === 'light' ? 'bg-[#e5e5e6]' : 'bg-[#3d3019]'}`}>
                        <svg width="24" height="24" className={`block align-middle ${currentTheme === 'light' ? 'text-[#ecbb5a]' : 'text-[#ebbb5a]'}`}>
                          <use href="/assets/sprite-Dt029LRi.svg#terminal-24"></use>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-balance m-0 mb-1 text-[var(--content-secondary-p3)] text-[.875rem] min-[1000px]:text-base font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[1000px]:leading-6 tracking-wider min-[1000px]:tracking-wide">
                          {t.pillar3Title}
                        </h3>
                        <p className="text-[var(--content-secondary-p3)] text-sm mt-2">
                          {t.pillar3Desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
              <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
                <div className="col-span-6 min-[800px]:col-span-3 mb-4">
                  <div>
                    <div className="relative overflow-hidden border border-[var(--stroke-default-p3)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                      <img src="/img/estela-compute-terraform-config_colosus.svg" width="245" height="245" className="w-[100%] max-w-[100%] h-auto block align-middle" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 min-[800px]:col-span-3 mb-4">
                  <div>
                    <div className="relative overflow-hidden border bg-[var(--surface-tertiary-p3)] border-[var(--stroke-default-p3)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                      <img src="/img/estela-compute-terraform-init.svg" width="245" height="245" className="w-[100%] max-w-[100%] h-auto block align-middle" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-span-12 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5 min-[800px]:pl-10 min-[1000px]:pl-0">
                  <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                    {t.backupTitle}
                  </h2>
                  <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                    {t.backupDesc}
                  </p>
                  <h3 className="text-balance m-0 mb-3 text-[var(--content-secondary-p3)] text-base min-[1000px]:text-lg font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-6 min-[1000px]:leading-[1.625rem] tracking-wide min-[1000px]:tracking-wide">
                    {t.storageTitle}
                  </h3>
                  <ul className="list-none m-0 p-0 mt-[calc(1.5rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(1.5rem_*_var(--tw-space-y-reverse))]">
                    <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                      <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#ecbb5a]">
                        <use href="/assets/sprite-Dt029LRi.svg#success-12"></use>
                      </svg>
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-[var(--content-secondary-p3)]">
                        {t.storage1}
                      </div>
                    </li>
                    <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                      <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#ecbb5a]">
                        <use href="/assets/sprite-Dt029LRi.svg#success-12"></use>
                      </svg>
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-[var(--content-secondary-p3)]">
                        {t.storage2}
                      </div>
                    </li>
                    <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                      <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#ecbb5a]">
                        <use href="/assets/sprite-Dt029LRi.svg#success-12"></use>
                      </svg>
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-[var(--content-secondary-p3)]">
                        {t.storage3}
                      </div>
                    </li>
                    <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                      <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#ecbb5a]">
                        <use href="/assets/sprite-Dt029LRi.svg#success-12"></use>
                      </svg>
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-[var(--content-secondary-p3)]">
                        {t.storage4}
                      </div>
                    </li>
                    <li className="mb-1 min-[1000px]:mb-2 flex items-baseline justify-start">
                      <svg width="12" height="12" className="block align-middle mr-2 shrink-0 text-[#ecbb5a]">
                        <use href="/assets/sprite-Dt029LRi.svg#success-12"></use>
                      </svg>
                      <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-[1.125rem] min-[800px]:leading-6 text-[.875rem] min-[800px]:text-base tracking-wider min-[800px]:tracking-wide text-[var(--content-secondary-p3)]">
                        {t.storage5}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
              <div className="m-auto max-w-[1200px]">
                <h2 className="text-balance m-0 text-center text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                  {t.stackTitle} <br className="hidden min-[800px]:block" />
                  <span className="text-[var(--content-tertiary-p3)]">{t.stackSubtitle}</span>
                </h2>
              </div>
            </div>
            <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
              <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
                <div className="col-span-12 min-[600px]:col-span-11 min-[1000px]:col-span-5 pr-0 min-[800px]:pr-10 min-[1000px]:pr-0 mb-4">
                  <h2 className="mb-4 text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                    {t.sentinelTitle}
                  </h2>
                  <div>
                    <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                      {t.sentinelDesc}
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden border bg-[var(--surface-tertiary-p3)] border-[var(--stroke-secondary-p3)] col-span-12 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg">
                  <div className="relative items-center w-[100%] flex h-[100%] justify-center">
                    <ThemeImage
                      darkSrc="/img/estela-storage-errors.svg"
                      lightSrc="/img/estela-storage-errors_light.svg"
                      width={516}
                      height={343}
                      className="w-[100%] max-w-[100%] h-auto block align-middle"
                      alt={t.altStorageErrors}
                    />
                    <noscript>
                      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                        <img className="w-full h-auto" src="/img/estela-storage-errors.svg" width="516" height="343" alt={t.altStorageErrors} />
                      </div>
                    </noscript>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
              <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
                <div className="col-span-12 min-[600px]:col-span-11 min-[1000px]:col-start-[8] min-[1000px]:col-span-5 mb-4 pl-0 min-[800px]:order-[1]">
                  <h2 className="mb-4 text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                    {t.wasabiTitle}
                  </h2>
                  <div>
                    <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                      {t.wasabiDesc}
                    </p>
                  </div>
                </div>
                <div className="relative col-start-[1] overflow-hidden border bg-[var(--surface-tertiary-p3)] border-[var(--stroke-secondary-p3)] col-span-12 min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg">
                  <ThemeImage
                    darkSrc="/img/estela-cloud_backup.png"
                    lightSrc="/img/estela-cloud_backup_light.png"
                    width={430}
                    height={309}
                    className="w-[100%] max-w-[100%] h-auto block align-middle"
                    alt={t.altCloudBackup}
                  />
                </div>
              </div>
            </div>
            <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
              <div className="m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] items-center gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
                <div className="col-span-12 min-[800px]:col-span-5 mb-4">
                  <h2 className="mb-4 text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                    {t.synologyTitle}
                  </h2>
                  <div>
                    <p className="my-4 m-0 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-6 min-[800px]:leading-[1.625rem] text-base min-[800px]:text-lg tracking-wide min-[800px]:tracking-wide">
                      {t.synologyDesc}
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden border bg-[var(--surface-tertiary-p3)] border-[var(--stroke-secondary-p3)] col-span-12 min-[800px]:col-start-[7] min-[1000px]:col-start-[8] min-[800px]:col-span-6 min-[1000px]:col-span-5 rounded-lg">
                  <div className="relative items-center w-[100%] flex h-[100%] justify-center">
                    <ThemeImage
                      darkSrc="/img/cloud-computer-storage.svg"
                      lightSrc="/img/cloud-computer-storage_light.svg"
                      width={247}
                      height={140}
                      className="w-[100%] max-w-[100%] h-auto block align-middle"
                      alt={t.altCloudStorage}
                    />
                    <noscript>
                      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                        <img className="w-full h-auto" src="/img/cloud-computer-storage.svg" width="247" height="140" alt={t.altCloudStorage} />
                      </div>
                    </noscript>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
              <div className="w-[100%] px-5 min-[600px]:px-10">
                <div className="relative m-auto max-w-[1200px] my-4 min-[900px]:my-12">
                  <div className="absolute top-[-8rem] bottom-[-8rem] left-0 right-0 z-0 flex justify-between">
                    {[...Array(30)].map((_, i) => (
                      <div key={i} className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                    ))}
                    <div className="absolute z-0 top-0 right-0 bottom-0 left-0">
                      <div className="absolute w-[100%] bottom-0 h-24 bg-[linear-gradient(0deg,var(--background),transparent)]"></div>
                      <div className="absolute w-[100%] top-0 h-24 [transform:translate(var(--tw-translate-x)_var(--tw-translate-y)_rotate(var(--tw-rotate)_skew(var(--tw-skew-x)_skewY(var(--tw-skew-y)_scaleX(var(--tw-scale-x)_scaleY(var(--tw-scale-y)] bg-[linear-gradient(0deg,var(--background),transparent)]"></div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between gap-4 border p-4 bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-2)] min-[600px]:px-10 py-6 min-[600px]:py-8 rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-lg)]">
                    <div>
                      <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-lg min-[500px]:text-[1.5625rem] min-[900px]:text-4xl font-normal min-[500px]:font-normal min-[900px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[500px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[900px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[500px]:leading-8 min-[900px]:leading-[2.625rem] tracking-wide min-[500px]:tracking-wide min-[900px]:tracking-normal">
                        {t.cta}
                      </h2>
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                      <a href={contactPath} className="px-3 items-center text-[var(--content-secondary-p3)] [text-decoration:inherit] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-100 after:text-[var(--stroke-secondary-p3)] hover:bg-[var(--surface-hover-p3)]">
                        {t.contact}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SecurityPage;
