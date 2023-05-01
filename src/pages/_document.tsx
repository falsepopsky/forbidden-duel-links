import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600&display=swap'
          rel='stylesheet'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <body className='flex min-h-screen flex-col flex-nowrap overflow-y-auto overflow-x-hidden bg-slate-100 text-zinc-800 selection:bg-neutral-900 selection:text-neutral-300 dark:bg-neutral-900 dark:text-slate-100 dark:selection:bg-neutral-300 dark:selection:text-neutral-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
