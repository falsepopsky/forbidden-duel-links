export default function NotFound() {
  return (
    <main className='mx-auto flex h-[calc(100vh-3.5rem)] w-full max-w-(--breakpoint-xl) flex-col flex-nowrap items-center justify-center gap-8 font-semibold'>
      <p className='text-base text-blue-600 dark:text-green-300'>404</p>
      <p className='text-3xl sm:text-5xl'>Page not found</p>
    </main>
  );
}
