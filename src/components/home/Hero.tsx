"use client";
import React, { useState } from "react";
import { Carousel, useCarousel } from "nuka-carousel";
import Image, { StaticImageData } from "next/image";
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
  Groceries,
  HandBags,
  Car,
  Watch,
  Pampers,
  Sports,
} from "@/assets";
import Link from "next/link";

const HorizontalLink = ({
  link,
  title,
  src,
}: {
  link: string;
  title: string;
  src: StaticImageData;
}) => {
  return (
    <Link
      className="text-[#000000CC]  px-1 py-1  bg-white/80 backdrop-blur-sm rounded-lg inline-block mx-1 h-[175px]"
      href={link}
    >
      <p className="text-center text-[13px] font-medium pb-1">{title}</p>
      {/* Updated Image component with fixed width and height */}
      <Image
        alt={title}
        src={src}
        width={130}
        height={136}
        className="object-cover"
      />
    </Link>
  );
};

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Control autoplay

  const CustomDots = () => {
    const { totalPages, currentPage, goToPage } = useCarousel();

    return (
      <div className="flex items-center justify-center py-4 gap-2 absolute w-full top-[55%] overflow-hidden">
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
        className="bg-[#72727240] text-[9px] absolute top-32  -right-12 text-white -rotate-90 w-fit z-10 justify-between flex rounded-t-md py-1 px-2 items-center"
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
      <div className="absolute bottom-0 w-full">
        <div className="overflow-x-auto whitespace-nowrap  py-4 scrollbar-none">
          <HorizontalLink title={"Deals"} src={Doctor} link="/" />
          <HorizontalLink title={"Groceries"} src={Groceries} link="/" />
          <HorizontalLink title={"Hand bags"} src={HandBags} link="/" />
          <HorizontalLink title={"Automobile"} src={Car} link="/" />
          <HorizontalLink title={"Watches"} src={Watch} link="/" />
          <HorizontalLink title={"Baby care"} src={Pampers} link="/" />
          <HorizontalLink title={"Sports"} src={Sports} link="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
