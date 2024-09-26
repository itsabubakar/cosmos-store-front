"use client";
import {
  Apple,
  Arrow,
  BlackShirt,
  Computer,
  Cream,
  Doctor,
  Earpods,
  Eateries,
  Fitness,
  Glasses,
  Laptop,
  Man,
  Pampers,
  Scan,
  Shopping,
  ShoppingWoman,
  Suit,
  Supermarket,
  VideoImage,
  WomanWithBags,
  Women,
} from "@/assets";
import { AuthSection, Hero, Section } from "@/components";
import {
  HorizontalLinkVariantFour,
  HorizontalLinkVariantOne,
  HorizontalLinkVariantThree,
  HorizontalLinkVariantTwo,
  ProductCard,
  ProductSlider,
  ProductSliderThree,
  ProductSliderTwo,
} from "@/ui";
import { Carousel, useCarousel } from "nuka-carousel";
import React from "react";

const page = () => {
  const CustomDots = () => {
    const { totalPages, currentPage, goToPage } = useCarousel();

    const className = (index: number) => {
      let value =
        "w-1 h-1 p-0 rounded-full bg-gray-200 border-none cursor-pointer hover:bg-gray-500";
      if (currentPage === index) {
        value += " bg-gray-500 hover:bg-gray-500";
      }
      return value;
    };

    return (
      <div className="flex items-center justify-center py-4 gap-1">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={className(index)}
          />
        ))}
      </div>
    );
  };
  return (
    <main>
      <Hero />
      <AuthSection />
      <Section heading="Based on your recent shopping trends">
        <div className="px-3 pt-3  grid-container">
          <ProductSlider
            imgSrc={[Laptop, Laptop]}
            price="200,000"
            title="Apple I macc11 Gaming..."
          />
          <ProductSlider
            imgSrc={[Apple, Apple]}
            autoPlay
            price="200,000"
            title="Apple I macc11 Gaming..."
          />
          <ProductSlider
            imgSrc={[Scan, Scan]}
            price="200,000"
            title="Apple I macc11 Gaming..."
          />
          <ProductSlider
            imgSrc={[Earpods, Earpods]}
            price="200,000"
            title="Apple I macc11 Gaming..."
          />
        </div>
        <p className="text-xs font-semibold pl-4 pt-5 pb-4">See more</p>
      </Section>
      <Section variant="two" heading="Keep shopping for">
        <div className="overflow-x-auto whitespace-nowrap pt-8  scrollbar-none bg-white  link-container">
          <HorizontalLinkVariantOne title={"Deals"} src={Women} link="/" />
          <HorizontalLinkVariantOne title={"Groceries"} src={Suit} link="/" />
          <HorizontalLinkVariantOne
            title={"Hand bags"}
            src={Shopping}
            link="/"
          />
          <HorizontalLinkVariantOne
            title={"Automobile"}
            src={Doctor}
            link="/"
          />
          <HorizontalLinkVariantOne title={"Watches"} src={Man} link="/" />
          <HorizontalLinkVariantOne
            title={"Baby care"}
            src={Shopping}
            link="/"
          />
          <HorizontalLinkVariantOne title={"Sports"} src={Women} link="/" />
        </div>
        <p className="text-xs text-center pt-4 text-[#2B9FE1]">
          View your browsing history
        </p>
      </Section>
      <Section heading="Shop by department / category">
        <div className="flex gap-x-5  overflow-x-auto whitespace-nowrap  pt-8  link-container pb-4">
          <HorizontalLinkVariantTwo
            topLink={{
              title: "Super markets",
              src: Supermarket,
              link: "/",
              quantity: 400,
            }}
            bottomLink={{ title: "Other Deals", src: Suit, link: "/" }}
          />
          <HorizontalLinkVariantTwo
            topLink={{
              title: "Eateries",
              src: Eateries,
              link: "/",
              quantity: 250,
            }}
            bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
          />
          <HorizontalLinkVariantTwo
            topLink={{
              title: "Sports and fitness",
              src: Fitness,
              link: "/",
              quantity: 250,
            }}
            bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
          />
          <HorizontalLinkVariantTwo
            topLink={{ title: "Deals", src: Women, link: "/" }}
            bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
          />
          <HorizontalLinkVariantTwo
            topLink={{ title: "Deals", src: Women, link: "/" }}
            bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
          />
          <HorizontalLinkVariantTwo
            topLink={{ title: "Deals", src: Women, link: "/" }}
            bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
          />
        </div>
        <p className="p-4">See all </p>
      </Section>
      <Section className="p-4" variant="two">
        <ProductCard
          bg="bg-[#F6F05F]"
          heading="New & exclusive collab"
          title="Midwest Teen"
          subtitle="Collection"
          buttonText="Shop now"
          src={BlackShirt}
        />
        <ProductCard
          bg="bg-[#FFD700]"
          heading="Fab prices"
          title="Wardrobe"
          subtitle="refresh"
          buttonText="Shop now"
          src={ShoppingWoman}
          text="was    25,000 now 18,000"
        />
        <ProductCard
          largerImage
          bg="bg-[#F6F05F]"
          bgTwo="bg-[#F0F0F0DE]"
          buttonText="Shop now"
          src={Computer}
          text="Shop for Computers 
& Accessories"
        />
      </Section>

      <Section heading="Massive savings for you">
        <div className="px-3 pt-3  grid-container">
          <ProductSliderTwo imgSrc={[Laptop, Laptop]} />
          <ProductSliderTwo imgSrc={[Apple, Apple]} autoPlay />
          <ProductSliderTwo imgSrc={[Scan, Scan]} />
          <ProductSliderTwo imgSrc={[Earpods, Earpods]} />
        </div>
        <p className="text-xs font-semibold pl-4 pt-5 pb-4 flex items-center  gap-x-2">
          See all deals
          <span className="bg-[#2B9FE1] p-1 rounded-full">
            <Arrow />
          </span>
        </p>
      </Section>

      <Section className="p-4" heading="New Arrivals">
        <Carousel dots={<CustomDots />} showDots>
          <div className="min-w-full mx-1">
            <ProductSliderThree
              productImage={VideoImage}
              imgSrc={[Cream, Laptop]}
            />
          </div>
          <div className="min-w-full mx-1">
            <ProductSliderThree
              productImage={VideoImage}
              imgSrc={[Cream, Laptop]}
            />
          </div>
          <div className="min-w-full mx-1">
            <ProductSliderThree
              productImage={VideoImage}
              imgSrc={[Cream, Laptop]}
            />
          </div>
          <div className="min-w-full mx-1">
            <ProductSliderThree
              productImage={VideoImage}
              imgSrc={[Cream, Laptop]}
            />
          </div>
        </Carousel>
      </Section>

      <Section variant="two" heading="Deals related to items in your cart">
        <div className="flex gap-x-5  overflow-x-auto whitespace-nowrap  pt-8  link-container pb-4">
          <HorizontalLinkVariantThree
            topLink={{
              title: "Super markets",
              src: Pampers,
              link: "/",
              quantity: 400,
            }}
            bottomLink={{ title: "Other Deals", src: Suit, link: "/" }}
          />
          <HorizontalLinkVariantThree
            topLink={{
              title: "Eateries",
              src: Eateries,
              link: "/",
              quantity: 250,
            }}
            bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
          />
          <HorizontalLinkVariantThree
            topLink={{
              title: "Sports and fitness",
              src: Fitness,
              link: "/",
              quantity: 250,
            }}
            bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
          />
          <HorizontalLinkVariantThree
            topLink={{ title: "Deals", src: Women, link: "/" }}
            bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
          />
          <HorizontalLinkVariantThree
            topLink={{ title: "Deals", src: Women, link: "/" }}
            bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
          />
          <HorizontalLinkVariantThree
            topLink={{ title: "Deals", src: Women, link: "/" }}
            bottomLink={{ title: "Groceries", src: Suit, link: "/" }}
          />
        </div>
      </Section>

      <Section variant="two" heading="Pick up where you left off">
        <div className="overflow-x-auto whitespace-nowrap  pt-8 scrollbar-none bg-white link-container">
          <HorizontalLinkVariantOne title={"Deals"} src={Women} link="/" />
          <HorizontalLinkVariantOne title={"Groceries"} src={Suit} link="/" />
          <HorizontalLinkVariantOne
            title={"Hand bags"}
            src={Shopping}
            link="/"
          />
          <HorizontalLinkVariantOne
            title={"Automobile"}
            src={Doctor}
            link="/"
          />
          <HorizontalLinkVariantOne title={"Watches"} src={Man} link="/" />
          <HorizontalLinkVariantOne
            title={"Baby care"}
            src={Shopping}
            link="/"
          />
          <HorizontalLinkVariantOne title={"Sports"} src={Women} link="/" />
        </div>
      </Section>
      <Section className="px-4" variant="two" heading="Exclusive Deals">
        <div className="overflow-x-auto flex gap-x-4 whitespace-nowrap  pt-8 scrollbar-none bg-white link-container">
          <HorizontalLinkVariantFour
            img={WomanWithBags}
            subtitle="Top Notch Fasionista must haves."
            title="Comfort  fashion purses"
          />
          <HorizontalLinkVariantFour
            img={Glasses}
            subtitle="Top Notch Fasionista must haves."
            title="Comfort  fashion purses"
          />
          <HorizontalLinkVariantFour
            img={WomanWithBags}
            subtitle="Top Notch Fasionista must haves."
            title="Comfort  fashion purses"
          />
          <HorizontalLinkVariantFour
            img={Glasses}
            subtitle="Top Notch Fasionista must haves."
            title="Comfort  fashion purses"
          />
        </div>
      </Section>
      <Section heading="Massive savings for you">
        <div className="px-3 pt-3  grid-container">
          <ProductSliderTwo imgSrc={[Laptop, Laptop]} />
          <ProductSliderTwo imgSrc={[Apple, Apple]} autoPlay />
          <ProductSliderTwo imgSrc={[Scan, Scan]} />
          <ProductSliderTwo imgSrc={[Earpods, Earpods]} />
        </div>
        <p className="text-xs font-semibold pl-4 pt-5 pb-4 flex items-center  gap-x-2">
          See all deals
          <span className="bg-[#2B9FE1] p-1 rounded-full">
            <Arrow />
          </span>
        </p>
      </Section>
    </main>
  );
};

export default page;
