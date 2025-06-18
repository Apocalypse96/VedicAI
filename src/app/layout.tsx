import type { Metadata } from 'next';
import { Inter, Poppins, Noto_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sanskrit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VedicAI - Transform Academic Content into Intelligent Educational Videos',
  description: 'An AI-powered education platform that transforms academic PDFs and notes into intelligent, high-retention educational videos using advanced Text-to-Video technology.',
  keywords: ['education', 'AI', 'video generation', 'learning', 'Vedic', 'academic', 'PDF to video'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${notoSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}