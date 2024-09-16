"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dot, Woman } from "@/assets";

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchMove, setTouchMove] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseMove, setMouseMove] = useState(0);

  const [ignoreSwipe, setIgnoreSwipe] = useState(false);

  const togglePlayPause = () => {
    setIgnoreSwipe(true);
    setIsPlaying((prev) => !prev);
  };

  const handleTouchEnd = () => {
    if (ignoreSwipe) {
      setIgnoreSwipe(false);
      return;
    }
    if (touchStart - touchMove > 50) {
      handleNextSlide();
    } else if (touchStart - touchMove < -50) {
      handlePrevSlide();
    }
    setTouchStart(0);
    setTouchMove(0);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setMouseStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMouseMove(e.clientX);
  };

  const handleMouseUp = () => {
    if (mouseStart - mouseMove > 50) {
      handleNextSlide();
    } else if (mouseStart - mouseMove < -50) {
      handlePrevSlide();
    }
    setMouseStart(0);
    setMouseMove(0);
  };

  const totalSlides = 3;
  const slides = [
    { id: 1, image: Woman },
    { id: 2, image: Woman },
    { id: 3, image: Woman },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 2000); // Auto-play interval (2 seconds)
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchMove(e.touches[0].clientX);
  };

  return (
    <div
      className="mt-40 relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Slider */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(${currentSlide * -100}%)`,
          width: `${totalSlides * 40}%`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0">
            <Image src={slide.image} content="cover" alt="Woman" />
          </div>
        ))}
      </div>

      {/* Custom Pagination and Play/Pause Button */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 z-20">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="focus:outline-none"
          >
            <Dot
              width={currentSlide === index ? 8 : 4}
              height={currentSlide === index ? 8 : 4}
            />
          </button>
        ))}
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
