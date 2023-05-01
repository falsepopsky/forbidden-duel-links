import Head from 'next/head';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const metadata = {
  title: 'Forbidden Duel Links',
  description:
    'Stay up-to-date with the current Yu-Gi-Oh! Duel Links banlist. Our comprehensive resources provide all the latest information on banned and limited cards',
  keywords: 'Yu-Gi-Oh!, YuGiOh, Duel Links, Banlist',
};

export default function Meta({
  title = metadata.title,
  description = metadata.description,
  keywords = metadata.keywords,
}: MetaProps) {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:title' content={title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta name='color-scheme' content='dark light' />
      <title>{title}</title>
    </Head>
  );
}
