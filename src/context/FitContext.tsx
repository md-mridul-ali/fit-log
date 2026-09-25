'use client'

import React, { createContext, ReactNode, useState } from 'react';

export const FitContext = createContext({})

const FitProvider = ({children}:{children: ReactNode}) => {

    const [plan, setPlan] = useState([])
    const [save, setSave] = useState([])

    const sharedData = {
        plan, 
        setPlan,
        save,
        setSave
    }

    return (
       <FitContext.Provider value={sharedData}>
        {children}
       </FitContext.Provider>
    );
};

export default FitProvider;