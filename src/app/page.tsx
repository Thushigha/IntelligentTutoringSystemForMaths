'use client';
import { Button } from '@/components/shared';
import React from 'react';
import Assessment from '@/assets/svg/dashboard/assessment.svg';
import Tut1 from '@/assets/svg/dashboard/tut-1.svg';
import Tut2 from '@/assets/svg/dashboard/tut-2.svg';
import Tut3 from '@/assets/svg/dashboard/tut-3.svg';

import Image from 'next/image';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Home: React.FC = () => {
  const data = [
    {
      name: 'Oct 11',
      Mathematics: 80,
      // Chemistry: 60,
      amt: 80,
    },
    {
      name: 'Oct 20',
      Mathematics: 70,
      // Chemistry: 60,
      amt: 60,
    },
    {
      name: 'Oct 28',
      Mathematics: 90,
      // Chemistry: 40,
      amt: 80,
    },
    {
      name: 'Nov 05',
      Mathematics: 60,
      // Chemistry: 70,
      amt: 60,
    },
    {
      name: 'Nov 10',
      Mathematics: 70,
      // Chemistry: 90,
      amt: 50,
    },
    {
      name: 'Nov 15',
      Mathematics: 90,
      // Chemistry: 80,
      amt: 60,
    },
    {
      name: 'Nov 18',
      Mathematics: 80,
      // Chemistry: 60,
      amt: 40,
    },
  ];
  return (
    <div className='mainBg w-full pl-[18vw] pt-16 pr-8 space-y-6 mb-8'>
      <div className='flex gap-5'>
      </div>{' '}
      <div className='flex gap-8'>
        <div className='basis-[50%] bg-white py-4 px-8 rounded-xl border border-gray-300'>
          <div className='flex flex-col items-center'>
            <div className='font-poppinsMedium tracking-wider text-[18px]'>
              Assessment
            </div>
            <div className='text-[14px]'>
              Try assessments to identify your skills
            </div>
            <Image
              src={Assessment}
              alt=''
              className='w-[17rem] h-[17rem]'
            />
            <div className='w-full'>
              <Button name='Try Now' />
            </div>
          </div>
        </div>
        <div className='basis-[50%] bg-white py-4 px-8 rounded-xl border border-gray-300'>
          <div className='text-center pb-2'>Progrerss</div>
          <ResponsiveContainer
            width='100%'
            height='90%'
          >
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='Mathematics'
                stroke='#8884d8'
                // dot={<CustomizedDot />}
              />
              {/* <Line
                type='monotone'
                dataKey='Chemistry'
                stroke='#82ca9d'
              /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='basis-[50%] bg-white py-4 px-8 rounded-xl border border-gray-300'>
        <div className='pb-3 text-[18px] font-poppinsMedium'>Tutorials</div>
        <div className='flex gap-16'>
          <div>
            <Image
              src={Tut1}
              alt=''
              className='w-[20rem]'
            />
            <div className='pt-1'>Basics of Chemistry Organics</div>
          </div>
          <div>
            <Image
              src={Tut2}
              alt=''
              className='w-[20rem]'
            />
            <div className='pt-1'>Algebra alculations</div>
          </div>
          <div>
            <Image
              src={Tut3}
              alt=''
              className='w-[20rem] '
            />
            <div className='pt-1'>Geometry Basics</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
