"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Footer } from '@/components/footer';

const InfrastructurePage = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme for more reliable theme detection
  const currentTheme = mounted ? (resolvedTheme || theme) : 'dark';
  return (
    <>
      <div className="sticky top-0 z-20">
    <div className="pointerEvents-[none] absolute top-0 right-0 bottom-0 left-0 border-b bg-[var(--background)]/85 backdrop-[var(--tw-backdrop-sepia)] backdrop-[var(--tw-backdrop-saturate)] backdrop-[var(--tw-backdrop-opacity)] backdrop-[var(--tw-backdrop-invert)] backdrop-[var(--tw-backdrop-hue-rotate)] backdrop-[var(--tw-backdrop-grayscale)] backdrop-[var(--tw-backdrop-contrast)] backdrop-[var(--tw-backdrop-brightness)] backdrop-[var(--tw-backdrop-blur)] transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] border-b-[var(--border)]"></div>
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
                    <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal min-[600px]:font-normal min-[1000px]:font-normal mb-12 min-[600px]:mb-10 min-[1000px]:mb-14 text-center min-[600px]:text-left font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal min-[800px]:pr-6">Infraestructura y Redes<br /><span className="text-[var(--content-raise-p3)]">La base de todo lo digital.</span><br /><span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal" style={{color: 'color(display-p3 0.4941 0.5137 0.5216)', fontStyle: 'normal'}}>Soluciones de red integrales con monitoreo proactivo y soporte continuo.</span></h2>
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
                            <div className="hidden min-[900px]:block h-20 min-[900px]:h-32 w-[100%] pointerEvents-[none] absolute left-0 right-0 bottom-0 z-0 bg-[linear-gradient(0deg,var(--background),transparent)]"></div>
                        </div>
                        <div className="relative gap-6 border-[var(--stroke-default-p3)] flex flex-col col-span-12 border-l border-r min-[900px]:border-r-[0px] sm:pb-0 min-[900px]:py-52">
                            <div>
                                <div className="flex min-[900px]:grid min-[900px]:grid-cols-[repeat(12,minmax(0,1fr))] flex-col items-center">
                                    <div className="relative z-10 col-span-5 block min-[900px]:ml-[-1.5rem]"><a href="/es/product/compute" className="flex items-center text-inherit [text-decoration:inherit] transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.2s]">
                                            <div className="bg-[var(--surface-default-p3)] p-3 hidden min-[900px]:block">
                                                <div className={`rounded-[var(--border-radius)] p-1 text-[var(--content-accent-p3)] ${currentTheme === 'light' ? 'bg-[#e5e5e5] hover:bg-[#d5d5d5]' : 'bg-[var(--surface-accent-secondary-p3)] hover:bg-[var(--surface-accent-secondary-hover-p3)]'}`}><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#cpu-16"></use>
                                                    </svg></div>
                                            </div>
                                            <h3 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-lg min-[600px]:text-[1.5625rem] font-normal min-[600px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[600px]:leading-8 tracking-wide min-[600px]:tracking-wide min-[900px]:ml-3">Virtual Machines<svg width="12" height="12" className="inline-flex align-middle ml-2 transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] text-[#f5b944]">
                                                    <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                                                </svg></h3>
                                        </a>
                                        <div className="mt-3 min-[900px]:ml-[3.75rem]">
                                            <div className="max-w-[36rem] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[600px]:font-normal leading-6 min-[600px]:leading-[1.625rem] text-base min-[600px]:text-lg tracking-wide min-[600px]:tracking-wide">Trabajamos con vm's que se pueden expandir en función de las necesidades.</div>
                                            <div className="mt-8">
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#router-16"></use>
                                                    </svg> Entornos VMware vSphere</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#networking-16"></use>
                                                    </svg> Despliegue en servidores bare metal</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#terminal-16"></use>
                                                    </svg> Setups en cloud y on premise.</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#action-16"></use>
                                                    </svg> Balanceo de carga y redundancia</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="24" height="24" className="block align-middle h-4 w-4 text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#progress-24"></use>
                                                    </svg> Monitoreo de rendimiento</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto w-[100%] z-0 pb-8 col-start-[2] min-[900px]:col-start-[7] col-span-10 min-[900px]:col-span-6">
                                        <div className="grid flex-col relative grid-cols-[repeat(12,minmax(0,1fr))] gap-4">
                                            <div className="flex z-0 items-center col-span-12 bg-[var(--surface-default-p3)] relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)] justify-center overflow-hidden rounded-[var(--border-radius-lg)] border border-[var(--border)] shadow-[var(--elevation-2)]">
                                                <div className="flex items-center justify-center absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0"><img src="/img/plus-bg.svg" className={`z-0 max-w-[100%] h-auto block align-middle absolute left-2 right-2 w-[calc(100%_-_1rem)] ${currentTheme === 'light' ? 'opacity-10 grayscale brightness-100' : 'opacity-20 brightness-150 contrast-50'}`} alt=""/>
                                                    <div className="flex items-center justify-center relative w-[100%] h-[100%]"><img src="/img/estela-gimlet-front.png" width="1600" height="797" className="relative max-w-[100%] h-auto block align-middle w-3/4" alt=""/><noscript>
                                                            <div className="absolute inset-0 flex h-full w-full items-center justify-center"><img className="img-elevation-2 relative w-[75%] h-auto" src="/img/estela-gimlet-front.png" width="1600" height="797" alt="Vista 2/3 del servidor sled de Estela" /></div>
                                                        </noscript></div>
                                                </div>
                                            </div>
                                            <div className={`col-span-12 z-10 rounded-[var(--border-radius)] border font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider shadow-[var(--elevation-2)] ${currentTheme === 'light' ? 'bg-[#ffffff] border-[#e4e5e4]' : 'bg-[#060f11] border-[#1c2225]'}`}>
                                                <div className={`grid grid-cols-[repeat(12,minmax(0,1fr))] text-[var(--content-accent-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[900px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[900px]:font-normal leading-4 min-[900px]:leading-[1.125rem] text-[.75rem] min-[900px]:text-[.875rem] tracking-wider min-[900px]:tracking-wider ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}>nas-primario</div>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}><span className="text-[#f5b944]">12TB</span> / <span className="text-[#f5b944]">RAID-6</span></div>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}>Synology-RS</div>
                                                    <div className="px-3 py-3 flex flex-col sm:flex-row col-span-3 gap-1 sm:gap-2 text-[#f5b944]"><span className="px-[3px] items-center inline-flex h-4 whitespace-nowrap rounded-[var(--border-radius-sm)] uppercase font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] text-[#f5b943] bg-[#574829]"><span>EN LÍNEA</span></span> <span>90d 2h</span></div>
                                                </div>
                                                <div className={`grid grid-cols-[repeat(12,minmax(0,1fr))] text-[var(--content-accent-p3)] border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[900px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[900px]:font-normal leading-4 min-[900px]:leading-[1.125rem] text-[.75rem] min-[900px]:text-[.875rem] tracking-wider min-[900px]:tracking-wider ${currentTheme === 'light' ? 'border-[#e4e5e4] border-t-[#e4e5e4]' : 'border-[#1c2225] border-t-[#1c2225]'}`}>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}>servidor</div>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}><span className="text-[#f5b944]">24TB</span> / <span className="text-[#f5b944]">RAID-10</span></div>
                                                    <div className={`px-3 py-3 border-r col-span-3 text-[#f5b944] ${currentTheme === 'light' ? 'border-[#e4e5e4]' : 'border-[#1c2225]'}`}>COLOSUS</div>
                                                    <div className="px-3 py-3 flex flex-col sm:flex-row col-span-3 gap-1 sm:gap-2 text-[#f5b944]"><span className="px-[3px] items-center inline-flex h-4 whitespace-nowrap rounded-[var(--border-radius-sm)] uppercase font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] text-[#f5b943] bg-[#574829]"><span>EN LÍNEA</span></span> <span>6m 14d</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-16 sm:mb-0 min-[900px]:mt-[calc(10rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[900px]:mb-[calc(10rem_*_var(--tw-space-y-reverse))]">
                                <div className="flex min-[900px]:grid min-[900px]:grid-cols-[repeat(12,minmax(0,1fr))] flex-col items-center">
                                    <div className="relative z-10 col-span-5 block min-[900px]:ml-[-1.5rem]"><a href="/es/product/storage" className="flex items-center text-inherit [text-decoration:inherit] transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.2s]">
                                            <div className="bg-[var(--surface-default-p3)] p-3 hidden min-[900px]:block">
                                                <div className={`rounded-[var(--border-radius)] p-1 text-[var(--content-accent-p3)] ${currentTheme === 'light' ? 'bg-[#e5e5e5] hover:bg-[#d5d5d5]' : 'bg-[var(--surface-accent-secondary-p3)] hover:bg-[var(--surface-accent-secondary-hover-p3)]'}`}><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#storage-16"></use>
                                                    </svg></div>
                                            </div>
                                            <h3 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-lg min-[600px]:text-[1.5625rem] font-normal min-[600px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[600px]:leading-8 tracking-wide min-[600px]:tracking-wide min-[900px]:ml-3">Arquitectura de Red Empresarial<svg width="12" height="12" className="inline-flex align-middle ml-2 transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] text-[#f5b944]">
                                                    <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                                                </svg></h3>
                                        </a>
                                        <div className="mt-3 min-[900px]:ml-[3.75rem]">
                                            <div className="max-w-[36rem] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[600px]:font-normal leading-6 min-[600px]:leading-[1.625rem] text-base min-[600px]:text-lg tracking-wide min-[600px]:tracking-wide">Setup y gestión de equipos UniFi, segmentación VLAN y seguridad, guest networks, conexiones VPN multi-site, optimización de ancho de banda.</div>
                                            <div className="mt-8">
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#resize-16"></use>
                                                    </svg> Escala de infraestructura bajo demanda</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#snapshots-16"></use>
                                                    </svg> Snapshots instantáneos e inmutables</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="24" height="24" className="block align-middle h-4 w-4 text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#progress-24"></use>
                                                    </svg> Escalabilidad tanto por lan como wifi</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto w-[100%] z-0 pb-8 col-start-[2] min-[900px]:col-start-[7] col-span-10 min-[900px]:col-span-6">
                                        <div className="grid grid-cols-[repeat(12,minmax(0,1fr))]">
                                            <div className="flex relative bg-[var(--surface-default-p3)] justify-end rounded-[var(--border-radius-lg)] border border-[var(--border)] shadow-[var(--elevation-2)] col-span-12 min-[600px]:col-span-9"><img src={currentTheme === 'light' ? '/img/estela-storage-create-snapshot1_light.png' : '/img/estela-storage-create-snapshot.svg'} width="395" height="320" className="max-w-[100%] h-auto block align-middle w-[88.89%]" alt=""/></div>
                                            <div className="z-10 col-start-[8] col-span-5 mt-[-40%] rounded-[var(--border-radius)] border font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] bg-[var(--surface-raise-p3)] border-[var(--border)] shadow-[var(--elevation-2)] hidden min-[600px]:block">
                                                <div className="px-3 py-2.5 border-b border-[var(--border)]">Activar monitoreo</div>
                                                <div className="px-3 py-2.5 border-b border-[var(--border)]">Exportar configuración</div>
                                                <div className="px-3 py-2.5 border-b border-[var(--border)]">Crear plan de respaldo</div>
                                                <div className="px-3 py-2.5 border-b border-[var(--border)] border-none">Ver estado del sistema</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-16 sm:mb-0 min-[900px]:mt-[calc(10rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[900px]:mb-[calc(10rem_*_var(--tw-space-y-reverse))]">
                                <div className="flex min-[900px]:grid min-[900px]:grid-cols-[repeat(12,minmax(0,1fr))] flex-col items-center">
                                    <div className="relative z-10 col-span-5 block min-[900px]:ml-[-1.5rem]"><a href="/es/product/networking" className="flex items-center text-inherit [text-decoration:inherit] transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.2s]">
                                            <div className="bg-[var(--surface-default-p3)] p-3 hidden min-[900px]:block">
                                                <div className={`rounded-[var(--border-radius)] p-1 text-[var(--content-accent-p3)] ${currentTheme === 'light' ? 'bg-[#e5e5e5] hover:bg-[#d5d5d5]' : 'bg-[var(--surface-accent-secondary-p3)] hover:bg-[var(--surface-accent-secondary-hover-p3)]'}`}><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#networking-16"></use>
                                                    </svg></div>
                                            </div>
                                            <h3 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-lg min-[600px]:text-[1.5625rem] font-normal min-[600px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[600px]:leading-8 tracking-wide min-[600px]:tracking-wide min-[900px]:ml-3">Sistemas de Post-Producción de Alto Rendimiento<svg width="12" height="12" className="inline-flex align-middle ml-2 transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] text-[#f5b944]">
                                                    <use href="/assets/sprite-Dt029LRi.svg#next-arrow-12"></use>
                                                </svg></h3>
                                        </a>
                                        <div className="mt-3 min-[900px]:ml-[3.75rem]">
                                            <div className="max-w-[36rem] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[600px]:font-normal leading-6 min-[600px]:leading-[1.625rem] text-base min-[600px]:text-lg tracking-wide min-[600px]:tracking-wide">Nos especializamos en infraestructura para post producción. Diseñamos workstations para cada función sea edición, renders, edición de audio.</div>
                                            <div className="mt-8">
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#router-16"></use>
                                                    </svg> Estaciones de trabajo de alto rendimiento a medida</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#firewall-16"></use>
                                                    </svg> Soluciones de almacenamiento rápidas y escalables</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#gateway-16"></use>
                                                    </svg> Redes optimizadas de alto ancho de banda</div>
                                                <div className="px-2.5 py-2 flex items-center gap-2 border-t font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[var(--content-secondary-p3)] border-[var(--border)]"><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#security-16"></use>
                                                    </svg> Integración de flujo de trabajo y soporte de periféricos</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mx-auto w-[100%] z-0 pb-8 col-start-[2] min-[900px]:col-start-[7] col-span-10 min-[900px]:col-span-6">
                                        <div className="relative grid grid-cols-[repeat(12,minmax(0,1fr))] z-10">
                                            <div className="z-0 col-span-11 flex items-center bg-[var(--surface-default-p3)] relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)] justify-center overflow-hidden rounded-[var(--border-radius-lg)] border border-[var(--border)] shadow-[var(--elevation-2)]">
                                                <div className="flex items-center justify-center absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0"><img src="/img/plus-bg.svg" className={`z-0 max-w-[100%] h-auto block align-middle absolute left-2 right-2 w-[calc(100%_-_1rem)] ${currentTheme === 'light' ? 'opacity-10 grayscale brightness-100' : 'opacity-20 brightness-150 contrast-50'}`} alt="" />
                                                    <div className="flex items-center justify-center relative w-[100%] h-[100%]"><img src={currentTheme === 'light' ? '/img/estela-rack_light.png' : '/img/estela-rack.png'} width="1600" height="797" className="relative max-w-[100%] h-auto block align-middle w-[51%] filter-[shadow(0px 50px 80px rgba(0,0,0,.4)] 25.313px 34.875px rgba(0,0,0,.27)] 10px 13px rgba(0,0,0,.2)] 2.188px 4.625px rgba(0,0,0,.13)]" alt="" /><noscript>
                                                            <div className="absolute inset-0 flex h-full w-full items-center justify-center"><img className="img-elevation-2 relative w-[51%] h-auto" src={currentTheme === 'light' ? '/img/estela-rack_light.png' : '/img/estela-rack.png'} width="1600" height="797" alt="Vista 2/3 del switch de red Estela" /></div>
                                                        </noscript></div>
                                                </div>
                                            </div>
                                            <div className={`z-10 w-[100%] flex items-center h-14 gap-2 rounded-[var(--border-radius)] border p-1 text-[var(--content-accent-p3)] shadow-[var(--elevation-1)] col-span-6 min-[600px]:col-span-6 mt-[-12px] min-[600px]:mt-[-32px] ${currentTheme === 'light' ? 'bg-[#ffffff] border-[#e4e5e4]' : 'bg-[#060f11] border-[#1c2225]'}`}>
                                                <div className={`px-2 flex items-center h-[100%] justify-center rounded-sm ${currentTheme === 'light' ? 'bg-[#e5e5e5]' : 'bg-[#1c2225]'}`}><svg width="16" height="16" className="block align-middle text-[#f5b944]">
                                                        <use href="/assets/sprite-Dt029LRi.svg#firewall-16"></use>
                                                    </svg></div>
                                                <div className="flex flex-col">
                                                    <div className="font-[GT_America_Mono,monospace] font-normal leading-4 text-[.6875rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] text-[#f5b944]">MATRIZ DE ALMACENAMIENTO</div>
                                                    <div className="font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.125rem] text-[.875rem] tracking-wider text-[#f5b944]">alta disponibilidad</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pointerEvents-[none] absolute left-[-1px] bottom-0 z-0 w-[1px] bg-[linear-gradient(0deg,var(--background),transparent)] hidden min-[900px]:block h-20 min-[900px]:h-32 min-[900px]:mt-[calc(10rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[900px]:mb-[calc(10rem_*_var(--tw-space-y-reverse))]"></div>
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
                <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-lg min-[500px]:text-[1.5625rem] min-[900px]:text-4xl font-normal min-[500px]:font-normal min-[900px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[500px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[900px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.625rem] min-[500px]:leading-8 min-[900px]:leading-[2.625rem] tracking-wide min-[500px]:tracking-wide min-[900px]:tracking-normal">
                  Infraestructura que crece con su empresa
                </h2>
              </div>
              <div className="flex flex-col gap-2 text-center">
                <a href="/es/contact" className="px-3 items-center text-[var(--content-secondary-p3)] [text-decoration:inherit] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-100 after:text-[var(--stroke-secondary-p3)] hover:bg-[var(--surface-hover-p3)]">
                  CONTACTATE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Use the project's Footer component instead of inline footer */}
      <Footer />
      
      {/* Keep the tracking elements exactly as they were */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: "none"}} 
          alt="" 
          src="https://px.ads.linkedin.com/collect/?pid=6206948&fmt=gif" 
        />
      </noscript>
      <div className="top-[336px] left-[979px] h-0 w-0"></div>
      <div className="top-[336px] left-[1460px] h-0 w-0"></div>
      <div className="top-[659px] left-[979px] h-0 w-0"></div>
      <div className="top-[336px] left-[977px] h-0 w-0"></div>
      <div></div>
      <div className="top-[-2px] left-0 h-0 w-0"></div>
      <div className="top-[-4px] left-[-4px] h-0 w-0"></div>
      <div className="top-[-4px] left-[-4px] h-0 w-0"></div>
      <div className="top-[-2px] left-[-2px] h-0 w-0"></div>
      <div className="top-0 left-0 absolute"></div>
      <canvas width="70" height="70" className="left-[1610px] top-0 block align-middle"></canvas>
    </>
  );
};

export default InfrastructurePage;