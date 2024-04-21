'use client';

import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type dataProps = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [supaData, setSupaData] = useState<dataProps>({
    password: '',
    confirmPassword: '',
  });

  const confirmPassword = async () => {
    const { password, confirmPassword } = supaData;
    console.log('Triggered!');
    console.log(password, confirmPassword);

    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }

    const { data: resetData, error } = await supabase.auth.updateUser({
      password: supaData.confirmPassword,
    });

    if (resetData) {
      console.log(resetData);
      router.push('/login');
    }
    if (error) {
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
      <h1 className='text-3xl font-bold mb-5'>Reset Password</h1>
      <div className='grid'>
        <h3 className='text-lg mb-1'>New Password</h3>
        <input
          className='text-black'
          placeholder='New Password'
          type={showPassword ? 'text' : 'password'}
          name='password'
          value={supaData?.password}
          onChange={handleChange}
        />
      </div>
      <div className='grid mt-5'>
        <h3 className='text-lg mb-1'>Confirm New Password</h3>
        <input
          className='text-black'
          placeholder='Confirm New Password'
          type={showPassword ? 'text' : 'password'}
          name='confirmPassword'
          value={supaData?.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <p
        className='cursor-pointer hover:underline my-5'
        onClick={() => setShowPassword(!showPassword)}
      >
        Show Password
      </p>
      <div>
        <button
          onClick={confirmPassword}
          type='button'
          className='text-white p-2 rounded w-full bg-blue-500 hover:bg-blue-600'
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
