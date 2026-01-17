import React from "react";

const Events = () => {
  return (
    <div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-black text-white p-[4vw]">
          <h3 className="text-[2.5vw] mb-2 font-bold">Our Coaches</h3>
          <p className="text-[1.2vw] opacity-70">
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
            <p className="text-[1.2vw] opacity-70 leading-loose">
            Lorem Ipsum has been the industry's.
          </p>
            <p className="text-[1.2vw] opacity-70 mt-2">
             Read More &#8594;
          </p>
        
        </div>
        <div className="bg-[#a6c437] text-white p-[4vw]">
          <h3 className="text-[2.5vw]  mb-2 font-bold">Events</h3>
          <p className="text-[1.2vw] opacity-70">
            Lorem Ipsum has been the industry's standard dummy text.
          </p>
            <p className="text-[1.2vw] opacity-70 leading-loose">
            Lorem Ipsum has been the industry's.
          </p>
           <p className="text-[1.2vw] opacity-70 mt-2">
             Read More &#8594;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
