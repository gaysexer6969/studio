import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono'; // Removed as it was causing issues previously
import './globals.css';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// QueryClient related imports removed as they were commented out and causing hydration errors previously

export const metadata: Metadata = {
  title: 'nilayshenai',
  description: 'portfolio',
  metadataBase: new URL('https://nilayshenai.github.io'), // Set base URL for OG images
  openGraph: {
    title: 'nilayshenai',
    description: 'portfolio',
    url: 'https://nilayshenai.github.io/nilayshenai/', // Ensure this matches your deployment path if using gh-pages subdir
    siteName: 'nilayshenai',
    images: [
      {
        url: 'https://media.discordapp.net/attachments/932211798390734898/1363250767775142119/original-44db511d7d05ef1d65a8212c806bf925.png?ex=680559b7&is=68040837&hm=532b87a36c3004d1703fd6cb15092b5e0e7bea1679c7a0ffa36c1a49db67626c&=&format=webp&quality=lossless', // Must be absolute URL
        width: 1200, // Optional
        height: 630, // Optional
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// QueryClient setup removed

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Added suppressHydrationWarning for robustness against minor mismatches
    <html lang="en" className={cn("!scroll-smooth", GeistSans.variable)} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable // Removed GeistMono.variable as font is not used
        )}
      >
        {/* QueryClientProvider removed */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
            <SonnerToaster />
          </TooltipProvider>
        </ThemeProvider>
        {/* QueryClientProvider removed */}
      </body>
    </html>
  );
}
