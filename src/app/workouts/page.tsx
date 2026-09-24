import React from 'react';

const getData = async() =>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    if(!res.ok){
        throw new Error('Failed to fetch the data');
    }
    return res.json();
}

const WorkoutPage = async() => {

    const data = await getData();

    return (
        <div>
            <h2 className='text-white text-xl font-medium'>THE LIBRARY</h2>
            <p className='text-gray-300'>Twelve lifts covering every major muscle group.</p>
            <p>Total data: {data.length}</p>
        </div>
    );
};

export default WorkoutPage;