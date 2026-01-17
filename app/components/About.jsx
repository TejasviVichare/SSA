import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="relative w-full bg-white text-black py-20">
      <div className="absolute top-0 left-0 w-75 h-75 bg-lime-200/30 -z-10 "></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-[5.5vw]">
          <p className="text-sm md:text-[1.1vw]  tracking-wide">
            To be the first venue in the world to have
            <span className="text-[#97B320] font-semibold">
              &nbsp; 60 multi surface courts&nbsp;
            </span>
            at one location and establish first one stop tennis academy in the
            Asia Pacific producing grand slam champions.
          </p>
        </div>

        <div className="flex justify-center gap-10 mt-10 text-sm font-medium text-gray-600">
          <Link
            href="#"
            className="border-b-2 border-[#97B320] pb-1 text-black"
          >
            About Us
          </Link>
          <Link href="#">Coaches</Link>
          <Link href="#">Vision</Link>
          <Link href="#">Mission</Link>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="pt-[3.5vw]">
            <h3 className="text-xl md:text-2xl font-bold mb-[2vw]">About Us</h3>
            <p className="text-sm text-gray-700 leading-relaxed max-w-md">
              To be the first venue in the world to have 60 multi surface courts
              at one location and establish first one stop tennis academy in the
              Asia Pacific producing grand slam champions.
            </p>

            <div className="flex gap-10 mt-8 text-center">
              <div>
                <p className="text-2xl font-bold text-[#97B320]">20</p>
                <p className="text-xs text-gray-600 uppercase mt-1">courts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#97B320]">12</p>
                <p className="text-xs text-gray-600 uppercase mt-1">coaches</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#97B320]">17</p>
                <p className="text-xs text-gray-600 uppercase mt-1">years</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#97B320]">10</p>
                <p className="text-xs text-gray-600 uppercase mt-1">clubs</p>
              </div>
            </div>

            <button className="mt-8 bg-[#97B320] text-white text-sm px-6 py-2 rounded-full">
              Read More
            </button>
          </div>

          <div className="w-full max-w-140">
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Image
                src="/images/games1.jpg"
                alt=""
                width={330}
                height={150}
                className=" object-cover sm:w-90 w-full"
              />

              <Image
                src="/images/games2.jpg"
                alt=""
                width={200}
                height={150}
                className=" object-cover sm:w-50 w-full"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <Image
                src="/images/games3.jpg"
                alt=""
                width={280}
                height={150}
                className=" object-cover sm:w-70 w-full"
              />

              <Image
                src="/images/games4.jpg"
                alt=""
                width={280}
                height={150}
                className=" object-cover sm:w-70 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote Section */}
      <div className="mt-24 relative overflow-hidden bg-gray-200">
        <div className="relative h-64 w-full">
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <p className="text-black text-lg font-light max-w-3xl">
              “We have created an environment ideal for building craft. Our goal
              is to be recognized as the best tennis performance centre in the
              world.”
              <br />
              <span className="block text-xs opacity-60 mt-4">
                John Doe — Director
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
