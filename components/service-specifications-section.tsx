'use client'

import { useLanguage } from '@/components/language-provider'

export function ServiceSpecificationsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Technical Specifications',
      subtitle: 'Hardware and software specifications for our standard deployments.',
      sections: {
        compute: {
          title: 'Compute Infrastructure',
          specs: {
            title: 'Specifications',
            fields: {
              processor: 'Processor',
              totalCores: 'Total Cores',
              memory: 'Memory',
              storageBays: 'Storage Bays',
              network: 'Network',
              powerSupply: 'Power Supply',
              formFactor: 'Form Factor'
            },
            values: {
              processor: '2x AMD EPYC 9354 (32 cores each)',
              totalCores: '64 physical / 128 threads',
              memory: '512GB - 2TB DDR5-4800 ECC',
              storageBays: '8x 2.5" NVMe U.2',
              network: '4x 25GbE + 2x 100GbE SFP28',
              powerSupply: 'Redundant 1100W Platinum PSUs',
              formFactor: '2U Rack Mount'
            }
          },
          vmware: {
            title: 'VMware vSphere 8.0',
            fields: {
              hypervisor: 'Hypervisor',
              management: 'Management',
              features: 'Features',
              maxVmsHost: 'Max VMs/Host',
              maxVcpuVm: 'Max vCPU/VM',
              maxRamVm: 'Max RAM/VM'
            },
            values: {
              hypervisor: 'ESXi 8.0 Update 2',
              management: 'vCenter Server 8.0',
              features: 'vMotion, DRS, HA, vSAN',
              maxVmsHost: '1,024',
              maxVcpuVm: '768',
              maxRamVm: '24TB'
            }
          }
        },
        storage: {
          title: 'Storage Systems',
          fs6400: {
            title: 'Synology FS6400 FlashStation',
            fields: {
              driveBays: 'Drive Bays',
              maxCapacity: 'Max Capacity',
              memory: 'Memory',
              cache: 'Cache',
              network: 'Network',
              protocols: 'Protocols',
              raidSupport: 'RAID Support',
              performance: 'Performance'
            },
            values: {
              driveBays: '24x 2.5" NVMe SSD',
              maxCapacity: '384TB (24x 16TB)',
              memory: '32GB DDR4 ECC (exp. 512GB)',
              cache: 'Up to 1TB NVMe read/write',
              network: '4x 25GbE + 2x 10GbE',
              protocols: 'SMB, AFP, NFS, iSCSI, FTP',
              raidSupport: 'SHR, Basic, JBOD, 0, 1, 5, 6, 10',
              performance: '650K+ IOPS / 10GB/s throughput'
            }
          },
          sa3610: {
            title: 'Synology SA3610 ActiveProtect',
            fields: {
              driveBays: 'Drive Bays',
              maxCapacity: 'Max Capacity',
              memory: 'Memory',
              cacheSlots: 'Cache Slots',
              network: 'Network',
              expansion: 'Expansion',
              performance: 'Performance'
            },
            values: {
              driveBays: '12x 3.5" SATA/SAS',
              maxCapacity: '240TB (12x 20TB)',
              memory: '16GB DDR4 ECC (exp. 64GB)',
              cacheSlots: '2x M.2 NVMe (up to 960GB each)',
              network: '4x 10GbE RJ45',
              expansion: 'Up to 2x RX1217 (36 bays total)',
              performance: '226K IOPS / 5.5GB/s sequential'
            }
          },
          rs2423: {
            title: 'Synology RS2423+ RackStation',
            fields: {
              driveBays: 'Drive Bays',
              maxCapacity: 'Max Capacity',
              memory: 'Memory',
              network: 'Network',
              features: 'Features'
            },
            values: {
              driveBays: '12x 3.5"/2.5" SATA',
              maxCapacity: '240TB (12x 20TB)',
              memory: '8GB DDR4 (exp. 32GB)',
              network: '4x 1GbE RJ45',
              features: 'Active Backup, Snapshots, Cloud Sync, Encryption'
            }
          }
        },
        network: {
          title: 'Network Infrastructure',
          dreamMachine: {
            title: 'UniFi Dream Machine Special Edition',
            fields: {
              performance: 'Performance',
              wanPorts: 'WAN Ports',
              lanPorts: 'LAN Ports',
              storage: 'Storage',
              features: 'Features'
            },
            values: {
              performance: '10 Gbps with IDS/IPS',
              wanPorts: '2x 10G SFP+ / 1x 2.5GbE RJ45',
              lanPorts: '8x GbE RJ45 with PoE+',
              storage: '128GB SSD + HDD bay',
              features: 'Firewall, VPN, VLAN (4096), Traffic analytics'
            }
          },
          switchPro: {
            title: 'UniFi Switch Pro 48 PoE',
            fields: {
              ports: 'Ports',
              sfpPorts: 'SFP+ Ports',
              poeBudget: 'PoE Budget',
              switchingCapacity: 'Switching Capacity',
              features: 'Features'
            },
            values: {
              ports: '48x GbE RJ45 PoE+',
              sfpPorts: '4x 10G SFP+',
              poeBudget: '600W (IEEE 802.3at/af/bt)',
              switchingCapacity: '176 Gbps non-blocking',
              features: 'Layer 3 routing, Link aggregation, Port isolation'
            }
          },
          u7Pro: {
            title: 'UniFi U7 Pro WiFi 7',
            fields: {
              standards: 'Standards',
              bands: 'Bands',
              performance: 'Performance',
              clients: 'Clients',
              coverage: 'Coverage',
              features: 'Features'
            },
            values: {
              standards: 'WiFi 7 (802.11be)',
              bands: 'Tri-band 2.4/5/6 GHz',
              performance: '11.5 Gbps aggregate',
              clients: '300+ concurrent',
              coverage: '6,000 sq ft',
              features: 'Band steering, Guest portal, VLAN per SSID, AI optimization'
            }
          }
        },
        security: {
          title: 'Security & Monitoring',
          sentinelOne: {
            title: 'SentinelOne Singularity Platform',
            fields: {
              protection: 'Protection',
              detection: 'Detection',
              response: 'Response',
              coverage: 'Coverage',
              features: 'Features'
            },
            values: {
              protection: 'AI-powered XDR',
              detection: 'Threat identification < 1ms',
              response: 'Automated remediation',
              coverage: 'Windows, macOS, Linux, Cloud',
              features: 'Behavioral AI, EDR + EPP, Storyline™, 1-click Rollback'
            }
          },
          unifiProtect: {
            title: 'UniFi Protect AI Camera Systems',
            fields: {
              aiCameras: 'AI Cameras',
              resolution: 'Resolution',
              detection: 'Detection',
              storage: 'Storage',
              retention: 'Retention',
              features: 'Features'
            },
            values: {
              aiCameras: 'G5 Pro with Smart Detection',
              resolution: '4K (3840 x 2160) @ 30fps',
              detection: 'Person, Vehicle, License Plate, Package',
              storage: 'Local NVR + cloud backup',
              retention: '30-90 days continuous recording',
              features: 'Smart motion zones, Privacy masks, Event notifications'
            }
          }
        }
      },
      cta: {
        title: 'Hardware that scales with you',
        button: 'CONTACT US'
      }
    },
    es: {
      title: 'Especificaciones Técnicas',
      subtitle: 'Especificaciones de hardware recientes.',
      sections: {
        compute: {
          title: 'Workstation',
          specs: {
            title: 'Especificaciones',
            fields: {
              processor: 'Procesador',
              totalCores: 'Total de Núcleos',
              memory: 'Memoria',
              storageBays: 'Bahías de Almacenamiento',
              network: 'Red',
              powerSupply: 'Fuente de Alimentación',
              formFactor: 'Factor de Forma'
            },
            values: {
              processor: '2x AMD EPYC 9354 (32 cores each)',
              totalCores: '64 physical / 128 threads',
              memory: '512GB - 2TB DDR5-4800 ECC',
              storageBays: '8x 2.5" NVMe U.2',
              network: '4x 25GbE + 2x 100GbE SFP28',
              powerSupply: 'Redundant 1100W Platinum PSUs',
              formFactor: '2U Rack Mount'
            }
          },
          vmware: {
            title: 'VMware vSphere 8.0',
            fields: {
              hypervisor: 'Hipervisor',
              management: 'Gestión',
              features: 'Características',
              maxVmsHost: 'Máx. VMs/Host',
              maxVcpuVm: 'Máx. vCPU/VM',
              maxRamVm: 'Máx. RAM/VM'
            },
            values: {
              hypervisor: 'ESXi 8.0 Update 2',
              management: 'vCenter Server 8.0',
              features: 'vMotion, DRS, HA, vSAN',
              maxVmsHost: '1,024',
              maxVcpuVm: '768',
              maxRamVm: '24TB'
            }
          }
        },
        storage: {
          title: 'Sistemas de Almacenamiento',
          fs6400: {
            title: 'Synology FS6400 FlashStation',
            fields: {
              driveBays: 'Bahías de Discos',
              maxCapacity: 'Capacidad Máxima',
              memory: 'Memoria',
              cache: 'Caché',
              network: 'Red',
              protocols: 'Protocolos',
              raidSupport: 'Soporte RAID',
              performance: 'Rendimiento'
            },
            values: {
              driveBays: '24x 2.5" NVMe SSD',
              maxCapacity: '384TB (24x 16TB)',
              memory: '32GB DDR4 ECC (exp. a 512GB)',
              cache: 'Hasta 1TB NVMe de lectura/escritura',
              network: '4x 25GbE + 2x 10GbE',
              protocols: 'SMB, AFP, NFS, iSCSI, FTP',
              raidSupport: 'SHR, Basic, JBOD, 0, 1, 5, 6, 10',
              performance: '+650K IOPS / 10GB/s de transferencia'
            }
          },
          sa3610: {
            title: 'Synology SA3610 ActiveProtect',
            fields: {
              driveBays: 'Bahías de Discos',
              maxCapacity: 'Capacidad Máxima',
              memory: 'Memoria',
              cacheSlots: 'Ranuras de Caché',
              network: 'Red',
              expansion: 'Expansión',
              performance: 'Rendimiento'
            },
            values: {
              driveBays: '12x 3.5" SATA/SAS',
              maxCapacity: '240TB (12x 20TB)',
              memory: '16GB DDR4 ECC (exp. a 64GB)',
              cacheSlots: '2x M.2 NVMe (hasta 960GB cada una)',
              network: '4x 10GbE RJ45',
              expansion: 'Hasta 2x RX1217 (36 bahías en total)',
              performance: '226K IOPS / 5.5GB/s secuencial'
            }
          },
          rs2423: {
            title: 'Synology RS2423+ RackStation',
            fields: {
              driveBays: 'Bahías de Discos',
              maxCapacity: 'Capacidad Máxima',
              memory: 'Memoria',
              network: 'Red',
              features: 'Características'
            },
            values: {
              driveBays: '12x 3.5"/2.5" SATA',
              maxCapacity: '240TB (12x 20TB)',
              memory: '8GB DDR4 (exp. a 32GB)',
              network: '4x 1GbE RJ45',
              features: 'Active Backup, Snapshots, Cloud Sync, Cifrado'
            }
          }
        },
        network: {
          title: 'Infraestructura de Red',
          dreamMachine: {
            title: 'UniFi Dream Machine Special Edition',
            fields: {
              performance: 'Rendimiento',
              wanPorts: 'Puertos WAN',
              lanPorts: 'Puertos LAN',
              storage: 'Almacenamiento',
              features: 'Características'
            },
            values: {
              performance: '10 Gbps con IDS/IPS',
              wanPorts: '2x 10G SFP+ / 1x 2.5GbE RJ45',
              lanPorts: '8x GbE RJ45 con PoE+',
              storage: '128GB SSD + bahía para HDD',
              features: 'Firewall, VPN, VLAN (4096), Análisis de tráfico'
            }
          },
          switchPro: {
            title: 'UniFi Switch Pro 48 PoE',
            fields: {
              ports: 'Puertos',
              sfpPorts: 'Puertos SFP+',
              poeBudget: 'Presupuesto PoE',
              switchingCapacity: 'Capacidad de Conmutación',
              features: 'Características'
            },
            values: {
              ports: '48x GbE RJ45 PoE+',
              sfpPorts: '4x 10G SFP+',
              poeBudget: '600W (IEEE 802.3at/af/bt)',
              switchingCapacity: '176 Gbps sin bloqueo',
              features: 'Ruteo Layer 3, Link aggregation, Aislamiento de puertos'
            }
          },
          u7Pro: {
            title: 'UniFi U7 Pro WiFi 7',
            fields: {
              standards: 'Estándares',
              bands: 'Bandas',
              performance: 'Rendimiento',
              clients: 'Clientes',
              coverage: 'Cobertura',
              features: 'Características'
            },
            values: {
              standards: 'WiFi 7 (802.11be)',
              bands: 'Tri-banda 2.4/5/6 GHz',
              performance: '11.5 Gbps agregado',
              clients: '+300 concurrentes',
              coverage: '6,000 sq ft',
              features: 'Band steering, Portal de invitados, VLAN por SSID, Optimización AI'
            }
          }
        },
        security: {
          title: 'Seguridad y Monitoreo',
          sentinelOne: {
            title: 'SentinelOne Singularity Platform',
            fields: {
              protection: 'Protección',
              detection: 'Detección',
              response: 'Respuesta',
              coverage: 'Cobertura',
              features: 'Características'
            },
            values: {
              protection: 'XDR potenciado por IA',
              detection: 'Identificación de amenazas en < 1ms',
              response: 'Remediación automatizada',
              coverage: 'Windows, macOS, Linux, Cloud',
              features: 'Behavioral AI, EDR + EPP, Storyline™, Rollback con 1-click'
            }
          },
          unifiProtect: {
            title: 'Sistemas de Cámaras UniFi Protect AI',
            fields: {
              aiCameras: 'Cámaras AI',
              resolution: 'Resolución',
              detection: 'Detección',
              storage: 'Almacenamiento',
              retention: 'Retención',
              features: 'Características'
            },
            values: {
              aiCameras: 'G5 Pro con Detección Inteligente',
              resolution: '4K (3840 x 2160) @ 30fps',
              detection: 'Personas, Vehículos, Matrículas, Paquetes',
              storage: 'NVR local + respaldo en la nube',
              retention: '30-90 días de grabación continua',
              features: 'Zonas de movimiento inteligentes, Máscaras de privacidad, Notificaciones de eventos'
            }
          }
        }
      },
      cta: {
        title: 'Hardware que escala con la empresa',
        button: 'CONTACTO'
      }
    }
  }

  const t = content[language] || content.en

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
                <h1 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal min-[600px]:font-normal min-[1000px]:font-normal mb-12 min-[600px]:mb-10 min-[1000px]:mb-14 text-center min-[600px]:text-left font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal min-[800px]:pr-6">
                  {t.title}
                  <br />
                  <span className="text-[20px] min-[600px]:text-[25px] min-[1000px]:text-[36px] leading-[30px] min-[600px]:leading-[32px] min-[1000px]:leading-[42px] font-normal" style={{color: 'color(display-p3 0.4941 0.5137 0.5216)', fontStyle: 'normal'}}>
                    {t.subtitle}
                  </span>
                </h1>
              </div>
            </div>
            <div className="relative border-t border-[var(--stroke-default-p3)] border-b min-[900px]:border-b-[0px] mb-16 sm:mb-0">
              {/* Compute Infrastructure */}
              <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                <div className="m-auto max-w-[1200px]">
                  <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal mb-6">
                    {t.sections.compute.title}
                  </h2>
                </div>
              </div>

              {/* Standard Compute Node */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">{t.sections.compute.specs.title}</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">{t.sections.compute.specs.fields.processor}</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">{t.sections.compute.specs.values.processor}</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">{t.sections.compute.specs.fields.totalCores}</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">{t.sections.compute.specs.values.totalCores}</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">{t.sections.compute.specs.fields.memory}</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">{t.sections.compute.specs.values.memory}</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">{t.sections.compute.specs.fields.storageBays}</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">{t.sections.compute.specs.values.storageBays}</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">{t.sections.compute.specs.fields.network}</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">{t.sections.compute.specs.values.network}</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">{t.sections.compute.specs.fields.powerSupply}</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">{t.sections.compute.specs.values.powerSupply}</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">{t.sections.compute.specs.fields.formFactor}</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">{t.sections.compute.specs.values.formFactor}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Virtualization Platform */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">{t.sections.compute.vmware.title}</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Hypervisor</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">ESXi 8.0 Update 2</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Management</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">vCenter Server 8.0</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Features</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">vMotion, DRS, HA, vSAN</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Max VMs/Host</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">1,024</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Max vCPU/VM</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">768</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Max RAM/VM</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">24TB</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                height: '1px',
                backgroundColor: 'rgba(126, 131, 133, 0.3)',
                marginBottom: '48px'
              }} />

              {/* Storage Systems */}
              <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                <div className="m-auto max-w-[1200px]">
                  <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                    Storage Systems
                  </h2>
                </div>
              </div>

              {/* Enterprise Flash Arrays */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">Synology FS6400 FlashStation</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Drive Bays</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">24x 2.5" NVMe SSD</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Max Capacity</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">384TB (24x 16TB)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Memory</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">32GB DDR4 ECC (exp. 512GB)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Cache</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Up to 1TB NVMe read/write</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Network</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">4x 25GbE + 2x 10GbE</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Protocols</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">SMB, AFP, NFS, iSCSI, FTP</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">RAID Support</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">SHR, Basic, JBOD, 0, 1, 5, 6, 10</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Performance</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">650K+ IOPS / 10GB/s throughput</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hybrid Storage */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">Synology SA3610 ActiveProtect</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Drive Bays</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">12x 3.5" SATA/SAS</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Max Capacity</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">240TB (12x 20TB)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Memory</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">16GB DDR4 ECC (exp. 64GB)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Cache Slots</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">2x M.2 NVMe (up to 960GB each)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Network</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">4x 10GbE RJ45</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Expansion</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Up to 2x RX1217 (36 bays total)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Performance</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">226K IOPS / 5.5GB/s sequential</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backup & Archive */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">Synology RS2423+ RackStation</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Drive Bays</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">12x 3.5"/2.5" SATA</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Max Capacity</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">240TB (12x 20TB)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Memory</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">8GB DDR4 (exp. 32GB)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Network</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">4x 1GbE RJ45</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Features</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Active Backup, Snapshots, Cloud Sync, Encryption</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                height: '1px',
                backgroundColor: 'rgba(126, 131, 133, 0.3)',
                marginBottom: '48px'
              }} />

              {/* Network Infrastructure */}
              <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                <div className="m-auto max-w-[1200px]">
                  <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                    Network Infrastructure
                  </h2>
                </div>
              </div>

              {/* Core Routing */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">UniFi Dream Machine Special Edition</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Throughput</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">10 Gbps IDS/IPS</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">WAN Ports</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">2x 10G SFP+ / 1x 2.5GbE RJ45</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">LAN Ports</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">8x GbE RJ45 with PoE+</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Storage</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">128GB SSD + HDD bay</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Features</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Firewall, VPN, VLAN (4096), Traffic Analytics</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Switching */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">UniFi Switch Pro 48 PoE</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Ports</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">48x GbE RJ45 PoE+</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">SFP+ Ports</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">4x 10G SFP+</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">PoE Budget</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">600W (IEEE 802.3at/af/bt)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Switching</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">176 Gbps non-blocking</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Features</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Layer 3 routing, Link aggregation, Port isolation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wireless */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">UniFi U7 Pro WiFi 7</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Standards</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">WiFi 7 (802.11be)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Bands</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Tri-band 2.4/5/6 GHz</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Throughput</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">11.5 Gbps aggregate</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Clients</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">300+ concurrent</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Coverage</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">6,000 sq ft</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Features</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Band steering, Guest portal, VLAN per SSID, AI optimization</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                height: '1px',
                backgroundColor: 'rgba(126, 131, 133, 0.3)',
                marginBottom: '48px'
              }} />

              {/* Security & Monitoring */}
              <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                <div className="m-auto max-w-[1200px]">
                  <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                    Security & Monitoring
                  </h2>
                </div>
              </div>

              {/* Endpoint Protection */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">SentinelOne Singularity Platform</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Protection</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">AI-powered XDR</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Detection</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">&lt; 1ms threat identification</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Response</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Automated remediation</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Coverage</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Windows, macOS, Linux, Cloud</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Features</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Behavioral AI, EDR + EPP, Storyline™, 1-click rollback</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Surveillance */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">UniFi Protect AI Camera Systems</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">AI Cameras</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">G5 Pro with Smart Detection</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Resolution</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">4K (3840 x 2160) @ 30fps</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Detection</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Person, Vehicle, License plate, Package</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Storage</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Local NVR + cloud backup</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Retention</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">30-90 days continuous</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Features</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Smart motion zones, Privacy masking, Event notifications</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                height: '1px',
                backgroundColor: 'rgba(126, 131, 133, 0.3)',
                marginBottom: '48px'
              }} />



              {/* Bottom CTA */}
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
                          {t.cta.title}
                        </h2>
                      </div>
                      <div className="flex flex-col gap-2 text-center">
                        <a href="/contact" className="px-3 items-center text-[var(--content-secondary-p3)] [text-decoration:inherit] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-100 after:text-[var(--stroke-secondary-p3)] hover:bg-[var(--surface-hover-p3)]">
                          {t.cta.button}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}