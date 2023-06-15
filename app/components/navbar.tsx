import Link from 'next/link';
import { Menu } from './menu';
import { ToggleTheme } from './toggle';

export const Navbar = () => {
  const links = [
    { id: 1, name: 'Banlist', path: '/banlist' },
    { id: 2, name: 'About', path: '/about' },
  ];

  const linkPages = links.map((link) => (
    <Link
      key={link.id}
      className='hidden hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-500 active:outline active:outline-1 active:outline-teal-600 sm:block'
      href={link.path}
    >
      {link.name}
    </Link>
  ));

  return (
    <nav className='flex h-14 items-center justify-between border-b px-6 text-sm font-medium dark:border-y-zinc-800'>
      <Link
        href='/'
        aria-label='Link to home page'
        className='hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-500 active:outline active:outline-1 active:outline-teal-600'
      >
        Forbidden Duel Links
      </Link>

      <div className='flex items-center gap-4'>
        {linkPages}
        <Menu />
        <div className='hidden md:block md:h-5 md:w-px md:bg-neutral-300 md:dark:bg-zinc-800' />
        <ToggleTheme />
      </div>
    </nav>
  );
};
