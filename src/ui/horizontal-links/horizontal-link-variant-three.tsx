import { Heart } from "@/assets";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const HorizontalLinkVariantThree = ({
  topLink,
  bottomLink,
}: {
  topLink: {
    title: string;
    src: StaticImageData;
    link: string;
    quantity?: number;
  };
  bottomLink: {
    title: string;
    src: StaticImageData;
    link: string;
    quantity?: number;
  };
}) => {
  return (
    <div className="flex flex-col items-centers">
      {/* Top Link */}
      <Link
        className="text-[#000000CC] mb-10  inline-block relative mx-1 h-[95px] w-[95px]"
        href={topLink.link}
      >
        <Image
          alt={topLink.title}
          src={topLink.src}
          width={130}
          height={136}
          className="object-cover"
        />
        <div className="inline-flex items-center gap-x-2">
          <p className="bg-[#08B02D] text-[10px] text-white inline p-1 rounded-t-sm rounded-bl-sm rounded-br-lg text-center  font-medium mb-2 mt-2 border-b border-b-[#8F8F8F26]">
            15% off
          </p>
          <p className="text-[#08B02D] text-sm">Deal</p>
        </div>

        <span className="absolute top-0 -right-5 bg-white  shadow-xl border  text-xs rounded-full  p-1">
          <Heart />
        </span>
      </Link>

      {/* Bottom Link */}
      <Link
        className="text-[#000000CC] inline-block relative mx-1 h-[95px] w-[95px] mt-4"
        href={bottomLink.link}
      >
        <Image
          alt={bottomLink.title}
          src={bottomLink.src}
          width={130}
          height={136}
          className="object-cover "
        />
        <div className="inline-flex items-center gap-x-2">
          <p className="bg-[#08B02D] text-[10px] text-white inline p-1 rounded-t-sm rounded-bl-sm rounded-br-lg text-center  font-medium mb-2 mt-2 border-b border-b-[#8F8F8F26]">
            15% off
          </p>
          <p className="text-[#08B02D] text-sm">Deal</p>
        </div>

        <span className="absolute top-0 -right-5 bg-white  shadow-xl border  text-xs rounded-full  p-1">
          <Heart />
        </span>
      </Link>
    </div>
  );
};

export default HorizontalLinkVariantThree;
