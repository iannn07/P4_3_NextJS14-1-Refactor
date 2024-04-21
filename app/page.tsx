import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Image
        src='/Home.png'
        alt='Next.js Logo'
        className='mb-10 mt-20 rounded-xl'
        width={400}
        height={400}
        priority
      />
      <h1 className='text-6xl font-bold'>What&apos;s up brother?</h1>
      <h2 className='text-xl m-5'>
        Click the following link to see the difference of your DB
      </h2>
      <ul className='flex flex-col gap-5' id='nav'>
        <li>
          <Link href='/auth-server'>Login Page</Link>
        </li>
        <li>
          <Link href='/security'>Secured Page</Link>
        </li>
        <li>
          <Link href='/views'>Views</Link>
        </li>
        <li>
          <Link href='/article'>Article</Link>
        </li>
        <li>
          <Link href='/upvote'>Upvote</Link>
        </li>
      </ul>
    </>
  );
}
