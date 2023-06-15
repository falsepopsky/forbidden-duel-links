import Link from 'next/link';

function getYearArray(): { id: number; year: string }[] {
  const startYear = 2017;
  const endYear = 2023;
  const years: { id: number; year: string }[] = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push({ id: year - startYear, year: year.toString() });
  }

  return years;
}

export default function Banlist() {
  const yearArray = getYearArray();
  const listYears = yearArray.map((yearObj) => {
    const { id, year } = yearObj;
    return (
      <li
        key={id}
        className='flex h-6 items-center justify-between border-b py-5 text-sm font-medium dark:border-y-zinc-800 hover:dark:bg-red-900'
      >
        <Link
          href={`/banlist/${year}`}
          aria-label='Link to home page'
          className='hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-500 active:outline active:outline-1 active:outline-teal-600'
        >
          {year}
        </Link>
      </li>
    );
  });

  return (
    <main className='flex flex-col flex-nowrap items-center justify-center gap-10'>
      <ol className='mt-32 border-2 border-red-600'>{listYears}</ol>
    </main>
  );
}
