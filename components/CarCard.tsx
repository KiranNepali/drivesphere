"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
const CarCard = ({ car }: any) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsIpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        Car Rent...
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        ></Image>
      </div>
      <div className="flex relative w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex justify-center items-center gap-2 flex-col">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            ></Image>

            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 flex-col">
            <Image src="/tire.svg" width={20} height={20} alt="tire"></Image>
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex justify-center items-center gap-2 flex-col">
            <Image src="/gas.svg" width={20} height={20} alt="gas"></Image>

            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsIpen(true)}
          ></CustomButton>
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsIpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
