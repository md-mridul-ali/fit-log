"use client";

import { FitContext } from "@/context/FitContext";
import { IData } from "@/types/dataType";
import React, { use } from "react";
import { toast } from "react-toastify";

const PlanButton = ({ data }: { data: IData }) => {
  const { plan, setPlan } = use(FitContext) as {
    plan: IData[];
    setPlan: React.Dispatch<React.SetStateAction<IData[]>>;
  };

  const alreadyAdded = plan.some((item) => item.id === data.id);

  const handlePlan = (planData: IData) => {

    if (alreadyAdded) {
      toast.info("This exercise is already in your plan!");
      return;
    }

    setPlan([...plan, planData]);

    toast.success(`Successfully added ${data.name}`);
  };

  return (
    <button
      onClick={() => handlePlan(data)}
      disabled={alreadyAdded}
      className={`rounded-lg px-5 py-3 text-sm font-semibold transition ${
        alreadyAdded
          ? "cursor-not-allowed bg-gray-600 text-gray-400"
          : "bg-lime-400 text-black hover:bg-lime-300"
      }`}
    >
      {alreadyAdded ? "Already Added" : "Add to today's plan"}
    </button>
  );
};

export default PlanButton;