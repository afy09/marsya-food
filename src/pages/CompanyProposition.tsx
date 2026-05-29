import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FaShieldHalved, FaSnowflake, FaBoxesStacked, FaTruckFast, FaMapLocationDot, FaMicrochip } from "react-icons/fa6";

const propositions = [
  {
    icon: <FaShieldHalved />,
    title: "Produk Halal",
    desc: "Produk-produk kami telah diproses sesuai dengan standar halal yang berlaku umum sehingga aman dan terpercaya untuk seluruh konsumen.",
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    icon: <FaSnowflake />,
    title: "Higienis dan Berkualitas",
    desc: "Kami terus berkomitmen menyediakan produk-produk yang selalu dimonitor kebersihan serta kualitasnya agar tetap terjaga dengan baik.",
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    icon: <FaBoxesStacked />,
    title: "Ragam Produk",
    desc: "Kami menyediakan berbagai produk frozen food seperti daging sapi, daging ayam, seafood, kentang, buah & sayuran beku, dan berbagai kebutuhan food supply lainnya.",
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
  {
    icon: <FaTruckFast />,
    title: "Infrastruktur Rantai Dingin",
    desc: "Setiap proses distribusi dan perpindahan produk dilakukan dengan pengawasan ketat menggunakan sistem cold chain untuk menjaga kualitas produk tetap optimal.",
    color: "text-cyan-500",
    bg: "bg-cyan-100",
  },
  {
    icon: <FaMapLocationDot />,
    title: "Cakupan Geografis",
    desc: "PT Tiga Putra Permata terus memperluas jaringan distribusi untuk menjangkau pelanggan retail, horeca, supermarket, dan bisnis kuliner di berbagai wilayah Indonesia.",
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    icon: <FaMicrochip />,
    title: "Penerapan Teknologi",
    desc: "Kami mengoptimalkan sistem distribusi dan kontrol stok dengan penerapan teknologi modern dan sistem monitoring terintegrasi untuk memastikan efisiensi operasional.",
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
];

const CompanyProposition = () => {
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
            <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">Company Proposition</span>

            <h1 className="text-4xl md:text-5xl font-black leading-tight mt-8">
              Proposisi
              <span className="text-yellow-500"> Perusahaan</span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-8">
              PT Tiga Putra Permata berkomitmen menghadirkan produk pangan berkualitas tinggi dengan sistem distribusi modern, pelayanan profesional, dan penerapan teknologi terbaik.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
            {propositions.map((item, index) => (
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
                  delay: index * 0.15,
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative bg-white p-10 rounded-[36px] border border-yellow-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* GLOW */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* ICON */}
                <div className={`${item.bg} ${item.color} w-20 h-20 rounded-3xl flex items-center justify-center text-3xl relative z-10`}>{item.icon}</div>

                {/* TITLE */}
                <h3 className="text-2xl font-black mt-8 relative z-10">{item.title}</h3>

                {/* DESC */}
                <p className="text-gray-600 mt-5 leading-relaxed relative z-10">{item.desc}</p>

                {/* LINE */}
                <div className="w-16 h-1 bg-yellow-400 rounded-full mt-8"></div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM SECTION */}
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
              delay: 0.4,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mt-28 bg-white rounded-[40px] shadow-2xl border border-yellow-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              {/* IMAGE */}
              <div className="relative h-full">
                <img src="/images/food.jpg" alt="Distribution" className="w-full h-full object-cover min-h-[400px]" />

                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* CONTENT */}
              <div className="p-10 md:p-14">
                <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">Modern Distribution System</span>

                <h2 className="text-4xl font-black leading-tight mt-8">
                  Sistem Distribusi
                  <span className="text-yellow-500"> Modern </span>
                  dan Terintegrasi
                </h2>

                <p className="text-gray-600 leading-relaxed mt-8 text-lg">
                  PT Tiga Putra Permata terus berinovasi dalam meningkatkan kualitas distribusi produk frozen food dengan sistem pengawasan, penyimpanan, dan pengiriman yang modern.
                </p>

                <p className="text-gray-600 leading-relaxed mt-6 text-lg">Dengan dukungan infrastruktur cold chain dan teknologi monitoring, kami memastikan seluruh produk tetap terjaga kualitasnya hingga sampai ke tangan pelanggan.</p>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="bg-yellow-50 rounded-3xl p-6 border border-yellow-100">
                    <h3 className="text-4xl font-black text-yellow-500">1000+</h3>

                    <p className="text-gray-600 mt-2">Frozen Food Distribution</p>
                  </div>

                  <div className="bg-yellow-50 rounded-3xl p-6 border border-yellow-100">
                    <h3 className="text-4xl font-black text-yellow-500">500+</h3>

                    <p className="text-gray-600 mt-2">Mitra MBG</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CompanyProposition;
