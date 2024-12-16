import React from 'react';
import ProfileImg from '@/assets/svg/profile/proImg.svg';
import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <div className='mainBg w-full pl-[18vw] pt-20 pr-8'>
      <div className='bg-white border-2 border-gray-200/70 rounded-2xl h-full p-2'>
        <div className='px-8 pt-6 pb-4 font-poppinsMedium text-[18px]'>
          Profile Info
        </div>
        <div className='px-8 flex gap-12'>
          <Image
            src={ProfileImg}
            alt=''
            className='rounded-xl w-[12rem] h-[12rem]'
          />
          <div className='flex gap-8 text-[14px] pt-1'>
            <div className='font-poppinsMedium space-y-3'>
              <div>Name:</div>
              <div>Student No:</div>
              <div>Last Session Date:</div>
              <div>Current Score:</div>
              <div>Overall Score:</div>
              <div>Level of Difficulty:</div>
            </div>
            <div className='space-y-3'>
              <div>John Doe</div>
              <div>230047</div>
              <div>12th Nov 2024</div>
              <div>90</div>
              <div>85.5</div>
              <div className='text-orange-500'>Intermediate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
