import { TableRows, getSvgMapElement, type SVGKEYS } from '@/app/Shared';
import { formatDateToISO, getSpeedBanlistByDate, getSpeedBanlists } from '@/lib/queries';
import { type Metadata } from 'next';
import Link from 'next/link';

interface ParamsProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const data = await getSpeedBanlists();

  return data.map(({ slug }) => ({
    slug,
  }));
}

export function generateMetadata({ params }: ParamsProps): Metadata {
  return {
    title: 'Duel Links Banlist Changes for ' + params.slug,
  };
}

export const dynamicParams = false;

export default async function Post({ params }: ParamsProps) {
  const { slug } = params;

  const restrictionType: string[] = [];
  const date = formatDateToISO(slug);
  const data = await getSpeedBanlistByDate(date);

  for (const item of data.SpeedRestriction) {
    if (!restrictionType.some((existingType) => existingType === item.type.name)) {
      restrictionType.push(item.type.name);
    }
  }

  return (
    <main className='mx-auto flex w-full max-w-screen-xl flex-col flex-nowrap gap-4'>
      <h1 className='mb-5 mt-16 min-w-fit px-2 text-center font-normal md:text-5xl/snug lg:mt-24 xl:mt-28'>{slug}</h1>
      <div className='grid auto-cols-max grid-flow-col gap-1 self-center'>
        {restrictionType.map((type) => {
          return (
            <a
              href={`#${type.toLowerCase().replaceAll(' ', '-')}`}
              className='flex h-11 items-center gap-1 rounded-sm border border-[#256860] bg-teal-100/70 px-2 hover:border-[#2b7d74] dark:bg-[#101b19]'
              key={type}>
              {getSvgMapElement(type.toLowerCase().replaceAll(' ', '-') as SVGKEYS)}
            </a>
          );
        })}
      </div>

      {restrictionType.map((type) => {
        return (
          <div key={type} className='mb-3 mt-6 px-2 xl:px-0'>
            <h2
              id={type.toLowerCase().replaceAll(' ', '-')}
              className='rounded-t-md border border-[#256860] border-b-transparent bg-teal-100/70 pl-1 pt-1 dark:bg-[#101b19] md:text-lg/snug'>
              {type}
            </h2>

            <table className='border-collapse'>
              <tbody>
                {data.SpeedRestriction.filter((card) => card.type.name === type).map(({ card }) => (
                  <TableRows key={card.name} name={card.name} cardType={card.type.name} />
                ))}
              </tbody>
            </table>
          </div>
        );
      })}

      <Link
        href='/speed'
        aria-label='Link to speed page'
        className='group mb-6 ml-2 flex max-w-fit items-center gap-2 border border-blue-400 px-2 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-500 active:outline active:outline-1 active:outline-teal-600 xl:ml-0'>
        <svg width={22} height={22} viewBox='0 0 32 32' fill='currentColor'>
          <polygon points='14 26 15.41 24.59 7.83 17 28 17 28 15 7.83 15 15.41 7.41 14 6 4 16 14 26' />
        </svg>
        <span className='group-hover:opacity-80'>Go Back</span>
      </Link>
    </main>
  );
}
