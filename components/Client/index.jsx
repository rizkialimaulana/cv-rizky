import React from "react";

const Client = () => {
  return (
    <div className="p-4 h-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="font-semibold text-2xl p-3 md:pb-3">Client kami</h1>
        <div className="flex items-center md:flex-row gap-8 w-[80%] overflow-x-scroll md:overflow-hidden">
          <img src="/images/btn.png" alt="" className="w-[10rem] h-fit" />
          <img
            src="/images/btn-syariah.png"
            alt=""
            className="w-[10rem] h-fit"
          />
          <img src="/images/ukabima.png" alt="" className="w-[10rem] h-fit" />
          <img src="/images/bpr.png" alt="" className="w-[10rem] h-fit" />
        </div>
      </div>
    </div>
  );
};

export default Client;
