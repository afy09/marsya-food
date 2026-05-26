import { motion } from "framer-motion";

const Partnership = () => {
  return (
    <section id="partnership" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bg-jagung2.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-yellow-500/80 to-yellow-400/70"></div>

      {/* Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* TITLE */}
        <motion.h2 initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-black text-white">
          Kemitraan
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-white/95 text-base md:text-lg leading-relaxed mt-10 max-w-5xl mx-auto">
          PT Tiga Putra Permata membuka peluang kerja sama bagi distributor, reseller, UMKM, maupun pelaku bisnis kuliner untuk berkembang bersama melalui produk Jagung Manis Pipil Marsya yang berkualitas, higienis, dan terpercaya.
        </motion.p>

        {/* DESCRIPTION 2 */}
        <motion.p initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9 }} viewport={{ once: true }} className="text-white/90 text-base md:text-lg leading-relaxed mt-6 max-w-4xl mx-auto">
          Kami percaya bahwa kemitraan yang baik dapat menciptakan pertumbuhan bisnis yang berkelanjutan dan saling menguntungkan untuk masa depan yang lebih baik.
        </motion.p>

        {/* BUTTON */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.8 }} viewport={{ once: true }} className="mt-14">
          <a
            href={`https://wa.me/6285775099079?text=${encodeURIComponent(
              `Halo PT Tiga Putra Permata 👋

Saya tertarik untuk menjalin kerja sama kemitraan dengan produk Jagung Manis Pipil Marsya.

Nama :
Nama Usaha :
Domisili :
Jenis Kerja Sama :

Terima kasih 🙌`
            )}`}
            target="_blank"
            rel="noopener noreferrer">
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 transition-all duration-300 px-12 py-5 rounded-full font-bold text-base md:text-xl shadow-2xl hover:scale-105 backdrop-blur-md">
              Hubungi untuk Kerja Sama
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
