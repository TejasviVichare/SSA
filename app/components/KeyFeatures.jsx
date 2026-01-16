import Image from "next/image";

export default function KeyFeatures() {
  return (
    <div className="w-full font-montserrat">

      {/* SECTION A — KEY FEATURES */}
      <section className="relative py-16 px-6 md:px-16 lg:px-24">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-semibold">
            key <span className="text-black">Features</span>
          </h2>
          <button className="bg-[#97B320] text-white px-4 py-2 rounded-3xl text-sm">
            Register Now
          </button>
        </div>

        <p className="text-gray-600 max-w-2xl mt-2 text-sm">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-sm text-gray-700">
          <ul className="space-y-2 list-none pl-5 ">
            <li><span className="text-[#97B320]">&#8594;</span>  First venue in the world</li>
            <li><span className="text-[#97B320]">&#8594;</span> First venue to have 60 multi surface courts</li>
            <li><span className="text-[#97B320]">&#8594;</span> Top facility with ATP/WTA capabilities</li>
            <li><span className="text-[#97B320]">&#8594;</span> Tennis academy in Asia Pacific</li>
          </ul>

          <ul className="space-y-2 list-none  pl-5">
            <li><span className="text-[#97B320]">&#8594;</span> First event in the world</li>
            <li><span className="text-[#97B320]">&#8594;</span> Facilities capable for WTA & ATP events</li>
            <li><span className="text-[#97B320]">&#8594;</span> First one stop tennis academy</li>
            <li><span className="text-[#97B320]">&#8594;</span> Leading tennis facility worldwide</li>
          </ul>
        </div>
      </section>

      {/* SECTION B — A GLIMPSE OF EXCELLENCE */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-semibold">
            A Glimpse of Excellence
          </h2>
          <button className="bg-[#97B320]  text-white px-4 py-2 rounded-3xl text-sm">
            Register Now
          </button>
        </div>

        <p className="text-gray-600 max-w-2xl mt-2 text-sm">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Image (Tall) */}
          <div className="relative w-full h-75 rounded-lg overflow-hidden">
            <Image src="/images/games5.jpg" alt="" fill className="object-cover w-60" />
          </div>

          {/* Right Image (Large Wide) */}
          <div className="relative w-full h-75 rounded-lg overflow-hidden">
            <Image src="/images/games6.jpg" alt="" fill className="object-cover" />
          </div>
        </div>
      </section>

    
  

    </div>
  );
}
