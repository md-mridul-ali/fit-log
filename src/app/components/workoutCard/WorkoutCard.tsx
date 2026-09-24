import { IData } from "@/types/dataType";
import React from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const WorkoutCard = ({ data }: { data: IData }) => {
  const { name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = data;

  return (
    <div className="bg-[#222630] border-2 border-gray-700 rounded-xl">
      <img
        className="h-[200px] w-full rounded-t-xl"
        src={image}
        alt={name}
      ></img>
      {/* <Image src={image} height={200} width={250} alt="name"></Image> */}
      <div className="px-5">
        <div className="flex flex-wrap gap-2 mt-5">
          {muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-xl bg-[#c6f600] px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-[#14140f]"
            >
              {group}
            </span>
          ))}
        </div>
        <h2 className="text-white text-lg py-2">{name}</h2>
        <p className="mt-1 text-[14px] text-[#8b8b95]">{equipment}</p>
        <hr className="border-0.5 text-gray-600 mt-4 mb-4"></hr>
        <div className="flex items-center gap-5 mb-4">
            <div className="flex items-center gap-1 text-gray-400">
                <MdAccessTimeFilled />
                <p>{duration} min</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
                <IoTimerSharp />
                <p>{caloriesBurned} kcal</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
                <FaRegStar />
                <p>{rating}</p>
            </div>
        </div>
        <div className="mb-5">
            <Link href=""><button className="btn-block py-2 bg-[#c6f600] rounded-lg text-xl">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
