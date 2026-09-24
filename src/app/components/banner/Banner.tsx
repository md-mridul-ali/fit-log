import React from "react";
import Image from "next/image";
import bannerImage from "../../../assets/banner.png";
const Banner = () => {
  return (
    <section className="mt-10 mb-10 relative mx-auto w-full overflow-hidden rounded-xl border border-[#252830] bg-[#15171d]">
      <div className="flex min-h-[300px] items-center px-6 py-10 sm:px-10 lg:min-h-[300px] lg:px-12">
        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#C2F800]">
            Workout Library
          </p>

          <h1 className="max-w-[500px] text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-[46px]">
            Train With Intent. Log Every Set.
          </h1>

          <p className="mt-4 max-w-[470px] text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the weeks&apos; work add up.
          </p>

          <button className="mt-5 rounded-md bg-[#C2F800] px-5 py-2.5 text-[10px] font-bold uppercase tracking-wide text-black transition hover:bg-[#d2ff32] hover:scale-105">
            Browse Workouts
          </button>
        </div>

        {/* Workout Image */}
        <div className="absolute right-4 bottom-0 hidden h-[270px] w-[250px] sm:block lg:right-12 lg:h-[280px] lg:w-[280px]">
          <Image
            src={bannerImage}
            alt="banner logo"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
