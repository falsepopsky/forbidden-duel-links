import Link from 'next/link';
import { Menu } from './Menu';
import { ToggleTheme } from './ToggleTheme';

export const Navbar = () => {
  const links = [
    { id: 1, name: 'Speed', path: '/speed' },
    { id: 2, name: 'Rush', path: '/rush' },
    { id: 3, name: 'About', path: '/about' },
  ];

  const linkPages = links.map((link) => (
    <Link
      key={link.id}
      className='hidden hover:opacity-80 focus-visible:outline focus-visible:outline-teal-500 active:outline active:outline-teal-600 sm:block'
      href={link.path}>
      {link.name}
    </Link>
  ));

  return (
    <nav className='flex h-14 items-center justify-between border-b px-6 text-sm dark:border-y-zinc-800'>
      <Link
        href='/'
        aria-label='Link to home page'
        className='hover:opacity-80 focus-visible:outline focus-visible:outline-teal-500 active:outline active:outline-teal-600'>
        Forbidden Duel Links
      </Link>

      <div className='flex items-center gap-4'>
        {linkPages}
        <Menu />
        <div className='hidden sm:block sm:h-5 sm:w-px sm:bg-neutral-300 sm:dark:bg-zinc-800' />
        <ToggleTheme />
      </div>
    </nav>
  );
};
