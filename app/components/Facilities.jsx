import React from "react";

export default function Facilities() {
  return (
    <section className="w-full bg-white md:mb-[15vw]">
      {/* Facilities Section */}
      <div className="max-w-[90vw] mx-auto py-[5vw] ">
        <h2 className="text-[4vw] md:text-[2vw] font-semibold">Facilities</h2>

        <p className="text-gray-600 text-[1vw] max-w-[35vw] mt-[0.7vw] mb-[2vw]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>

        <div className="flex md:flex-col flex-col gap-[3vw] bg-gradient-to-r from-[#0f3d2e] to-[#9bbd3a] md:mt-[10vw] mt-[5vw]">
        
          <div className="flex md:flex-row flex-col gap-[3vw] md:-mt-[6vw] md:ml-[5vw] mb-[3vw]">
            {/* Tennis Video */}
            <div className="rounded-[0.3vw] overflow-hidden text-white ">
              <video
                className="w-full h-[30vw] md:h-[18vw] object-cover"
                src="/videos/tennis.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="p-[2vw]">
                <h3 className="text-[2.2vw] md:text-[1.3vw] font-medium">
                  Tennis
                </h3>
                <div className="inline-block ">
                  <button className="bg-white text-black mr-[1vw] px-[1.6vw] py-[0.4vw] my-[0.5vw] rounded-3xl text-[1vw]">
                    lorem
                  </button>
                  <button className="bg-white text-black px-[1.6vw] py-[0.4vw] my-[0.5vw] rounded-3xl text-[1vw]">
                    lorem
                  </button>
                </div>
                <p className="text-[1.2vw] opacity-80 mt-[0.5vw]">
                  World-class courts for training and matches.
                </p>
                   <p className="text-[1.2vw] opacity-80 mt-[0.5vw]">
                  World-class courts for training 
                </p>
              </div>
            </div>

            {/* Accommodation Video */}
            <div className="rounded-[0.3vw] overflow-hidden text-white ">
              <video
                className="w-full h-[30vw] md:h-[18vw] object-cover"
                src="/videos/accommodation.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="p-[2vw]">
                <h3 className="text-[2.2vw] md:text-[1.3vw] font-medium">
                  Accommodation
                </h3>
                   <div className="inline-block ">
                  <button className="bg-white text-black mr-[1vw] px-[1.6vw] py-[0.4vw] my-[0.5vw] rounded-3xl text-[1vw]">
                    lorem
                  </button>
                
                </div>
                <p className="text-[1.2vw] opacity-80 mt-[0.5vw]">
                  Premium rooms for players and guests .
                </p>
                   <p className="text-[1.2vw] opacity-80 mt-[0.5vw]">
                  World-class courts for training 
                </p>
              </div>
            </div>
          </div>

         
          <div className="flex md:flex-row flex-col gap-[3vw] md:items-end md:justify-end md:-mb-[15vw] md:mr-[5vw]">
            {/* Fitness Video */}
            <div className="rounded-[0.3vw] overflow-hidden md:text-black text-white">
              <video
                className="w-full h-[30vw] md:h-[18vw] object-cover"
                src="/videos/fitness.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="p-[2vw]">
                <h3 className="text-[2.2vw] md:text-[1.3vw] font-medium">
                  Fitness
                </h3>
                   <div className="inline-block ">
                  <button className="bg-[#9bbd3a] text-white mr-[1vw] px-[1.6vw] py-[0.4vw] my-[0.5vw] rounded-3xl text-[1vw]">
                    lorem
                  </button>
                  <button className="bg-[#9bbd3a] text-white px-[1.6vw] py-[0.4vw] my-[0.5vw] rounded-3xl text-[1vw]">
                    lorem
                  </button>
                </div>
                <p className="text-[1.2vw] md:text-gray-600 text-white mt-[0.5vw]">
                  Fully-equipped gym facilities training .
                </p>
                   <p className="text-[1.2vw] opacity-80 mt-[0.5vw] md:text-gray-600 text-white">
                  Lorem ipsum dolor sit. 
                </p>
              </div>
            </div>

            {/* Recovery Video */}
            <div className="rounded-[0.3vw] overflow-hidden md:text-black text-white">
              <video
                className="w-full h-[30vw] md:h-[18vw] object-cover"
                src="/videos/swimming.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="p-[2vw]">
                <h3 className="text-[2.2vw] md:text-[1.3vw] font-medium">
                  Recovery
                </h3>
                   <div className="inline-block ">
                  <button className="bg-[#9bbd3a] text-white mr-[1vw] px-[1.6vw] py-[0.4vw] my-[0.5vw] rounded-3xl text-[1vw]">
                    lorem
                  </button>
                  <button className="bg-[#9bbd3a] text-white px-[1.6vw] py-[0.4vw] my-[0.5vw] rounded-3xl text-[1vw]">
                    lorem
                  </button>
                  <button className="bg-[#9bbd3a] text-white px-[1.6vw] py-[0.4vw] my-[0.5vw] rounded-3xl text-[1vw]">
                    lorem
                  </button>
                </div>
                <p className="text-[1.2vw] md:text-gray-600 text-white mt-[0.5vw]">
                  Pool, spa and relaxation services training .
                </p>
                   <p className="text-[1.2vw] opacity-80 mt-[0.5vw] md:text-gray-600 text-white">
                  Lorem ipsum dolor sit.  
                </p>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      
    </section>
  );
}
