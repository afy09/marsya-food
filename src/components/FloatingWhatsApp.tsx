import { useEffect, useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={`https://wa.me/6285775099079?text=${encodeURIComponent(
            `Halo Admin Marsya 👋

Saya ingin bertanya mengenai produk Jagung Manis Pipil Marsya 🙌`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            scale: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0,
            y: 100,
          }}
          transition={{
            duration: 0.4,
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="fixed bottom-14 right-6 z-999 group">
          {/* PING */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

          {/* BUTTON */}
          <div className="relative bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all">
            <FaWhatsapp className="text-white text-4xl" />
          </div>

          {/* TOOLTIP */}
          <div className="absolute right-20 top-5 -translate-y-1/2 bg-black text-white text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-xl">Chat WhatsApp</div>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingWhatsApp;
