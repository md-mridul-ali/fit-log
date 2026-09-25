'use client'
import { FitContext } from "@/context/FitContext";
import Link from "next/link";
import React, { useContext } from "react";
import { IData } from '@/types/dataType';

const PlanPage = () => {

  const {plan,setPlan, save,setSave} = useContext(FitContext)as {
            plan: IData[];
            setPlan: React.Dispatch<React.SetStateAction<IData[]>>;
            save: IData[];
            setSave: React.Dispatch<React.SetStateAction<IData[]>>;
        };
  // const {save,setSave} = useContext(FitContext)as {
  //           save: IData[];
  //           setSave: React.Dispatch<React.SetStateAction<IData[]>>;
  //       };
  console.log(plan);
  console.log(save);


  return (
    <div className="py-8">
      <h2 className="text-white text-2xl font-bold">MY PLAN</h2>
      <p className="text-gray-500">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-5 grid grid-cols-1 divide-y bg-[#222630] border-2 border-gray-600 divide-gray-600 overflow-hidden rounded-2xl shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {/* Exercise */}
        <div className="flex items-center justify-center gap-4 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl">
            🏋️
          </div>

          <div>
            <p className="text-lg font-medium text-gray-300">Exercise</p>
            <p className="text-2xl font-bold text-[#C2F800]">{0}</p>
          </div>
        </div>

        {/* Minutes */}
        <div className="flex items-center justify-center gap-4 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-xl">
            ⏱️
          </div>

          <div>
            <p className="text-lg font-medium text-gray-300">Minutes</p>
            <p className="text-2xl font-bold text-white">{0}</p>
          </div>
        </div>

        {/* Calories */}
        <div className="flex items-center justify-center gap-4 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xl">
            🔥
          </div>

          <div>
            <p className="text-lg font-medium text-gray-300">Calories</p>
            <p className="text-2xl font-bold text-white">{0}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-8">
        <div className="bg-[#232732] py-2 px-4 rounded-lg flex gap-4">
          <Link href="">
            <button className="text-gray-200">Todays Plan</button>
          </Link>
          <Link href="">
            <button className="text-gray-200">Saved</button>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-gray-300">Sort By</p>
          <select
            className="rounded-lg border-2 border-gray-600 bg-[#232732] px-4 py-1
                   text-gray-200 outline-none transition
                   "
          >
            <option value="">Select Criteria</option>
            <option value="duration">Duration</option>
            <option value="rating">Rating</option>
            <option value="calories">Calories</option>
          </select>
        </div>
      </div>



      <div className="flex flex-col justify-center items-center h-[200px] w-[full] border-2 border-gray-900 border-dashed rounded-lg">
            <h2 className="text-2xl text-white font-bold">NOTHING HERE YET</h2>
            <p className="text-gray-500">Browse the library and add a lift to get today moving.</p>
            <div className="mt-5">
                <Link href="/"><button className="py-2 px-4 rounded-3xl bg-[#C2F10D] font-semibold">Go to workouts</button></Link>
            </div>
      </div>

    </div>
  );
};

export default PlanPage;
