"use client";
import { FitContext } from "@/context/FitContext";
import React, { useContext, useState } from "react";
import { IData } from "@/types/dataType";
import NoData from "../components/nodata/NoData";
import PlanCard from "../components/planCard/PlanCard";
import SaveCard from "../components/saveCard/SaveCard";

const PlanPage = () => {
  const { plan, save } = useContext(FitContext) as {
    plan: IData[];
    setPlan: React.Dispatch<React.SetStateAction<IData[]>>;
    save: IData[];
    setSave: React.Dispatch<React.SetStateAction<IData[]>>;
  };

  const [sortby, setSortby] = useState<"duration" | "caloriesBurned" | "rating">("duration")

  const sortDatas = (datas:IData[]) =>{

    const sortedDatas = [...datas];

    if(sortby === "duration"){
      sortedDatas.sort((a,b) => b.duration - a.duration)
    }
    else if(sortby === "caloriesBurned"){
      sortedDatas.sort((a,b) => b.duration - a.duration)
    }
    else if(sortby === "rating"){
      sortedDatas.sort((a,b) => b.duration - a.duration)
    }
    return sortedDatas;

  }

  const sortPlan = sortDatas(plan)
  const sortSave = sortDatas(save)

  const [activeTab, setActiveTab] = useState("plan");
  let currentData = plan;

  if (activeTab === "save") {
    currentData = save;
  }

  const totalExercises = currentData.length;

  const totalMinutes = currentData.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = currentData.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  return (
    <div className="py-8">

      <h2 className="text-2xl font-bold text-white">MY PLAN</h2>

      <p className="text-gray-500">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-5 grid grid-cols-1 divide-y overflow-hidden rounded-2xl border-2 border-gray-600 bg-[#222630] divide-gray-600 shadow-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0">

        <div className="flex items-center justify-center gap-4 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl">
            🏋️
          </div>

          <div>
            <p className="text-lg font-medium text-gray-300">Exercise</p>

            <p className="text-2xl font-bold text-[#C2F800]">
              {totalExercises}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-xl">
            ⏱️
          </div>

          <div>
            <p className="text-lg font-medium text-gray-300">Minutes</p>

            <p className="text-2xl font-bold text-white">{totalMinutes}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xl">
            🔥
          </div>

          <div>
            <p className="text-lg font-medium text-gray-300">Calories</p>

            <p className="text-2xl font-bold text-white">{totalCalories}</p>
          </div>
        </div>
      </div>


      <div className="mt-10">

        <div className="flex justify-between mb-2">
          <div className="flex">

          <button
            onClick={() => setActiveTab("plan")}
            className={`px-5 py-3 text-sm font-medium ${
              activeTab === "plan"
                ? "border-b-2 border-[#C2F800] text-[#C2F800]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Todays Plan
          </button>

          <button
            onClick={() => setActiveTab("save")}
            className={`px-5 py-3 text-sm font-medium ${
              activeTab === "save"
                ? "border-b-2 border-[#C2F800] text-[#C2F800]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="">
          <select
            value={sortby}
            onChange={(e) => setSortby(e.target.value as "duration" | "caloriesBurned" | "rating")}
            defaultValue="Pick a Runtime"
            className="select select-success"
          >
            <option disabled={true}>Sort by</option>
            <option value={"duration"}>Duration</option>
            <option value={"caloriesBurned"}>Calories Burned</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
        </div>

        <div className="rounded-xl bg-[#222630] p-5">

          {activeTab === "plan" && (
            <>
              {sortPlan.length > 0 ? (
                <div className="space-y-4">
                  {sortPlan.map((data: IData) => (
                    <PlanCard key={data.id} data={data} />
                  ))}
                </div>
              ) : (
                <NoData />
              )}
            </>
          )}

          {activeTab === "save" && (
            <>
              {sortSave.length > 0 ? (
                <div className="space-y-4">
                  {sortSave.map((data: IData) => (
                    <SaveCard key={data.id} data={data} />
                  ))}
                </div>
              ) : (
                <NoData />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
