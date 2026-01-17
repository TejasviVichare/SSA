"use client";
import React from "react";
import LazyVideo from "./LazyVideo"; 

const Hero = () => {
  return (
    <section className="relative w-full h-[65vh] md:h-screen overflow-hidden pt-[14vw] md:pt-[8vw] text-center">

      {/* Background Video*/}
      <LazyVideo
        src="/videos/hero.mp4"
        poster="/images/fallbackimg.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

     
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center h-full px-[6vw] w-full">
        <div className="text-white w-full">

          <p className="uppercase tracking-[2vw] md:tracking-[0.7vw] text-[3vw] md:text-[1vw] mb-[3vw] md:mb-[1vw]">
            SSA Hunter Valley
          </p>

          <p className="uppercase font-normal tracking-[0.4vw] leading-tight text-[6vw] md:text-[3vw]">
            Grow Your Game With The
          </p>

          <p className="uppercase font-bold leading-tight text-[8vw] md:text-[4vw] mt-[1vw]">
            Professionals
          </p>

          <div className="flex justify-center my-[4vw] md:my-[2vw]">
            <hr className="w-[40vw] md:w-96 border-white/60" />
          </div>

          <div className="flex justify-center">
            <div className="bg-[rgba(151,179,32,0.5)] px-[6vw] md:px-12 py-[2vw] md:py-2">
              <p className="tracking-[0.5vw] md:tracking-[0.3vw] text-[3.5vw] md:text-[1.2vw] font-light">
                Adopt &bull; Nurture &bull; Deliver
              </p>
            </div>
          </div>

          <button className="mt-[6vw] md:mt-[3vw] border px-[8vw] md:px-[4vw] py-[3vw] md:py-[1.1vw] rounded-full text-[3.5vw] md:text-[1.2vw]">
            Register Now
          </button>

          {/* Small Box */}
          <div
            className="absolute right-[3vw] bottom-[3vw] z-30 
                       flex flex-col items-end gap-[1.5vw] md:gap-2
                       scale-[0.8] md:scale-100 origin-bottom-right"
          >

           
            <div className="flex items-center gap-[1vw] md:gap-2">
              <span className="text-[#97B320] text-[3vw] md:text-sm">&lt;&lt;</span>
              <span className="uppercase tracking-wide text-[2.5vw] md:text-xs">
                Weather
              </span>
              <div className="border-b border-[#97B320] w-[10vw] md:w-16" />
            </div>

            {/* Weather box */}
            <div className="bg-[rgba(151,179,32,0.5)] px-[2vw] py-[2vw] md:px-2 md:py-3">
              <div className="opacity-80 text-[2.2vw] md:text-xs mb-[0.5vw]">
                Hunter Valley
              </div>

              <div className="flex gap-[3vw] md:gap-4 items-start">
                <div className="font-bold text-[4.5vw] md:text-3xl leading-none">
                  19°
                  <span className="font-light text-[3vw] md:text-xl">C</span>
                </div>

                <div className="text-left opacity-75 text-[2.2vw] md:text-xs">
                  <p className="uppercase font-bold tracking-wide">Weather</p>
                  <p>Saturday 8pm</p>
                </div>
              </div>
            </div>

          
            <div className="flex items-center gap-[1vw] md:gap-2">
              <span className="text-[#97B320] text-[3vw] md:text-sm">&lt;&lt;</span>
              <span className="uppercase tracking-wide text-[2.5vw] md:text-xs">
                Ongoing Matches
              </span>
              <div className="border-b border-[#97B320] w-[10vw] md:w-16" />
            </div>

           
            <div className="flex items-center gap-[1vw] md:gap-2">
              <span className="text-[#97B320] text-[3vw] md:text-sm">&lt;&lt;</span>
              <span className="uppercase tracking-wide text-[2.5vw] md:text-xs">
                Score
              </span>
              <div className="border-b border-[#97B320] w-[10vw] md:w-16" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
