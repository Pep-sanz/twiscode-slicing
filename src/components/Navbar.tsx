import React from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const navItems = [
  { id: 1, title: "Home", url: "#" },
  { id: 2, title: "Work", url: "#work" },
  { id: 3, title: "Service", url: "#service" },
  { id: 4, title: "Our Customer", url: "#customer" },
  { id: 5, title: "Team", url: "#team" },
  { id: 6, title: "Career", url: "#career" },
  { id: 7, title: "Contact", url: "#contact" },
];

export default function Navbar(): React.ReactElement {
  const [onOpen, setOnOpen] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState("Home"); // State untuk menu aktif

  // Fungsi untuk menangani klik navigasi
  const handleNavClick = (title: string) => {
    setActiveNav(title); // Update menu yang aktif
    setOnOpen(false); // Menutup menu pada mobile setelah klik
  };

  return (
    <div className="fixed z-50 min-w-full px-8 lg:px-28 left-0 right-0 top-0 bg-white max-h-[100px] shadow-md flex justify-between p-4">
      {/* Logo */}
      <div className="">
        <img src="images/twiscode.png" alt="logo" />
      </div>
      {/* Navigasi Desktop */}
      <ul className="hidden lg:flex justify-between items-center gap-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.url} onClick={() => handleNavClick(item.title)} className={`py-2 transition-all duration-200 ease-in-out ${activeNav === item.title ? "border-b-2 " : "border-b-2 border-transparent "}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Hamburger Menu */}
      <div className="lg:hidden flex justify-center items-center">
        {onOpen ? <IoClose onClick={() => setOnOpen(!onOpen)} className="relative z-40 text-3xl transition-all ease-in-out" /> : <FaBars onClick={() => setOnOpen(!onOpen)} className="relative z-40 text-2xl" />}
        {/* Menu Mobile */}
        <div className={`block bg-[#F8F8F8] absolute top-0 pt-20 lg:hidden transition-all duration-300 ease-in-out w-full h-screen ${onOpen ? "right-0 ease-in-out" : "right-[-100%]"}`}>
          <ul className="w-full h-full flex gap-4 flex-col">
            {navItems.map((item) => (
              <li key={item.id} className="w-full h-[45px] text-base px-6 flex justify-center items-center">
                <a
                  href={item.url}
                  onClick={() => handleNavClick(item.title)}
                  className={`py-2 transition-all duration-200 ease-in-out ${activeNav === item.title ? "border-b-2 border-red-500 text-red-500" : "border-b-2 border-transparent hover:border-red-500 hover:text-red-500"}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
