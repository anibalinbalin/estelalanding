"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Footer } from '@/components/footer';
import { useLanguage } from '@/components/language-provider';

export const infrastructureContent = {
  en: {
    // Hero
    title: "Private AI Infrastructure",
    subtitle1: "AI runs on hardware. Ours.",
    subtitle2: "Self-hosted models, GPU compute, and hybrid architectures for companies whose data can't leave the building.",

    // Section 1: GPU Compute & Model Hosting
    vmTitle: "GPU compute and private model hosting",
    vmDesc: "Your models, served from machines with a physical address. VMware vSphere or Proxmox underneath, NVIDIA GPUs doing the thinking, hybrid cloud only where the math favors it.",
    vmFeat1: "NVIDIA GPU compute for inference and fine-tuning",
    vmFeat2: "VMware vSphere and Proxmox virtualization",
    vmFeat3: "Bare metal for latency-critical workloads",
    vmFeat4: "Load balancing and redundancy",
    vmFeat5: "Performance monitoring",
    vmNas: "gpu-node",
    vmServer: "inference",
    vmOnline: "ONLINE",

    // Section 2: Storage for Datasets & Weights
    netTitle: "Storage for datasets and model weights",
    netDesc: "Datasets are heavy. Model weights are heavier. Fast storage that scales on demand, snapshots in seconds, and restores that actually restore.",
    netFeat1: "Scale up volume size on demand",
    netFeat2: "Instantaneous snapshots",
    netFeat3: "Mixed workloads: datasets, weights, checkpoints",
    netMenu1: "Activate monitoring",
    netMenu2: "Export configuration",
    netMenu3: "Create backup plan",
    netMenu4: "View system health",

    // Section 3: Data Sovereignty
    postTitle: "For data that can't leave the building",
    postDesc: "Some data has no business on someone else's cloud. We design private and hybrid architectures where your models, your weights, and your data stay under your roof — with the bandwidth to keep them fast.",
    postFeat1: "High-bandwidth interconnect for AI workloads",
    postFeat2: "On-premise and hybrid deployments",
    postFeat3: "Multi-site VPN to your infrastructure",
    postFeat4: "Redundancy and monitoring, included not optional",
    postArray: "DATA LOCATION",
    postHa: "your building",

    // CTA
    cta: "When it works well, nobody asks how.",
    contact: "CONTACT",

    // Alt texts
    altServer: "2/3 view of the Estela server sled",
    altRack: "2/3 view of the Estela compute rack"
  },
  es: {
    // Hero
    title: "Infraestructura privada de IA",
    subtitle1: "La IA corre sobre hardware. El nuestro.",
    subtitle2: "Modelos autoalojados, cómputo GPU y arquitecturas híbridas para empresas cuyos datos no pueden salir del edificio.",

    // Section 1: GPU Compute & Model Hosting
    vmTitle: "Cómputo GPU y hosting privado de modelos",
    vmDesc: "Sus modelos, servidos desde máquinas con dirección física. VMware vSphere o Proxmox por debajo, GPUs NVIDIA haciendo el trabajo, nube híbrida solo donde los números lo justifican.",
    vmFeat1: "Cómputo GPU NVIDIA para inferencia y fine-tuning",
    vmFeat2: "Virtualización con VMware vSphere y Proxmox",
    vmFeat3: "Bare metal para cargas sensibles a la latencia",
    vmFeat4: "Load balancing y redundancia",
    vmFeat5: "Monitoreo de performance",
    vmNas: "nodo-gpu",
    vmServer: "inferencia",
    vmOnline: "EN LÍNEA",

    // Section 2: Storage for Datasets & Weights
    netTitle: "Storage para datasets y pesos de modelos",
    netDesc: "Los datasets pesan. Los pesos de los modelos, más. Storage rápido que escala bajo demanda, snapshots en segundos y restauraciones que efectivamente restauran.",
    netFeat1: "Volúmenes que escalan bajo demanda",
    netFeat2: "Snapshots instantáneos",
    netFeat3: "Cargas mixtas: datasets, pesos, checkpoints",
    netMenu1: "Activar monitoreo",
    netMenu2: "Exportar configuración",
    netMenu3: "Crear plan de respaldo",
    netMenu4: "Ver estado del sistema",

    // Section 3: Data Sovereignty
    postTitle: "Para datos que no pueden salir del edificio",
    postDesc: "Hay datos que no tienen nada que hacer en la nube de otro. Diseñamos arquitecturas privadas e híbridas donde sus modelos, sus pesos y sus datos quedan bajo su techo — con el ancho de banda para que sigan siendo rápidos.",
    postFeat1: "Interconexión de alto ancho de banda para cargas de IA",
    postFeat2: "Despliegues on-premise e híbridos",
    postFeat3: "VPN multi-sitio hacia su infraestructura",
    postFeat4: "Redundancia y monitoreo, incluidos, no opcionales",
    postArray: "UBICACIÓN DE DATOS",
    postHa: "su edificio",

    // CTA
    cta: "Cuando funciona bien, nadie pregunta cómo.",
    contact: "CONTACTO",

    // Alt texts
    altServer: "Vista 2/3 del servidor sled de Estela",
    altRack: "Vista 2/3 del rack de cómputo de Estela"
  }
};

