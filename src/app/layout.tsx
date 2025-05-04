import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import React from 'react';

export const metadata: Metadata = {
  title: 'nilayshenai',
  description: 'portfolio',
  openGraph: {
    title: 'nilayshenai',
    description: 'portfolio',
    siteName: 'nilayshenai',
    images: [
      {
        url: 'https://media.discordapp.net/attachments/932211798390734898/1363250767775142119/original-44db511d7d05ef1d65a8212c806bf925.png?ex=680559b7&is=68040837&hm=532b87a36c3004d1703fd6cb15092b5e0e7bea1679c7a0ffa36c1a49db67626c&=&format=webp&quality=lossless',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("!scroll-smooth", GeistSans.variable)} suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", GeistSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TooltipProvider>
            {children}
            <Toaster />
            <SonnerToaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
