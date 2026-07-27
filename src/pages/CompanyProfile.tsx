import { motion } from "framer-motion";

import { FaBoxesStacked, FaAward, FaHandshake, FaBullseye, FaEye } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const misiList = [
  "Menyediakan produk pangan berkualitas tinggi dengan harga kompetitif untuk seluruh mitra.",
  "Membangun sistem distribusi yang cepat, tepat waktu, dan dapat diandalkan.",
  "Menjalin kerja sama jangka panjang yang saling menguntungkan dengan mitra, retail, dan pelaku bisnis kuliner.",
  "Memberikan pelayanan profesional yang berorientasi pada kepuasan pelanggan.",
];

const About = () => {
  return (
    <>
      <Navbar />

      <section id="about" className="relative py-28 bg-linear-to-b from-white via-yellow-50 to-white overflow-hidden">
        {/* BLUR BACKGROUND */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true, amount: 0.3 }}>
              {/* BADGE */}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">
                Tentang PT Tiga Putra Permata
              </motion.span>

              {/* TITLE */}
              <motion.h2 initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black leading-tight mt-6">
                Distributor Makanan
                <span className="text-yellow-500"> Berkualitas </span>
                dan Terpercaya
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }} className="text-gray-600 text-lg leading-relaxed mt-8">
                PT Tiga Putra Permata merupakan perusahaan distributor makanan yang menyediakan berbagai produk berkualitas tinggi untuk kebutuhan retail, horeca, supermarket, hingga bisnis kuliner modern di Indonesia.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} viewport={{ once: true }} className="text-gray-600 text-lg leading-relaxed mt-6">
                Dengan sistem distribusi profesional, manajemen produk yang baik, dan pelayanan terpercaya, kami berkomitmen menghadirkan produk pangan terbaik dengan kualitas terjaga dan pengiriman tepat waktu.
              </motion.p>

              {/* STATS */}
              <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.9 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {/* ITEM */}
                <div className="bg-white shadow-xl rounded-3xl p-6 border border-yellow-100 hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-3xl font-black text-yellow-500">1000+</h3>
                  <p className="text-gray-600 mt-2">Frozen Food Distribution</p>
                </div>

                {/* ITEM */}
                <div className="bg-white shadow-xl rounded-3xl p-6 border border-yellow-100 hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-3xl font-black text-green-500">500+</h3>
                  <p className="text-gray-600 mt-2">Mitra MBG</p>
                </div>

                {/* ITEM */}
                <div className="bg-white shadow-xl rounded-3xl p-6 border border-yellow-100 hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-3xl font-black text-orange-500">Trusted</h3>
                  <p className="text-gray-600 mt-2">Company</p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.3 }} className="relative">
              {/* FLOATING BADGE */}
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -left-6 bg-white shadow-2xl px-6 py-5 rounded-3xl z-20 border border-yellow-100">
                <h3 className="text-3xl font-black text-yellow-500">1000+</h3>
                <p className="text-gray-600 mt-1">Frozen Food Distribution</p>
              </motion.div>

              {/* IMAGE */}
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-300/20 blur-3xl rounded-full"></div>
                <img src="/images/bg-jagung2.jpg" alt="Company" className="relative z-10 w-full h-[700px] object-cover rounded-[40px] shadow-2xl" />
              </div>

              {/* CARD INFO */}
              <div className="bg-white shadow-2xl rounded-[40px] p-10 border border-yellow-100 relative overflow-hidden -mt-24 mx-6 z-20">
                {/* GLOW */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-200 blur-3xl opacity-30 rounded-full"></div>

                <div className="space-y-8 relative z-10">
                  {/* ITEM 1 */}
                  <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }} viewport={{ once: true }} className="flex items-start gap-5">
                    <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-500 text-2xl">
                      <FaBoxesStacked />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Quality Products</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">Menyediakan berbagai produk makanan berkualitas tinggi dengan standar distribusi terbaik.</p>
                    </div>
                  </motion.div>

                  {/* ITEM 3 */}
                  <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.7 }} viewport={{ once: true }} className="flex items-start gap-5">
                    <div className="bg-orange-100 p-4 rounded-2xl text-orange-500 text-2xl">
                      <FaAward />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Professional Service</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">Didukung tim profesional yang siap memberikan pelayanan terbaik kepada seluruh mitra bisnis.</p>
                    </div>
                  </motion.div>

                  {/* ITEM 4 */}
                  <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.7 }} viewport={{ once: true }} className="flex items-start gap-5">
                    <div className="bg-green-100 p-4 rounded-2xl text-green-500 text-2xl">
                      <FaHandshake />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Trusted Partnership</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">Menjalin kerja sama jangka panjang dengan berbagai mitra, retail, dan bisnis kuliner di Indonesia.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* VISI & MISI */}
          <div className="grid md:grid-cols-2 gap-10 mt-28">
            {/* VISI */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] p-10 shadow-xl border border-yellow-100">
              <div className="bg-yellow-100 text-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl">
                <FaEye />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mt-6">Visi</h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Menjadi distributor makanan terdepan dan terpercaya di Indonesia yang mendukung ketersediaan pangan berkualitas bagi retail, horeca, dan program gizi masyarakat secara berkelanjutan.
              </p>
            </motion.div>

            {/* MISI */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] p-10 shadow-xl border border-yellow-100">
              <div className="bg-green-100 text-green-500 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl">
                <FaBullseye />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mt-6">Misi</h3>
              <ul className="text-gray-600 mt-4 space-y-3 leading-relaxed">
                {misiList.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-yellow-500 font-black">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
