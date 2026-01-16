const Hero = () => {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden pt-[8vw] md:pt-[6vw]">

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
      <div className="relative z-20 flex items-center h-full px-[6vw]">
        <div className="text-white max-w-[70vw]">

          <p className="text-[2vw] uppercase tracking-widest mb-[1vw]">
            SSA Hunter Valley
          </p>

          <h1 className="text-[7vw] md:text-[4vw] leading-[1.1] font-bold">
            Grow Your Game With The
            <span className="block text-green-400">
              Professionals
            </span>
          </h1>

          <p className="mt-[2vw] text-[2.2vw] md:text-[1.2vw]">
            Adopt · Nurture · Deliver
          </p>

          <button className="mt-[3vw] bg-green-500 px-[4vw] py-[1.5vw] rounded-full text-[1.2vw] hover:scale-105 transition">
            Register Now
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
