import { Carousel } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div className="mt-4 w-11/12 mx-auto">
      <div className="h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] w-full">
        <Carousel slideInterval={5000}>
          <img
            className="w-full relative"
            src="https://i.ibb.co/SPsBJXn/1.png"
            alt="..."
          />
          <img
            className="w-full"
            src="https://i.ibb.co/12FnSc8/2.png"
            alt="..."
          />
          <img
            className="w-full"
            src="https://i.ibb.co/bWDZ9pW/5.png"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
