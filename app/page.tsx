export default function Home() {
  return (
    <>
      <div className='absolute bottom-0 -z-50 h-9 w-full bg-linear-to-b from-red-500 to-red-600 bg-bottom bg-no-repeat blur-2xl lg:blur-3xl dark:bg-linear-to-b dark:from-teal-400 dark:to-teal-700' />
      <main className='mx-auto flex h-[calc(100vh-3.5rem)] w-full max-w-(--breakpoint-xl) flex-col items-center'>
        <h1 className='mt-28 mb-5 min-w-fit bg-linear-to-t from-zinc-900 to-zinc-600 bg-clip-text px-2 text-center text-4xl font-normal text-transparent drop-shadow-lg md:text-5xl/snug lg:mt-32 xl:mt-36 dark:from-teal-400 dark:to-teal-700'>
          Forbidden Duel Links
        </h1>
        <p className='mt-6 mb-4 max-w-lg px-2 text-center md:text-lg/relaxed'>
          Stay ahead of the game with our comprehensive Yu-Gi-Oh! Duel Links banlist resources, providing up-to-date
          information on all banned and limited cards
        </p>
      </main>
    </>
  );
}
