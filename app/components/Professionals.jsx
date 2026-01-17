import Image from "next/image";

const professionals = [
  {
    name: "Craig Tiley",
    role: "CEO Tennis Australia & Australian Open",
    image: "/images/professionals2.webp",
  },
  {
    name: "Stephen Farrow",
    role: "Director — Tournaments, Player & International Relations",
    image: "/images/professionals3.webp",
  },
  {
    name: "Cameron Pearson",
    role: "Head Major Events — Tennis Australia",
    image: "/images/professionals1.png",
  },
];

export default function Professionals() {
  return (
    <div className="w-full font-montserrat">

      
      <div className="flex justify-between  gap-[2vw] py-[1.1vw] px-[0.3vw] md:text-[1.3vw] text-[1.2vw] font-semibold text-[#7FBF45] uppercase tracking-[0.2vw]">
        <span>Adopt</span>
        <span>Nurture</span>
        <span>Deliver</span>
        <span>Adopt</span>
        <span>Nurture</span>
      </div>

   
      <section className="w-full px-[4vw] py-[6vw]">
        <div className="grid grid-cols-2 md:grid-cols-2">

        
          <div className="bg-linear-to-r from-[#0f3d2e] to-[#9bbd3a] text-white px-[3vw] py-[3vw] rounded-t-[1vw] md:rounded-l-[1vw] md:rounded-tr-none flex flex-col justify-center">
            <p className="text-[1vw] uppercase tracking-wider">Launching</p>

            <h2 className="text-[2vw] font-semibold leading-[2.4vw] mt-[1vw]">
              Signature Slam Academy <br /> Hunter Valley
            </h2>

            <p className="mt-[1.5vw] text-[1.1vw] font-medium opacity-90">
              SSA Connectivity
            </p>

            <ul className="mt-[1.2vw] space-y-[0.5vw] text-[1vw] opacity-90">
              <li>Hunter Valley Golf And Country Club — 250m</li>
              <li>Rydges Resort Hunter Valley — 550m</li>
              <li>Cessnock Airport — 1.2km</li>
              <li>Cessnock CBD — 3km</li>
              <li>Nulkaba Public School — 4.4km</li>
              <li>Cessnock Hospital — 7.3km</li>
              <li>McDonalds / KFC / Oporto — 7.5km</li>
            </ul>
          </div>

        
          <div className="relative w-full h-37.5 md:h-auto rounded-b-[1vw] md:rounded-r-[1vw] md:rounded-bl-none overflow-hidden">

            <Image
              src="/images/ground.jpg"
              alt="Academy Ground"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROFESSIONALS */}
      <section className="w-full  px-[4vw] py-[6vw]">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="md:text-[2vw]  font-semibold leading-[2.4vw] mb-[1vw]">
              Meet our professionals 
            </h2>
            <p className="text-gray-600 text-[1vw] max-w-[35vw] mt-[0.7vw] leading-[1.4vw]">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          <button className="bg-[#9bbd3a] text-white px-[1.6vw] py-[0.7vw] rounded-3xl text-[1vw]">
            View All
          </button>
        </div>

        {/* PROFILES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2vw] mt-[4vw] sm:px-[4vw] ">
          {professionals.map((person, index) => (
            <div key={index}>
              <div className="relative md:w-full w-48 h-[22vw] rounded-[1vw] overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h4 className="text-[1.2vw] font-medium mt-[1vw]">
                {person.name}
              </h4>

              <p className="text-gray-500 text-[0.9vw] leading-[1.2vw]">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
