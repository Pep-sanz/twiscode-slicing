import { Divider, Typography } from 'antd';
import React from 'react';
import { FaMailBulk, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

const navItems = [
  { id: 1, title: "Work", url: "#" },
  { id: 2, title: "Service", url: "#work" },
  { id: 3, title: "Team", url: "#service" },
  { id: 4, title: "Contact", url: "#customer" },
];

const socials = [
  {
    title: "Facebook",
    icon: <FaFacebook />,
    url: "#"
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    url: "#"
  },
  {
    title: "Email",
    icon: <FaMailBulk />,
    url: "#"
  },
];

export default function Footer():React.ReactElement {
  return (
    <footer id='contact' className='py-10 px-4 md:px-8 lg:px-16'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 justify-items-center'>
        {/* Find us Section */}
        <div className="flex flex-col space-y-4 col-span-1 md:col-span-1">
          <h1 className='text-lg font-semibold'>Location</h1>
          <div className="flex items-center space-x-2 md:hidden">
            <FaMapMarkerAlt size={20} />
            <Typography.Text className='text-neutral-400'>
              Jl. Kayoon, Embong Kaliasin, Kec. Genteng, Surabaya, Jawa Timur
            </Typography.Text>
          </div>
          <iframe
            className='hidden md:block w-full h-[170px] lg:w-[360px] lg:h-[150px]'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1442813716435!2d112.74411287481307!3d-7.2699863927369845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbd85e721437%3A0x9b05186e08aea1f1!2sJl.%20Kayoon%2C%20Embong%20Kaliasin%2C%20Kec.%20Genteng%2C%20Surabaya%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1729450540727!5m2!1sid!2sid"
            loading="lazy"
          />
        </div>

        {/* Company Section */}
        <div className="w-full">
          <h1 className='text-lg font-semibold mb-4'>Company</h1>
          <ul className="space-y-2 text-neutral-400">
            {navItems.map(item => (
              <li key={item.id} className="cursor-pointer transition hover:text-black">
                - {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="w-full">
          <h1 className='text-lg font-semibold mb-4'>Contact Us</h1>
          <ul className="space-y-4 text-neutral-400">
            {socials.map((social, index) => (
              <li key={index} className="flex items-center gap-2 cursor-pointer transition hover:text-black">
                {social.icon}
                <span>{social.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <Divider />
      <div className='mt-10 text-center text-neutral-500'>
        <strong>©{new Date().getFullYear()} Twiscode.</strong> All rights reserved.
      </div>
    </footer>
  );
}
