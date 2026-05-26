import { motion } from "framer-motion";

import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black overflow-hidden text-white">
      {/* TOP GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-yellow-400 via-orange-400 to-yellow-500"></div>

      {/* BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-4 gap-14">
          {/* BRAND */}
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="lg:col-span-2">
            <h2 className="text-5xl font-black leading-tight">
              Marsya
              <span className="text-yellow-400"> Healthy Food</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mt-8 text-lg max-w-xl">
              PT Tiga Putra Permata menghadirkan Jagung Manis Pipil Marsya berkualitas premium dengan rasa alami, higienis, dan teknologi frozen modern untuk menjaga kesegaran terbaik.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-5 mt-10">
              <a
                href="https://wa.me/6285775099079"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-black w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all hover:-translate-y-2">
                <FaWhatsapp />
              </a>

              <a href="/" className="bg-white/10 hover:bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all hover:-translate-y-2">
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* MENU */}
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-black mb-8">Menu</h3>

            <div className="space-y-5">
              <a href="#home" className="block text-gray-400 hover:text-yellow-400 transition-all">
                Home
              </a>

              <a href="#about" className="block text-gray-400 hover:text-yellow-400 transition-all">
                Tentang
              </a>

              <a href="#product" className="block text-gray-400 hover:text-yellow-400 transition-all">
                Produk
              </a>

              <a href="#gallery" className="block text-gray-400 hover:text-yellow-400 transition-all">
                Galeri
              </a>

              <a href="#how-to-order" className="block text-gray-400 hover:text-yellow-400 transition-all">
                Cara Order
              </a>
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-black mb-8">Kontak</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-black p-3 rounded-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-gray-400">0857-7509-9079</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-black p-3 rounded-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400">marsyafood@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-black p-3 rounded-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400 leading-relaxed">
                    PT Tiga Putra Permata
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} viewport={{ once: true }} className="border-t border-white/10 mt-20 pt-8 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Marsya Healthy Food — All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
