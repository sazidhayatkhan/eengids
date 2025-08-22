import React from "react";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div>
        <p className="text-gray-700 text-center text-lg md:text-xl font-semibold">
          Popular Categories
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-7 w-[95%] md:w-[90%] mx-auto">
        {[1, 2, 3, 4, 5, 6].map((i: number) => (
          <Link
            key={i}
            href="/categories"
            className="flex flex-col items-center justify-center rounded-xl"
          >
            <Image
              src="/images/category_icon.png"
              alt="logo"
              width={0}
              height={0}
              priority
              sizes="100vw"
              className="w-full h-[150px] md:h-[120px] object-cover border border-gray-300 rounded-xl"
            />
            <span className="text-xs font-medium text-center mt-2">
              Bank Job
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
