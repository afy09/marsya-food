import { motion } from "framer-motion";
// import { GiCorn } from "react-icons/gi";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-12">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/food2.jpg')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/70"></div>

      {/* BLUR */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* BADGE */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="bg-yellow-400/20 backdrop-blur-md border border-yellow-300/30 text-yellow-300 px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold tracking-wide">Distributor Makanan Berkualitas</span>
        </motion.div>

        {/* TITLE */}
        <motion.h1 initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1 }} className="mt-8 flex flex-col md:flex-row items-center justify-center text-center gap-2 md:gap-4 leading-tight">
          {/* TEXT */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="text-4xl md:text-6xl font-black text-white">
              PT Tiga
              <span className="text-yellow-400"> Putra Permata </span>
            </span>
          </div>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="text-white/80 text-base md:text-xl leading-relaxed mt-8 max-w-4xl mx-auto">
          PT Tiga Putra Permata merupakan perusahaan distributor makanan terpercaya yang menyediakan berbagai produk berkualitas tinggi untuk kebutuhan retail, horeca, dan bisnis kuliner.
        </motion.p>

        {/* BUTTON */}
        <motion.div initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }} className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">
          {/* CONTACT */}
          <a
            href={`https://wa.me/6285775099079?text=${encodeURIComponent(
              `Halo PT Tiga Putra Permata 👋

Saya ingin mendapatkan informasi mengenai produk dan kerja sama distribusi makanan.

Nama :
Perusahaan :
Kebutuhan Produk :

Terima kasih 🙌`
            )}`}
            target="_blank"
            rel="noopener noreferrer">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-3 md:py-5 rounded-full font-bold text-base md:text-lg shadow-2xl hover:scale-105 transition-all duration-300">Hubungi Kami</button>
          </a>

          {/* LEARN MORE */}
          <a href="#about">
            <button className="border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white hover:text-black text-white px-10 py-3 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105">
              Selengkapnya
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
