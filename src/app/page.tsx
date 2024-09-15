"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Home() {
  const pagination = {
    clickable: true,
    renderBullet: function (index) {
      return '<div class="mt-80">' + (index + 1) + "</div>";
    },
  };
  return (
    <div className=" mt-[185px]">
      <section className="pt-20">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>
      <p className="mt-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>{" "}
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, iure
        temporibus aspernatur in vero voluptates fugiat. Nihil consequuntur
        pariatur neque, delectus earum tenetur soluta doloribus nisi repudiandae
        sit dicta iusto!
      </p>
    </div>
  );
}
