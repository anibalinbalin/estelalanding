"use client";

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AsciiWaveAnimation } from "@/components/ui/ascii-wave-animation";
import { DevelopmentAsciiArt } from "@/components/ui/development-ascii-art";
import { NetworksServersAsciiArt } from "@/components/ui/networks-servers-ascii-art";

export default function Features() {
    const { language } = useLanguage();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    const content = {
        en: {
            title: "Complete Technology Solutions",
            subtitle: "We design, implement, and maintain the infrastructure that powers modern organizations. One partner. Total accountability.",
            features: [
                {
                    title: "Networks & Servers",
                    subtitle: "VMware virtualization, UniFi networking, Synology storage, Structured cabling. From 10Gb backbone to redundant power, we build foundations that don't fail.",
                    image: "/img/ascii-art.svg"
                },
                {
                    title: "Complete Protection",
                    subtitle: "SentinelOne XDR, UniFi Protect cameras, Backup & recovery, Compliance ready. Multi-layered defense that protects what matters most to your business.",
                    image: "/img/ascii-art_2.svg"
                },
                {
                    title: "Custom Development",
                    subtitle: "Next.js applications, Process automation, AI integration, Digital transformation. Modern solutions that transform how you work, not just digitize old problems.",
                    image: "/img/ascii-art_3.svg"
                }
            ]
        },
        es: {
            title: "Soluciones Tecnológicas Completas",
            subtitle: "Diseñamos, implementamos y mantenemos la infraestructura que hace avanzar a las empresas más modernas. Un socio estratégico. Compromiso absoluto.",
            features: [
                {
                    title: "Redes y Servidores",
                    subtitle: "Virtualización VMware, redes UniFi, almacenamiento Synology, cableado estructurado. Desde backbone de 10Gb hasta energía redundante, construimos fundamentos que no fallan.",
                    image: "/img/ascii-art.svg"
                },
                {
                    title: "Protección Completa",
                    subtitle: "SentinelOne XDR, cámaras UniFi Protect, almacenamiento duplicado en infraestructura Synology y redundancia y recuperación.",
                    image: "/img/ascii-art_2.svg"
                },
                {
                    title: "Desarrollo Personalizado",
                    subtitle: "Aplicaciones Next.js, automatización de procesos, integración de IA. Soluciones modernas que transforman la forma de trabajar.",
                    image: "/img/ascii-art_3.svg"
                }
            ]
        }
    };

    const t = content[language];

    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 
                        className="text-balance mb-4 text-2xl sm:text-4xl lg:text-5xl font-normal"
                        style={{
                            fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                            lineHeight: '1.2',
                            letterSpacing: 'normal',
                            color: resolvedTheme === 'dark' ? 'var(--content-raise-p3)' : '#1b1b1b'
                        }}
                    >
                        {t.title}
                    </h2>
                    <p 
                        className="text-balance mx-auto max-w-4xl text-lg sm:text-xl lg:text-2xl font-normal text-muted-foreground"
                        style={{
                            fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                            lineHeight: '1.4'
                        }}
                    >
                        {t.subtitle}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid gap-3 grid-cols-2 sm:grid-cols-6">
                    {/* Networks & Servers - Large card */}
                    <Card className="group overflow-hidden col-span-2 sm:col-span-4 sm:row-span-2 bg-card" style={{ borderColor: 'var(--ui-interactive-p3)' }}>
                        <CardHeader className="p-4 sm:p-6 md:p-8">
                            <h3 
                                className="mb-3"
                                style={{
                                    fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    color: 'rgb(215, 216, 217)',
                                    fontSize: '16px',
                                    lineHeight: '26px'
                                }}
                            >
                                {t.features[0].title}
                            </h3>
                            <p 
                                style={{
                                    fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    color: 'color(display-p3 0.6314 0.6431 0.6471)',
                                    fontSize: '14px',
                                    lineHeight: '20px'
                                }}
                            >
                                {t.features[0].subtitle}
                            </p>
                        </CardHeader>
                        <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg" style={{ backgroundColor: '#3b301c', padding: '12px' }}>
                                <NetworksServersAsciiArt isVisible={true} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Complete Protection - Medium card */}
                    <Card className="group overflow-hidden sm:col-span-2 bg-card" style={{ borderColor: 'var(--ui-interactive-p3)' }}>
                        <CardHeader className="p-4 sm:p-6">
                            <h3 
                                className="mb-2"
                                style={{
                                    fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    color: 'rgb(215, 216, 217)',
                                    fontSize: '16px',
                                    lineHeight: '26px'
                                }}
                            >
                                {t.features[1].title}
                            </h3>
                        </CardHeader>
                        <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                            <div className="relative aspect-square overflow-hidden rounded-lg mb-4" style={{ backgroundColor: '#3b301c', padding: '12px' }}>
                                <AsciiWaveAnimation isVisible={true} />
                            </div>
                            <p 
                                style={{
                                    fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    color: 'color(display-p3 0.6314 0.6431 0.6471)',
                                    fontSize: '14px',
                                    lineHeight: '20px'
                                }}
                            >
                                Multi-layered defense that protects what matters most.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Custom Development - Medium card */}
                    <Card className="group overflow-hidden sm:col-span-2 bg-card" style={{ borderColor: 'var(--ui-interactive-p3)' }}>
                        <CardHeader className="p-4 sm:p-6">
                            <h3 
                                className="mb-2"
                                style={{
                                    fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    color: 'rgb(215, 216, 217)',
                                    fontSize: '16px',
                                    lineHeight: '26px'
                                }}
                            >
                                {t.features[2].title}
                            </h3>
                        </CardHeader>
                        <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                            <div className="relative aspect-square overflow-hidden rounded-lg mb-4" style={{ backgroundColor: '#3b301c', padding: '12px' }}>
                                <DevelopmentAsciiArt isVisible={true} />
                            </div>
                            <p 
                                style={{
                                    fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    color: 'color(display-p3 0.6314 0.6431 0.6471)',
                                    fontSize: '14px',
                                    lineHeight: '20px'
                                }}
                            >
                                Modern solutions that transform how you work.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
