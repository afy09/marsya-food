import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaLightbulb, FaHandshake, FaChartLine } from "react-icons/fa";

const founder = {
  name: "Muhammad Khoerul Imam S.Pi",
  position: "Founder",
  image: "/images/imam.jpeg",
};

const ManagementStructure = () => {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-linear-to-b from-white via-yellow-50 to-white pt-40 pb-28">
        {/* BLUR */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-300/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="text-center max-w-4xl mx-auto">
            <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">Pendiri Perusahaan</span>

            <h1 className="text-3xl md:text-5xl font-black leading-tight mt-8">
              Sosok di Balik
              <span className="text-yellow-500"> PT Tiga Putra Permata</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mt-8">
              Didirikan dan dijalankan langsung dengan visi yang jelas, PT Tiga Putra Permata berkomitmen menghadirkan layanan distribusi makanan yang profesional, modern, dan terpercaya.
            </p>
          </motion.div>

          {/* FOUNDER PROFILE */}
          <div className="mt-24 flex flex-col items-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
              }}
              className="relative">
              <div className="bg-white rounded-[40px] shadow-2xl border border-yellow-100 overflow-hidden w-[340px] hover:shadow-2xl transition-all duration-500">
                <div className="relative h-72 overflow-hidden">
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover hover:scale-110 transition-all duration-700" />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

                  {/* <div className="absolute bottom-6 left-6">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">Founder</span>
                  </div> */}
                </div>

                <div className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-black">{founder.name}</h2>

                  <p className="text-gray-500 mt-3 text-lg">{founder.position}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* EXTRA INFO */}
          <div className="grid md:grid-cols-3 gap-8 mt-28">
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[32px] p-8 shadow-xl border border-yellow-100">
              <div className="bg-yellow-100 text-yellow-500 w-20 h-20 rounded-3xl flex items-center justify-center text-3xl">
                <FaLightbulb />
              </div>

              <h3 className="text-2xl font-black mt-6">Visi & Gagasan</h3>

              <p className="text-gray-600 mt-4 leading-relaxed">Dibangun dari visi untuk menghadirkan distribusi makanan yang lebih efektif, efisien, dan dapat diandalkan oleh seluruh mitra.</p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[32px] p-8 shadow-xl border border-yellow-100">
              <div className="bg-blue-100 text-blue-500 w-20 h-20 rounded-3xl flex items-center justify-center text-3xl">
                <FaHandshake />
              </div>

              <h3 className="text-2xl font-black mt-6">Kepercayaan Mitra</h3>

              <p className="text-gray-600 mt-4 leading-relaxed">Mengedepankan integritas dan kepercayaan dalam setiap kerja sama demi hubungan jangka panjang yang saling menguntungkan.</p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[32px] p-8 shadow-xl border border-yellow-100">
              <div className="bg-green-100 text-green-500 w-20 h-20 rounded-3xl flex items-center justify-center text-3xl">
                <FaChartLine />
              </div>

              <h3 className="text-2xl font-black mt-6">Growth Company</h3>

              <p className="text-gray-600 mt-4 leading-relaxed">Fokus pada pertumbuhan bisnis, inovasi distribusi, dan pelayanan terbaik untuk seluruh mitra.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ManagementStructure;
