'use client'

import Link from 'next/link'

export function ServiceSpecificationsSection() {
  const pageStyles = {
    backgroundColor: 'rgb(8, 9, 10)',
    color: 'rgb(215, 216, 217)',
    minHeight: '100vh'
  }

  const badgeStyle = {
    fontSize: '0.875rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    fontFamily: 'GT_America_Mono, monospace',
    color: 'rgb(126, 131, 133)',
    marginBottom: '24px'
  }

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '400',
    lineHeight: '2.75rem',
    letterSpacing: 'normal',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'rgb(215, 216, 217)',
    margin: 0,
    marginBottom: '16px'
  }

  const subtitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '400',
    lineHeight: '1.75rem',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'rgb(215, 216, 217)',
    marginBottom: '24px'
  }

  const dividerStyle = {
    height: '1px',
    backgroundColor: 'rgba(126, 131, 133, 0.3)',
    marginBottom: '48px'
  }

  const sectionHeaderStyle = {
    fontSize: '1.5rem', 
    fontWeight: '400',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'rgb(215, 216, 217)', 
    marginBottom: '24px',
    borderBottom: '1px solid rgba(126, 131, 133, 0.3)',
    paddingBottom: '8px'
  }

  const specCardStyle = {
    marginBottom: '32px',
    padding: '24px',
    backgroundColor: 'rgba(126, 131, 133, 0.05)',
    borderRadius: '12px',
    border: '1px solid rgba(126, 131, 133, 0.1)'
  }

  const specTableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginBottom: '24px',
    fontFamily: 'GT_America_Mono, monospace',
    fontSize: '0.9rem'
  }

  const tableHeaderStyle = {
    padding: '12px 16px',
    textAlign: 'left' as const,
    borderBottom: '2px solid rgba(126, 131, 133, 0.3)',
    backgroundColor: 'rgba(126, 131, 133, 0.1)',
    color: 'rgb(215, 216, 217)',
    fontWeight: '500'
  }

  const tableCellStyle = {
    padding: '12px 16px',
    borderBottom: '1px solid rgba(126, 131, 133, 0.2)',
    borderRight: '1px solid rgba(126, 131, 133, 0.2)',
    color: 'rgb(126, 131, 133)'
  }

  const tableValueStyle = {
    padding: '12px 16px',
    borderBottom: '1px solid rgba(126, 131, 133, 0.2)',
    color: 'rgb(215, 216, 217)',
    fontWeight: '500'
  }

  const paragraphStyle = {
    fontSize: '17px',
    fontWeight: '400',
    lineHeight: '27.2px',
    letterSpacing: 'normal',
    fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    color: 'rgb(126, 131, 133)',
    marginBottom: '24px'
  }

  return (
    <div style={pageStyles}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '120px 32px' }}>
        {/* Badge */}
        <div style={badgeStyle}>
          Estela / Services / Specifications
        </div>

        <div style={dividerStyle} />

        {/* Main Title */}
        <h1 style={titleStyle}>
          Technical Specifications
        </h1>
        <p style={subtitleStyle}>
          Hardware and software specifications for our standard deployments.
        </p>
        
        <div style={dividerStyle} />

        {/* Compute Infrastructure */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Compute Infrastructure
          </h2>

          {/* Standard Compute Node */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              Lenovo ThinkSystem SR650 V3
            </h3>
            <p style={{ 
              fontSize: '1rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em'
            }}>
              Standard Compute Node
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Processor</td>
                  <td style={tableValueStyle}>2x AMD EPYC 9354 (32 cores each)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Total Cores</td>
                  <td style={tableValueStyle}>64 physical / 128 threads</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Memory</td>
                  <td style={tableValueStyle}>512GB - 2TB DDR5-4800 ECC</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Storage Bays</td>
                  <td style={tableValueStyle}>8x 2.5" NVMe U.2</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Network</td>
                  <td style={tableValueStyle}>4x 25GbE + 2x 100GbE SFP28</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Power Supply</td>
                  <td style={tableValueStyle}>Redundant 1100W Platinum PSUs</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Form Factor</td>
                  <td style={{ ...tableValueStyle, borderBottom: 'none' }}>2U Rack Mount</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Virtualization Platform */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              VMware vSphere 8.0
            </h3>
            <p style={{ 
              fontSize: '1rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em'
            }}>
              Virtualization Platform
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Hypervisor</td>
                  <td style={tableValueStyle}>ESXi 8.0 Update 2</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Management</td>
                  <td style={tableValueStyle}>vCenter Server 8.0</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Features</td>
                  <td style={tableValueStyle}>vMotion, DRS, HA, vSAN</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Max VMs/Host</td>
                  <td style={tableValueStyle}>1,024</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Max vCPU/VM</td>
                  <td style={tableValueStyle}>768</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Max RAM/VM</td>
                  <td style={{ ...tableValueStyle, borderBottom: 'none' }}>24TB</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cluster Configurations */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '24px'
            }}>
              Cluster Configurations
            </h3>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Configuration</th>
                  <th style={tableHeaderStyle}>Nodes</th>
                  <th style={{ ...tableHeaderStyle, borderRight: 'none' }}>Total Resources</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Starter</td>
                  <td style={tableCellStyle}>3 nodes</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none' }}>192 cores / 1.5TB</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Standard</td>
                  <td style={tableCellStyle}>5 nodes</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none' }}>320 cores / 2.5TB</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Enterprise</td>
                  <td style={tableCellStyle}>8 nodes</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none' }}>512 cores / 4TB</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Custom</td>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Up to 32</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none', borderBottom: 'none' }}>As required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* Storage Systems */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Storage Systems
          </h2>

          {/* Enterprise Flash Arrays */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              Synology FS6400 FlashStation
            </h3>
            <p style={{ 
              fontSize: '1rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em'
            }}>
              Enterprise Flash Arrays
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Drive Bays</td>
                  <td style={tableValueStyle}>24x 2.5" NVMe SSD</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Max Capacity</td>
                  <td style={tableValueStyle}>384TB (24x 16TB)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Memory</td>
                  <td style={tableValueStyle}>32GB DDR4 ECC (exp. 512GB)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Cache</td>
                  <td style={tableValueStyle}>Up to 1TB NVMe read/write</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Network</td>
                  <td style={tableValueStyle}>4x 25GbE + 2x 10GbE</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Protocols</td>
                  <td style={tableValueStyle}>SMB, AFP, NFS, iSCSI, FTP</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>RAID Support</td>
                  <td style={tableValueStyle}>SHR, Basic, JBOD, 0, 1, 5, 6, 10</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Performance</td>
                  <td style={{ ...tableValueStyle, borderBottom: 'none' }}>650K+ IOPS / 10GB/s throughput</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Hybrid Storage */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              Synology SA3610 ActiveProtect
            </h3>
            <p style={{ 
              fontSize: '1rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em'
            }}>
              Hybrid Storage Arrays
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Drive Bays</td>
                  <td style={tableValueStyle}>12x 3.5" SATA/SAS</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Max Capacity</td>
                  <td style={tableValueStyle}>240TB (12x 20TB)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Memory</td>
                  <td style={tableValueStyle}>16GB DDR4 ECC (exp. 64GB)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Cache Slots</td>
                  <td style={tableValueStyle}>2x M.2 NVMe (up to 960GB each)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Network</td>
                  <td style={tableValueStyle}>4x 10GbE RJ45</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Expansion</td>
                  <td style={tableValueStyle}>Up to 2x RX1217 (36 bays total)</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Performance</td>
                  <td style={{ ...tableValueStyle, borderBottom: 'none' }}>226K IOPS / 5.5GB/s sequential</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Backup & Archive */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              Synology RS2423+ RackStation
            </h3>
            <p style={{ 
              fontSize: '1rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em'
            }}>
              Backup & Archive
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Drive Bays</td>
                  <td style={tableValueStyle}>12x 3.5"/2.5" SATA</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Max Capacity</td>
                  <td style={tableValueStyle}>240TB (12x 20TB)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Memory</td>
                  <td style={tableValueStyle}>8GB DDR4 (exp. 32GB)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Network</td>
                  <td style={tableValueStyle}>4x 1GbE RJ45</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Features</td>
                  <td style={{ ...tableValueStyle, borderBottom: 'none' }}>Active Backup, Snapshots, Cloud Sync, Encryption</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* Network Infrastructure */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Network Infrastructure
          </h2>

          {/* Core Routing */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              UniFi Dream Machine Special Edition
            </h3>
            <p style={{ 
              fontSize: '1rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em'
            }}>
              Core Routing & Security
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Throughput</td>
                  <td style={tableValueStyle}>10 Gbps IDS/IPS</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>WAN Ports</td>
                  <td style={tableValueStyle}>2x 10G SFP+ / 1x 2.5GbE RJ45</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>LAN Ports</td>
                  <td style={tableValueStyle}>8x GbE RJ45 with PoE+</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Storage</td>
                  <td style={tableValueStyle}>128GB SSD + HDD bay</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Features</td>
                  <td style={{ ...tableValueStyle, borderBottom: 'none' }}>Firewall, VPN, VLAN (4096), Traffic Analytics</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Core Switching */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              UniFi Switch Pro 48 PoE
            </h3>
            <p style={{ 
              fontSize: '1rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em'
            }}>
              Core Switching
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Ports</td>
                  <td style={tableValueStyle}>48x GbE RJ45 PoE+</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>SFP+ Ports</td>
                  <td style={tableValueStyle}>4x 10G SFP+</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>PoE Budget</td>
                  <td style={tableValueStyle}>600W (IEEE 802.3at/af/bt)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Switching</td>
                  <td style={tableValueStyle}>176 Gbps non-blocking</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Features</td>
                  <td style={{ ...tableValueStyle, borderBottom: 'none' }}>Layer 3 routing, Link aggregation, Port isolation</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Wireless */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              UniFi U7 Pro WiFi 7
            </h3>
            <p style={{ 
              fontSize: '1rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em'
            }}>
              Wireless Infrastructure
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Standards</td>
                  <td style={tableValueStyle}>WiFi 7 (802.11be)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Bands</td>
                  <td style={tableValueStyle}>Tri-band 2.4/5/6 GHz</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Throughput</td>
                  <td style={tableValueStyle}>11.5 Gbps aggregate</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Clients</td>
                  <td style={tableValueStyle}>300+ concurrent</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Coverage</td>
                  <td style={tableValueStyle}>6,000 sq ft</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Features</td>
                  <td style={{ ...tableValueStyle, borderBottom: 'none' }}>Band steering, Guest portal, VLAN per SSID, AI optimization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* Security & Monitoring */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Security & Monitoring
          </h2>

          {/* Endpoint Protection */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              SentinelOne Singularity Platform
            </h3>
            <p style={{ 
              fontSize: '1rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em'
            }}>
              Endpoint Protection
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Protection</td>
                  <td style={tableValueStyle}>AI-powered XDR</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Detection</td>
                  <td style={tableValueStyle}>&lt; 1ms threat identification</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Response</td>
                  <td style={tableValueStyle}>Automated remediation</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Coverage</td>
                  <td style={tableValueStyle}>Windows, macOS, Linux, Cloud</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Features</td>
                  <td style={{ ...tableValueStyle, borderBottom: 'none' }}>Behavioral AI, EDR + EPP, Storyline™, 1-click rollback</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Video Surveillance */}
          <div style={specCardStyle}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '500',
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              color: 'rgb(215, 216, 217)', 
              marginBottom: '8px'
            }}>
              UniFi Protect AI Camera Systems
            </h3>
            <p style={{ 
              fontSize: '1rem',
              fontFamily: 'GT_America_Mono, monospace',
              color: 'rgb(126, 131, 133)',
              marginBottom: '24px',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.05em'
            }}>
              Video Surveillance
            </p>
            <div style={{ borderBottom: '1px solid rgba(126, 131, 133, 0.2)', marginBottom: '24px', paddingBottom: '8px' }}></div>

            <table style={specTableStyle}>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>AI Cameras</td>
                  <td style={tableValueStyle}>G5 Pro with Smart Detection</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Resolution</td>
                  <td style={tableValueStyle}>4K (3840 x 2160) @ 30fps</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Detection</td>
                  <td style={tableValueStyle}>Person, Vehicle, License plate, Package</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Storage</td>
                  <td style={tableValueStyle}>Local NVR + cloud backup</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Retention</td>
                  <td style={tableValueStyle}>30-90 days continuous</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Features</td>
                  <td style={{ ...tableValueStyle, borderBottom: 'none' }}>Smart motion zones, Privacy masking, Event notifications</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* Service Level Agreements */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={sectionHeaderStyle}>
            Service Level Agreements
          </h2>

          <div style={specCardStyle}>
            <table style={specTableStyle}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Service Level</th>
                  <th style={tableHeaderStyle}>Essential</th>
                  <th style={tableHeaderStyle}>Professional</th>
                  <th style={{ ...tableHeaderStyle, borderRight: 'none' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Availability</td>
                  <td style={tableCellStyle}>99.5%</td>
                  <td style={tableCellStyle}>99.9%</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none' }}>99.99%</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Response Time</td>
                  <td style={tableCellStyle}>24 hours</td>
                  <td style={tableCellStyle}>4 hours</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none' }}>1 hour</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Resolution Time</td>
                  <td style={tableCellStyle}>48 hours</td>
                  <td style={tableCellStyle}>24 hours</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none' }}>4 hours</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Support Hours</td>
                  <td style={tableCellStyle}>Business</td>
                  <td style={tableCellStyle}>Extended</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none' }}>24/7/365</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>On-site Visits</td>
                  <td style={tableCellStyle}>As needed</td>
                  <td style={tableCellStyle}>Monthly</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none' }}>Weekly</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Health Checks</td>
                  <td style={tableCellStyle}>Quarterly</td>
                  <td style={tableCellStyle}>Monthly</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none' }}>Weekly</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Updates</td>
                  <td style={tableCellStyle}>Quarterly</td>
                  <td style={tableCellStyle}>Monthly</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none' }}>Immediate</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Dedicated Eng.</td>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>No</td>
                  <td style={{ ...tableCellStyle, borderBottom: 'none' }}>Shared</td>
                  <td style={{ ...tableValueStyle, borderRight: 'none', borderBottom: 'none' }}>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div style={dividerStyle} />

        {/* Bottom CTA */}
        <section style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1.25rem', 
            fontWeight: '500',
            color: 'rgb(215, 216, 217)',
            marginBottom: '16px'
          }}>
            Need a custom configuration?
          </p>

          <p style={{ 
            ...paragraphStyle, 
            fontSize: '1rem',
            marginBottom: '32px'
          }}>
            Every organization is unique. Let's design the perfect infrastructure for your specific needs.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link 
              href="/contact"
              style={{
                padding: '12px 24px',
                backgroundColor: 'rgb(215, 216, 217)',
                color: 'rgb(8, 9, 10)',
                textDecoration: 'none',
                borderRadius: '6px',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(126, 131, 133)'
                e.currentTarget.style.color = 'rgb(215, 216, 217)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(215, 216, 217)'
                e.currentTarget.style.color = 'rgb(8, 9, 10)'
              }}
            >
              Request Custom Specs
            </Link>
            <Link 
              href="/specifications.pdf"
              style={{
                padding: '12px 24px',
                backgroundColor: 'transparent',
                color: 'rgb(126, 131, 133)',
                textDecoration: 'none',
                border: '1px solid rgb(126, 131, 133)',
                borderRadius: '6px',
                fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(126, 131, 133)'
                e.currentTarget.style.color = 'rgb(215, 216, 217)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'rgb(126, 131, 133)'
              }}
            >
              Download Spec Sheet PDF
            </Link>
          </div>
        </section>

        <div style={dividerStyle} />
      </div>
    </div>
  )
}