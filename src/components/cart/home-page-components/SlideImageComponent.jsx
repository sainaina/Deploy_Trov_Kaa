import { Carousel } from "flowbite-react";
import React from 'react';

const SlideImageComponent = () => {
  return (
    <div className="my-[80px] mx-[100px] h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={3000}>
        <img
          src="/image/image1/education2.jpg"
          alt="Slide 1"
          className="object-fit"
        />
        <img
          src="https://t4.ftcdn.net/jpg/05/18/13/69/360_F_518136924_9q60nudwE0Hys7xgFPRvK4glJIqAHqy0.jpg"
          alt="Slide 2"
          className="object-fit"
        />
        <img
          src="https://media.istockphoto.com/id/871927176/photo/repairman-disassemble-motherboard-with-screwdriver.jpg?s=612x612&w=0&k=20&c=uoGvYBkr5o_o1So1OBTVu8IS8jX79tUfgzz6_XBVO6w="
          alt="Slide 3"
          className="object-fit"
        />
        <img
          src="/image/image1/education2.jpg"
          alt="Slide 4"
          className="object-fit"
        />
        <img
          src="/image/image1/education2.jpg"
          alt="Slide 5"
          className="object-fit"
        />
      </Carousel>
    </div>
  );
};

export default SlideImageComponent;