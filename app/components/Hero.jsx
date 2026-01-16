const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-[8vw]    text-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/fallbackimg.png"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center h-full px-[6vw] w-full text-center">
        <div className="text-white w-full text-center">
          <p className="text-[1vw] uppercase tracking-[0.7vw] mb-[1vw]">
            SSA Hunter Valley
          </p>

          <p className="text-[7vw] md:text-[3vw] leading-[1.1] tracking-[0.3vw] font-normal uppercase">
            Grow Your Game With The
          </p>
          <p className="block text-[6vw] md:text-[4vw] leading-loose  text-white uppercase font-bold">
            Professionals
          </p>
          <div className="flex justify-center ">
            <hr className="w-96" />
          </div>
          <div className="flex justify-center">
            <div className="bg-[rgba(151,179,32,0.5)] bg-opacity-90  inline-block px-12 py-2 mt-6 ">
              <p className="text-[2.2vw] md:text-[1.2vw] tracking-[0.3vw]  text-center font-light">
                Adopt &bull; Nurture &bull; Deliver
              </p>
            </div>
          </div>

          <button className="mt-[3vw] border px-[4vw] py-[1.1vw] rounded-full text-[1.2vw] ">
            Register Now
          </button>

          {/* Side Buttons */}
          <div className="absolute right-0 bottom-4 space-y-2 flex flex-col items-end">
            <div className="flex items-center gap-2 ">
              <span className="text-[#97B320]">&lt;&lt;</span>
              <span className="text-xs uppercase tracking-wide">Weather</span>
              <div className="flex-1 border-b border-[#97B320]  w-16"></div>
            </div>

            {/* Weather Box */}
            <div className="bg-[rgba(151,179,32,0.5)] bg-opacity-90 py-3 px-2">
              <div className="text-xs  opacity-80 py-1tracking-wide">
                Hunter Valley
              </div>
              <div className="flex flex-row gap-[2vw] align-top">
                <div className="text-base md:text-3xl font-bold">
                  19° <span className="font-extralight">C</span>
                </div>
                <div className="text-xs opacity-75 mt-1 text-left">
                  <p className="text-xs uppercase tracking-wide leading-[2.5vw] font-bold">
                    Weather
                  </p>
                  <p>Saturday 8pm</p>{" "}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <span className="text-[#97B320]">&lt;&lt;</span>
              <span className="text-xs uppercase tracking-wide">
                Ongoing Matches
              </span>
              <div className="flex-1 border-b border-[#97B320]  w-16"></div>
            </div>
            <div className="flex items-center gap-2 ">
              <span className="text-[#97B320]">&lt;&lt;</span>
              <span className="text-xs uppercase tracking-wide">Score</span>
              <div className="flex-1 border-b border-[#97B320]  w-16"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
