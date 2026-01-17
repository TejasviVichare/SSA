import React from "react";
import Image from "next/image";
const Programs = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-semibold">Programs</h2>
        <button className="bg-[#97B320] text-white px-4 py-2 rounded-3xl text-sm">
          Register Now
        </button>
      </div>

      <p className="text-gray-600 max-w-2xl mt-2 text-sm">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative rounded-lg overflow-hidden group">
          <div className="relative w-full aspect-3/4">
            <Image
              src="/images/games7.jpg"
              alt="Academy"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h4 className="text-xl font-semibold">Academy</h4>
            <p className="text-sm opacity-90">Learn and train with us</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-lg overflow-hidden group">
          <div className="relative w-full aspect-3/4">
            <Image
              src="/images/games9.jpg"
              alt="Camps"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h4 className="text-xl font-semibold">Camps</h4>
            <p className="text-sm opacity-90">Train through experience</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-lg overflow-hidden group">
          <div className="relative w-full aspect-3/4">
            <Image
              src="/images/games2.jpg"
              alt="Performance"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h4 className="text-xl font-semibold">Performance</h4>
            <p className="text-sm opacity-90">Elevate your game with us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
