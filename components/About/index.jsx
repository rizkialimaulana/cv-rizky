import React from "react";
import { AiOutlineDropbox, AiOutlinePrinter } from "react-icons/ai";

const About = () => {
  return (
    <div className="flex items-center justify-center md:h-screen h-full py-5">
      <div className="flex flex-col items-center gap-10">
        <h1 className="md:text-5xl font-semibold text-3xl">Our Services</h1>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3">
          <div className="w-[20rem] h-[20rem] rounded-lg flex flex-col gap-2 p-4 items-center justify-center bg-red-700 text-white">
            <AiOutlinePrinter className="w-[5rem] h-[5rem]" />
            <h1 className="font-semibold text-3xl">Percetakan</h1>
            <hr />
            <p className="text-center">
              Melayani jasa cetak barang seperti buku tabungan, Amplop, Map,
              Invitation, Custom design bindex map, Kop surat dan masih banyak
              lagi
            </p>
          </div>
          <div className="w-[20rem] h-[20rem] rounded-lg flex flex-col gap-2 p-4 items-center justify-center bg-red-700 text-white">
            <AiOutlineDropbox className="w-[5rem] h-[5rem]" />
            <h1 className="font-semibold text-3xl">Pengadaan Barang</h1>
            <hr />
            <p className="text-center">
              Kami melayani pengadaan barang Alat Tulis Kantor (ATK) untuk
              kebutuhan kantor anda. Selain itu kami juga melayani pengadaan
              barang elektronik seperti Printer, AC, Komputer, masih banyak lagi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