const InfrastructurePage = () => {
  const { theme, resolvedTheme } = useTheme();
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  const t = infrastructureContent[language];
  const contactPath = '/contact';

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme for more reliable theme detection
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
                    <h2 className="text-balance m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal min-[600px]:font-normal min-[1000px]:font-normal mb-12 min-[600px]:mb-10 min-[1000px]:mb-14 text-center min-[600px]:text-left font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal min-[800px]:pr-6">{t.title}<br /><span className="text-[var(--content-raise-p3)]">{t.subtitle1}</span><br /><span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal" style={{color: 'color(display-p3 0.4941 0.5137 0.5216)', fontStyle: 'normal'}}>{t.subtitle2}</span></h2>
                </div>
            </div>
            <div className="relative border-t border-[var(--stroke-default-p3)] border-b min-[900px]:border-b-[0px]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                    <div className="relative m-auto grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8">
                        <div className="hidden min-[900px]:block">
                            <div className="flex absolute top-0 right-0 bottom-0 left-[50%] justify-between">
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                                <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
                            </div>
                            <div className="hidden min-[900px]:block h-20 min-[900px]:h-32 w-[100%] pointer-events-none absolute left-0 right-0 bottom-0 z-0 bg-[linear-gradient(0deg,var(--background),transparent)]"></div>
                        </div>
                        <div className="relative gap-6 border-[var(--stroke-default-p3)] flex flex-col col-span-12 border-l border-r min-[900px]:border-r-[0px] sm:pb-0 min-[900px]:py-52">
                            <div>
                                <div className="flex min-[900px]:grid min-[900px]:grid-cols-[repeat(12,minmax(0,1fr))] flex-col items-center">
                                    <div className="relative z-10 col-span-5 block min-[900px]:ml-[-1.5rem]">
                                        <div className="flex items-center">
                                            <div className="bg-[var(--surface-default-p3)] p-3 hidden min-[900px]:block">
                                                <div className={`rounded-[var(--border-radius)] p-1 text-[var(--content-accent-p3)] ${currentTheme === 'light' ? 'bg-[#e5e5e5] hover:bg-[#d5d5d5]' : 'bg-[var(--surface-accent-secondary-p3)] hover:bg-[var(--surface-accent-secondary-hover-p3)]'}`}><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#cpu-16"></use>
                                                    </svg></div>
                                            </div>
                                            <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-lg min-[600px]:text-[1.5625rem] font-normal min-[600px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[600px]:leading-8 tracking-wide min-[600px]:tracking-wide min-[900px]:ml-3">{t.vmTitle}<svg width="12" height="12" className="inline-flex align-middle ml-2 transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] text-[#f5b944]">
                                                    <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                                                </svg></h3>
                                        </div>
                                        <div className="mt-3 min-[900px]:ml-[3.75rem]">
                                            <div className="max-w-[36rem] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[600px]:font-normal leading-6 min-[600px]:leading-[1.625rem] text-base min-[600px]:text-lg tracking-wide min-[600px]:tracking-wide">{t.vmDesc}</div>
                                            <div className="mt-8">
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#router-16"></use>
                                                    </svg> {t.vmFeat1}</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#networking-16"></use>
                                                    </svg> {t.vmFeat2}</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#terminal-16"></use>
                                                    </svg> {t.vmFeat3}</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#action-16"></use>
                                                    </svg> {t.vmFeat4}</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="24" height="24" className="block align-middle h-4 w-4 text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#progress-24"></use>
                                                    </svg> {t.vmFeat5}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto w-[100%] z-0 pb-8 col-start-[2] min-[900px]:col-start-[7] col-span-10 min-[900px]:col-span-6">
                                        <div className="grid flex-col relative grid-cols-[repeat(12,minmax(0,1fr))] gap-4">
                                            <div className="flex z-0 items-center col-span-12 bg-[var(--surface-default-p3)] relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)] justify-center overflow-hidden rounded-[var(--border-radius-lg)] border border-[var(--border)] shadow-[var(--elevation-2)]">
                                                <div className="flex items-center justify-center absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0"><img src="/img/plus-bg.svg" className={`z-0 max-w-[100%] h-auto block align-middle absolute left-2 right-2 w-[calc(100%_-_1rem)] ${currentTheme === 'light' ? 'opacity-10 grayscale brightness-100' : 'opacity-20 brightness-150 contrast-50'}`} alt=""/>
                                                    <div className="flex items-center justify-center relative w-[100%] h-[100%]"><img src="/img/estela-gimlet-front.png" width="1600" height="797" className="relative max-w-[100%] h-auto block align-middle w-3/4" alt={t.altServer}/><noscript>
                                                            <div className="absolute inset-0 flex h-full w-full items-center justify-center"><img className="img-elevation-2 relative w-[75%] h-auto" src="/img/estela-gimlet-front.png" width="1600" height="797" alt={t.altServer} /></div>
                                                        </noscript></div>
                                                </div>
                                            </div>
                                            <div className={`col-span-12 z-10 rounded-[var(--border-radius)] border font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider shadow-[var(--elevation-2)] ${currentTheme === 'light' ? 'bg-[#ffffff] border-[#e4e5e4]' : 'bg-[#060f11] border-[#1c2225]'}`}>
                                                <div className={`grid grid-cols-[repeat(12,minmax(0,1fr))] text-[var(--content-accent-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[900px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[900px]:font-normal leading-4 min-[900px]:leading-[1.125rem] text-[.75rem] min-[900px]:text-[.875rem] tracking-wider min-[900px]:tracking-wider ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}>{t.vmNas}</div>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}><span className="text-[#f5b944]">48GB</span> / <span className="text-[#f5b944]">VRAM</span></div>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}>NVIDIA</div>
                                                    <div className="px-3 py-3 flex flex-col sm:flex-row col-span-3 gap-1 sm:gap-2 text-[#f5b944]"><span className="px-[3px] items-center inline-flex h-4 whitespace-nowrap rounded-[var(--border-radius-sm)] uppercase font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] text-[#f5b943] bg-[#574829]"><span>{t.vmOnline}</span></span> <span>90d 2h</span></div>
                                                </div>
                                                <div className={`grid grid-cols-[repeat(12,minmax(0,1fr))] text-[var(--content-accent-p3)] border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[900px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[900px]:font-normal leading-4 min-[900px]:leading-[1.125rem] text-[.75rem] min-[900px]:text-[.875rem] tracking-wider min-[900px]:tracking-wider ${currentTheme === 'light' ? 'border-[#e4e5e4] border-t-[#e4e5e4]' : 'border-[#1c2225] border-t-[#1c2225]'}`}>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}>{t.vmServer}</div>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}><span className="text-[#f5b944]">70B</span> / <span className="text-[#f5b944]">Q4</span></div>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}>vLLM</div>
                                                    <div className="px-3 py-3 flex flex-col sm:flex-row col-span-3 gap-1 sm:gap-2 text-[#f5b944]"><span className="px-[3px] items-center inline-flex h-4 whitespace-nowrap rounded-[var(--border-radius-sm)] uppercase font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] text-[#f5b943] bg-[#574829]"><span>{t.vmOnline}</span></span> <span>6m 14d</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-16 sm:mb-0 min-[900px]:mt-[calc(10rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[900px]:mb-[calc(10rem_*_var(--tw-space-y-reverse))]">
                                <div className="flex min-[900px]:grid min-[900px]:grid-cols-[repeat(12,minmax(0,1fr))] flex-col items-center">
                                    <div className="relative z-10 col-span-5 block min-[900px]:ml-[-1.5rem]">
                                        <div className="flex items-center">
                                            <div className="bg-[var(--surface-default-p3)] p-3 hidden min-[900px]:block">
                                                <div className={`rounded-[var(--border-radius)] p-1 text-[var(--content-accent-p3)] ${currentTheme === 'light' ? 'bg-[#e5e5e5] hover:bg-[#d5d5d5]' : 'bg-[var(--surface-accent-secondary-p3)] hover:bg-[var(--surface-accent-secondary-hover-p3)]'}`}><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#storage-16"></use>
                                                    </svg></div>
                                            </div>
                                            <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-lg min-[600px]:text-[1.5625rem] font-normal min-[600px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[600px]:leading-8 tracking-wide min-[600px]:tracking-wide min-[900px]:ml-3">{t.netTitle}<svg width="12" height="12" className="inline-flex align-middle ml-2 transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] text-[#f5b944]">
                                                    <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                                                </svg></h3>
                                        </div>
                                        <div className="mt-3 min-[900px]:ml-[3.75rem]">
                                            <div className="max-w-[36rem] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[600px]:font-normal leading-6 min-[600px]:leading-[1.625rem] text-base min-[600px]:text-lg tracking-wide min-[600px]:tracking-wide">{t.netDesc}</div>
                                            <div className="mt-8">
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#resize-16"></use>
                                                    </svg> {t.netFeat1}</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#snapshots-16"></use>
                                                    </svg> {t.netFeat2}</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="24" height="24" className="block align-middle h-4 w-4 text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#progress-24"></use>
                                                    </svg> {t.netFeat3}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto w-[100%] z-0 pb-8 col-start-[2] min-[900px]:col-start-[7] col-span-10 min-[900px]:col-span-6">
                                        <div className="grid grid-cols-[repeat(12,minmax(0,1fr))]">
                                            <div className="flex relative bg-[var(--surface-default-p3)] justify-end rounded-[var(--border-radius-lg)] border border-[var(--border)] shadow-[var(--elevation-2)] col-span-12 min-[600px]:col-span-9"><img src={currentTheme === 'light' ? '/img/estela-storage-create-snapshot1_light.png' : '/img/estela-storage-create-snapshot.svg'} width="395" height="320" className="max-w-[100%] h-auto block align-middle w-[88.89%]" alt=""/></div>
                                            <div className="z-10 col-start-[8] col-span-5 mt-[-40%] rounded-[var(--border-radius)] border font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] bg-[var(--surface-raise-p3)] border-[var(--border)] shadow-[var(--elevation-2)] hidden min-[600px]:block">
                                                <div className="px-3 py-2.5 border-b border-[var(--border)]">{t.netMenu1}</div>
                                                <div className="px-3 py-2.5 border-b border-[var(--border)]">{t.netMenu2}</div>
                                                <div className="px-3 py-2.5 border-b border-[var(--border)]">{t.netMenu3}</div>
                                                <div className="px-3 py-2.5 border-b border-[var(--border)] border-none">{t.netMenu4}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-16 sm:mb-0 min-[900px]:mt-[calc(10rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[900px]:mb-[calc(10rem_*_var(--tw-space-y-reverse))]">
                                <div className="flex min-[900px]:grid min-[900px]:grid-cols-[repeat(12,minmax(0,1fr))] flex-col items-center">
                                    <div className="relative z-10 col-span-5 block min-[900px]:ml-[-1.5rem]">
                                        <div className="flex items-center">
                                            <div className="bg-[var(--surface-default-p3)] p-3 hidden min-[900px]:block">
                                                <div className={`rounded-[var(--border-radius)] p-1 text-[var(--content-accent-p3)] ${currentTheme === 'light' ? 'bg-[#e5e5e5] hover:bg-[#d5d5d5]' : 'bg-[var(--surface-accent-secondary-p3)] hover:bg-[var(--surface-accent-secondary-hover-p3)]'}`}><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#networking-16"></use>
                                                    </svg></div>
                                            </div>
                                            <h3 className="text-balance m-0 text-[var(--content-raise-p3)] text-lg min-[600px]:text-[1.5625rem] font-normal min-[600px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[600px]:leading-8 tracking-wide min-[600px]:tracking-wide min-[900px]:ml-3">{t.postTitle}<svg width="12" height="12" className="inline-flex align-middle ml-2 transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] text-[#f5b944]">
                                                    <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                                                </svg></h3>
                                        </div>
                                        <div className="mt-3 min-[900px]:ml-[3.75rem]">
                                            <div className="max-w-[36rem] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[600px]:font-normal leading-6 min-[600px]:leading-[1.625rem] text-base min-[600px]:text-lg tracking-wide min-[600px]:tracking-wide">{t.postDesc}</div>
                                            <div className="mt-8">
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#router-16"></use>
                                                    </svg> {t.postFeat1}</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#firewall-16"></use>
                                                    </svg> {t.postFeat2}</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#gateway-16"></use>
                                                    </svg> {t.postFeat3}</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#security-16"></use>
                                                    </svg> {t.postFeat4}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto w-[100%] z-0 pb-8 col-start-[2] min-[900px]:col-start-[7] col-span-10 min-[900px]:col-span-6">
                                        <div className="relative grid grid-cols-[repeat(12,minmax(0,1fr))] z-10">
                                            <div className="z-0 col-span-11 flex items-center bg-[var(--surface-default-p3)] relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)] justify-center overflow-hidden rounded-[var(--border-radius-lg)] border border-[var(--border)] shadow-[var(--elevation-2)]">
                                                <div className="flex items-center justify-center absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0"><img src="/img/plus-bg.svg" className={`z-0 max-w-[100%] h-auto block align-middle absolute left-2 right-2 w-[calc(100%_-_1rem)] ${currentTheme === 'light' ? 'opacity-10 grayscale brightness-100' : 'opacity-20 brightness-150 contrast-50'}`} alt="" />
                                                    <div className="flex items-center justify-center relative w-[100%] h-[100%]"><img src={currentTheme === 'light' ? '/img/estela-rack_light.png' : '/img/estela-rack.png'} width="1600" height="797" className="relative max-w-[100%] h-auto block align-middle w-[51%] filter-[shadow(0px 50px 80px rgba(0,0,0,.4)] 25.313px 34.875px rgba(0,0,0,.27)] 10px 13px rgba(0,0,0,.2)] 2.188px 4.625px rgba(0,0,0,.13)]" alt={t.altRack} /><noscript>
                                                            <div className="absolute inset-0 flex h-full w-full items-center justify-center"><img className="img-elevation-2 relative w-[51%] h-auto" src={currentTheme === 'light' ? '/img/estela-rack_light.png' : '/img/estela-rack.png'} width="1600" height="797" alt={t.altRack} /></div>
                                                        </noscript></div>
                                                </div>
                                            </div>
                                            <div className={`z-10 w-[100%] flex items-center h-14 gap-2 rounded-[var(--border-radius)] border p-1 text-[var(--content-accent-p3)] shadow-[var(--elevation-1)] col-span-6 min-[600px]:col-span-6 mt-[-12px] min-[600px]:mt-[-32px] ${currentTheme === 'light' ? 'bg-[#ffffff] border-[#e4e5e4]' : 'bg-[#060f11] border-[#1c2225]'}`}>
                                                <div className={`px-2 flex items-center h-[100%] justify-center rounded-sm ${currentTheme === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#1c2225]'}`}><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#firewall-16"></use>
                                                    </svg></div>
                                                <div className="flex flex-col">
                                                    <div className="font-[GT_America_Mono,monospace] font-normal leading-4 text-[.6875rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] text-[#f5b944]">{t.postArray}</div>
                                                    <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[#f5b944]">{t.postHa}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointer-events-none absolute left-[-1px] bottom-0 z-0 w-[1px] bg-[linear-gradient(0deg,var(--background),transparent)] hidden min-[900px]:block h-20 min-[900px]:h-32 min-[900px]:mt-[calc(10rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[900px]:mb-[calc(10rem_*_var(--tw-space-y-reverse))]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

      {/* CTA Section */}
      <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[calc(5rem_*_var(--tw-space-y-reverse))] min-[1000px]:mb-[calc(9rem_*_var(--tw-space-y-reverse))]">
        <div className="w-[100%] px-5 min-[600px]:px-10">
          <div className="relative m-auto max-w-[1200px] my-4 min-[900px]:my-12">
            <div className="absolute top-[-8rem] bottom-[-8rem] left-0 right-0 z-0 flex justify-between">
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
              <div className="h-[100%] w-[1px] bg-[var(--surface-secondary-p3)]"></div>
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

      <Footer />
    </>
  );
};

export default InfrastructurePage;
