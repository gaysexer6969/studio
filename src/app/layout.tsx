import type {Metadata} from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono'; // Ensure this font is correctly installed/imported
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/Header';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

export const metadata: Metadata = {
  title: 'Nilay Shenai - Portfolio',
  description: 'Personal portfolio website for Nilay Shenai.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("!scroll-smooth", GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning // Add this prop
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <Header />
        <main className="container mx-auto px-4 py-8 pt-20 md:pt-24">
          {children}
        </main>
        <Toaster /> {/* Add Toaster here */}
        <footer className="py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nilay Shenai. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
