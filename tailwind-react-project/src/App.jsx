import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopByCategory from "./components/ShopByCategory";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={` max-w-[100vw] ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <ShopByCategory darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </>
    </div>
  );
}

export default App;
