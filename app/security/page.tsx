import LogOut from '@/components/LogOut';
import { readUserSession } from '@/lib/action/action';
import { redirect } from 'next/navigation';

export default async function Protected() {
  const { data } = await readUserSession();

  if (!data.session) {
    return redirect('/auth-server');
  }

  return (
    <div>
      <h1>Logged In!</h1>
      <LogOut />
    </div>
  );
}
