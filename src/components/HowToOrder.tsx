import { motion } from "framer-motion";
import { FaWhatsapp, FaShoppingBasket, FaMoneyCheckAlt, FaTruck } from "react-icons/fa";

const HowToOrder = () => {
  const steps = [
    {
      icon: <FaWhatsapp />,
      title: "Chat Admin",
      desc: "Hubungi admin kami melalui WhatsApp untuk konsultasi dan pemesanan produk.",
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      icon: <FaShoppingBasket />,
      title: "Pilih Produk",
      desc: "Pilih produk Jagung Manis Pipil Marsya sesuai kebutuhan Anda.",
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Lakukan Pembayaran",
      desc: "Transfer pembayaran sesuai total pesanan yang telah dikonfirmasi admin.",
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      icon: <FaTruck />,
      title: "Produk Dikirim",
      desc: "Pesanan akan segera diproses dan dikirim ke alamat tujuan Anda.",
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
  ];

  return (
    <section id="how-to-order" className="relative py-28 bg-linear-to-b from-yellow-50 via-white to-yellow-50 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="text-center mb-24">
          <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">Easy Ordering Process</span>

          <h2 className="text-4xl md:text-5xl font-black mt-6 leading-tight">
            Cara
            <span className="text-yellow-500"> Pemesanan </span>
            Produk
          </h2>

          <p className="text-gray-600 text-base max-w-3xl mx-auto mt-8 leading-relaxed">Proses pemesanan Jagung Manis Pipil Marsya sangat mudah, cepat, dan praktis untuk kebutuhan rumah tangga maupun bisnis kuliner Anda.</p>
        </motion.div>

        {/* STEP LINE */}
        <div className="hidden lg:block absolute top-[57%] left-1/2 -translate-x-1/2 w-[70%] h-2 bg-yellow-100 rounded-full"></div>

        {/* STEPS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="relative bg-white p-10 rounded-4xl border border-yellow-100 shadow-xl hover:shadow-2xl transition-all text-center overflow-hidden group">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100 blur-3xl opacity-0 group-hover:opacity-100 transition-all"></div>

              {/* STEP NUMBER */}
              <div className="absolute top-5 right-5 text-6xl font-black text-yellow-100">0{index + 1}</div>

              {/* ICON */}
              <div className={`${item.bg} ${item.color} w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-4xl md:text-5xl relative z-10`}>{item.icon}</div>

              {/* TITLE */}
              <h3 className="text-2xl  font-black mt-8 relative z-10">{item.title}</h3>

              {/* DESC */}
              <p className="text-gray-600 leading-relaxed mt-5 text-base  relative z-10">{item.desc}</p>

              {/* BOTTOM DOT */}
              <div className="w-14 h-1 bg-yellow-400 rounded-full mx-auto mt-8"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9 }} viewport={{ once: true }} className="text-center mt-16">
          <a
            href={`https://wa.me/6285775099079?text=${encodeURIComponent(
              `Halo Admin Marsya 👋

Saya ingin memesan produk Jagung Manis Pipil Marsya.

Nama :
Alamat :
Produk :
Jumlah :
Catatan :

Terima kasih 🙌`
            )}`}
            target="_blank"
            rel="noopener noreferrer">
            <button className="bg-yellow-400 hover:bg-yellow-500 transition-all px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105">Order Sekarang</button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToOrder;
