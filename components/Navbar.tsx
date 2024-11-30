import React from "react";
import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full abolute z-20 top-0 left-0">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          {/* <Image
            alt="logo"
            src="/logo.svg"
            width={118}
            height={18}
            className="object-contain"
          ></Image> */}
         <div className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text drop-shadow-md">
  <span className="mr-1">Drives</span>
  <span className="relative text-black/90">
    Sphere
    <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-300"></span>
  </span>
</div>

        </Link>
        <CustomButton
          btnType="button"
          title="Sign In"
          containerStyles="bg-white relative z-20 text-primary-blue min-w-[130px] bg-white  rounded-full"
        />
      </nav>
    </header>
  );
};

export default Navbar;
