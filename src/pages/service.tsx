import { Carousel } from 'antd';
import { useState, useRef } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CarouselRef } from 'antd/es/carousel';

export default function Service() {
  const [activeBox, setActiveBox] = useState<number>(0); // Default box yang aktif
  const carouselRef = useRef<CarouselRef>(null); // Menggunakan ref untuk mengakses fungsi carousel

  const handleAfterChange = (current: number) => {
    setActiveBox(current); // Mengatur box yang aktif setelah swipe
  };

  const services = [
    {
      id: 1,
      title: "Mobile Application",
      image: "/images/service-bg-1.png",
      description: "Building mobile applications is never easy. P2P lending app ? Logistic App ? E-Commerce App ? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us.",
    },
    {
      id: 2,
      title: "Web Application",
      image: "/images/image-1.png",
      description: "Building mobile applications is never easy. P2P lending app ? Logistic App ? E-Commerce App ? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us."
    },
    {
      id: 3,
      title: "UI/UX Design",
      image: "/images/image-3.png",
      description: "Building mobile applications is never easy. P2P lending app ? Logistic App ? E-Commerce App ? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us."
    },
  ];

  // Custom arrow component
  const CustomArrow = ({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) => (
    <button
      className={`absolute bottom-4 hidden md:block ${direction === 'left' ? 'right-[60px]' : 'right-4'} bg-transparent text-white p-2`}
      onClick={onClick}
    >
      {direction === 'left' ? <LeftOutlined /> : <RightOutlined />}
    </button>
  );

  // Fungsi untuk menangani klik pada daftar layanan
  const handleServiceClick = (index: number) => {
    setActiveBox(index); // Mengatur index yang diklik sebagai aktif
    carouselRef.current?.goTo(index); // Pindah ke slide yang sesuai dengan index
  };

  return (
    <div id='service' className="flex flex-col gap-10 md:gap-0 w-full md:flex-row md:space-x-24 md:items-center pt-28">
      <div className="max-w-full order-2 md:order-1 grid-cols-2 gap-4 w-auto relative">
        <Carousel
        //   effect="fade"
          ref={carouselRef}
          dots={false}
          afterChange={handleAfterChange}
          className="md:!max-w-[50vw] relative"
        >
          {services.map((item, index) => {
            const [firstWord, secondWord] = item.title.split(' '); // Memisahkan kata

            return (
              <div
                key={index}
                className={`md:h-[381px] w-full bg-[url('/images/service-bg-1.png')] bg-cover bg-center bg-no-repeat !flex flex-col items-end space-y-5 py-6 px-10 relative`}>
                <h1 className="text-[48px] font-semibold flex flex-col text-end text-white">
                  <span className="leading-10">{firstWord}</span>
                  <span className="">{secondWord}</span>
                </h1>
                <p className="text-end lg:max-w-[60%] text-white">{item.description}</p>
              </div>
            );
          })}
        </Carousel>

        {/* Custom arrows */}
        <CustomArrow
          direction="left"
          onClick={() => carouselRef.current?.prev()} // Fungsi untuk prev slide
        />
        <CustomArrow
          direction="right"
          onClick={() => carouselRef.current?.next()} // Fungsi untuk next slide
        />
      </div>
      <div data-aos="fade-left" className="md:space-y-6 order-1 md:order-2 max-md:flex gap-6 sm:gap-10 px-4 sm:px-8 md:px-0">
        <h1 className="text-start flex justify-center items-start flex-col text-[45px] lg:text-[60px] leading-tight md:leading-[70px] font-bold">
          What
          <span>We Do?</span>
        </h1>

        {/* Daftar layanan */}
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li
              key={service.id}
              className={`cursor-pointer flex justify-start items-center space-x-2 transition-all duration-300 ease-in-out ${activeBox === index ? 'font-bold text-black' : 'text-neutral-500'}`}
              onClick={() => handleServiceClick(index)} // Panggil fungsi handleServiceClick ketika item diklik
            >
              <span>-</span>
              <p>{service.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
