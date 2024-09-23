import {
  Apple,
  Doctor,
  Earpods,
  Groceries,
  Laptop,
  Man,
  Scan,
  Shopping,
  Suit,
  Women,
} from "@/assets";
import { AuthSection, Hero, Section } from "@/components";
import { HorizontalLinkVariantOne, ProductSlider } from "@/ui";
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
