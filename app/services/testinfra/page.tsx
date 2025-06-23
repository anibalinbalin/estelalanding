export default function TestInfraPage() {
  return (
    <div className="min-h-screen bg-[var(--surface-default-p3)] text-[var(--content-raise-p3)] font-mono">
      {/* Header Navigation */}
      <div className="sticky top-0 z-20 border-b border-[var(--stroke-secondary-p3)] bg-[var(--surface-default-p3)]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-sm text-[var(--content-secondary-p3)]">Infrastructure Testing Console</span>
            </div>
            <div className="text-xs text-[var(--content-tertiary-p3)]">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1400px] p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-medium tracking-tight">
            Programmable networking, elastic compute and storage
          </h1>
          <p className="text-sm text-[var(--content-secondary-p3)]">
            Infrastructure validation and testing suite for cloud-native workloads
          </p>
        </div>

        {/* Service Status Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Programmable Networking Panel */}
          <div className="border border-[var(--stroke-secondary-p3)] bg-[var(--surface-raise-p3)]">
            <div className="border-b border-[var(--stroke-secondary-p3)] bg-[var(--surface-default-p3)] px-4 py-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Programmable Networking</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="text-xs text-[var(--content-secondary-p3)]">OPERATIONAL</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Control Plane</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Data Plane</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Load Balancing</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Security Groups</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>VPN Gateway</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Elastic Compute Panel */}
          <div className="border border-[var(--stroke-secondary-p3)] bg-[var(--surface-raise-p3)]">
            <div className="border-b border-[var(--stroke-secondary-p3)] bg-[var(--surface-default-p3)] px-4 py-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Elastic Compute</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="text-xs text-[var(--content-secondary-p3)]">OPERATIONAL</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Auto Scaling</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Instance Types</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>GPU Acceleration</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Container Runtime</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-400"></div>
                    <span>Resource Allocation</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">WARN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Distributed Storage Panel */}
          <div className="border border-[var(--stroke-secondary-p3)] bg-[var(--surface-raise-p3)]">
            <div className="border-b border-[var(--stroke-secondary-p3)] bg-[var(--surface-default-p3)] px-4 py-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">Distributed Storage</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span className="text-xs text-[var(--content-secondary-p3)]">OPERATIONAL</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Block Storage</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Object Storage</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Replication</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Snapshots</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                    <span>Backup Systems</span>
                  </div>
                  <span className="text-[var(--content-tertiary-p3)]">OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Overview */}
        <div className="mt-8">
          <div className="border border-[var(--stroke-secondary-p3)] bg-[var(--surface-raise-p3)]">
            <div className="border-b border-[var(--stroke-secondary-p3)] bg-[var(--surface-default-p3)] px-4 py-3">
              <h3 className="text-sm font-medium">Infrastructure Overview</h3>
            </div>
            <div className="p-4">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Rack Scale Design */}
                <div>
                  <h4 className="mb-3 text-xs font-medium text-[var(--content-secondary-p3)]">RACK-SCALE DESIGN</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        <span>Power Management</span>
                      </div>
                      <span className="text-[var(--content-tertiary-p3)]">3.2kW optimized</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        <span>Thermal Design</span>
                      </div>
                      <span className="text-[var(--content-tertiary-p3)]">Unified cooling</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        <span>Management Plane</span>
                      </div>
                      <span className="text-[var(--content-tertiary-p3)]">Single control</span>
                    </div>
                  </div>
                </div>

                {/* Self-Service Networking */}
                <div>
                  <h4 className="mb-3 text-xs font-medium text-[var(--content-secondary-p3)]">SELF-SERVICE NETWORKING</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        <span>Virtual Networks</span>
                      </div>
                      <span className="text-[var(--content-tertiary-p3)]">24 active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        <span>Security Policies</span>
                      </div>
                      <span className="text-[var(--content-tertiary-p3)]">87 rules</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                        <span>Load Balancers</span>
                      </div>
                      <span className="text-[var(--content-tertiary-p3)]">12 configured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-8">
          <div className="border border-[var(--stroke-secondary-p3)] bg-[var(--surface-raise-p3)]">
            <div className="border-b border-[var(--stroke-secondary-p3)] bg-[var(--surface-default-p3)] px-4 py-3">
              <h3 className="text-sm font-medium">Performance Metrics</h3>
            </div>
            <div className="p-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="text-lg font-medium text-[var(--content-raise-p3)]">99.99%</div>
                  <div className="text-xs text-[var(--content-secondary-p3)]">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium text-[var(--content-raise-p3)]">&lt;1ms</div>
                  <div className="text-xs text-[var(--content-secondary-p3)]">Network Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium text-[var(--content-raise-p3)]">400Gb/s</div>
                  <div className="text-xs text-[var(--content-secondary-p3)]">Bandwidth</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-medium text-[var(--content-raise-p3)]">1M+</div>
                  <div className="text-xs text-[var(--content-secondary-p3)]">IOPS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}