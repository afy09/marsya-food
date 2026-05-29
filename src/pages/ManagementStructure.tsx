import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaUserTie, FaUsers, FaBuilding, FaChartLine } from "react-icons/fa";

const leaders = [
  {
    name: "Khairul Imam",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Rizky Pratama",
    position: "Chief Operational Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Andika Saputra",
    position: "Chief Marketing Officer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
  },
];

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
            <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">Struktur Organisasi</span>

            <h1 className="text-3xl md:text-5xl font-black leading-tight mt-8">
              Struktur
              <span className="text-yellow-500"> Manajemen </span>
              Perusahaan
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mt-8">PT Tiga Putra Permata memiliki struktur organisasi profesional untuk mendukung operasional distribusi makanan yang efektif, modern, dan terpercaya.</p>
          </motion.div>

          {/* ORGANIZATION TREE */}
          <div className="mt-24 flex flex-col items-center">
            {/* CEO */}
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
              className="relative">
              <div className="bg-white rounded-[40px] shadow-2xl border border-yellow-100 overflow-hidden w-[340px]">
                <div className="relative h-72 overflow-hidden">
                  <img src={leaders[0].image} alt={leaders[0].name} className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

                  <div className="absolute bottom-6 left-6">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">CEO</span>
                  </div>
                </div>

                <div className="p-8 text-center">
                  <h2 className="text-2xl md:text-3xl font-black">{leaders[0].name}</h2>

                  <p className="text-gray-500 mt-3 text-lg">{leaders[0].position}</p>
                </div>
              </div>

              {/* LINE */}
              <div className="w-1 h-24 bg-yellow-300 mx-auto"></div>
            </motion.div>

            {/* CHILDREN */}
            <div className="relative w-full max-w-5xl">
              {/* HORIZONTAL LINE */}
              <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-1 bg-yellow-300 rounded-full"></div>

              {/* CARDS */}
              <div className="grid md:grid-cols-2 gap-10 mt-10">
                {leaders.slice(1).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 80,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.8,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    className="relative">
                    {/* VERTICAL LINE */}
                    <div className="hidden md:block absolute -top-10 left-1/2 -translate-x-1/2 w-1 h-10 bg-yellow-300"></div>

                    <div className="bg-white rounded-[40px] shadow-xl border border-yellow-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                      {/* IMAGE */}
                      <div className="h-72 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-all duration-700" />
                      </div>

                      {/* CONTENT */}
                      <div className="p-8 text-center">
                        <div className="bg-yellow-100 text-yellow-600 w-20 h-20 rounded-3xl flex items-center justify-center text-3xl mx-auto">
                          <FaUserTie />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black mt-6">{item.name}</h3>

                        <p className="text-gray-500 mt-3 text-lg">{item.position}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* EXTRA INFO */}
          <div className="grid md:grid-cols-3 gap-8 mt-28">
            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[32px] p-8 shadow-xl border border-yellow-100">
              <div className="bg-yellow-100 text-yellow-500 w-20 h-20 rounded-3xl flex items-center justify-center text-3xl">
                <FaUsers />
              </div>

              <h3 className="text-2xl font-black mt-6">Tim Profesional</h3>

              <p className="text-gray-600 mt-4 leading-relaxed">Didukung oleh tim berpengalaman dalam distribusi makanan dan manajemen operasional modern.</p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[32px] p-8 shadow-xl border border-yellow-100">
              <div className="bg-blue-100 text-blue-500 w-20 h-20 rounded-3xl flex items-center justify-center text-3xl">
                <FaBuilding />
              </div>

              <h3 className="text-2xl font-black mt-6">Sistem Terintegrasi</h3>

              <p className="text-gray-600 mt-4 leading-relaxed">Struktur organisasi dibangun untuk memastikan koordinasi kerja yang efektif dan efisien.</p>
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
