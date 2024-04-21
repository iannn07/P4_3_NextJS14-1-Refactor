import LogOut from '@/components/LogOut';
import { readUserSession } from '@/lib/action/action';
import { redirect } from 'next/navigation';

export default async function Protected() {
  return (
    <div>
      <h1>Logged In!</h1>
      <LogOut />
    </div>
  );
}
