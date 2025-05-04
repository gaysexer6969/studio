import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono'; // Removed as it was causing issues previously
import './globals.css';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GithubPagesRedirect } from '@/components/GithubPagesRedirect'; // Import the redirect component

// Determine basePath and host based on environment for metadata
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'nilayshenai'; // Adjust if your repository name is different
const basePath = isProd ? `/${repoName}` : '';
const host = isProd ? 'https://nilayshenai.github.io' : 'http://localhost:3000'; // Adjust localhost if needed

export const metadata: Metadata = {
  title: 'nilayshenai',
  description: 'portfolio',
  metadataBase: new URL(host), // Set base URL for OG images using dynamic host
  openGraph: {
    title: 'nilayshenai',
    description: 'portfolio',
    url: `${host}${basePath}/`, // Use dynamic host and basePath for the canonical URL
    siteName: 'nilayshenai',
    images: [
      {
        // Ensure the image URL is absolute and correctly points to the hosted image
        url: 'https://media.discordapp.net/attachments/932211798390734898/1363250767775142119/original-44db511d7d05ef1d65a8212c806bf925.png?ex=680559b7&is=68040837&hm=532b87a36c3004d1703fd6cb15092b5e0e7bea1679c7a0ffa36c1a49db67626c&=&format=webp&quality=lossless', // This absolute URL should work
        width: 1200, // Optional
        height: 630, // Optional
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {/* Add the redirect component here. It needs to be within providers that use client hooks like useSearchParams */}
            <GithubPagesRedirect />
            {children}
            <Toaster />
            <SonnerToaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
