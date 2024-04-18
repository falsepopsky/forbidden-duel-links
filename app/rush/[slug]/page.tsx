import { formatDateToISO, getRushBanlistByDate, getRushBanlists } from '@/lib/queries';
import { type Metadata } from 'next';
import Link from 'next/link';
import { Tab } from '../../Tab';

interface TableProps {
  cardType: string;
  name: string;
}

interface ParamsProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const data = await getRushBanlists();

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

function TableRows({ cardType, name }: TableProps) {
  if (cardType === 'Monster/Pendulum') {
    return (
      <tr className='odd:bg-slate-200/40 dark:odd:bg-zinc-800/40'>
        <td className='border border-zinc-400 px-2 py-1 dark:border-zinc-800'>
          <svg viewBox='0 0 24 32' width={26} height={26} className='stroke-gray-800'>
            <defs>
              <linearGradient id='pendulum' gradientTransform='rotate(90)'>
                <stop offset='0%' stopColor='#f59e0b' />
                <stop offset='100%' stopColor='#10b981' />
              </linearGradient>
            </defs>
            <g fill='url(#pendulum)'>
              <path d='M 0,0 V 31.999999 H 24.000001 V 0 Z M 20.000001,19.999999 H 4 V 4 h 16.000001 z' />
            </g>
          </svg>
        </td>
        <td className='border border-zinc-400 px-2 py-1 text-base/5 font-normal dark:border-zinc-800'>{name}</td>
      </tr>
    );
  }

  let cardTypeStyle: string;

  switch (cardType) {
    case 'Monster':
      cardTypeStyle = 'fill-amber-300';
      break;
    case 'Monster/Effect':
      cardTypeStyle = 'fill-amber-500';
      break;
    case 'Monster/Fusion':
      cardTypeStyle = 'fill-violet-700';
      break;
    case 'Monster/Link':
      cardTypeStyle = 'fill-blue-700';
      break;
    case 'Monster/Ritual':
      cardTypeStyle = 'fill-indigo-400';
      break;
    case 'Monster/Synchro':
      cardTypeStyle = 'fill-white';
      break;
    case 'Monster/Xyz':
      cardTypeStyle = 'fill-black';
      break;
    case 'Spell':
      cardTypeStyle = 'fill-emerald-500';
      break;
    default:
      cardTypeStyle = 'fill-fuchsia-600';
      break;
  }

  cardTypeStyle += ' stroke-gray-800';

  return (
    <tr className='odd:bg-slate-200/40 dark:odd:bg-zinc-800/40'>
      <td className='border border-zinc-400 px-2 py-1 dark:border-zinc-800'>
        <svg viewBox='0 0 24 32' width={26} height={26} className={cardTypeStyle}>
          <path d='M 0,0 V 31.999999 H 24.000001 V 0 Z M 20.000001,19.999999 H 4 V 4 h 16.000001 z' />
        </svg>
      </td>
      <td className='w-full border border-zinc-400 px-2 py-1 text-base/5 font-normal dark:border-zinc-800'>{name}</td>
    </tr>
  );
}

export default async function Post({ params }: ParamsProps) {
  const { slug } = params;

  const date = formatDateToISO(slug);
  const data = await getRushBanlistByDate(date);

  const filterByTypeRestriction = (type: string) => {
    const typeExists = data?.RushRestriction.some((card) => card.type.name === type);
    if (!typeExists) return null;
    return data?.RushRestriction.filter((card) => card.type.name === type);
  };

  const free = filterByTypeRestriction('No Longer on List');
  const limited = filterByTypeRestriction('Limited 1');
  const limitedTwo = filterByTypeRestriction('Limited 2');
  const limitedThree = filterByTypeRestriction('Limited 3');
  const forbidden = filterByTypeRestriction('Forbidden');

  const Free = free?.map(({ card }, i) => {
    return <TableRows key={i} name={card.name} cardType={card.type.name} />;
  });

  const Forbidden = forbidden?.map(({ card }, i) => {
    return <TableRows key={i} name={card.name} cardType={card.type.name} />;
  });

  const LimitedOne = limited?.map(({ card }, i) => {
    return <TableRows key={i} name={card.name} cardType={card.type.name} />;
  });

  const LimitedTwo = limitedTwo?.map(({ card }, i) => {
    return <TableRows key={i} name={card.name} cardType={card.type.name} />;
  });
  const LimitedThree = limitedThree?.map(({ card }, i) => {
    return <TableRows key={i} name={card.name} cardType={card.type.name} />;
  });

  return (
    <main className='mx-auto flex w-full max-w-screen-xl flex-col flex-nowrap gap-4'>
      <h1 className='mb-5 mt-16 min-w-fit px-2 text-center font-normal md:text-5xl/snug lg:mt-24 xl:mt-28'>{slug}</h1>
      <div className='mt-2 overflow-x-auto px-2 xl:px-0'>
        <Tab free={Free} forbidden={Forbidden} limited1={LimitedOne} limited2={LimitedTwo} limited3={LimitedThree} />
      </div>

      <Link
        href='/rush'
        aria-label='Link to speed page'
        className='group mb-6 ml-2 flex max-w-fit items-center gap-2 border border-blue-400 px-2 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-500 active:outline active:outline-1 active:outline-teal-600 xl:ml-0'
      >
        <svg width={22} height={22} viewBox='0 0 32 32' fill='currentColor'>
          <polygon points='14 26 15.41 24.59 7.83 17 28 17 28 15 7.83 15 15.41 7.41 14 6 4 16 14 26' />
        </svg>
        <span className='group-hover:opacity-80'>Go Back</span>
      </Link>
    </main>
  );
}
