const Hero = () => {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden pt-[8vw]    text-center">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
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
            <p className="block text-[7vw] md:text-[4vw] leading-loose  text-white uppercase font-bold">
              Professionals
            </p>
            <div className="flex justify-center ">
              <hr className="w-96" />
            </div>
          <p className="mt-[2vw] text-[2.2vw] md:text-[1.2vw]">
            Adopt · Nurture · Deliver
          </p>

          <button className="mt-[3vw] border px-[4vw] py-[1.5vw] rounded-full text-[1.2vw] hover:scale-105 transition">
            Register Now
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
