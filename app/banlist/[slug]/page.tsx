'use client';

import Tab from '@/comp/tab';
import Link from 'next/link';

export default function Post({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div className='mt-2 border'>
        <Tab />
      </div>

      <p>Post: {params.slug}</p>
      <Link
        href='/banlist'
        aria-label='Link to home page'
        className='hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-500 active:outline active:outline-1 active:outline-teal-600'
      >
        Go Back
      </Link>

      <div className='flex justify-center'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.59 31.59' width={32} height={32}>
          <path
            fill='red'
            d='M31.7,15.1c-6.59,0-15.79,5.13-15.79,15.8A15.79,15.79,0,0,0,31.7,46.69c7.15,0,15.8-5.64,15.8-15.79A15.8,15.8,0,0,0,31.7,15.1Zm0,28A12.16,12.16,0,0,1,22.29,23.2L38.37,41.06A12.09,12.09,0,0,1,31.7,43.06Zm9.6-4.72-16-17.77a12.14,12.14,0,0,1,16,17.77Z'
            transform='translate(-15.91 -15.1)'
          ></path>
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 32' width={32} height={32}>
          <path fill='currentColor' d='M20,15V47H44V15ZM40,35H24V19H40Z' transform='translate(-20 -15)'></path>
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 35.32' width={32} height={32}>
          <path
            fill='currentColor'
            d='M26.09,16v3.57a10.85,10.85,0,0,0,.16-1.8A10.5,10.5,0,0,0,26.09,16Zm0,17.94H18a17,17,0,0,1-5.6,0H4.15V30a17.58,17.58,0,0,1-1.37-1.36v6.67H27.46V28.8a17.2,17.2,0,0,1-1.37,1.33ZM23.35,23.08V13.74L22,15.1v6.62H15.26l-1.37,1.36ZM4.15,1.35H26.09V5.44a14.34,14.34,0,0,1,1.37,1.33V0H2.78V6.93A17.71,17.71,0,0,1,4.15,5.56Zm0,16.83v0ZM8.26,9.25a10.62,10.62,0,0,0-1.38,1.3V22.36L8.26,21Zm6.92,23.58A15,15,0,1,0,0,17.83a15,15,0,0,0,15.19,15Zm12.54-15A12.56,12.56,0,0,1,7.47,27.55L25.06,10.13a12.29,12.29,0,0,1,2.67,7.65ZM15.19,5.37a12.54,12.54,0,0,1,8,2.82L5.5,25.65a12.3,12.3,0,0,1-2.84-7.87A12.47,12.47,0,0,1,15.19,5.37Z'
            transform='translate(0.01)'
          ></path>
        </svg>
      </div>
    </div>
  );
}
