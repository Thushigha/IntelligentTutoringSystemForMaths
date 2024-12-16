import Image from 'next/image';
import React from 'react'
import Tut1 from '@/assets/svg/dashboard/tut-1.svg';
import Tut2 from '@/assets/svg/dashboard/tut-2.svg';
import Tut3 from '@/assets/svg/dashboard/tut-3.svg';

const Tutorial = () => {
  return (
    <div className='mainBg w-full pl-[18vw] pt-20 pr-8 space-y-6 mb-8'>
      <div className='basis-[50%] bg-white py-4 px-8 rounded-xl border border-gray-300'>
        <div className='pb-3 text-[18px] font-poppinsMedium'>Tutorials</div>
        <div className='flex gap-16'>
          <div>
            <Image
              src={Tut1}
              alt=''
              className='w-[20rem]'
            />
            <div className='pt-1'>Basics of Arithmetic</div>
          </div>
          <div>
            <Image
              src={Tut2}
              alt=''
              className='w-[20rem]'
            />
            <div className='pt-1'>Algebra Calculations</div>
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
}

export default Tutorial