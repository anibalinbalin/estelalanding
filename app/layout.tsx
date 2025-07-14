import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
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
              <Navbar />
              {children}
              <Analytics />
            </LanguageProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
