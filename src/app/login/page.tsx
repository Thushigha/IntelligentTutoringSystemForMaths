import { Button, Input } from '@/components/shared';
import React from 'react';
import LoginImg from '@/assets/svg/profile/login.svg';
import Image from 'next/image';
import Link from 'next/link';

const Login:React.FC = () => {
  return (
    <div className='absolute w-full h-screen bg-white mainBg flex items-center justify-center'>
      <div className='w-[50vw] px-6 py-10 border border-gray-100 bg-white'>
        <div className='flex gap-6 items-center'>
          <Image
            src={LoginImg}
            alt=''
            className='w-[20vw]'
          />
          <div className='flex flex-col items-center gap-4 w-full'>
            <div className='font-poppinsMedium text-[16px]'>Welcome Back!</div>
            <div className='w-full'>
              <Input
                name='Username'
                placeholder='Enter your username'
              />
            </div>
            <div className='w-full'>
              <Input
                name='Password'
                placeholder='Enter your password'
              />
            </div>
            <Link href='/'>
              <div>
                <Button name='Login' />
              </div>
            </Link>
            <div className='font-poppins text-[14px]'>
              Don't have Account
              <Link href='/sign-up'>
                <span className='pl-2 font-poppinsMedium text-red-800 underline'>
                  Signup
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
