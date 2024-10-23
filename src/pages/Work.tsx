import { Button } from "antd";
import { useState } from "react";

export default function Work() {
  const [activeBox, setActiveBox] = useState<number>(1); // Default box dengan ID 1 aktif

  const handleClick = (id: number) => {
    setActiveBox(id); // Mengatur ID box yang diklik sebagai yang aktif
  };

  const boxData = [
    { id: 1, title: "Discuss", number: "01", description: "Let's discuss your ideas and how we can bring them to life." },
    { id: 2, title: "Planning", number: "02", description: "We will plan every step of your project to ensure success." },
    { id: 3, title: "Coding", number: "03", description: "Now it's time to write the code and build your project." },
  ];

  // Cari deskripsi berdasarkan box yang aktif
  const activeDescription = boxData.find((box) => box.id === activeBox)?.description;

  return (
    <div id="work" className="flex flex-col md:flex-row justify-evenly items-center px-8 xl:px-28 pt-28">
      <div data-aos="zoom-in-right" className="inline-grid order-2 md:order-1 grid-cols-2 gap-4 w-auto bg--700 md:p-4">
        <div className="lg:w-52 lg:h-52 bg-transparent relative flex justify-center items-center">
          {/* <div className="w-[50%] h-1 bg-neutral-700 absolute left-[90px] md:left-[120px] "></div> */}
        </div>
        {boxData.map((box) => (
          <div
            key={box.id}
            onClick={() => handleClick(box.id)}
            className={`lg:w-52 lg:h-52 cursor-pointer flex flex-col justify-between py-6 px-4  
              ${activeBox === box.id ? "bg-gradient-to-b from-[#9FD685] to-[#F9DD03]" : "bg-gradient-to-b from-neutral-300 from-5% to-neutral-100 to-50%"}
              transition-all duration-3000 ease-in-out`}
          >
            <p className="text-xl font-semibold">{box.title}</p>
            <div className={`text-8xl font-bold ${activeBox === box.id ? "text-neutral-200 " : "text-neutral-300"} text-neutral-300 text-end`}>{box.number}</div>
          </div>
        ))}
      </div>
      <div data-aos="zoom-in-left" className="space-y-6 order-1 md:order-2">
        <h1 className="text-start text-[45px] lg:text-[60px] leading-tight md:leading-[70px] font-bold">
          How <br /> We Work?
        </h1>
        <p className="text-sm md:text-lg md:max-w-[250px] lg:max-w-none">{activeDescription}</p> {/* Menampilkan deskripsi sesuai box yang aktif */}
        <Button className="rounded-none outline-none border-none bg-neutral-600 !px-10 py-5 text-white">More</Button>
      </div>
    </div>
  );
}
