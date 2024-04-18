import { getRushBanlists } from '@/lib/queries';
import Link from 'next/link';

export default async function Banlist() {
  const years = ['2024', '2023'];
  const data = await getRushBanlists();
  const dates = data?.map(({ id, slug }) => {
    return {
      id,
      slug,
    };
  });

  const banlist = years.map((year, i) => {
    const filterDatesByYear = dates?.filter((item) => item.slug.includes(year));

    return (
      <div
        key={i}
        className='flex flex-col rounded-md border border-gray-300 bg-slate-200/40 px-2 py-1 dark:border-transparent dark:bg-zinc-800/40'
      >
        <span className='mx-auto mt-1 max-w-fit rounded-xl bg-teal-500 px-2 py-1 text-xs font-normal text-teal-950 dark:bg-teal-950 dark:text-teal-500'>
          {year}
        </span>
        <ol className='mt-3 list-disc space-y-1 pl-4 text-sm marker:text-teal-900 dark:marker:text-teal-400'>
          {filterDatesByYear?.map(({ id, slug }) => (
            <li key={id}>
              <Link
                href={`/rush/${slug}`}
                className='focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-500 active:outline active:outline-1 active:outline-teal-600'
              >
                {slug}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    );
  });

  return (
    <main className='mx-auto flex w-full max-w-screen-xl flex-col flex-nowrap items-center justify-center gap-4'>
      <h1 className='mb-5 mt-28 min-w-fit bg-gradient-to-t from-zinc-900 to-zinc-600 bg-clip-text px-2 text-center text-4xl font-normal text-transparent drop-shadow-lg dark:from-teal-400 dark:to-teal-700 md:text-5xl/snug lg:mt-32 xl:mt-36'>
        Rush Duel Banlist Archive
      </h1>
      <p className='mb-4 mt-6 max-w-lg px-2 text-center md:max-w-2xl md:text-lg/relaxed'>
        Each year features the dates of the applied banlists, which contain the changes. Explore these dates to discover
        how card restrictions have influenced competitive play.
      </p>
      <div className='my-4 flex flex-row flex-wrap items-start justify-center gap-2'>{banlist}</div>
    </main>
  );
}
