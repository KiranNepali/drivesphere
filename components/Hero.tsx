"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero w-full">
      <div className="flex-1 pt-16  padding-x">
        <h1 className="hero__title text-6xl">
          Find, book, or rent a car --quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          handleClick={handleScroll}
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
          ></Image>
        </div>
        <div className="hero__image-overlay -z-10"></div>
      </div>
    </div>
  );
};

export default Hero;
