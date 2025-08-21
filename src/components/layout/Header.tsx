import React from "react";

const Header = () => {
  return (
    <div className="fixed top-[20px] left-1/2 w-[95%] md:w-[64rem] p-3 bg-primary rounded-lg -translate-x-1/2 border border-[#e4c1b7]">
      <div className="flex justify-between items-center">
        <p>Engids</p>
        <div className="flex justify-center items-center gap-8 text-sm">
          <p className="text-orange-600 font-medium">Home</p>
          <p>Blogs</p>
          <p>Category</p>
          <p>Contact</p>
        </div>
        <div>
          right
        </div>
      </div>
    </div>
  );
};

export default Header;
