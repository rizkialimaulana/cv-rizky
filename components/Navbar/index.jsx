import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-9 my-1 rounded-full bg-black transition ease transform duration-300`;
  function setNavbarBackground() {
    const navbar = document.querySelector(".navbar");
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      navbar.classList.add(
        "text-white",
        "backdrop-blur-lg",
        "bg-red-700",
        "shadow-lg"
      );
    } else {
      navbar.classList.remove(
        "text-white",
        "backdrop-blur-lg",
        "bg-red-700",
        "shadow-lg"
      );
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setNavbarBackground);
    return () => window.removeEventListener("scroll", setNavbarBackground);
  }, []);
  return (
    <nav className="navbar sticky top-0 h-fit flex items-center justify-between py-3 px-5 trasition-all duration-[450ms]">
      <div className="flex flex-row items-center gap-3">
        <img src="/images/cvrizky.png" alt="" className="w-9 h-8" />
        <h1>CV. RIZKY FITRI AKBAR</h1>
      </div>
      <button
        className="md:hidden h-9 w-9 border-black rounded flex flex-col justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? " rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? " -rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
      <ul className="hidden md:flex items-center gap-3">
        <Link
          href="#about"
          className="transition-all duration-[300ms] hover:text-red-700"
        >
          <li>About</li>
        </Link>
        <Link
          href="#services"
          className="transition-all duration-[300ms] hover:text-red-700"
        >
          <li>Services</li>
        </Link>
        <Link
          href="#client"
          className="transition-all duration-[300ms] hover:text-red-700"
        >
          <li>Client</li>
        </Link>
        <Link
          href="#footer"
          className="transition-all duration-[300ms] hover:text-red-700"
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
