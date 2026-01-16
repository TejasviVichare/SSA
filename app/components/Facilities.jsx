import Image from "next/image";

export default function Facilities() {
  return (
    <section className="w-full bg-white">
      {/* Facilities Section */}
      <div className="max-w-[90vw] mx-auto py-[5vw]">
        <h2 className="text-[3vw] md:text-[2vw] font-semibold mb-[2vw]">Facilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vw]">
          {/* Tennis */}
          <div className="bg-[#0f3d2e] rounded-[1vw] overflow-hidden text-white">
            <div className="relative h-[30vw] md:h-[18vw]">
              <Image src="/tennis.jpg" alt="Tennis" fill className="object-cover" />
            </div>
            <div className="p-[2vw]">
              <h3 className="text-[2.2vw] md:text-[1.3vw] font-medium">Tennis</h3>
              <div className="flex gap-[0.8vw] my-[1vw]">
                <span className="bg-white/20 px-[1vw] py-[0.4vw] rounded-full text-[1vw]">8 Clay Courts</span>
                <span className="bg-white/20 px-[1vw] py-[0.4vw] rounded-full text-[1vw]">4 Hard Courts</span>
              </div>
              <p className="text-[1.2vw] opacity-80">Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>

          {/* Accommodation */}
          <div className="bg-[#3f6b2a] rounded-[1vw] overflow-hidden text-white">
            <div className="relative h-[30vw] md:h-[18vw]">
              <Image src="/room.jpg" alt="Accommodation" fill className="object-cover" />
            </div>
            <div className="p-[2vw]">
              <h3 className="text-[2.2vw] md:text-[1.3vw] font-medium">Accommodation</h3>
              <span className="inline-block bg-white/20 px-[1vw] py-[0.4vw] rounded-full text-[1vw] my-[1vw]">5 Star Rooms</span>
              <p className="text-[1.2vw] opacity-80">Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>

          {/* Fitness */}
          <div className="bg-[#e9f0ea] rounded-[1vw] overflow-hidden">
            <div className="relative h-[30vw] md:h-[18vw]">
              <Image src="/gym.jpg" alt="Fitness" fill className="object-cover" />
            </div>
            <div className="p-[2vw]">
              <h3 className="text-[2.2vw] md:text-[1.3vw] font-medium">Fitness</h3>
              <p className="text-[1.2vw] text-gray-600">Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>

          {/* Recovery */}
          <div className="bg-[#e9f0ea] rounded-[1vw] overflow-hidden">
            <div className="relative h-[30vw] md:h-[18vw]">
              <Image src="/pool.jpg" alt="Recovery" fill className="object-cover" />
            </div>
            <div className="p-[2vw]">
              <h3 className="text-[2.2vw] md:text-[1.3vw] font-medium">Recovery</h3>
              <div className="flex gap-[0.8vw] my-[1vw]">
                <span className="bg-green-600 text-white px-[1vw] py-[0.4vw] rounded-full text-[1vw]">Pool</span>
                <span className="bg-green-600 text-white px-[1vw] py-[0.4vw] rounded-full text-[1vw]">Spa</span>
                <span className="bg-green-600 text-white px-[1vw] py-[0.4vw] rounded-full text-[1vw]">Massage</span>
              </div>
              <p className="text-[1.2vw] text-gray-600">Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-black text-white p-[4vw]">
          <h3 className="text-[2.5vw]">Our Coaches</h3>
          <p className="text-[1.2vw] opacity-70">Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
        <div className="bg-[#a6c437] text-white p-[4vw]">
          <h3 className="text-[2.5vw]">Events</h3>
          <p className="text-[1.2vw] opacity-70">Lorem Ipsum has been the industry's standard dummy text.</p>
        </div>
      </div>
    </section>
  );
}
