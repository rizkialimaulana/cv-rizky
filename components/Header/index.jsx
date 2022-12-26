import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-around h-screen">
      <div className="flex-[0.5] px-8 bg-red-700 h-full flex items-center justify-center">
        <div className="flex flex-col gap-8 text-white md:items-left md:text-left text-center">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-3xl md:text-6xl">
              Professional printing
            </h1>
            <h1 className="font-bold text-3xl md:text-6xl">for your needs</h1>
          </div>
          <p className="text-xl md:text-3xl">
            CV. Rizky Fitri Akbar provides the best service to meet your
            printing needs
          </p>
          <button className="hidden md:inline-flex w-fit py-2 px-4 bg-red-900 text-white rounded-md text-xl">
            Hubungi kami
          </button>
        </div>
      </div>
      <div className="flex-[0.5] p-5 md:px-0">
        <img src="/images/header2.jpg" alt="" className="" />
      </div>
    </div>
  );
};

export default Header;
