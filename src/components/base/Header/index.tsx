"use client";
import React, { useState } from "react";
import Profile from "@/assets/svg/profile/proImg.svg";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import { Modal } from "@/components/shared";

export const Header: React.FC = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <div className="w-[76.75rem] h-14 bg-white border-2 border-gray-200/70 rounded-2xl">
      <div className="w-full h-full flex items-center justify-between px-4">
        <div className="font-poppinsMedium text-[16px] tracking-wider">
          Welcome Thushigha!
        </div>
        <div className="flex gap-4 items-center">
          <IoNotificationsOutline className="h-6 w-6" />
          <div className="relative">
            <Image
              src={Profile}
              alt=""
              className="rounded-full h-8 w-8 cursor-pointer"
              onClick={() => setOpenProfile(!openProfile)}
            />
            {openProfile && (
              <div className="absolute z-50 top-10 right-0 w-[8rem] bg-gray-50 rounded-lg py-2 border border-gray-400">
                <Link href="/profile" onClick={() => setOpenProfile(false)}>
                  <div className="p-1 px-4  hover:bg-blue-950 hover:text-white flex gap-2 items-center font-poppins text-[14px] cursor-pointer">
                    <div>
                      <CgProfile className="h-4 w-4 pt-[1px]" />
                    </div>
                    <div>Profile</div>
                  </div>
                </Link>
                <Link href="/login" onClick={() => setOpenProfile(false)}>
                  <div className="p-1 px-4  hover:bg-blue-950 hover:text-white flex gap-2 items-center font-poppins text-[14px] cursor-pointer">
                    <div>
                      <IoLogOutOutline className="h-5 w-5 pt-[1px]" />
                    </div>
                    <div>Logout</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface IProfileMenuProps {
  setOpenProfile: any;
}

const ProfileMenu: React.FC<IProfileMenuProps> = ({ setOpenProfile }) => {
  return (
    <div className="absolute z-50 top-10 right-0 w-[8rem] bg-gray-50 rounded-lg py-2 border border-gray-400">
      <Link href="/" onClick={() => setOpenProfile(false)}>
        <div className="p-1 px-4  hover:bg-blue-950 hover:text-white flex gap-2 items-center font-poppins text-[14px] cursor-pointer">
          <div>
            <CgProfile className="h-4 w-4 pt-[1px]" />
          </div>
          <div>Profile</div>
        </div>
      </Link>
      <div className="p-1 px-4  hover:bg-blue-950 hover:text-white flex gap-2 items-center font-poppins text-[14px] cursor-pointer">
        <div>
          <IoLogOutOutline className="h-5 w-5 pt-[1px]" />
        </div>
        <div>Logout</div>
      </div>
    </div>
  );
};
