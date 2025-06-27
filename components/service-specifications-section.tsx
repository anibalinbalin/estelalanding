'use client'



export function ServiceSpecificationsSection() {
  return (
    <>
      <div className="sticky top-0 z-20">
        <div className="pointerEvents-[none] absolute top-0 right-0 bottom-0 left-0 border-b bg-[#080f11d9] backdrop-[var(--tw-backdrop-sepia)] backdrop-[var(--tw-backdrop-saturate)] backdrop-[var(--tw-backdrop-opacity)] backdrop-[var(--tw-backdrop-invert)] backdrop-[var(--tw-backdrop-hue-rotate)] backdrop-[var(--tw-backdrop-grayscale)] backdrop-[var(--tw-backdrop-contrast)] backdrop-[var(--tw-backdrop-brightness)] backdrop-[var(--tw-backdrop-blur)] transition-opacity ease-[cubic-bezier(.4,0,.2,1)] duration-[.15s] border-b-[var(--stroke-secondary-p3)]"></div>
        <nav dir="ltr" className="w-[100%]">
          <div className="absolute left-0 right-0 top-[54px] flex shrink items-center justify-center transition-transform ease-[cubic-bezier(.4,0,.2,1)] duration-[.1s]"></div>
        </nav>
      </div>
      <main className="mt-0">
        <div className="flex flex-col gap-20 min-[600px]:gap-28 min-[900px]:gap-48">
          <section>
            <div className="border-b border-b-[var(--stroke-default-p3)]"></div>
          </section>
          <section>
            <div className="w-[100%] px-5 min-[600px]:px-10">
              <div className="m-auto max-w-[1200px]">
                <h1 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal min-[600px]:font-normal min-[1000px]:font-normal mb-6 min-[600px]:mb-10 min-[1000px]:mb-14 text-center min-[600px]:text-left font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal min-[800px]:pr-6">
                  Technical Specifications
                  <br />
                  <span style={{color: 'color(display-p3 0.4941 0.5137 0.5216)', fontSize: '36px', lineHeight: '42px', fontWeight: '400', fontStyle: 'normal'}}>
                    Hardware and software specifications for our standard deployments.
                  </span>
                </h1>
              </div>
            </div>
            <div className="relative border-t border-[var(--stroke-default-p3)] border-b min-[900px]:border-b-[0px]">
              {/* Compute Infrastructure */}
              <div className="w-[100%] px-5 min-[600px]:px-10 mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                <div className="m-auto max-w-[1200px]">
                  <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">
                    Compute Infrastructure
                  </h2>
                </div>
              </div>

              {/* Standard Compute Node */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">Specifications</h2>
                  </div>
                </div>
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="py-8 m-auto max-w-[1200px] border bg-[var(--surface-raise-p3)] border-[var(--stroke-secondary-p3)] shadow-[var(--elevation-1)] rounded-[var(--border-radius-lg)] min-[600px]:rounded-[var(--border-radius-xl)]">
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Processor</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">2x AMD EPYC 9354 (32 cores each)</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Total Cores</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">64 physical / 128 threads</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Memory</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">512GB - 2TB DDR5-4800 ECC</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Storage Bays</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">8x 2.5" NVMe U.2</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Network</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">4x 25GbE + 2x 100GbE SFP28</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Power Supply</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">Redundant 1100W Platinum PSUs</div>
                    </div>
                    <div className="my-3 w-[100%] h-[1px] border-b border-b-[var(--stroke-secondary-p3)]"></div>
                    <div className="px-4 min-[600px]:px-6 my-4 min-[600px]:my-0 min-[600px]:flex items-baseline">
                      <div className="pl-0 basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-[1.625rem] text-lg tracking-wide text-[var(--content-secondary-p3)]">Form Factor</div>
                      <div className="basis-1/2 font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal leading-6 text-base tracking-wide text-[var(--content-secondary-p3)] containerType-[inline-size] min-[600px]:!pl-0">2U Rack Mount</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Virtualization Platform */}
              <div className="mt-[calc(5rem_*_calc(1_-_var(--tw-space-y-reverse)))] min-[1000px]:mt-[calc(9rem_*_calc(1_-_var(--tw-space-y-reverse)))] mb-[7rem]">
                <div className="w-[100%] px-5 min-[600px]:px-10">
                  <div className="m-auto max-w-[1200px]">
                    <h2 className="text-balance textWrapStyle-[balance] m-0 mb-4 text-[#7e8385] text-[1.5625rem] min-[1000px]:text-4xl font-normal min-[1000px]:font-normal font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[1000px]:leading-[2.625rem] tracking-wide min-[1000px]:tracking-normal">VMware vSphere 8.0</h2>
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
                          Hardware That Scales With You
                        </h2>
                      </div>
                      <div className="flex flex-col gap-2 text-center">
                        <a href="/contact" className="px-3 items-center text-[var(--content-secondary-p3)] [text-decoration:inherit] inline-flex h-8 justify-center rounded-[var(--border-radius)] align-top font-[GT_America_Mono,monospace] font-normal leading-4 text-[.75rem] tracking-wider uppercase [font-feature-settings:'ss02'_on,'ss03'_on,'ss09'_on,'ss06'_on,'ss07'_on,'ss08'_on,'calt'_off] shadow-[var(--elevation-1)] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:rounded-[var(--border-radius)] after:border after:border-current after:opacity-100 after:text-[var(--base-neutral-300)] hover:bg-[var(--surface-hover-p3)]">
                          CONTACT
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