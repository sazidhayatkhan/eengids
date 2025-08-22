"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { raleway } from "@/fonts/font";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Header = () => {
  type NavData = {
    title: string;
    url: string;
    path: string;
  };

  const navData: NavData[] = [
    {
      title: "Home",
      url: "/",
      path: "home",
    },
    {
      title: "Blogs",
      url: "/blogs",
      path: "blogs",
    },
    {
      title: "Categories",
      url: "/categories",
      path: "categories",
    },
    {
      title: "Contact",
      url: "/contact",
      path: "contact",
    },
  ];
  const pathname = usePathname();

  return (
    <div className="fixed top-[20px] left-1/2 w-[95%] md:w-[64rem] p-3 bg-primary rounded-lg -translate-x-1/2 border border-dark-primary">
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="relative">
          <Image
          src="/images/logo.png"
          alt="logo"
          width={0}
          height={0}
          priority
          sizes="100vw"
          className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-white rounded-full object-cover absolute top-[-13px] md:top-[-25px] lef-[40px]"
        />
        </div>
        <div className={`hidden md:flex justify-center items-center gap-8 text-sm font-semibold ${raleway.className}`}>
          {navData?.map((item: NavData, i: number) => (
            <Link key={i} href={item.url}>
              <span
                className={
                  pathname === item.url ? "text-orange-500" : "text-gray-700"
                }
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="border border-dark-primary p-2 rounded-full cursor-pointer">
            <Menu size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
