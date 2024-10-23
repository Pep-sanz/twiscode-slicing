import { Button } from "antd";
import React from "react";

export default function Customers(): React.ReactElement {
  const customerData = [
    {
      id: 1,
      title: "Mandiri",
      icon: "/icons/mandiri-icon.png",
    },
    {
      id: 2,
      title: "Amartha",
      icon: "/icons/amartha-icon.png",
    },
    {
      id: 3,
      title: "Wahyoo",
      icon: "/icons/wahyoo-icon.png",
    },
    {
      id: 4,
      title: "Cisco",
      icon: "/icons/cisco-icon.png",
    },
    {
      id: 5,
      title: "Legoas",
      icon: "/icons/legoas-icon.png",
    },
    {
      id: 6,
      title: "CBN",
      icon: "/icons/cbn-icon.png",
    },
    {
      id: 7,
      title: "Lazada",
      icon: "/icons/lazada-icon.png",
    },
    {
      id: 8,
      title: "Universitas Airlangga",
      icon: "/icons/unair-icon.png",
    },
    {
      id: 9,
      title: "Hubble",
      icon: "/icons/hubble-icon.png",
    },
    // {
    //   id: 10,
    //   title: "Jawa Pos",
    //   icon: "/icons/jawa-pos-icon.png",
    // },
  ];

  return (
    <div id="customer" className="min-h-screen flex flex-col lg:flex-row justify-evenly lg:items-center px-8 md:px-14 xl:px-28 pt-28">
      <div data-aos="fade-left" className="space-y-6">
        <h1 className="text-start flex justify-center items-start flex-col text-4xl font-bold">
          Our Customers
          <span>are our biggest fans</span>
        </h1>
        <p className="text-sm md:text-lg max-w-72">We have helped startups around the globe as well as fortune 500 companies</p>
        <Button
          type="text"
          className="text-lg bg-clip-text bg-gradient-to-r from-[#9FD685] to-[#F9DD03] text-transparent outline-none border-none hover:!text-transparent hover:!bg-clip-text hover:!bg-gradient-to-r hover:!from-[#9FD685] hover:!to-[#F9DD03] py-5 shadow-none font-semibold"
        >
          See All
        </Button>
      </div>
      <div data-aos="fade-right" className="inline-grid grid-cols-3 gap-4 w-auto bg--700 p-4">
        {customerData.map((customer) => (
          <div key={customer.id} className="bg-transparent relative flex justify-center items-center">
            <img src={customer.icon} alt={customer.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
