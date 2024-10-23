import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import { CarouselRef } from 'antd/es/carousel';

const Team: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const carouselRef = useRef<CarouselRef>(null);

  const data = [
    {
      name: 'Elisabeth Be',
      role: 'CEO',
      image: '/images/team-2.png',
    },
    {
      name: 'Andree Wijaya',
      role: 'CEO/CTO',
      image: '/images/team-1.png',
    },
    {
      name: 'Sanjaya Wahono',
      role: 'CFO',
      image: '/images/team-3.png',
    },
    {
      name: 'Michael Johnson',
      role: 'CFO',
      image: '/images/team-3.png',
    },
    {
      name: 'Michael Johnson',
      role: 'CFO',
      image: '/images/team-3.png',
    },
    {
      name: 'Michael Johnson',
      role: 'CFO',
      image: '/images/team-3.png',
    },
  ];

  const slidesToShow = 3;
  const middleIndex = Math.floor(slidesToShow / 2);

  // Fungsi untuk mendeteksi apakah pengguna sedang dalam tablet atau mobile
  const updateIsMobile = () => {
    const width = window.innerWidth;
    setIsMobile(width < 768); // 1024px adalah breakpoint untuk tablet
  };

  useEffect(() => {
    updateIsMobile(); // Perbarui state saat komponen di-mount
    window.addEventListener('resize', updateIsMobile); // Update saat window di-resize

    return () => {
      window.removeEventListener('resize', updateIsMobile); // Cleanup listener
    };
  }, []);

  const handleContentClick = (index: number) => {
    if (!isMobile && index !== activeIndex) { // Hanya berfungsi jika bukan dalam mobile atau tablet
      const newIndex = index - middleIndex >= 0 ? index - middleIndex : 0;
      setActiveIndex(index);
      if (carouselRef.current) {
        carouselRef.current.goTo(newIndex);
      }
    }
  };

  useEffect(() => {
    // Pastikan konten aktif berada di tengah setelah perubahan index
    if (carouselRef.current) {
      const newIndex = activeIndex - middleIndex >= 0 ? activeIndex - middleIndex : 0;
      carouselRef.current.goTo(newIndex);
    }
  }, [activeIndex]);

  const renderSlides = () => {
    return data.map((item, index) => {
      const isActive = index === activeIndex;
      return (
        <div
          key={index}
          className={`!flex justify-center items-center ${isMobile ? '' : 'cursor-pointer'} ${isActive && !isMobile ? 'scale-110 -translate-y-6' : ''} transition-transform duration-300 ease-in-out`}
          onClick={() => handleContentClick(index)}
        >
          <div className="!w-full !h-full flex flex-col justify-start items-center space-y-6">
           <img src={item.image} alt={item.name} />
           <div className=" text-center">
            <h3 className='text-2xl font-semibold'>{item.name}</h3>
            <p className='text-lg font-semibold text-neutral-400'>{item.role}</p>
           </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div id='team' className='py-32'>
      <div className="mb-16 md:mb-32 flex justify-center items-center">
        <h1 className="text-start flex justify-center items-start flex-col text-4xl font-bold">Our Team</h1>
      </div>
      <Carousel
        ref={carouselRef}
        slidesToShow={slidesToShow}
        infinite={false}
        beforeChange={(_, next) => setActiveIndex(next + middleIndex)}
        className='!min-h-[400px] team-carousel'
        responsive={[
          {
            breakpoint: 1024, // Jika lebar layar lebih dari atau sama dengan 1024px
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768, // Jika lebar layar antara 768px hingga 1023px (tablet)
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576, // Jika lebar layar lebih kecil dari 576px (mobile)
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {renderSlides()}
      </Carousel>
    </div>
  );
};

export default Team;
