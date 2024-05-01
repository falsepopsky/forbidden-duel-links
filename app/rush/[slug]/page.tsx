import { formatDateToISO, getRushBanlistByDate, getRushBanlists } from '@/lib/queries';
import { type Metadata } from 'next';
import Link from 'next/link';

interface TableProps {
  cardType: string;
  name: string;
}

interface ParamsProps {
  params: { slug: string };
}

export type SVGKEYS = 'forbidden' | 'limited-1' | 'limited-2' | 'limited-3' | 'no-longer-on-list';

export interface SVGKeys {
  forbidden: JSX.Element;
  'limited-1': JSX.Element;
  'limited-2': JSX.Element;
  'limited-3': JSX.Element;
  'no-longer-on-list': JSX.Element;
}

export function getSvgMapElement(key: SVGKEYS) {
  const svgMap: SVGKeys = {
    forbidden: (
      <>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 59.957 59.97' width={24}>
          <path d='M23.506.754c10.21-2.45 21.71 1.2 28.64 9.1 10.41 11 10.42 29.28 0 40.28-8.12 9.2-21.77 12.34-33.13 7.74-12.64-4.87-20.69-18.44-18.72-31.88 1.56-12.24 11.12-22.71 23.21-25.24z' />
          <path
            d='M24.476 2.534c7.58-1.6 15.88.27 22.08 4.91 8.39 6.09 12.87 16.78 11.1 27.03-1.89 12.21-12.28 22.13-24.59 23.36-11.4 1.38-22.63-4.84-27.92-14.95-4.66-8.84-4.13-19.98 1.49-28.26 4.08-6.21 10.56-10.62 17.84-12.09z'
            fill='red'
          />
          <path d='M30.006 8.924c8.02-.11 15.63 4.8 19.04 12.02 3 6.14 2.6 13.4-.61 19.38l-31.57-26.87c3.88-2.83 8.27-4.62 13.14-4.53zm-18.44 10.74l31.59 26.86c-3.89 2.84-8.28 4.63-13.15 4.54-8.02.11-15.63-4.8-19.04-12.02-3-6.14-2.6-13.4.6-19.38z' />
        </svg>
        <span className='hidden lg:block'>Forbidden</span>
      </>
    ),
    'limited-1': (
      <>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60.015 60.002' width={24}>
          <path d='M23.522.742c6.77-1.63 14.06-.49 20.25 2.6 12.15 6.25 18.82 20.59 15.31 33.89-3.11 13.2-15.52 22.84-29.08 22.77-14.78.09-27.86-11.32-29.7-26-2.24-15.16 8.24-30.12 23.22-33.26z' />
          <path
            d='M24.492 2.532c3.86-.79 7.93-.7 11.77.17 12.87 2.86 22.38 15.11 21.74 28.32-.34 13.27-10.81 24.92-23.96 26.69-11.98 1.88-23.95-4.68-29.23-15.49-3.85-7.86-3.75-17.36.34-25.1 3.9-7.45 11.08-12.92 19.34-14.59z'
            fill='red'
          />
          <path d='M24.502 9.742c10.23-2.82 21.37 2.69 25.08 12.67 4.1 10.39-.99 22.69-11.36 26.91-10.77 4.65-23.77-.77-27.81-11.81-4.46-11.46 2.17-24.68 14.09-27.77z' />
          <path
            d='M28.942 13.822c2-.2 4.05-.22 6.07-.3v33.88l-8.38-.02-.01-23.37c-1.49 0-2.98-.01-4.47-.01l-.04-6.44c2.43-.97 4.61-2.36 6.83-3.74z'
            fill='#ffce00'
          />
        </svg>
        <span className='hidden lg:block'>Limited 1</span>
      </>
    ),
    'limited-2': (
      <>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 59.975 59.956' width={24}>
          <path d='M23.493.745c9.97-2.37 21.21 1.03 28.15 8.59 7.44 7.49 10.23 19.32 7.01 29.37-2.08 7.31-7.32 13.54-13.83 17.36-11.09 6.35-25.64 4.85-34.97-3.93-7.49-6.6-11.18-17.26-9.42-27.07 1.86-11.85 11.32-21.85 23.06-24.32z' />
          <path
            d='M24.473 2.535c8.09-1.69 16.81.51 23.19 5.77 7.69 6.22 11.66 16.39 9.98 26.18-1.89 12.2-12.28 22.12-24.59 23.35-11.4 1.38-22.64-4.84-27.92-14.95-4.67-8.84-4.13-19.98 1.49-28.26 4.08-6.21 10.56-10.62 17.85-12.09z'
            fill='red'
          />
          <path d='M24.493 9.745c4.57-1.24 9.42-.87 13.78.95 7.71 3.23 12.71 10.97 12.72 19.3.03 9.93-7.2 18.93-17.06 20.6-10.93 2.2-21.99-4.92-24.37-15.83-2.63-10.84 4.1-22.26 14.93-25.02z' />
          <path
            d='M33.473 13.475c6.77 1.64 9.09 11.57 4.32 16.39-3.36 3.43-7.21 5.99-9.7 10.26l12.28.02.02 6.44c-6.96 0-13.92.01-20.88-.01.5-2.85.58-5.48 2.01-8.03 2.45-4.76 7.48-8.53 10.52-12.75 1.21-2.34.64-7.09-2.94-6.75-2.8 1.69-2.31 4.1-2.83 6.94h-7.24c.51-3.82.78-7.4 3.7-10.25 2.85-2.84 7.01-3.06 10.74-2.26z'
            fill='#ffce00'
          />
        </svg>
        <span className='hidden lg:block'>Limited 2</span>
      </>
    ),
    'limited-3': (
      <>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 59.977 59.976' width={24}>
          <path d='M24.444.551c13.11-2.64 26.85 4.43 32.57 16.46 5.65 11.5 3.05 25.95-6.36 34.66-9.35 9.2-24.31 10.93-35.62 4.32-10.6-6.15-16.71-18.57-14.63-30.72 1.9-12.31 11.79-22.48 24.04-24.72z' />
          <path
            d='M25.314 2.391c3.63-.62 7.4-.49 10.99.33 12.84 2.88 22.32 15.11 21.69 28.3-.35 13.36-10.9 25.02-24.15 26.73-12.43 1.86-24.85-5.38-29.66-16.91-3.53-8.25-2.75-18.02 2.05-25.59 4.2-6.77 11.22-11.51 19.08-12.86z'
            fill='red'
          />
          <path d='M27.324 9.221c6.36-.84 13.01 1.38 17.54 5.93 7.15 7.06 8.12 18.82 2.28 26.99-5.71 8.27-17.08 11.14-26.13 6.84-8.74-3.99-13.57-13.97-11.52-23.33 1.73-8.67 9.06-15.39 17.83-16.43z' />
          <path
            d='M39.574 19.461c1.12 3.88-.67 6.6-2.82 9.62 4.12 3.97 5.38 11.57 1.14 15.84-3.75 3.04-10.45 3.18-14.53.72-3.29-2.08-3.51-5.75-4.3-9.19 2.38-.04 4.75-.02 7.13-.01 1.11 1.61 1.16 5.04 3.77 4.59 3.21-.1 3.52-4.13 2.57-6.46-.72-3.13-4.41-2.37-6.82-2.95-.06-1.6-.08-3.2-.07-4.8 2.02-.3 4.01-.57 5.95-1.25 1.15-1.97 1.95-6.53-1.58-6.18-1.7-.38-2.75 2.16-3.68 3.22l-6.53-.06c.89-3.2 1.76-6.09 4.68-8.04 5.17-3.09 13.16-1.22 15.09 4.95z'
            fill='#ffce00'
          />
        </svg>
        <span className='hidden lg:block'>Limited 3</span>
      </>
    ),
    'no-longer-on-list': (
      <>
        <svg viewBox='0 0 43.09 38.46' width={24}>
          <path
            d='M21.64,12.46l-11,1v15l1,.17v7.92l11,1.92h1l9-1V14.46l-10-2h-1Zm1,24.91l-10-1.83v-6.75l10,1.67v6.91Zm9-.91l-8,.89V16.46l8-.89v20.89ZM22.64,15.46v13.83l-11-1.83V14.46l10.31-.94,6.47,1.29-5.79,.64ZM0,9.12l7.77,4.53,.5-.86L.5,8.26l-.5,.86ZM5.2,4.3l3.1,3.93,.79-.62-3.1-3.93-.79,.62Zm37.39,3.96l-7.77,4.53,.5,.86,7.77-4.53-.5-.86Zm-5.48-4.57l-3.1,3.93,.79,.62,3.1-3.93-.79-.62ZM21.53,0l-4.06,5.49-7.28-2.81s-.04,.1,3.42,6.93c5.2-.75,10.62-.75,15.82,0,3.47-6.88,3.43-6.92,3.43-6.92l-7.29,2.81L21.53,0Z'
            fill='#ffce00'
          />
        </svg>
        <span className='hidden lg:block'>No Longer on List</span>
      </>
    ),
  };

  if (key in svgMap) {
    return svgMap[key];
  }
}

