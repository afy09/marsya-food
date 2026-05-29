import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    {
      name: "Produk",
      path: "#product",
    },
    {
      name: "Keunggulan",
      path: "#benefits",
    },
    {
      name: "Kemitraan",
      path: "#partnership",
    },
    {
      name: "Galeri",
      path: "#gallery",
    },
    {
      name: "Client",
      path: "#client",
    },
  ];

  const aboutMenus = [
    {
      name: "Profile Perusahaan",
      path: "/company-profile",
    },
    {
      name: "Struktur Manajemen",
      path: "/management-structure",
    },
    {
      name: "Proposisi Perusahaan",
      path: "/company-proposition",
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
          <a href="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {/* ABOUT DROPDOWN */}
            <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button className={`flex items-center gap-2 font-semibold transition-all hover:text-yellow-400 ${scrolled ? "text-black" : "text-white"}`}>
                Tentang
                <FaChevronDown className="text-sm" />
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    className="absolute top-10 left-0 w-72 bg-white rounded-3xl shadow-2xl p-4 border border-yellow-100">
                    {aboutMenus.map((item, index) => (
                      <a key={index} href={item.path} className="block px-5 py-4 rounded-2xl hover:bg-yellow-50 transition-all font-semibold text-gray-700">
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* NORMAL MENU */}
            {menus.map((item, index) => (
              <a key={index} href={item.path} className={`font-semibold transition-all duration-300 hover:text-yellow-400 ${scrolled ? "text-black" : "text-white"}`}>
                {item.name}
              </a>
            ))}
          </div>

          {/* CONTACT BUTTON */}
          <div className="hidden lg:block">
            <a href="https://wa.me/6285775099079" target="_blank" rel="noopener noreferrer">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black transition-all px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105">Contact</button>
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className={`lg:hidden text-2xl transition-all z-[60] ${scrolled ? "text-black" : "text-white"}`}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed inset-0 bg-black z-[999] lg:hidden overflow-y-auto">
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              {/* LOGO */}
              <div className="flex items-center gap-3">
                <img src="/images/logo.png" alt="logo" className="w-11 h-11 object-contain" />

                <div>
                  <h2 className="text-white font-black text-xl leading-none">Tiga Putra Permata</h2>
                </div>
              </div>

              {/* CLOSE */}
              <button onClick={() => setOpen(false)} className="text-white text-2xl">
                <FaTimes />
              </button>
            </div>

            {/* CONTENT */}
            <div className="px-6 py-10 flex flex-col gap-5">
              {/* ABOUT */}
              <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className="w-full flex items-center justify-between px-6 py-5 text-white font-bold text-lg">
                  Tentang
                  <FaChevronDown className={`transition-all duration-300 ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden">
                      <div className="px-4 pb-4 flex flex-col gap-3">
                        {aboutMenus.map((item, index) => (
                          <a key={index} href={item.path} onClick={() => setOpen(false)} className="bg-white/5 hover:bg-yellow-400 hover:text-black text-white py-4 px-5 rounded-2xl font-semibold transition-all">
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* NORMAL MENUS */}
              {menus.map((item, index) => (
                <a key={index} href={item.path} onClick={() => setOpen(false)} className="bg-white/5 border border-white/10 hover:bg-yellow-400 hover:text-black text-white rounded-3xl px-6 py-5 font-bold text-lg transition-all">
                  {item.name}
                </a>
              ))}

              {/* CONTACT */}
              <a href="https://wa.me/6285775099079" target="_blank" rel="noopener noreferrer" className="mt-4">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-5 rounded-3xl font-black text-lg transition-all">Contact Us</button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
