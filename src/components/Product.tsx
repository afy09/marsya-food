import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaSnowflake, FaCheckCircle } from "react-icons/fa";

const Product = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = [
    {
      title: "Beef",
      image: "/images/produk/beef.png",
      desc: "Premium frozen beef dengan kualitas terbaik untuk kebutuhan horeca dan retail.",
      detail: "Produk beef premium dengan kualitas terbaik, diproses secara higienis dan disimpan menggunakan teknologi frozen modern untuk menjaga kesegaran serta kualitas daging.",
    },
    {
      title: "Chicken",
      image: "/images/produk/ayam.png",
      desc: "Produk ayam frozen higienis dan segar dengan standar distribusi terpercaya.",
      detail: "Ayam frozen berkualitas tinggi dengan proses distribusi modern, cocok untuk kebutuhan restoran, hotel, catering, dan retail.",
    },
    {
      title: "French Fries",
      image: "/images/produk/kentang.png",
      desc: "Kentang goreng frozen berkualitas premium, praktis dan siap saji.",
      detail: "French fries premium dengan tekstur renyah di luar dan lembut di dalam, cocok untuk berbagai kebutuhan kuliner modern.",
    },
    {
      title: "Fruits & Vegetables",
      image: "/images/produk/buah.png",
      desc: "Buah dan sayuran segar pilihan dengan kualitas terbaik dan nutrisi terjaga.",
      detail: "Buah dan sayuran pilihan dengan kualitas premium, diproses dan disimpan secara higienis untuk menjaga kesegaran alami.",
    },
    {
      title: "Seafood",
      image: "/images/produk/seafood.png",
      desc: "Seafood frozen berkualitas tinggi dengan kesegaran yang tetap terjaga.",
      detail: "Produk seafood premium dengan kualitas terbaik dan sistem penyimpanan modern untuk menjaga rasa dan kesegaran.",
    },
  ];

  return (
    <section id="product" className="relative py-28 bg-yellow-50 overflow-hidden">
      {/* BLUR */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">Our Products</span>

          <h2 className="text-3xl md:text-5xl font-black leading-tight mt-6">
            Produk Distribusi
            <span className="text-yellow-500"> Berkualitas </span>
            Premium
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-6">PT Tiga Putra Permata menyediakan berbagai produk makanan frozen dan bahan pangan berkualitas tinggi untuk kebutuhan retail, horeca, dan bisnis kuliner modern.</p>
        </motion.div>

        {/* PRODUCT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
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
                delay: index * 0.15,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-yellow-100 group hover:shadow-2xl transition-all duration-500">
              {/* IMAGE */}
              <div className="overflow-hidden h-64 bg-yellow-50">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <h3 className="text-2xl font-black text-gray-800">{item.title}</h3>

                <p className="text-gray-600 leading-relaxed mt-4">{item.desc}</p>

                {/* BUTTON */}
                <button onClick={() => setSelectedProduct(item)} className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  View Product
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                y: 50,
              }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-[40px] overflow-hidden max-w-5xl w-full shadow-2xl relative">
              {/* CLOSE BUTTON */}
              <button onClick={() => setSelectedProduct(null)} className="absolute top-5 right-5 z-20 bg-black/70 hover:bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all">
                <IoClose />
              </button>

              <div className="grid lg:grid-cols-2 max-h-[90vh] overflow-y-auto">
                {/* IMAGE */}
                <div className="bg-yellow-50 flex items-center justify-center p-6 md:p-10 relative overflow-hidden min-h-[250px] md:min-h-full">
                  <div className="absolute w-72 h-72 bg-yellow-300/30 blur-3xl rounded-full"></div>

                  <motion.img
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="relative z-10 w-full max-w-[220px] md:max-w-md drop-shadow-2xl object-contain"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-14 flex flex-col justify-center">
                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-xs md:text-sm font-semibold w-fit">Premium Product</span>

                  <h2 className="text-3xl md:text-5xl font-black mt-5 leading-tight">{selectedProduct.title}</h2>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-5">{selectedProduct.detail}</p>

                  {/* FEATURES */}
                  <div className="space-y-4 mt-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 text-blue-500 min-w-[48px] h-12 rounded-2xl flex items-center justify-center text-xl">
                        <FaSnowflake />
                      </div>

                      <div>
                        <h4 className="font-bold text-base md:text-lg">Frozen Quality</h4>

                        <p className="text-gray-500 text-sm leading-relaxed">Kesegaran produk tetap terjaga optimal.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 text-green-500 min-w-[48px] h-12 rounded-2xl flex items-center justify-center text-xl">
                        <FaCheckCircle />
                      </div>

                      <div>
                        <h4 className="font-bold text-base md:text-lg">Quality Guaranteed</h4>

                        <p className="text-gray-500 text-sm leading-relaxed">Produk berkualitas tinggi dan terpercaya.</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  {/* <a
                    href={`https://wa.me/6285775099079?text=${encodeURIComponent(
                      `Halo PT Tiga Putra Permata 👋

Saya tertarik dengan produk ${selectedProduct.title}.

Boleh minta informasi lebih lanjut?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-full">
                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 hover:scale-[1.02]">Hubungi Kami</button>
                  </a> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Product;
