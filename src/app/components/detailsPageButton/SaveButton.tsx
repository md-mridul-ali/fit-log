'use client'

import { IData } from '@/types/dataType';
import { FitContext } from '@/context/FitContext';
import React, { use } from 'react';

const SaveButton = ({data}:{data:IData}) => {

    const {save, setSave} = use(FitContext) as {
            save: IData[];
            setSave: React.Dispatch<React.SetStateAction<IData[]>>;
        };

    
         const handleSave = (saveData:IData) =>{
                setSave([...save, saveData]);
            }

    return (
       <button onClick={()=> handleSave(data)} className="rounded-lg border border-gray-700 px-5 py-3 text-sm text-gray-200 hover:bg-gray-800">
                ♡ Save for later
              </button>
    );
};

export default SaveButton;