import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Customers from "./pages/Customers";
import Service from "./pages/service";
import Team from "./pages/Team";
import Footer from "./pages/Footer";
import Career from "./pages/Career";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: false, // Apakah animasi hanya terjadi sekali
    });
  }, []);

  return (
    <div className="text-[#414141] max-w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <Work />
      <Customers />
      <Service />
      <Team/>
      <Career/>
      <Footer />
    </div>
  );
};

export default App;
