import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";
import { Agentation } from "agentation";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { ModeProvider } from "@/components/mode-provider";
import { LayoutContent } from "@/components/layout-content";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.este.la"),
  title: "Estela — AI Engineering",
  description: "Cuando la inteligencia artificial y el conocimiento convergen. Ingeniería de IA, desarrollo e infraestructura privada.",
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Estela",
  url: "https://www.este.la",
  email: "hola@este.la",
  telephone: "+598 27113184",
  description:
    "AI engineering studio in Montevideo, Uruguay. We design, build and run AI systems in production: model integration, custom development and private AI infrastructure.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "21 de Setiembre 3015, 802",
    addressLocality: "Montevideo",
    addressCountry: "UY",
  },
  knowsAbout: [
    "AI engineering",
    "Large language models",
    "Private AI infrastructure",
    "Custom software development",
    "Technology consulting",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning>
        <head>
          <link rel="preload" href="/font/SuisseIntl-Regular-WebS.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/font/GT-America-Mono-Regular-OCC.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
        </head>
        <body
          className="antialiased bg-background text-foreground"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider>
              <ModeProvider>
                <LayoutContent>
                  {children}
                </LayoutContent>
              </ModeProvider>
              <Analytics />
              {process.env.NODE_ENV === "development" && <Agentation />}
            </LanguageProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
