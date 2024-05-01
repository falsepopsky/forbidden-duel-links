'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

export function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='sm:hidden'>
        <button
          className='flex h-6 w-6 items-center justify-center rounded-md hover:bg-zinc-900/5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-500 active:outline active:outline-1 active:outline-teal-600 dark:hover:bg-white/5'
          aria-label='Navigation options'
          type='button'>
          <svg id='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='currentColor'>
            <title>Overflow menu vertical</title>
            <circle cx='16' cy='8' r='2'></circle>
            <circle cx='16' cy='16' r='2'></circle>
            <circle cx='16' cy='24' r='2'></circle>
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className='min-w-fit rounded-md border bg-slate-50 p-2 text-sm font-light shadow-lg will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade dark:border-zinc-600 dark:bg-neutral-800 sm:hidden'
          sideOffset={6}>
          <DropdownMenuLabel>Navigation</DropdownMenuLabel>
          <DropdownMenuSeparator className='mb-2 mt-1 h-px bg-zinc-700' />
          <DropdownMenuItem
            className='relative flex h-[25px] select-none items-center rounded-sm px-1 outline-none data-[highlighted]:bg-slate-200/60 data-[highlighted]:dark:bg-neutral-900/40'
            asChild>
            <Link href='/speed'>Speed Duel</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className='relative flex h-[25px] select-none items-center rounded-sm px-1 outline-none data-[highlighted]:bg-slate-200/60 data-[highlighted]:dark:bg-neutral-900/40'
            asChild>
            <Link href='/rush'>Rush Duel</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className='relative flex h-[25px] select-none items-center rounded-sm px-1 outline-none data-[highlighted]:bg-slate-200/60 data-[highlighted]:dark:bg-neutral-900/40'
            asChild>
            <Link href='/about'>About</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
