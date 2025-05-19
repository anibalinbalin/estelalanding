'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function HeroSection() {
    return (
        <>
            <main className="overflow-x-hidden">
                <section className="hero-background relative">
                    {/* Unicorn Studio effect with responsive positioning */}
                    <div 
                        className="unicorn-effect-container"
                        data-us-project="3nh1j6pbHTPEnBpAb48a" 
                    />
                    
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44 relative z-10">
                        <div className="relative mx-auto max-w-6xl px-6">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                <div className="mx-auto max-w-lg text-left lg:mx-0 lg:w-full">
                                    {/* Content */}
                                    <div className="mb-8 flex justify-start">
                                        <Image
                                            src="/pick!zul_alpha.png"
                                            alt="Estela Logo"
                                            width={200}
                                            height={80}
                                            className="h-auto w-48"
                                        />
                                    </div>
                                    
                                    <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">When technology meets wisdom</h1>
                                    <p className="mt-8 max-w-2xl text-pretty text-lg">Highly customizable components for building modern websites and applications that look and feel the way you mean it.</p>

                                    <div className="mt-12 flex justify-start">
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="default"
                                            className="px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Contact Us</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Rest of sections... */}
            </main>
            
            <Script
                id="unicorn-studio"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.20/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
                    `,
                }}
            />
        </>
    )
}