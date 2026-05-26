import { motion } from "framer-motion";
import { FaCheckCircle, FaSnowflake, FaAward, FaLeaf } from "react-icons/fa";

const Product = () => {
  const products = [
    {
      icon: <FaAward />,
      title: "Sertifikat Halal",
      desc: "Diproduksi secara higienis dan telah memenuhi standar kualitas pangan terpercaya.",
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      icon: <FaSnowflake />,
      title: "Fresh Frozen",
      desc: "Teknologi frozen modern menjaga rasa manis, tekstur, dan nutrisi tetap optimal.",
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      icon: <FaLeaf />,
      title: "Jagung Pilihan",
      desc: "Menggunakan jagung manis berkualitas premium dengan rasa alami dan segar.",
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      icon: <FaCheckCircle />,
      title: "Siap Masak",
      desc: "Praktis digunakan untuk berbagai kebutuhan rumah tangga maupun bisnis kuliner.",
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <section id="product" className="py-24 bg-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* IMAGE */}
        <motion.div initial={{ opacity: 0, x: -120, rotate: -5 }} whileInView={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.3 }} className="relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-yellow-300/30 blur-3xl rounded-full"></div>

          {/* Floating Decoration */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -top-6 -left-4 bg-white shadow-xl px-5 py-3 rounded-2xl z-20">
            <p className="font-bold text-yellow-500">100% Premium Corn</p>
          </motion.div>

          <motion.img
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            transition={{ duration: 0.4 }}
            src="/images/pipil.png"
            alt="Produk"
            className="relative z-10 w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div initial={{ opacity: 0, x: 120 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.3 }}>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">
            Product Excellence
          </motion.span>

          <motion.h2 initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black leading-tight mt-6">
            Kualitas
            <span className="text-yellow-500"> Premium </span>
            Untuk Semua
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} viewport={{ once: true }} className="text-gray-600 text-lg leading-relaxed mt-8">
            Jagung Manis Pipil Marsya diproduksi oleh
            <span className="font-semibold text-gray-800"> PT Tiga Putra Permata</span> dengan standar kualitas terbaik untuk menghadirkan produk jagung premium yang higienis, segar, dan siap digunakan kapan saja.
          </motion.p>

          {/* FEATURE LIST */}
          <div className="grid sm:grid-cols-2 gap-6 mt-12">
            {products.map((item, index) => (
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
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-white p-6 rounded-3xl shadow-lg border border-yellow-100 hover:shadow-2xl transition-all">
                <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${item.color}`}>{item.icon}</div>

                <h3 className="text-2xl font-bold mt-5">{item.title}</h3>

                <p className="text-gray-600 mt-3 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Product;
