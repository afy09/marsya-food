import { motion } from "framer-motion";
import { FaTruckFast, FaSnowflake } from "react-icons/fa6";

const OurClient = () => {
  const clients = [
    {
      title: "MBG Distribution",
      icon: <FaTruckFast />,
      total: "500+",
      subtitle: "Distribusi Aktif",
      image: "/images/client/bgn.png",
      desc: "PT Tiga Putra Permata telah dipercaya dalam mendukung distribusi makanan dan kebutuhan pangan ke berbagai mitra dan wilayah distribusi secara profesional.",
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
    {
      title: "Frozen Food Partner",
      icon: <FaSnowflake />,
      total: "1000+",
      subtitle: "Produk Frozen Food",
      image: "/images/client/frozenfood.jpg",
      desc: "Menyediakan berbagai produk frozen food berkualitas tinggi untuk kebutuhan retail, horeca, supermarket, dan bisnis kuliner modern.",
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
  ];

  return (
    <section id="client" className="relative py-28 bg-yellow-50 overflow-hidden">
      {/* BLUR */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">Our Client</span>

          <h2 className="text-3xl md:text-5xl font-black leading-tight mt-6">
            Partner &<span className="text-yellow-500"> Distribution </span>
            Network
          </h2>

          <p className="text-gray-600 text-sm md:text-lg leading-relaxed mt-6">
            PT Tiga Putra Permata terus berkembang sebagai perusahaan distribusi makanan terpercaya dengan jaringan partner dan distribusi yang luas di berbagai sektor industri pangan.
          </p>
        </motion.div>

        {/* CLIENT CARD */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {clients.map((item, index) => (
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
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="relative overflow-hidden bg-white rounded-[40px] border border-yellow-100 shadow-xl group hover:shadow-2xl transition-all duration-500">
              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

                {/* ICON */}
                <div className={`${item.bg} ${item.color} absolute top-6 left-6 w-18 h-18 rounded-3xl flex items-center justify-center text-3xl shadow-lg`}>{item.icon}</div>

                {/* TOTAL */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-end gap-3">
                    <h3 className="text-4xl md:text-5xl font-black leading-none">{item.total}</h3>

                    <span className="text-lg font-semibold mb-1">{item.subtitle}</span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-gray-800">{item.title}</h3>

                <p className="text-gray-600 leading-relaxed mt-5 text-sm md:text-lg">{item.desc}</p>

                {/* LINE */}
                <div className="w-20 h-1.5 bg-yellow-400 rounded-full mt-8"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClient;
