import Link from "next/link";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail, SiPinboard } from "react-icons/si";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <div
      id="footer"
      className="h-full md:h-[300px] bg-black flex flex-col md:flex-row md:justify-between text-white"
    >
      <div className="flex flex-col gap-3 p-4">
        <h1 className="font-bold text-2xl">CV. RIZKY FITRI AKBAR</h1>
        <p>Hubungi kami untuk mendapatkan informasi lengkap</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-3">
            <AiOutlineWhatsApp className="w-[1.2rem] h-fit" />
            <span>+62 813 2206 4575</span>
          </div>
          <div className="flex flex-row items-center gap-3">
            <SiGmail className="w-[1.2rem] h-fit" />
            <span>rizkyfitriakbar@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="flex-[0.5] flex flex-col gap-3 p-4">
        <h1 className="font-bold text-2xl">Alamat Kantor</h1>
        <ul className="flex flex-col gap-5">
          <li className="flex flex-row gap-3">
            <FiMapPin className="w-[1.2rem] h-fit" />
            <div className="flex flex-col gap-2">
              <span>Panorama Jatinangor Blok P.117</span>
              <span>Desa Cinanjung, Kec. Tanjungsari, Kab. Sumedang</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
