'use client';
import React, { useState } from 'react';
import WrongImg from '@/assets/svg/assessment/wrong.svg';
import Image from 'next/image';
import { Button, Input } from '@/components/shared';

const Assesment: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='mainBg w-full pl-[18vw] pt-20 pr-8 space-y-2'>
      <div className='bg-white py-4 px-8 rounded-xl border border-gray-300'>
        <div className='font-poppinsSemiBold tracking-wider'>Algebra</div>
        <div className='text-[14px] pt-1'>
          Algebra is a branch of mathematics that deals with symbols and the
          rules for manipulating these symbols. These symbols (often represented
          by letters such as 𝑥 x, 𝑦 y, and 𝑧 z) are used to represent numbers
          and quantities in equations and expressions.
        </div>
        <div className='text-[15px] underline pt-2'>
          Key Features of Algebra
        </div>
        <div>
          <div className='text-[14px] pt-2'>
            1.{' '}
            <span className='font-poppinsBold tracking-wider text-gray-700'>
              Variables
            </span>
            : Symbols that represent unknown values or quantities (e.g., 𝑥 x, 𝑦
            y).
          </div>
        </div>
        <div>
          <div className='text-[14px] pt-2'>
            2.{' '}
            <span className='font-poppinsBold tracking-wider text-gray-700'>
              Constants
            </span>
            : Fixed values, like numbers (e.g., 2, 5, -3).
          </div>
        </div>
        <div>
          <div className='text-[14px] pt-2'>
            3.{' '}
            <span className='font-poppinsBold tracking-wider text-gray-700'>
              Expressions
            </span>
            : Combinations of variables, constants, and operations (e.g., 3 𝑥 +
            5 3x+5)
          </div>
        </div>
        <div>
          <div className='text-[14px] pt-2'>
            4.{' '}
            <span className='font-poppinsBold tracking-wider text-gray-700'>
              Equations
            </span>
            : Statements that two expressions are equal (e.g., 2 𝑥 + 4 = 10
            2x+4=10).
          </div>
        </div>
        <div>
          <div className='text-[14px] pt-2'>
            4.{' '}
            <span className='font-poppinsBold tracking-wider text-gray-700'>
              Inequalities
            </span>
            : Statements about the relative size of two expressions (e.g., 𝑥+3{' '}
            {' >'} 7x+3 {' >'} 7).
          </div>
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
            1. If 3 𝑥 = 15 3x=15, what is 𝑥 x?
          </div>
          <div className='text-[14px] pt-1 flex gap-2'>
            <Input />
            <div onClick={() => setOpen(!open)}>
              <Button name='Check' />
            </div>
          </div>
          {open && (
            <div>
              <div className='text-[14px] pt-2 pb-3 flex items-center gap-2'>
                <Image
                  src={WrongImg}
                  alt=''
                  className='h-6 w-6'
                />
                <span className='font-poppinsMedium'>Your Answer:</span> 4
              </div>
              <div className='text-[14px] pt-2 pb-6 flex items-center gap-2'>

                <span className='font-poppinsMedium'>Correct Answer:</span> x= 15/3 = 5
              </div>
            </div>
          )}
        </div>
        <div className='pt-4'>
          <div className='text-[14px] pt-1'>
            2.Solve for 𝑦 y: 𝑦 − 4 = 10 y−4=10
          </div>
          <div className='text-[14px] pt-1 flex gap-2'>
            <Input />
            <Button name='Check' />
          </div>
        </div>
        <div className='pt-4'>
          <div className='text-[14px] pt-1'>
            2. If 𝑥 = 4 x=4, what is the value of 2 𝑥 + 3 2x+3?
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
