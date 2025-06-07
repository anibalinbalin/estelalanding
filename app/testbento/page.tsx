import Features from "@/components/features-11"

export default function TestBentoPage() {
  return (
    <main className="mt-10 min-[1100px]:mt-24">
      <div className="container mx-auto px-5 sm:px-10">
        <div className="m-auto flex max-w-[1200px] flex-col items-center">
          <div className="mb-4 min-[1000px]:mb-8 text-center">
            <span 
              className="text-sm tracking-wider uppercase text-muted-foreground"
              style={{ 
                fontFamily: 'GT_America_Mono, monospace',
                fontFeatureSettings: '"ss02" on, "ss03" on, "ss09" on, "ss06" on, "ss07" on, "ss08" on, "calt" off'
              }}
            >
              Estela / Test Bento
            </span>
          </div>
          <h1 
            className="text-4xl min-[800px]:text-4xl min-[1000px]:text-5xl font-normal text-foreground mb-8 text-center"
            style={{
              fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
              lineHeight: '1.2',
              letterSpacing: 'normal'
            }}
          >
            Bento Grid Features
          </h1>
          <p 
            className="text-center text-muted-foreground text-lg mb-12 max-w-2xl"
            style={{
              fontFamily: 'SuisseIntl, -apple-system, system-ui, Helvetica, Arial, sans-serif',
              fontWeight: 400,
              lineHeight: '1.6'
            }}
          >
            Testing the Tailark features component implementation.
          </p>
        </div>
        
      </div>
      
      {/* Tailark Features Component */}
      <Features />
    </main>
  )
}