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
    subtitle: 'Hardware and software specifications for our private AI deployments.',
    sections: [
      {
        title: 'GPU Compute',
        cards: [
          {
            title: 'GPU Inference Node',
            specs: [
              { label: 'GPUs', value: 'Up to 4x NVIDIA L40S / RTX 6000 Ada' },
              { label: 'VRAM', value: '48GB per GPU, 192GB aggregate' },
              { label: 'Processor', value: '2x AMD EPYC 9354 (32 cores each)' },
              { label: 'Memory', value: '512GB - 2TB DDR5-4800 ECC' },
              { label: 'Interconnect', value: 'PCIe 5.0 x16 per GPU' },
              { label: 'Power Supply', value: 'Redundant 1100W Platinum Supplies' },
              { label: 'Form Factor', value: '2U Rack Mount' },
            ],
          },
          {
            title: 'Model Serving',
            specs: [
              { label: 'Runtime', value: 'vLLM / llama.cpp, OpenAI-compatible API' },
              { label: 'Models', value: 'Llama, Qwen, Mistral, DeepSeek families' },
              { label: 'Quantization', value: 'FP8 / INT8 / GGUF, as the workload allows' },
              { label: 'Context', value: 'Up to 128K tokens' },
              { label: 'Isolation', value: 'One client per node. Nothing shared.' },
            ],
          },
        ],
      },
      {
        title: 'Virtualization Platform',
        cards: [
          {
            title: 'Proxmox VE 8',
            specs: [
              { label: 'Hypervisor', value: 'KVM with GPU passthrough (VFIO)' },
              { label: 'Containers', value: 'LXC for lightweight services' },
              { label: 'High Availability', value: 'Clustered failover, live migration' },
              { label: 'Backup', value: 'Proxmox Backup Server, incremental + deduplicated' },
            ],
          },
        ],
      },
      {
        title: 'Storage for Datasets & Models',
        cards: [
          {
            title: 'NVMe Flash Tier',
            specs: [
              { label: 'Media', value: '24x NVMe SSD all-flash' },
              { label: 'Throughput', value: '10GB/s sustained reads' },
              { label: 'IOPS', value: '650K+' },
              { label: 'Workloads', value: 'Model weights, embeddings, hot datasets' },
              { label: 'Protocols', value: 'NFS, SMB, iSCSI, S3-compatible object' },
              { label: 'Network', value: '4x 25GbE' },
            ],
          },
          {
            title: 'Backup & Immutability',
            specs: [
              { label: 'Strategy', value: '3-2-1 with one immutable copy' },
              { label: 'Snapshots', value: 'Hourly, configurable retention' },
              { label: 'Immutability', value: 'Write-once (WORM) locks' },
              { label: 'Encryption', value: 'AES-256 at rest, TLS in transit' },
              { label: 'Restores', value: 'Tested. The product is the restore, not the backup.' },
            ],
          },
        ],
      },
      {
        title: 'Networking for AI Workloads',
        cards: [
          {
            title: 'Interconnect',
            specs: [
              { label: 'Backbone', value: '100GbE between compute and storage' },
              { label: 'Node Links', value: '25GbE per node' },
              { label: 'Segmentation', value: 'Inference, training, and management planes isolated by VLAN' },
              { label: 'Remote Access', value: 'WireGuard mesh; model endpoints never touch the public internet' },
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
    title: 'Especificaciones Técnicas',
    subtitle: 'Especificaciones de hardware y software de nuestros despliegues de IA privada.',
    sections: [
      {
        title: 'Cómputo GPU',
        cards: [
          {
            title: 'Nodo de Inferencia GPU',
            specs: [
              { label: 'GPUs', value: 'Hasta 4x NVIDIA L40S / RTX 6000 Ada' },
              { label: 'VRAM', value: '48GB por GPU, 192GB en total' },
              { label: 'Procesador', value: '2x AMD EPYC 9354 (32 núcleos cada uno)' },
              { label: 'Memoria', value: '512GB - 2TB DDR5-4800 ECC' },
              { label: 'Interconexión', value: 'PCIe 5.0 x16 por GPU' },
              { label: 'Alimentación', value: 'Fuentes redundantes 1100W Platinum' },
              { label: 'Formato', value: 'Rack 2U' },
            ],
          },
          {
            title: 'Serving de Modelos',
            specs: [
              { label: 'Runtime', value: 'vLLM / llama.cpp, API compatible con OpenAI' },
              { label: 'Modelos', value: 'Familias Llama, Qwen, Mistral, DeepSeek' },
              { label: 'Cuantización', value: 'FP8 / INT8 / GGUF, según la carga de trabajo' },
              { label: 'Contexto', value: 'Hasta 128K tokens' },
              { label: 'Aislamiento', value: 'Un cliente por nodo. Nada compartido.' },
            ],
          },
        ],
      },
      {
        title: 'Plataforma de Virtualización',
        cards: [
          {
            title: 'Proxmox VE 8',
            specs: [
              { label: 'Hipervisor', value: 'KVM con passthrough de GPU (VFIO)' },
              { label: 'Contenedores', value: 'LXC para servicios livianos' },
              { label: 'Alta Disponibilidad', value: 'Clúster con failover y migración en vivo' },
              { label: 'Respaldo', value: 'Proxmox Backup Server, incremental y deduplicado' },
            ],
          },
        ],
      },
      {
        title: 'Almacenamiento para Datasets y Modelos',
        cards: [
          {
            title: 'Capa Flash NVMe',
            specs: [
              { label: 'Medios', value: '24x SSD NVMe all-flash' },
              { label: 'Transferencia', value: '10GB/s sostenidos en lectura' },
              { label: 'IOPS', value: '+650K' },
              { label: 'Cargas de Trabajo', value: 'Pesos de modelos, embeddings, datasets activos' },
              { label: 'Protocolos', value: 'NFS, SMB, iSCSI, objetos compatibles con S3' },
              { label: 'Red', value: '4x 25GbE' },
            ],
          },
          {
            title: 'Respaldo e Inmutabilidad',
            specs: [
              { label: 'Estrategia', value: '3-2-1 con una copia inmutable' },
              { label: 'Snapshots', value: 'Cada hora, con retención configurable' },
              { label: 'Inmutabilidad', value: 'Bloqueo de escritura única (WORM)' },
              { label: 'Cifrado', value: 'AES-256 en reposo, TLS en tránsito' },
              { label: 'Restauración', value: 'Probada. El producto es la restauración, no el respaldo.' },
            ],
          },
        ],
      },
      {
        title: 'Red para Cargas de IA',
        cards: [
          {
            title: 'Interconexión',
            specs: [
              { label: 'Backbone', value: '100GbE entre cómputo y almacenamiento' },
              { label: 'Enlaces por Nodo', value: '25GbE por nodo' },
              { label: 'Segmentación', value: 'Planos de inferencia, entrenamiento y gestión aislados por VLAN' },
              { label: 'Acceso Remoto', value: 'Malla WireGuard; los endpoints de modelos nunca tocan la internet pública' },
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
