import AuthForm from '@/components/AuthForm';
import { readUserSession } from '@/lib/action/action';

const AuthServer =async () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96'>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthServer;
