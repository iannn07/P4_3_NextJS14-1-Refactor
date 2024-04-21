import { logout } from '@/lib/action/action';
import React from 'react';

export default function LogOut() {
  return (
    <div>
      <form>
        <button
          type='submit'
          className='text-white p-2 rounded mt-5 w-full bg-red-500 hover:bg-red-600'
          formAction={logout}
        >
          Log out
        </button>
      </form>
    </div>
  );
}
