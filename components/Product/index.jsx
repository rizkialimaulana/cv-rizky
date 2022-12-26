import React from "react";

const Products = () => {
  return (
    <div className="h-screen flex md:flex-row flex-col">
      <div className="flex-[0.5] flex items-center justify-center">
        <img src="/images/header3.jpg" alt="" />
      </div>
      <div className="flex-[0.5] flex items-center justify-center md:p-0 p-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-2xl md:text-4xl text-white md:text-black p-3 md:bg-transparent bg-red-700 md:pb-3 md:border-b-2 w-fit md:border-black">
            Mengapa memilih kami?
          </h1>
          <div className="w-[80%] text-lg md:text-xl flex flex-col gap-7">
            <p className="text-justify">
              CV. Rizky Fitri Akbar memberikan pelayanan yang cepat dengan
              pengerjaan yang rapih. Dibuktikan dengan client-client kami yang
              puas dengan pengerjaan kami.
            </p>
            <p className="text-justify">
              Selain itu, kami menawarkan anda harga yang kompetitif dalam jasa
              pelayanan cetakan dan juga pengadaan barang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
