'use client';
import React, { useState } from 'react';
import RightImg from '@/assets/svg/assessment/right.svg';
import Image from 'next/image';
import { Button, Input } from '@/components/shared';

const Assesment: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='mainBg w-full pl-[18vw] pt-20 pr-8 space-y-2'>
      <div className='bg-white py-4 px-8 rounded-xl border border-gray-300'>
        <div className='font-poppinsSemiBold tracking-wider'>Arithmetic</div>
        <div className='text-[14px] pt-1'>
          Arithmetic is a branch of mathematics that deals with the study of
          numbers and the basic operations performed on them. These operations
          include:
        </div>
        <div>
          <div className='text-[14px] pt-2'>
            1.{' '}
            <span className='font-poppinsBold tracking-wider text-gray-700'>
              Addition (+)
            </span>
            : Combining two or more numbers to find their total
          </div>
          <div>{`=> `}Example: 3 + 5 = 8</div>
        </div>
        <div>
          <div className='text-[14px] pt-2'>
            2.{' '}
            <span className='font-poppinsBold tracking-wider text-gray-700'>
              Subtraction (-)
            </span>
            : Finding the difference between two numbers by removing one from
            the other.
          </div>
          <div>{`=> `}Example: 7 - 5 = 2</div>
        </div>
        <div>
          <div className='text-[14px] pt-2'>
            3.{' '}
            <span className='font-poppinsBold tracking-wider text-gray-700'>
              Multiplication (x)
            </span>
            : Repeated addition of the same number.
          </div>
          <div>{`=> `}Example: 6 x 3 = 18</div>
        </div>
        <div>
          <div className='text-[14px] pt-2'>
            4.{' '}
            <span className='font-poppinsBold tracking-wider text-gray-700'>
              Division (÷)
            </span>
            : Splitting a number into equal parts.
          </div>
          <div>{`=> `}Example: 12 ÷ 3 = 4</div>
        </div>
        <div className='text-[14px] pt-2'>
          Arithmetic also includes working with properties like order of
          operations (e.g., PEMDAS/BODMAS), number types (e.g., integers,
          fractions, decimals), and concepts such as divisibility, factors, and
          multiples. It serves as the foundation for more advanced areas of
          mathematics.
        </div>
      </div>
      <div className='bg-white py-4 px-8 rounded-xl border border-gray-300'>
        <div>
          <div className='font-poppinsSemiBold tracking-wider'>Try out</div>
          <div className='text-[14px] pt-1'>
            1. Sara bought 1,245 apples, her friend gave her 738 more, and she
            later bought 982 apples. How many apples does she have in total?
          </div>
          <div className='text-[14px] pt-1 flex gap-2'>
            <Input />
            <div onClick={() => setOpen(!open)}>
              <Button name='Check' />
            </div>
          </div>
          {open && (
            <div>
              <div className='text-[14px] pt-2 pb-6 flex items-center gap-2'>
                <Image
                  src={RightImg}
                  alt=''
                  className='h-6 w-6'
                />
                <span className='font-poppinsMedium'>Correct Answer:</span> 1,245 + 738
                + 982 = 2,965
              </div>
            </div>
          )}
        </div>
        <div className='pt-4'>
          <div className='text-[14px] pt-1'>
            2. A school library has 3,456 books, and they received 2,134 more
            books. Later, 789 books were donated. How many books does the
            library have now?
          </div>
          <div className='text-[14px] pt-1 flex gap-2'>
            <Input />
            <Button name='Check' />
          </div>
        </div>
        <div className='pt-4'>
          <div className='text-[14px] pt-1'>
            2. A shop sold 1,295 toys in January, 1,872 toys in February, and
            1,467 toys in March. How many toys were sold in these three months?
          </div>
          <div className='text-[14px] pt-1 flex gap-2'>
            <Input />
            <Button name='Check' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assesment;
