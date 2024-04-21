const LoginPage = () => {
  return (
    <div className='container mx-auto w-[400px]'>
      <h1 className='text-3xl font-bold mb-5'>
        Login to Access auth-server page
      </h1>
      <form action='/auth/login' method='post'>
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
        <div>
          <button
            type='submit'
            className='text-white p-2 rounded mt-5 w-full bg-blue-500 hover:bg-blue-600'
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
