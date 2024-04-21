import { login, readUserSession, signup } from '@/lib/action/action';

const AuthForm = async () => {
  const { data: userSession } = await readUserSession();
  console.log('userSession', userSession);

  return (
    <div className='container mx-auto w-[400px]'>
      <h1 className='text-3xl font-bold mb-5'>
        Login to Access auth-server page
      </h1>
      <form>
        {!userSession.session ? (
          <>
            <div className='grid'>
              <h3 className='text-lg mb-1'>Email</h3>
              <input
                className='text-black'
                placeholder='Email'
                type='email'
                name='email'
              />
            </div>
            <div className='grid mt-5'>
              <h3 className='text-lg mb-1'>Password</h3>
              <input
                className='text-black'
                placeholder='Password'
                type='password'
                name='password'
              />
            </div>
          </>
        ) : null}

        <button
          type='submit'
          className='text-white p-2 rounded mt-5 w-full bg-blue-500 hover:bg-blue-600'
          formAction={login}
        >
          Log In
        </button>
        <button
          type='submit'
          className='text-white p-2 rounded mt-5 w-full bg-green-500 hover:bg-green-600'
          formAction={signup}
        >
          Sign Up
        </button>
        <button
          type='submit'
          className='text-white p-2 rounded mt-5 w-full bg-red-500 hover:bg-red-600'
          formAction={readUserSession}
        >
          Session
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
