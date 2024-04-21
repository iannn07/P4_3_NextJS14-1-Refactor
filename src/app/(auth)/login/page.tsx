'use client';

import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type dataProps = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [supaData, setSupaData] = useState<dataProps>({
    email: '',
    password: '',
  });
  const [resetPassword, setResetPassword] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const login = async () => {
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: supaData.email,
        password: supaData.password,
      });

      if (data) {
        console.log(data);
        router.push('/auth-client');
      }
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendResetPassword = async () => {
    console.log('Triggered!')
    try {
      const { data: resetData, error } =
        await supabase.auth.resetPasswordForEmail(supaData.email, {
          redirectTo: `/reset`,
        });

      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSupaData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='container mx-auto w-[400px]'>
      {!resetPassword ? (
        <>
          <h1 className='text-3xl font-bold mb-5'>Login with Reset Password</h1>
          <div className='grid'>
            <h3 className='text-lg mb-1'>Email</h3>
            <input
              className='text-black'
              placeholder='Email'
              type='email'
              name='email'
              value={supaData?.email}
              onChange={handleChange}
            />
          </div>
          <div className='grid mt-5'>
            <h3 className='text-lg mb-1'>Password</h3>
            <input
              className='text-black'
              placeholder='Password'
              type='password'
              name='password'
              value={supaData?.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              onClick={login}
              type='button'
              className='text-white p-2 rounded mt-5 w-full bg-blue-500 hover:bg-blue-600'
            >
              Log In
            </button>
          </div>
        </>
      ) : (
        <>
          <div className='grid mb-5'>
            <h3 className='text-lg mb-1'>Email</h3>
            <input
              className='text-black'
              placeholder='Email'
              type='email'
              name='email'
              value={supaData?.email}
              onChange={handleChange}
            />
          </div>
          {success && (
            <div className='my-4 bg-green-100 px-2 text-green-600'>
              An email has been sent to {supaData?.email} to login to your
              account
            </div>
          )}
          <button
            onClick={sendResetPassword}
            type='button'
            className='text-white p-2 rounded mt-5 w-full bg-blue-500 hover:bg-blue-600'
          >
            Send Reset Password
          </button>
        </>
      )}
      <div className='mt-5'>
        <p
          className='cursor-pointer hover:underline'
          onClick={() => setResetPassword(!resetPassword)}
        >
          {resetPassword ? 'Login' : 'Reset my password'}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
