import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] relative flex items-start md:items-center mt-[110px] md:mt-0">
      <Image
        src="/images/hero.png"
        alt="logo"
        width={0}
        height={0}
        priority
        sizes="100vw"
        className="hidden md:block absolute top-[19px] right-[12px] w-[200px] md:w-[400px] h-[200px] md:h-[400px] object-cover"
      />
      <div className="max-w-[22rem] md:max-w-[36rem] mx-auto md:mx-0">
        <h1 className="text-gray-700 text-3xl md:text-7xl font-extrabold text-center md:text-start">
          Crack BCS & Bank Exams with{" "}
          <span className="text-orange-500">Confidence</span>
        </h1>
        <p className="text-gray-700 text-center md:text-end text-xl md:text-3xl font-semibold">
          – Learn from the Best.
        </p>
        <div className="mt-2 md:hidden flex justify-center">
          <Image
            src="/images/hero.png"
            alt="logo"
            width={0}
            height={0}
            priority
            sizes="100vw"
            className="w-[211px] h-[211px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
