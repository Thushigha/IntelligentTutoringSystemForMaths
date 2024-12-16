import React from "react";
import botImg from "@/assets/svg/assessment/bot.svg";
import SendImg from "@/assets/svg/assessment/send.svg";
import Image from "next/image";
import Profile from "@/assets/svg/profile/proImg.svg";

const Chatbot: React.FC = () => {
  return (
    <div className="mainBg w-full pl-[18vw] pt-20 pr-8">
      <div className=" bg-white py-4 px-6 rounded-xl border border-gray-300 h-[37rem] space-y-4 relative z-20">
        <div className="absolute z-20 bottom-4 h-10 w-[96%] border border-gray-400 rounded-lg flex items-center justify-between px-4">
          <div className="text-[14px] text-gray-500">Type something here</div>
          <Image src={SendImg} alt="" className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-2">
          <Image src={botImg} alt="" className="h-8 w-8" />
          <div className="text-[14px]">Hi there! How can I help you?</div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            <div className="text-[14px]">I want to learn about how to learn addition?</div>
            <Image src={Profile} alt="" className="h-6 w-6 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