export function TableRows({ cardType, name }: TableProps) {
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

export default async function Post({ params }: ParamsProps) {
  const { slug } = params;

  const restrictionType: string[] = [];
  const date = formatDateToISO(slug);
  const data = await getRushBanlistByDate(date);

  for (const item of data.RushRestriction) {
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
              className='flex h-11 items-center gap-1 rounded-sm border border-[#256860] bg-[#f3fbf9] px-2 hover:border-[#2b7d74] dark:bg-[#101b19]'
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
              className='rounded-t-md border border-[#256860] border-b-transparent bg-[#f3fbf9] pl-1 pt-1 text-lg/snug dark:bg-[#101b19]'>
              {type}
            </h2>

            <table className='border-collapse'>
              <tbody>
                {data.RushRestriction.filter((card) => card.type.name === type).map(({ card }) => (
                  <TableRows key={card.name} name={card.name} cardType={card.type.name} />
                ))}
              </tbody>
            </table>
          </div>
        );
      })}

      <Link
        href='/rush'
        aria-label='Link to rush page'
        className='group mb-6 ml-2 flex max-w-fit items-center gap-2 border border-blue-400 px-2 py-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-500 active:outline active:outline-1 active:outline-teal-600 xl:ml-0'>
        <svg width={22} height={22} viewBox='0 0 32 32' fill='currentColor'>
          <polygon points='14 26 15.41 24.59 7.83 17 28 17 28 15 7.83 15 15.41 7.41 14 6 4 16 14 26' />
        </svg>
        <span className='group-hover:opacity-80'>Go Back</span>
      </Link>
    </main>
  );
}
