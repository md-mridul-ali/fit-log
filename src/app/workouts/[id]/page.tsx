import PlanButton from "@/app/components/detailsPageButton/PlanButton";
import SaveButton from "@/app/components/detailsPageButton/SaveButton";
import { IData } from "@/types/dataType";
import Image from "next/image";
import React from "react";

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch the data");
  }

  return res.json();
};

interface IDetailsPage {
  params: Promise<{ id: string }>;
}

const DetailsPage = async ({ params }: IDetailsPage) => {
  const { id } = await params;

  const datas: IData[] = await getData();
  const data = datas.find((data) => data.id.toString() === id) as IData;

  return (
    <div className="min-h-screen bg-[#0d0f12] px-4 py-8 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={data.image}
            alt={data.name}
            className="h-full min-h-[400px] w-full object-cover"
          />
        </div>
        {/* <Image src={data.image} alt={data.name} height={400} width={350}></Image> */}

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold uppercase sm:text-4xl">
            {data.name}
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            {data.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {data.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="rounded-full bg-lime-400 px-4 py-1 text-xs font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#15181e]">
            {[
              ["Equipment", data.equipment],
              ["Difficulty", data.difficulty],
              ["Sets", data.sets],
              ["Reps", data.reps],
              ["Duration", `${data.duration} min`],
              ["Calories", `${data.caloriesBurned} kcal`],
              ["Rating", `⭐ ${data.rating}`],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`flex items-center justify-between px-5 py-4 ${
                  index !== 6 ? "border-b border-gray-800" : ""
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  {label}
                </span>

                <span className="text-sm text-gray-200">{value}</span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="mt-3 space-y-3">
              {data.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3 text-sm text-gray-400">
                  <span className="text-gray-600">{index + 1}.</span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap gap-3">
            <PlanButton data={data}></PlanButton>
            <SaveButton data={data}></SaveButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
