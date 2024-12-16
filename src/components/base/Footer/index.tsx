import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/footer/logo.svg";
import Facebook from "@/assets/images/footer/facebook.svg";
import Twitter from "@/assets/images/footer/twitter.svg";
import Insta from "@/assets/images/footer/insta.svg";

export const Footer: React.FC = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[1800px] px-6 md:px-16 py-4 space-y-6 font-poppins w-full">
        <div className="flex justify-between">
          <Image src={Logo} alt="logo" className="w-[8rem] md:w-[10rem]" />
          <div className="flex flex-col items-center gap-2">
            <div>FollowUs</div>
            <div className="flex gap-2">
              <Image src={Facebook} alt="logo" />
              <Image src={Twitter} alt="twitter" />
              <Image src={Insta} alt="insta" />
            </div>
          </div>
        </div>
        <div className="flex justify-between tracking-wide text-textGray text-p2">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:flex md:justify-between">
            <div className="flex flex-col items-center md:items-start gap-0.5">
              <div className="uppercase text-p1 text-lightGray font-poppinsMedium">
                Contact Info
              </div>
              <div>0771375669</div>
              <div>krishzkara27@gmail.com</div>
              <div>No.1 Karanavai West, Karaveddy,</div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-0.5">
              <div className="uppercase text-p1 text-lightGray font-poppinsMedium">
                Company
              </div>
              <div>About Us</div>
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-0.5">
              <div className="uppercase text-p1 text-lightGray font-poppinsMedium">
                Services
              </div>
              <div>Micro Loan Facilities</div>
              <div>Gold Collateral Loan Facilities</div>
              <div>Vehicle Loan Facilities</div>
              <div>Institutional Investment Facilities</div>
            </div>
            <div className="flex flex-col items-center md:items-start gap-0.5">
              <div className="uppercase text-p1 text-lightGray font-poppinsMedium">
                Registered Under
              </div>
              <div>The Companies Act No. 7 of 2007</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-2">
          <div className="text-center text-p2">
            Copyright © {currentYear} Royal Reach. All Rights Reserved.
          </div>
          <div className="text-lightGray text-p2">
            Website developed by:{" "}
            <span className="text-textGray">Krishz Kara</span>
          </div>
        </div>
      </div>
    </div>
  );
};
