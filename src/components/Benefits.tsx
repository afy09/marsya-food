import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaLeaf, FaSnowflake, FaHeart, FaAward, FaBoxesStacked } from "react-icons/fa6";

const Benefits = () => {
  const data = [
    {
      icon: <FaBoxesStacked />,
      title: "Complete Product Supply",
      desc: "Menyediakan berbagai produk frozen food dan bahan pangan berkualitas untuk kebutuhan retail, horeca, dan bisnis kuliner.",
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      icon: <FaSnowflake />,
      title: "Frozen Distribution",
      desc: "Didukung sistem distribusi dan penyimpanan modern untuk menjaga kualitas dan kesegaran produk tetap optimal.",
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      icon: <FaHeart />,
      title: "Customer Satisfaction",
      desc: "Berkomitmen memberikan pelayanan terbaik dan menjaga kepuasan pelanggan dalam setiap distribusi produk.",
      color: "text-red-500",
      bg: "bg-red-100",
    },
    {
      icon: <FaAward />,
      title: "Premium Quality",
      desc: "Seluruh produk dipilih dan didistribusikan dengan standar kualitas terbaik untuk memenuhi kebutuhan pasar modern.",
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      icon: <FaLeaf />,
      title: "Fresh & Hygienic",
      desc: "Produk diproses dan disimpan secara higienis untuk menjaga kualitas, rasa, dan kesegaran tetap terjamin.",
      color: "text-emerald-500",
      bg: "bg-emerald-100",
    },
    {
      icon: <FaRegCheckCircle />,
      title: "Trusted Company",
      desc: "PT Tiga Putra Permata dipercaya sebagai partner distribusi makanan untuk berbagai kebutuhan bisnis dan industri kuliner.",
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
  ];

  return (
    <section id="benefits" className="relative py-28 bg-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADING */}
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true, amount: 0.3 }} className="text-center mb-20">
          <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">Why Choose Us</span>

          <h2 className="text-4xl md:text-5xl font-black mt-6 leading-tight">
            Kenapa
            <span className="text-yellow-500"> Memilih </span>
            Kami?
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mt-8">
            PT Tiga Putra Permata hadir sebagai perusahaan distribusi makanan terpercaya dengan komitmen menghadirkan produk berkualitas, pelayanan profesional, dan sistem distribusi modern untuk memenuhi kebutuhan bisnis Anda.
          </p>
        </motion.div>

        {/* CARD */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
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
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative bg-white p-10 rounded-4xl border border-yellow-100 shadow-lg hover:shadow-2xl transition-all overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100 blur-3xl opacity-0 group-hover:opacity-100 transition-all"></div>

              {/* Icon */}
              <div className={`${item.bg} ${item.color} w-20 h-20 rounded-3xl flex items-center justify-center text-3xl relative z-10`}>{item.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-black mt-8 relative z-10">{item.title}</h3>

              {/* Desc */}
              <p className="text-gray-600 mt-5 leading-relaxed text-base relative z-10">{item.desc}</p>

              {/* Bottom Line */}
              <div className="w-16 h-1 bg-yellow-400 rounded-full mt-8"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
