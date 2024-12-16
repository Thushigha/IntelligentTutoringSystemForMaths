"use client";
import React from "react";
import MathsImg from "@/assets/svg/assessment/maths.svg";
import ChemistryImg from "@/assets/svg/assessment/chemistry.svg";
import Image from "next/image";
import { Button } from "@/components/shared";
import Link from "next/link";
import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ProgressTracking: React.FC = () => {
  const data = [
    {
      name: "Oct 11",
      Mathematics: 80,
      // Chemistry: 60,
      amt: 80,
    },
    {
      name: "Oct 20",
      Mathematics: 70,
      // Chemistry: 60,
      amt: 60,
    },
    {
      name: "Oct 28",
      Mathematics: 90,
      // Chemistry: 40,
      amt: 80,
    },
    {
      name: "Nov 05",
      Mathematics: 60,
      // Chemistry: 70,
      amt: 60,
    },
    {
      name: "Nov 10",
      Mathematics: 70,
      // Chemistry: 90,
      amt: 50,
    },
    {
      name: "Nov 15",
      Mathematics: 90,
      amt: 60,
    },
    {
      name: "Nov 18",
      Mathematics: 80,
      amt: 40,
    },
  ];
  return (
    <div className="mainBg w-full pl-[18vw] pt-20">
      <div className="w-full  pr-20">
        <div className="bg-white py-4 px-8 rounded-xl border border-gray-300 h-[35rem]">
          <div className="pb-8">Track your progress</div>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Mathematics"
                stroke="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
