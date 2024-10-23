import { Button } from "antd";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home(): React.ReactElement {
  return (
    <div className="max-md:bg-[url('/images/header-twiscode-3.png')] bg-no-repeat bg-center bg-cover md:bg-[#F8F8F8] min-h-screen flex flex-col md:flex-row justify-center gap-10 sm:justify-center items-center sm:gap-10 md:gap-0 md:pt-24 md:px-10 pr-14 md:pl-14 lg:pl-28 overflow-x-hidden">
      {/* Bagian Teks */}
      <div data-aos="fade-right" className="space-y-6 w-full max-md:text-white max-md:bg-black/50 py-6 flex flex-col md:flex-row justify-between items-center md:block md:space-y-14 text-center md:text-left md:w-[50vw]">
        <h1 className="text-start text-[45px] lg:text-[60px] leading-tight md:leading-[70px] font-bold">
          We Code <br /> <span className="border-b-2 border-white md:border-black">We</span> Deliver
        </h1>
        <div className="flex justify-center md:justify-start items-center gap-4 md:gap-6">
          <p className="text-sm md:text-lg max-w-[230px] md:max-w-[400px] text-start">Twiscode specializes in developing high-performing mobile and web applications.</p>
        </div>
      </div>
      <div className="flex justify-center md:hidden items-center">
        <Button className="bg-black text-3xl w-[50px] text-white !py-6 pr-3 !outline-none border-none rounded-none">
          <FaArrowRightLong />
        </Button>
        <Button className="bg-gradient-to-r from-[#9FD685] to-[#F9DD03] text-white !py-6 pr-3 !outline-none border-none rounded-none">Let’s Have a Coffe</Button>
      </div>
      {/* Desktop */}
      <div data-aos="fade-left" className="hidden relative md:block left-5 w-auto h-full">
        <div className="absolute bottom-10 z-20 flex -left-[49px]">
          <Button className="bg-black text-3xl w-[50px] text-white !py-6 pr-3 !outline-none border-none rounded-none hover:!bg-black hover:!text-white">
            <FaArrowRightLong />
          </Button>
          <span className="flex jcenter items-center gap-2 px-2 bg-gradient-to-r from-[#9FD685] to-[#F9DD03] text-white !outline-none border-none rounded-none">Let’s Have a Coffe</span>
        </div>
        <img src="images/header-twiscode-3.png" alt="images 1" className="mt-10 md:mt-0 w-full h-[60vh] md:h-[80vh] object-cover" />
      </div>
    </div>
  );
}
