'use client';

import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const logout = async () => {
    console.log('Triggered!');
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    } else {
      router.push('/login');
    }
  };

  return (
    <>
      <h1 className='text-3xl font-bold'>Hi Supabase!</h1>
      <h2 className='text-xl m-5'>
        Click the following link to see the difference of your DB
      </h2>
      <ul className='flex flex-col gap-5' id='nav'>
        <li>
          <Link href='/article'>Article</Link>
        </li>
        <li>
          <Link href='/auth-client'>Auth Client</Link>
        </li>
        <li>
          <Link href='/auth-server'>Auth Server</Link>
        </li>
        <li>
          <Link href='/new-view'>New View</Link>
        </li>
        <li>
          <Link href='/session'>Session</Link>
        </li>
        <li>
          <Link href='/upvote'>Upvote</Link>
        </li>
        <li>
          <button
            onClick={logout}
            className='px-2 py-1 bg-blue-500 text-white cursor-pointer'
            type='button'
          >
            Log Out
          </button>
        </li>
      </ul>
    </>
  );
}
