import React from 'react';
import { Button, Input } from '@/components/shared';
import Link from 'next/link';

const Mathematics: React.FC = () => {
  return (
    <div className='mainBg w-full pl-[18vw] pt-20 pr-4'>
      <div className='w-full bg-white rounded-xl border border-gray-300 py-4 px-8 space-y-4'>
        <div className='text-center'>Assessment</div>
        <div className='space-y-1'>
          <div className='text-[14px]'>1, Simplify: 48÷8+5×3</div>
          <Input placeholder='Write answer here' />
        </div>
        <div className='space-y-1'>
          <div className='text-[14px]'>2, Calculate: 2/5+3/10</div>
          <Input placeholder='Write answer here' />
        </div>
        <div className='space-y-1'>
          <div className='text-[14px]'>3, Solve for x: 5x−7=18</div>
          <Input placeholder='Write answer here' />
        </div>
        <div className='space-y-1'>
          <div className='text-[14px]'>4, Simplify: 3(2x+4)−5x</div>
          <Input placeholder='Write answer here' />
        </div>
        <div className='space-y-1'>
          <div className='text-[14px]'>5, Solve for 𝑦: 3y+8=26</div>
          <Input placeholder='Write answer here' />
        </div>
        <div className='space-y-1'>
          <div className='text-[14px]'>
            6, A rectangle has a length of 12 cm and a width of 5 cm. Calculate
            the Perimeter and area
          </div>
          <Input placeholder='Write answer here' />
        </div>
        <div className='space-y-1'>
          <div className='text-[14px]'>
            7, Find the area of a triangle with a base of 10 cm and height of 8
            cm.
          </div>
          <Input placeholder='Write answer here' />
        </div>
        <div className='space-y-1'>
          <div className='text-[14px]'>
            8, A book costs $5.50, and a notebook costs $3.25. How much would it
            cost to buy 3 books and 2 notebooks?
          </div>
          <Input placeholder='Write answer here' />
        </div>
        <div className='pt-4'>
          <Link href='/assesment/mathematics/results'>
            <Button name='Submit' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mathematics;
