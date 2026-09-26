import React from 'react';
import Link from 'next/link';

const NoData = () => {
    return (
       <div className="flex flex-col justify-center items-center h-[200px] w-[full] border-2 border-gray-900 border-dashed rounded-lg">
        <h2 className="text-2xl text-white font-bold">NOTHING HERE YET</h2>
        <p className="text-gray-500">
          Browse the library and add a lift to get today moving.
        </p>
        <div className="mt-5">
          <Link href="/">
            <button className="py-2 px-4 rounded-3xl bg-[#C2F10D] font-semibold">
              Go to workouts
            </button>
          </Link>
        </div>
      </div>
    );
};

export default NoData;