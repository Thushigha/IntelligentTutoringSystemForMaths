'use client';
import Image from 'next/image';
import React from 'react';
import Profile from '@/assets/svg/profile/proImg.svg';
import Logo from '@/assets/svg/profile/logo.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className='w-[18vw] h-screen  px-4 pb-2 pt-2'>
      <div className='bg-white border-2 border-gray-200/70 rounded-2xl h-full p-2'>
        <div className='flex items-center gap-2'>
          <Image
            src={Logo}
            alt=''
            className=' w-12 h-12'
          />
          <div className='font-poppinsSemiBold text-[22px] text-blue-950 tracking-wider'>
            Play Skills
          </div>
        </div>
        <div className='h-[2px] w-full bg-gray-100 mb-4'></div>
        <div className='flex flex-col w-full items-center'>
          <Image
            src={Profile}
            alt=''
            className='rounded-full w-[8rem] h-[8rem]'
          />
          <div className='pt-2 font-poppinsMedium text-[14px] tracking-wide'>
            Thushigha Srishantharuban
          </div>
          <div className='text-[12px] tracking-wider'>thushi1718@gmail.com</div>
        </div>
        <div className='h-[2px] w-full bg-gray-100 my-4'></div>
        <div className='space-y-2 w-full'>
          <div>
            <Link href='/'>
              <div
                className={`py-2 px-4 ${
                  pathname === '/' && 'bg-blue-50 border border-blue-950'
                }  hover:bg-blue-50 border rounded-lg w-full`}
              >
                Dashboard
              </div>
            </Link>
          </div>
          <div>
            <Link href='/assesment'>
              <div
                className={`py-2 px-4 ${
                  pathname === '/assesment' &&
                  'bg-blue-50 border border-blue-950'
                }  hover:bg-blue-50 border rounded-lg w-full`}
              >
                Assesment
              </div>
            </Link>
          </div>
          <div>
            <Link href='/progress-tracking'>
              <div
                className={`py-2 px-4 ${
                  pathname === '/progress-tracking' &&
                  'bg-blue-50 border border-blue-950'
                }  hover:bg-blue-50 border rounded-lg w-full`}
              >
                Progress Tracking
              </div>
            </Link>
          </div>
          <div>
            <Link href='/chat-bot'>
              <div
                className={`py-2 px-4 ${
                  pathname === '/chat-bot' &&
                  'bg-blue-50 border border-blue-950'
                }  hover:bg-blue-50 border rounded-lg w-full`}
              >
                Chat Bot
              </div>
            </Link>
          </div>
          <div>
            <Link href='/arithmetic'>
              <div
                className={`py-2 px-4 ${
                  pathname === '/arithmetic' &&
                  'bg-blue-50 border border-blue-950'
                }  hover:bg-blue-50 border rounded-lg w-full`}
              >
                Arithmetic
              </div>
            </Link>
          </div>
          <div>
            <Link href='/algebra'>
              <div
                className={`py-2 px-4 ${
                  pathname === '/algebra' && 'bg-blue-50 border border-blue-950'
                }  hover:bg-blue-50 border rounded-lg w-full`}
              >
                Algebra
              </div>
            </Link>
          </div>
          <div>
            <Link href='/geometry'>
              <div
                className={`py-2 px-4 ${
                  pathname === '/geometry' &&
                  'bg-blue-50 border border-blue-950'
                }  hover:bg-blue-50 border rounded-lg w-full`}
              >
                Geometry
              </div>
            </Link>
          </div>
          <div>
            <Link href='/tutorial'>
              <div
                className={`py-2 px-4 ${
                  pathname === '/tutorial' &&
                  'bg-blue-50 border border-blue-950'
                }  hover:bg-blue-50 border rounded-lg w-full`}
              >
                Tutorial
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
