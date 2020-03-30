import React from 'react';
import Link from 'next/link';

export default () => (
  <main className='text-center'>
    <h1>Hello from Preact</h1>

    <Link href='/about'>
      <a>About</a>
    </Link>
  </main>
);
