import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { ModeProvider } from "@/components/mode-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { LayoutContent } from "@/components/layout-content";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Estela",
  description: "Cuando la tecnología y el conocimiento convergen",
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
                <ModeToggle />
              </ModeProvider>
              <Analytics />
            </LanguageProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
