'use client'
import { FitContext } from '@/context/FitContext';
import { IData } from '@/types/dataType';
import React, { use } from 'react';

const PlanButton = ({data}:{data:IData}) => {

    const {plan, setPlan} = use(FitContext) as {
        plan: IData[];
        setPlan: React.Dispatch<React.SetStateAction<IData[]>>;
    };



    const handlePlan = (planData:IData) =>{
        setPlan([...plan, planData]);
    }

    return (
         <button onClick={() =>handlePlan(data)} className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-semibold text-black hover:bg-lime-300">
                Add to todays plan
              </button>
    );
};

export default PlanButton;