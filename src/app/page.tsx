import {
  Apple,
  BlackShirt,
  Computer,
  Doctor,
  Earpods,
  Eateries,
  Fitness,
  Laptop,
  Man,
  Scan,
  Shopping,
  ShoppingWoman,
  Suit,
  Supermarket,
  Women,
} from "@/assets";
import { AuthSection, Hero, Section } from "@/components";
import {
  HorizontalLinkVariantOne,
  HorizontalLinkVariantTwo,
  ProductCard,
  ProductSlider,
} from "@/ui";
import React from "react";

const page = () => {
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
    </main>
  );
};

export default page;
