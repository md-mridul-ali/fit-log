import { FitContext } from '@/context/FitContext';
// import React, { use } from 'react';
import { useContext } from "react";
import { IData } from "@/types/dataType";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { ImCross } from "react-icons/im";
// import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { toast } from 'react-toastify';

const SaveCard = ({ data }: { data: IData }) => {
  const { id, name, image, equipment, duration, caloriesBurned, rating } = data;

  const { setSave } = useContext(FitContext) as {
      setSave: React.Dispatch<React.SetStateAction<IData[]>>;
    };
  
    
    const removeFromPlan = () => {
      setSave((previousPlan) =>
        previousPlan.filter((item) => item.id !== id)
      
      );
      toast(`Successfully removed ${name}`)
    };

  return (

    <div className="mt-5 flex flex-col gap-5 rounded-lg border-2 border-gray-500 p-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Left Section */}
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
        <div className="shrink-0">
          <img
            src={image}
            alt={name}
            className="h-24 w-full rounded-lg object-cover sm:h-24 sm:w-40"
          />
        </div>

        <div className="min-w-0">
          <h2 className="text-xl font-medium text-white">{name}</h2>

          <p className="text-gray-400">{equipment}</p>

          {/* Stats */}
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-1 text-gray-400">
              <MdAccessTimeFilled className="text-[#C2F800]" />
              <p>{duration} min</p>
            </div>

            <div className="flex items-center gap-1 text-gray-400">
              <IoTimerSharp className="text-[#C2F800]" />
              <p>{caloriesBurned} kcal</p>
            </div>

            <div className="flex items-center gap-1 text-gray-400">
              <FaRegStar className="text-[#C2F800]" />
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-3 lg:shrink-0">
        <Link href={`workouts/${id}`}>
          <button className="rounded-3xl border-2 border-gray-400 px-4 py-2 text-white transition hover:border-white">
            View Details
          </button>
        </Link>

        <button onClick={removeFromPlan} className="text-lg text-gray-400 transition hover:text-red-500">
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default SaveCard;
