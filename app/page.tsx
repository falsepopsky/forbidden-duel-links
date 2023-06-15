export default function Home() {
  return (
    <>
      <div className='bgr dark:bgrdark absolute bottom-0 -z-50 h-9 w-full blur-2xl lg:blur-3xl' />
      <main className='mx-auto my-auto flex w-full max-w-screen-xl flex-col items-center sm:my-0'>
        <h1 className='mb-5 min-w-fit bg-gradient-to-r from-zinc-700 to-zinc-500 bg-clip-text px-2 text-center text-4xl font-normal text-transparent drop-shadow-lg dark:from-teal-400 dark:to-blue-500 sm:pt-20 md:text-5xl/snug lg:pt-32 xl:pt-36'>
          Forbidden Duel Links
        </h1>
        <p className='mb-4 mt-6 max-w-lg px-2 text-center md:text-lg/relaxed'>
          Stay ahead of the game with our comprehensive Yu-Gi-Oh! Duel Links banlist resources, providing up-to-date
          information on all banned and limited cards
        </p>
      </main>
    </>
  );
}
