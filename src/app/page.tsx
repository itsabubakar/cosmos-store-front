"use client";
import React, { useState } from "react";
import { Carousel, useCarousel } from "nuka-carousel";
import Image from "next/image";
import {
  Woman,
  Dot,
  Pause,
  Radio,
  Temperature,
  ChevronDown,
  YellowMapIcon,
  Care,
  Doctor,
} from "@/assets";
import Link from "next/link";

const Page = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Control autoplay

  const CustomDots = () => {
    const { totalPages, currentPage, goToPage } = useCarousel();

    return (
      <div className="flex items-center justify-center py-4 gap-2 absolute w-full top-[35%] overflow-hidden">
        {/* Dots */}
        <div className="flex gap-1">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className="focus:outline-none"
            >
              <Dot
                width={currentPage === index ? 8 : 4}
                height={currentPage === index ? 8 : 4}
              />
            </button>
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className=" flex items-center -mt-1    focus:outline-none"
        >
          <Pause />
        </button>
      </div>
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="mt-[185px] max-w-6xl mx-auto relative">
      <div className="flex gap-x-8 absolute top-5 px-4 w-full z-10 ">
        <div className="flex gap-x-1 items-center">
          <YellowMapIcon />
          <p className="text-white text-xs">Deliver to</p>
          <div className="self-center mt-1">
            <ChevronDown />
          </div>
        </div>
        <div className="ml-auto">
          <Radio />
        </div>
        <div className="flex text-xs text-white items-center gap-x-1">
          <Temperature />
          <p>24c</p>
        </div>
      </div>

      <Link
        href={"/"}
        className="bg-[#72727240] text-[9px] absolute top-32  -right-12 text-white -rotate-90 w-fit z-10 justify-between flex rounded-t-md py-1 px-2 flex items-center block"
      >
        <p className="text-white font-semibold pr-2">HOW MAY I HELP YOU</p>
        <span className="rotate-90 ">
          <Care fill="white" />
        </span>
      </Link>
      <Carousel
        // wrapMode="wrap"
        autoplay={isPlaying}
        autoplayInterval={7000} // Set autoplay interval
        showDots
        dots={<CustomDots />}
      >
        <Image alt="Slide 1" src={Woman} />
        <Image alt="Slide 2" src={Woman} />
        <Image alt="Slide 3" src={Woman} />
        <Image alt="Slide 4" src={Woman} />
      </Carousel>
      <div className="absolute top-[38%] w-full px-4">
        <div className="overflow-x-auto whitespace-nowrap  space-x-5 py-4 scrollbar-none">
          <Link
            className="text-[#000000CC]  px-4 py-1  bg-white/80 backdrop-blur-sm rounded-lg inline-block"
            href="/"
          >
            <p className="text-center text-[13px]">Deals</p>
            {/* Updated Image component with fixed width and height */}
            <Image
              alt="Doctor"
              src={Doctor}
              width={130}
              height={136}
              className="object-cover"
            />
          </Link>
          <Link className="text-gray-700 hover:text-blue-500" href="/">
            Cosmos Basic
          </Link>
          <Link className="text-gray-700 hover:text-blue-500" href="/">
            Whats New?
          </Link>
          <Link className="text-gray-700 hover:text-blue-500" href="/">
            About
          </Link>
          <Link className="text-gray-700 hover:text-blue-500" href="/">
            Services
          </Link>
          <Link className="text-gray-700 hover:text-blue-500" href="/">
            Contact
          </Link>
        </div>
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eaque
        quas autem enim ex incidunt blanditiis corrupti accusantium excepturi?
        Iste totam inventore reiciendis? Pariatur eaque dolores officiis cumque
        explicabo. Dolor? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Officiis eaque quas autem enim ex incidunt blanditiis corrupti
        accusantium excepturi? Iste totam inventore reiciendis? Pariatur eaque
        dolores officiis cumque explicabo. Dolor?
      </div>
    </div>
  );
};

export default Page;
