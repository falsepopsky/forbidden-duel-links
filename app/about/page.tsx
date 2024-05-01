import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function About() {
  return (
    <main className='mx-auto w-full max-w-screen-md px-2 leading-7 md:px-0'>
      <section>
        <h2 className='mb-5 mt-12 text-2xl/relaxed text-violet-700 dark:text-violet-500 md:text-4xl/relaxed'>ABOUT</h2>

        <p className='mb-4'>I initiated this project for two main reasons:</p>

        <ol className='list-inside list-decimal space-y-2 text-zinc-700 marker:text-violet-700 dark:text-slate-300'>
          <li>
            <b className='font-normal text-zinc-900 dark:text-slate-50'>Improved User Experience:</b> The game&apos;s
            native UI/UX can make it challenging to access banlist dates efficiently. I aimed to create a more
            user-friendly platform for this purpose.
          </li>

          <li>
            <b className='font-normal text-zinc-900 dark:text-slate-50'>Ad-Free Access:</b> Many other sites inundate
            users with intrusive ads and pop-ups. I envisioned a straightforward, ad-free resource that provides direct
            access to banlist information without any distractions or spam.
          </li>
        </ol>
      </section>

      <section className='mb-5'>
        <h2 className='mb-5 mt-12 text-2xl/relaxed text-violet-700 dark:text-violet-500 md:text-4xl/relaxed'>
          CONTRIBUTION
        </h2>

        <p className='mb-4'>
          You can be a part of the Forbidden Duel Links development and help enhance our platform in several ways:
        </p>

        <ol className='list-inside list-disc space-y-2 text-zinc-700 marker:text-violet-700 dark:text-slate-300'>
          <li>
            <b className='font-normal text-zinc-900 dark:text-slate-50'>Report Issues:</b> If you come across any bugs
            or inaccuracies, such as incorrect dates or card names, please open an issue. Your feedback is crucial in
            maintaining the quality of our data.
          </li>

          <li>
            <b className='font-normal text-zinc-900 dark:text-slate-50'>Request Features:</b> Have ideas for new
            features or improvements? Share your suggestions by opening an issue.
          </li>

          <li>
            <b className='font-normal text-zinc-900 dark:text-slate-50'>Contribute Code:</b> Developers can contribute
            directly to our codebase by submitting pull requests. Detailed guidelines on contributing code can be found
            in our{' '}
            <a
              href='https://github.com/falsepopsky/forbidden-duel-links/blob/main/.github/CONTRIBUTING.md'
              className='text-zinc-800 dark:text-slate-100'
              aria-label='Contributing docs in GitHub'>
              CONTRIBUTING
            </a>{' '}
            guide.
          </li>
        </ol>
      </section>
    </main>
  );
}
