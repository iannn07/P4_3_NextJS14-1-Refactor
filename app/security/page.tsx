import LogOut from '@/components/LogOut';

export default async function Protected() {
  return (
    <div>
      <h1>Logged In!</h1>
      <LogOut />
    </div>
  );
}
