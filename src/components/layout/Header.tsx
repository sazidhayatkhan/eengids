"use client";

import React from "react";
import Link from "next/link";
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
      <div className="flex justify-between items-center">
        <p>Engids</p>
        <div className="hidden md:flex justify-center items-center gap-8 text-sm">
          {navData?.map((item: NavData, i: number) => (
            <Link key={i} href={item.url}>
              <span
                className={
                  pathname === item.url ? "text-orange-500" : "text-black"
                }
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <div>
          <button className="border border-dark-primary p-2 rounded-full cursor-pointer"><Menu size={16}/></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
