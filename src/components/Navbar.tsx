import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    {
      name: "Tentang",
      path: "#about",
    },
    {
      name: "Produk",
      path: "#product",
    },
    {
      name: "Keunggulan",
      path: "#benefits",
    },
    {
      name: "Cara Order",
      path: "#how-to-order",
    },
    {
      name: "Kemitraan",
      path: "#partnership",
    },
    {
      name: "Galeri",
      path: "#gallery",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <a href="#home" className={`text-3xl font-black transition-all duration-300 ${scrolled ? "text-yellow-500" : "text-white"}`}>
            Marsya.
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {menus.map((item, index) => (
              <a key={index} href={item.path} className={`font-semibold transition-all duration-300 hover:text-yellow-400 ${scrolled ? "text-black" : "text-white"}`}>
                {item.name}
              </a>
            ))}
          </div>

          {/* CONTACT BUTTON */}
          <div className="hidden lg:block">
            <a
              href={`https://wa.me/6285775099079?text=${encodeURIComponent(
                `Halo Admin Marsya 👋

Saya ingin bertanya mengenai produk Jagung Manis Pipil Marsya.`
              )}`}
              target="_blank"
              rel="noopener noreferrer">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black transition-all px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105">Contact</button>
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className={`lg:hidden text-2xl transition-all ${scrolled ? "text-black" : "text-white"}`}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-2xl z-40 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-8">
              {menus.map((item, index) => (
                <a key={index} href={item.path} onClick={() => setOpen(false)} className="text-white text-3xl font-bold hover:text-yellow-400 transition-all">
                  {item.name}
                </a>
              ))}

              {/* BUTTON */}
              <a
                href={`https://wa.me/6285775099079?text=${encodeURIComponent(
                  `Halo Admin Marsya 👋

Saya ingin bertanya mengenai produk Jagung Manis Pipil Marsya.`
                )}`}
                target="_blank"
                rel="noopener noreferrer">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black transition-all px-8 py-4 rounded-full font-bold shadow-xl mt-6">Contact</button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
