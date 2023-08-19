import { Navbar } from '@/comp/NavBar';
import Theme from '@/comp/ThemeProvider';
import { type Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ['200', '300', '400', '500'],
  style: 'normal',
  preload: false,
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Forbidden Duel Links',
  description:
    'Stay up-to-date with the current Yu-Gi-Oh! Duel Links banlist. Our comprehensive resources provide all the latest information on banned and limited cards',
  keywords: 'Yu-Gi-Oh!, YuGiOh, Duel Links, Banlist',
  colorScheme: 'dark light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning className={ibm_plex_sans.className}>
      <body className='bg-slate-100 text-zinc-800 selection:bg-neutral-900 selection:text-neutral-300 dark:bg-neutral-900 dark:text-slate-100 dark:selection:bg-neutral-300 dark:selection:text-neutral-900'>
        <Theme attribute='class'>
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
