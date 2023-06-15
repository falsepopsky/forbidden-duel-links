'use client';

import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';

export default function Tab() {
  return (
    <Root defaultValue='tab1' className='flex w-[300px] flex-col'>
      <List aria-label='tabs example' className='flex shrink-0'>
        <Trigger
          value='tab1'
          className='flex h-11 flex-1 border border-transparent outline-none data-[state=active]:border data-[state=active]:border-red-500'
        >
          Banlist
        </Trigger>
        <Trigger
          value='tab2'
          className='flex h-11 flex-1 border border-transparent outline-none data-[state=active]:border data-[state=active]:border-red-500'
        >
          One
        </Trigger>
        <Trigger
          value='tab3'
          className='flex h-11 flex-1 border border-transparent outline-none data-[state=active]:border data-[state=active]:border-red-500'
        >
          Two
        </Trigger>
        <Trigger
          value='tab4'
          className='flex h-11 flex-1 border border-transparent outline-none data-[state=active]:border data-[state=active]:border-red-500'
        >
          Three
        </Trigger>
      </List>
      <Content value='tab1'>Tab one content</Content>
      <Content value='tab2'>Tab two content</Content>
      <Content value='tab3'>Tab three content</Content>
      <Content value='tab4'>Tab three content</Content>
    </Root>
  );
}
