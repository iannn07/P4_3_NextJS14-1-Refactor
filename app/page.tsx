import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold'>Hi Supabase!</h1>
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
          <Link href='/article'>Article</Link>
        </li>
        <li>
          <Link href='/upvote'>Upvote</Link>
        </li>
        <li></li>
      </ul>
    </>
  );
}
