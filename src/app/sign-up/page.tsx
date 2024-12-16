import { Button, Input } from "@/components/shared";
import React from "react";
import SignupImg from "@/assets/svg/profile/signup.svg";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="absolute w-full h-screen bg-white mainBg flex items-center justify-center">
      <div className="w-[55vw] px-6 py-10 border border-gray-100 bg-white">
        <div className="flex gap-10">
          <Image src={SignupImg} alt="" className="w-[22vw] pb-[3rem]" />
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="font-poppinsMedium text-[16px]">Welcome</div>
            <div className="w-full">
              <Input name="First Name" placeholder="Enter your firstname" />
            </div>
            <div className="w-full">
              <Input name="Last Name" placeholder="Enter your lastname" />
            </div>
            <div className="w-full">
              <Input name="Email" placeholder="Enter email address" />
            </div>
            <div className="w-full">
              <Input name="Password" placeholder="Enter password" />
            </div>
            <Link href="/">
              <div className="w-full">
                <Button name="Register" />
              </div>
            </Link>
            <div className="font-poppins text-[14px]">
              Already have account
              <Link href="/login">
                <span className="pl-2 font-poppinsMedium text-red-800 underline">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
