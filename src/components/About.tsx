import { motion } from "framer-motion";
import { FaLeaf, FaSnowflake, FaAward, FaSeedling } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative py-28 bg-liner-to-b from-white via-yellow-50 to-white overflow-hidden">
      {/* Blur Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true, amount: 0.3 }}>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">
              Tentang PT Tiga Putra Permata
            </motion.span>

            <motion.h2 initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black leading-tight mt-6">
              Jagung Premium
              <span className="text-yellow-500"> Berkualitas </span>
              Tinggi
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} viewport={{ once: true }} className="text-gray-600 text-lg leading-relaxed mt-8">
              PT Tiga Putra Permata menghadirkan produk
              <span className="font-semibold text-gray-800"> Jagung Manis Pipil Marsya</span> yang diproses dari jagung pilihan berkualitas premium dengan standar higienitas terbaik.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} viewport={{ once: true }} className="text-gray-600 text-lg leading-relaxed mt-6">
              Dengan teknologi penyimpanan modern dan proses frozen food berkualitas, produk kami mampu menjaga rasa manis alami, nutrisi, kesegaran, dan kualitas jagung agar tetap terbaik sampai ke tangan konsumen.
            </motion.p>

            {/* STATS */}
            <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.9 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white shadow-xl rounded-3xl p-6 border border-yellow-100 hover:-translate-y-2 transition-all">
                <h3 className="text-3xl font-black text-yellow-500">100%</h3>
                <p className="text-gray-600 mt-2">Jagung Pilihan</p>
              </div>

              <div className="bg-white shadow-xl rounded-3xl p-6 border border-yellow-100 hover:-translate-y-2 transition-all">
                <h3 className="text-3xl  font-black text-green-500">Fresh</h3>
                <p className="text-gray-600 mt-2">Frozen Food</p>
              </div>

              <div className="bg-white shadow-xl rounded-3xl p-6 border border-yellow-100 hover:-translate-y-2 transition-all">
                <h3 className="text-3xl font-black text-orange-500">Halal</h3>
                <p className="text-gray-600 mt-2">Bersertifikat</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.3 }} className="relative">
            <div className="bg-white shadow-2xl rounded-[40px] p-10 border border-yellow-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-200 blur-3xl opacity-30 rounded-full"></div>

              <div className="space-y-8 relative z-10">
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.7 }} viewport={{ once: true }} className="flex items-start gap-5">
                  <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-500 text-2xl">
                    <FaLeaf />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">Natural Quality</h3>

                    <p className="text-gray-600 mt-2 leading-relaxed">Menggunakan jagung manis pilihan dengan kualitas terbaik untuk menghasilkan rasa alami dan lezat.</p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.7 }} viewport={{ once: true }} className="flex items-start gap-5">
                  <div className="bg-blue-100 p-4 rounded-2xl text-blue-500 text-2xl">
                    <FaSnowflake />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">Fresh Frozen</h3>

                    <p className="text-gray-600 mt-2 leading-relaxed">Teknologi penyimpanan modern menjaga kesegaran, tekstur, dan nutrisi tetap optimal.</p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.7 }} viewport={{ once: true }} className="flex items-start gap-5">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-500 text-2xl">
                    <FaAward />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">Trusted Product</h3>

                    <p className="text-gray-600 mt-2 leading-relaxed">Diproduksi oleh PT Tiga Putra Permata dengan komitmen menghadirkan produk pangan berkualitas tinggi.</p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.7 }} viewport={{ once: true }} className="flex items-start gap-5">
                  <div className="bg-green-100 p-4 rounded-2xl text-green-500 text-2xl">
                    <FaSeedling />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">Healthy Lifestyle</h3>

                    <p className="text-gray-600 mt-2 leading-relaxed">Cocok untuk berbagai kebutuhan rumah tangga, UMKM, hingga bisnis kuliner modern.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
