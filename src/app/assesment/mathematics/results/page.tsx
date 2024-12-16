import React from "react";
import rightImg from "@/assets/svg/assessment/right.svg";
import wrongImg from "@/assets/svg/assessment/wrong.svg";
import Image from "next/image";
import { Input } from "@/components/shared";

const MathematicsResults: React.FC = () => {
  return (
    <div className='mainBg w-full pl-[18vw] pt-20 pr-4 space-y-4 pb-12'>
      <div className='bg-white rounded-xl border border-gray-300 py-8 px-8 space-y-4'>
        <div className='font-poppinsMedium'>Assessment Info - Maths Test 1</div>
        <div className='flex items-center gap-4'>
          <div>Result:</div>
          <div className='text-[20px]'>85.5</div>
        </div>
        <div className='flex items-center gap-4'>
          <div>Succeed Level:</div>
          <div className='text-orange-500'>Intermediate</div>
        </div>
        <div className='flex items-start gap-4'>
          <div>Feedback:</div>
          <div className='text-[14px]'>
            Welldone on Algebra
          </div>
        </div>
      </div>
      <div className='w-full bg-white rounded-xl border border-gray-300 py-4 px-8 space-y-4'>
        <div className='text-center'>Check your Answers</div>
        <div className='flex gap-2'>
          <Image
            src={rightImg}
            alt=''
            className='h-8 w-8'
          />
          <div className='space-y-1 w-full'>
            <div className='text-[14px]'>1, Simplify: 48÷8+5×3</div>
            <Input placeholder='Write answer here' />
          </div>
        </div>
        <div className='flex gap-2'>
          <Image
            src={rightImg}
            alt=''
            className='h-8 w-8'
          />
          <div className='space-y-1 w-full'>
            <div className='text-[14px]'>2, Calculate: 2/5+3/10</div>
            <Input placeholder='Write answer here' />
          </div>
        </div>
        <div className='flex gap-2'>
          <Image
            src={rightImg}
            alt=''
            className='h-8 w-8'
          />
          <div className='space-y-1 w-full'>
            <div className='text-[14px]'>3, Solve for x: 5x−7=18</div>
            <Input placeholder='Write answer here' />
          </div>
        </div>

        <div className='flex gap-2'>
          <Image
            src={rightImg}
            alt=''
            className='h-8 w-8'
          />
          <div className='space-y-1 w-full'>
            <div className='text-[14px]'>4, Simplify: 3(2x+4)−5x</div>
            <Input placeholder='Write answer here' />
          </div>
        </div>
        <div className='flex gap-2'>
          <Image
            src={rightImg}
            alt=''
            className='h-8 w-8'
          />
          <div className='space-y-1 w-full'>
            <div className='text-[14px]'>5, Solve for 𝑦: 3y+8=26</div>
            <Input placeholder='Write answer here' />
          </div>
        </div>
        <div className='flex gap-2'>
          <Image
            src={wrongImg}
            alt=''
            className='h-8 w-8'
          />
          <div className='space-y-1 w-full'>
            <div className='text-[14px]'>
              6, A rectangle has a length of 12 cm and a width of 5 cm.
              Calculate the Perimeter and area
            </div>
            <Input placeholder='Write answer here' />
          </div>
        </div>
        <div className='flex gap-2'>
          <Image
            src={wrongImg}
            alt=''
            className='h-8 w-8'
          />
          <div className='space-y-1 w-full'>
            <div className='text-[14px]'>
              7, Find the area of a triangle with a base of 10 cm and height of
              8 cm.
            </div>
            <Input placeholder='Write answer here' />
          </div>
        </div>
        <div className='flex gap-2'>
          <Image
            src={rightImg}
            alt=''
            className='h-8 w-8'
          />
          <div className='space-y-1 w-full'>
            <div className='text-[14px]'>
              8, A book costs $5.50, and a notebook costs $3.25. How much would
              it cost to buy 3 books and 2 notebooks?
            </div>
            <Input placeholder='Write answer here' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathematicsResults;
