export type SpecItem = {
  label: string
  value: string
}

export type SpecCard = {
  title: string
  specs: SpecItem[]
}

export type SpecSection = {
  title: string
  cards: SpecCard[]
}

export type ServiceSpecificationsContent = {
  title: string
  subtitle: string
  sections: SpecSection[]
  cta: {
    title: string
    button: string
  }
}

export const serviceSpecificationsContent: Record<'en' | 'es', ServiceSpecificationsContent> = {
  en: {
    title: 'Technical Specifications',
    subtitle: 'Hardware and software specifications for our standard deployments.',
    sections: [
      {
        title: 'Compute Infrastructure',
        cards: [
          {
            title: 'Specifications',
            specs: [
              { label: 'Processor', value: '2x AMD EPYC 9354 (32 cores each)' },
              { label: 'Total Cores', value: '64 physical / 128 threads' },
              { label: 'Memory', value: '512GB - 2TB DDR5-4800 ECC' },
              { label: 'Storage Bays', value: '8x 2.5" NVMe U.2' },
              { label: 'Network', value: '4x 25GbE + 2x 100GbE SFP28' },
              { label: 'Power Supply', value: 'Redundant 1100W Platinum Supplies' },
              { label: 'Form Factor', value: '2U Rack Mount' },
            ],
          },
          {
            title: 'VMware vSphere 8.0',
            specs: [
              { label: 'Hypervisor', value: 'ESXi 8.0 Update 2' },
              { label: 'Management', value: 'vCenter Server 8.0' },
              { label: 'Features', value: 'vMotion, DRS, HA, vSAN' },
              { label: 'Max VMs/Host', value: '1,024' },
              { label: 'Max vCPU/VM', value: '768' },
              { label: 'Max RAM/VM', value: '24TB' },
            ],
          },
        ],
      },
      {
        title: 'Storage Systems',
        cards: [
          {
            title: 'Synology FS6400 FlashStation',
            specs: [
              { label: 'Drive Bays', value: '24x 2.5" NVMe SSD' },
              { label: 'Max Capacity', value: '384TB (24x 16TB)' },
              { label: 'Memory', value: '32GB DDR4 ECC (exp. 512GB)' },
              { label: 'Cache', value: 'Up to 1TB NVMe read/write' },
              { label: 'Network', value: '4x 25GbE + 2x 10GbE' },
              { label: 'Protocols', value: 'SMB, AFP, NFS, iSCSI, FTP' },
              { label: 'RAID Support', value: 'SHR, Basic, JBOD, 0, 1, 5, 6, 10' },
              { label: 'Performance', value: '650K+ IOPS / 10GB/s throughput' },
            ],
          },
          {
            title: 'Synology SA3610 ActiveProtect',
            specs: [
              { label: 'Drive Bays', value: '12x 3.5" SATA/SAS' },
              { label: 'Max Capacity', value: '240TB (12x 20TB)' },
              { label: 'Memory', value: '16GB DDR4 ECC (exp. 64GB)' },
              { label: 'Cache Slots', value: '2x M.2 NVMe (up to 960GB each)' },
              { label: 'Network', value: '4x 10GbE RJ45' },
              { label: 'Expansion', value: 'Up to 2x RX1217 (36 bays total)' },
              { label: 'Performance', value: '226K IOPS / 5.5GB/s sequential' },
            ],
          },
          {
            title: 'Synology RS2423+ RackStation',
            specs: [
              { label: 'Drive Bays', value: '12x 3.5"/2.5" SATA' },
              { label: 'Max Capacity', value: '240TB (12x 20TB)' },
              { label: 'Memory', value: '8GB DDR4 (exp. 32GB)' },
              { label: 'Network', value: '4x 1GbE RJ45' },
              { label: 'Features', value: 'Active Backup, Snapshots, Cloud Sync, Encryption' },
            ],
          },
        ],
      },
      {
        title: 'Network Infrastructure',
        cards: [
          {
            title: 'UniFi Dream Machine Special Edition',
            specs: [
              { label: 'Throughput', value: '10 Gbps IDS/IPS' },
              { label: 'WAN Ports', value: '2x 10G SFP+ / 1x 2.5GbE RJ45' },
              { label: 'LAN Ports', value: '8x GbE RJ45 with PoE+' },
              { label: 'Storage', value: '128GB SSD + HDD bay' },
              { label: 'Features', value: 'Firewall, VPN, VLAN (4096), Traffic Analytics' },
            ],
          },
          {
            title: 'UniFi Switch Pro 48 PoE',
            specs: [
              { label: 'Ports', value: '48x GbE RJ45 PoE+' },
              { label: 'SFP+ Ports', value: '4x 10G SFP+' },
              { label: 'PoE Budget', value: '600W (IEEE 802.3at/af/bt)' },
              { label: 'Switching', value: '176 Gbps non-blocking' },
              { label: 'Features', value: 'Layer 3 routing, Link aggregation, Port isolation' },
            ],
          },
          {
            title: 'UniFi U7 Pro WiFi 7',
            specs: [
              { label: 'Standards', value: 'WiFi 7 (802.11be)' },
              { label: 'Bands', value: 'Tri-band 2.4/5/6 GHz' },
              { label: 'Throughput', value: '11.5 Gbps aggregate' },
              { label: 'Clients', value: '300+ concurrent' },
              { label: 'Coverage', value: '6,000 sq ft' },
              { label: 'Features', value: 'Band steering, Guest portal, VLAN per SSID, AI optimization' },
            ],
          },
        ],
      },
      {
        title: 'Security & Monitoring',
        cards: [
          {
            title: 'SentinelOne Singularity Platform',
            specs: [
              { label: 'Protection', value: 'AI-powered XDR' },
              { label: 'Detection', value: '< 1ms threat identification' },
              { label: 'Response', value: 'Automated remediation' },
              { label: 'Coverage', value: 'Windows, macOS, Linux, Cloud' },
              { label: 'Features', value: 'Behavioral AI, EDR + EPP, Storyline, 1-click rollback' },
            ],
          },
          {
            title: 'UniFi Protect AI Camera Systems',
            specs: [
              { label: 'AI Cameras', value: 'G5 Pro with Smart Detection' },
              { label: 'Resolution', value: '4K (3840 x 2160) @ 30fps' },
              { label: 'Detection', value: 'Person, Vehicle, License plate, Package' },
              { label: 'Storage', value: 'Local NVR + cloud backup' },
              { label: 'Retention', value: '30-90 days continuous' },
              { label: 'Features', value: 'Smart motion zones, Privacy masking, Event notifications' },
            ],
          },
        ],
      },
    ],
    cta: {
      title: 'Hardware that scales with you',
      button: 'CONTACT US',
    },
  },
  es: {
    title: 'Especificaciones Tecnicas',
    subtitle: 'Especificaciones de hardware recientes.',
    sections: [
      {
        title: 'Workstation',
        cards: [
          {
            title: 'Specifications',
            specs: [
              { label: 'Processor', value: '2x AMD EPYC 9354 (32 cores each)' },
              { label: 'Total Cores', value: '64 physical / 128 threads' },
              { label: 'Memory', value: '512GB - 2TB DDR5-4800 ECC' },
              { label: 'Storage Bays', value: '8x 2.5" NVMe U.2' },
              { label: 'Network', value: '4x 25GbE + 2x 100GbE SFP28' },
              { label: 'Power Supply', value: 'Redundant 1100W Platinum Supplies' },
              { label: 'Form Factor', value: '2U Rack Mount' },
            ],
          },
          {
            title: 'VMware vSphere 8.0',
            specs: [
              { label: 'Hipervisor', value: 'ESXi 8.0 Update 2' },
              { label: 'Gestion', value: 'vCenter Server 8.0' },
              { label: 'Caracteristicas', value: 'vMotion, DRS, HA, vSAN' },
              { label: 'Max. VMs/Host', value: '1,024' },
              { label: 'Max. vCPU/VM', value: '768' },
              { label: 'Max. RAM/VM', value: '24TB' },
            ],
          },
        ],
      },
      {
        title: 'Sistemas de Almacenamiento',
        cards: [
          {
            title: 'Synology FS6400 FlashStation',
            specs: [
              { label: 'Bahias de Discos', value: '24x 2.5" NVMe SSD' },
              { label: 'Capacidad Maxima', value: '384TB (24x 16TB)' },
              { label: 'Memoria', value: '32GB DDR4 ECC (exp. a 512GB)' },
              { label: 'Cache', value: 'Hasta 1TB NVMe de lectura/escritura' },
              { label: 'Red', value: '4x 25GbE + 2x 10GbE' },
              { label: 'Protocolos', value: 'SMB, AFP, NFS, iSCSI, FTP' },
              { label: 'Soporte RAID', value: 'SHR, Basic, JBOD, 0, 1, 5, 6, 10' },
              { label: 'Rendimiento', value: '+650K IOPS / 10GB/s de transferencia' },
            ],
          },
          {
            title: 'Synology SA3610 ActiveProtect',
            specs: [
              { label: 'Bahias de Discos', value: '12x 3.5" SATA/SAS' },
              { label: 'Capacidad Maxima', value: '240TB (12x 20TB)' },
              { label: 'Memoria', value: '16GB DDR4 ECC (exp. a 64GB)' },
              { label: 'Ranuras de Cache', value: '2x M.2 NVMe (hasta 960GB cada una)' },
              { label: 'Red', value: '4x 10GbE RJ45' },
              { label: 'Expansion', value: 'Hasta 2x RX1217 (36 bahias en total)' },
              { label: 'Rendimiento', value: '226K IOPS / 5.5GB/s secuencial' },
            ],
          },
          {
            title: 'Synology RS2423+ RackStation',
            specs: [
              { label: 'Bahias de Discos', value: '12x 3.5"/2.5" SATA' },
              { label: 'Capacidad Maxima', value: '240TB (12x 20TB)' },
              { label: 'Memoria', value: '8GB DDR4 (exp. a 32GB)' },
              { label: 'Red', value: '4x 1GbE RJ45' },
              { label: 'Caracteristicas', value: 'Active Backup, Snapshots, Cloud Sync, Cifrado' },
            ],
          },
        ],
      },
      {
        title: 'Infraestructura de Red',
        cards: [
          {
            title: 'UniFi Dream Machine Special Edition',
            specs: [
              { label: 'Rendimiento', value: '10 Gbps con IDS/IPS' },
              { label: 'Puertos WAN', value: '2x 10G SFP+ / 1x 2.5GbE RJ45' },
              { label: 'Puertos LAN', value: '8x GbE RJ45 con PoE+' },
              { label: 'Almacenamiento', value: '128GB SSD + bahia para HDD' },
              { label: 'Caracteristicas', value: 'Firewall, VPN, VLAN (4096), Analisis de trafico' },
            ],
          },
          {
            title: 'UniFi Switch Pro 48 PoE',
            specs: [
              { label: 'Puertos', value: '48x GbE RJ45 PoE+' },
              { label: 'Puertos SFP+', value: '4x 10G SFP+' },
              { label: 'Presupuesto PoE', value: '600W (IEEE 802.3at/af/bt)' },
              { label: 'Capacidad de Conmutacion', value: '176 Gbps sin bloqueo' },
              { label: 'Caracteristicas', value: 'Ruteo Layer 3, Link aggregation, Aislamiento de puertos' },
            ],
          },
          {
            title: 'UniFi U7 Pro WiFi 7',
            specs: [
              { label: 'Estandares', value: 'WiFi 7 (802.11be)' },
              { label: 'Bandas', value: 'Tri-banda 2.4/5/6 GHz' },
              { label: 'Rendimiento', value: '11.5 Gbps agregado' },
              { label: 'Clientes', value: '+300 concurrentes' },
              { label: 'Cobertura', value: '6,000 sq ft' },
              { label: 'Caracteristicas', value: 'Band steering, Portal de invitados, VLAN por SSID, Optimizacion AI' },
            ],
          },
        ],
      },
      {
        title: 'Seguridad y Monitoreo',
        cards: [
          {
            title: 'SentinelOne Singularity Platform',
            specs: [
              { label: 'Proteccion', value: 'XDR potenciado por IA' },
              { label: 'Deteccion', value: 'Identificacion de amenazas en < 1ms' },
              { label: 'Respuesta', value: 'Remediacion automatizada' },
              { label: 'Cobertura', value: 'Windows, macOS, Linux, Cloud' },
              { label: 'Caracteristicas', value: 'Behavioral AI, EDR + EPP, Storyline, Rollback con 1-click' },
            ],
          },
          {
            title: 'Sistemas de Camaras UniFi Protect AI',
            specs: [
              { label: 'Camaras AI', value: 'G5 Pro con Deteccion Inteligente' },
              { label: 'Resolucion', value: '4K (3840 x 2160) @ 30fps' },
              { label: 'Deteccion', value: 'Personas, Vehiculos, Matriculas, Paquetes' },
              { label: 'Almacenamiento', value: 'NVR local + respaldo en la nube' },
              { label: 'Retencion', value: '30-90 dias de grabacion continua' },
              { label: 'Caracteristicas', value: 'Zonas de movimiento inteligentes, Mascaras de privacidad, Notificaciones de eventos' },
            ],
          },
        ],
      },
    ],
    cta: {
      title: 'Hardware que escala con la empresa',
      button: 'CONTACTO',
    },
  },
}
