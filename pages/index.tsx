import React from 'react';
import Link from 'next/link';

const Home = () => (
  <main className='text-center m-2'>
    <h1>Hello from Preact</h1>

    <Link href='/about'>
      <a>About</a>
    </Link>
  </main>
);

export default Home;
