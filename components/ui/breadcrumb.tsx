import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const breadcrumbStyle = {
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    fontFamily: 'GT_America_Mono, monospace',
    color: 'var(--content-secondary-p3)',
    marginBottom: '24px'
  }

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    cursor: 'pointer'
  }

  const linkHoverStyle = {
    color: 'var(--foreground)'
  }

  return (
    <div style={breadcrumbStyle}>
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link 
              href={item.href} 
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = linkHoverStyle.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'inherit'
              }}
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span> / </span>}
        </span>
      ))}
    </div>
  )
}