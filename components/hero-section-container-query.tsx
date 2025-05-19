'use client'

import React from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSectionContainerQuery() {
    return (
        <>
            <style jsx>{`
                .hero-container {
                    container-type: size;
                    container-name: hero;
                }
                
                .effect-wrapper {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
                
                .unicorn-effect {
                    width: 1440px;
                    height: 900px;
                    position: absolute;
                    mix-blend-mode: screen;
                    z-index: 1;
                }
                
                /* Container queries for responsive positioning */
                @container hero (max-width: 374px) {
                    .unicorn-effect {
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%) scale(0.4);
                    }
                }
                
                @container hero (min-width: 375px) and (max-width: 767px) {
                    .unicorn-effect {
                        left: calc(100% * 0.76);
                        top: calc(100% * 0.48);
                        transform: translate(-50%, -50%) scale(0.5);
                    }
                }
                
                @container hero (min-width: 768px) and (max-width: 1279px) {
                    .unicorn-effect {
                        left: calc(100% * 0.74);
                        top: calc(100% * 0.46);
                        transform: translate(-50%, -50%) scale(0.75);
                    }
                }
                
                @container hero (min-width: 1280px) and (max-width: 1919px) {
                    .unicorn-effect {
                        left: calc(100% * 0.393);
                        top: calc(100% * 0.206);
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
                
                @container hero (min-width: 1920px) {
                    .unicorn-effect {
                        left: calc(100% * 0.73);
                        top: calc(100% * 0.43);
                        transform: translate(-50%, -50%) scale(1.2);
                    }
                }
            `}</style>
            
            <main className="overflow-x-hidden">
                <section className="hero-background relative hero-container">
                    <div className="effect-wrapper">
                        <div 
                            className="unicorn-effect unicorn-mask-fade"
                            data-us-project="3nh1j6pbHTPEnBpAb48a" 
                        />
                    </div>
                    
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44 relative z-10">
                        {/* Your content here */}
                    </div>
                </section>
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