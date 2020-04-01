import React from 'react';
import Link from 'next/link';

const About = () => (
  <main className='text-center'>
    <h1>About us</h1>
    <Link href='/'>
      <a>Home</a>
    </Link>
  </main>
);

export default About;
