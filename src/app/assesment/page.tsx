import React from "react";
import MathsImg from "@/assets/svg/assessment/maths.svg";
import ChemistryImg from "@/assets/svg/assessment/chemistry.svg";
import Image from "next/image";
import { Button } from "@/components/shared";
import Link from "next/link";

const Assesment: React.FC = () => {
  return (
    <div className="mainBg w-full pl-[18vw] pt-20">
      {/* <div>Which part, you want to try out</div> */}
      <div className="w-full flex gap-12 pr-20">
        <div className="basis-[60%] bg-white py-4 px-8 rounded-xl border border-gray-300">
          <div className="flex flex-col items-center justify-center">
            <div className="font-poppinsMedium">Mathematics</div>
            <Image src={MathsImg} alt="" className="h-[12rem] w-[15rem]" />
            <div className="text-[14px] text-center pb-4">
              Boost your math skills with engaging assessments - challenge
              yourself and track progress effortlessly today!
            </div>
            <Link href="/assesment/mathematics">
              <Button name="try now" />
            </Link>
          </div>
        </div>
        {/* <div className="basis-[50%] bg-white py-4 px-8 rounded-xl border border-gray-300">
          <div className="flex flex-col items-center justify-center">
            <div className="font-poppinsMedium">Chemistry</div>
            <Image src={ChemistryImg} alt="" className="h-[12rem] w-[15rem]" />
            <div className="text-[14px] text-center pb-4">
              Boost your math skills with engaging assessments - challenge
              yourself and track progress effortlessly today!
            </div>
            <Button name="try now" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Assesment;
