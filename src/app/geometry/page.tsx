'use client';
import React, { useState } from 'react';
import Triangle from '@/assets/svg/geometry/triangle.svg';
import WrongImg from '@/assets/svg/assessment/wrong.svg';
import Image from 'next/image';
import { Button, Input } from '@/components/shared';

const Assesment: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='mainBg w-full pl-[18vw] pt-20 pr-8 space-y-2'>
      <div className='bg-white py-4 px-8 rounded-xl border border-gray-300'>
        <div className='font-poppinsSemiBold tracking-wider'>Geometry</div>
        <div className='text-[14px] pt-1'>
          Geometry is a branch of mathematics that focuses on the study of
          shapes, sizes, positions, and properties of space and objects. It
          involves understanding and analyzing points, lines, angles, surfaces,
          and solids.
        </div>

        <div className='flex justify-between gap-8 pt-8'>
          <div>
            <div className='font-poppinsSemiBold tracking-wider text-[14px] pt-4'>
              Triangle
            </div>
            <div className='flex gap-8'>
              <Image
                src={Triangle}
                alt=''
                className='w-40 h-40'
              />
              <div className='pt-4'>
                <div>Area= 1/2 × base × height</div>
                <div>if height = 60 and base = 10</div>
                <div>area = 1/2 x 10 x 60</div>
                <div>area = 300 </div>
              </div>
              <div className='pt-4'>
                <div>If the sides of a triangle are: a=5 b=7 and c=10</div>
                <div> perimeter = a + b + c</div>
              </div>
            </div>
            <div className='pt-8'>
              <div className='font-poppinsSemiBold tracking-wider'>Try out</div>
              <div className='text-[14px] pt-1'>
                1. If height = 40 and base = 60, find area of triangle?
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
                    <span className='font-poppinsMedium'>Your Answer:</span>{' '}
                    2400
                  </div>
                  <div className='text-[14px] pt-2 pb-6 flex items-center gap-2'>
                    <span className='font-poppinsMedium'>Correct Answer:</span>{' '}
                    area = 1/2 x 60 x 40 = 1200
                  </div>
                </div>
              )}

              <div className='text-[14px] pt-8'>
                2. If height = 70 and base = 30, find area of triangle?
              </div>
              <div className='text-[14px] pt-1 flex gap-2'>
                <Input />
                <div onClick={() => setOpen(!open)}>
                  <Button name='Check' />
                </div>
              </div>

              <div className='text-[14px] pt-8'>
                3. If height = 1280 and base = 670, find area of triangle?
              </div>
              <div className='text-[14px] pt-1 flex gap-2'>
                <Input />
                <div onClick={() => setOpen(!open)}>
                  <Button name='Check' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-[14rem] space-y-4'>
            <div className='bg-gray-100 py-2 px-4 border-2 border-blue-950'>
              Triangle
            </div>
            <div className='bg-gray-100 py-2 px-4'>Circle</div>

            <div className='bg-gray-100 py-2 px-4'>Square</div>

            <div className='bg-gray-100 py-2 px-4'>Rectangle</div>
            <div className='bg-gray-100 py-2 px-4'>Pentagon </div>
            <div className='bg-gray-100 py-2 px-4'>Hexagon </div>

            <div className='bg-gray-100 py-2 px-4'>Octagon </div>
            <div className='bg-gray-100 py-2 px-4'>Ellipse </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assesment;
