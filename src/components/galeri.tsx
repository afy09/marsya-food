import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./style.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const galleryData = {
  All: ["/images/galeri/galeri1.jpg", "/images/galeri/galeri2.jpg", "/images/galeri/galeri4.jpg", "/images/galeri/galeri5.jpg", "/images/galeri/galeri11.jpg"],

  Produk: ["/images/galeri/galeri1.jpg", "/images/galeri/galeri2.jpg", "/images/galeri/galeri4.jpg", "/images/galeri/galeri5.jpg", "/images/galeri/galeri6.jpg", "/images/galeri/galeri7.jpg"],

  Produksi: ["/images/galeri/galeri11.jpg", "/images/galeri/galeri8.jpg"],

  Pengiriman: ["/images/galeri/galeri9.jpg", "/images/galeri/galeri10.jpg"],
};

const tabs = ["All", "Produk", "Produksi", "Pengiriman"];

const GalleryProduct = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const [activeTab, setActiveTab] = useState("All");

  const products = galleryData[activeTab as keyof typeof galleryData];

  return (
    <section id="gallery" className="relative py-28 bg-linear-to-b from-white via-yellow-50 to-white overflow-hidden">
      {/* Blur */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-200/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold text-sm">Product Gallery</span>

          <h2 className="text-4xl md:text-5xl font-black mt-6 leading-tight">
            Galeri
            <span className="text-yellow-500"> Produk </span>
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mt-8">Dokumentasi produk, proses produksi, dan pengiriman PT Tiga Putra Permata dengan standar kualitas terbaik.</p>
        </motion.div>

        {/* TABS */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} viewport={{ once: true }} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab ? "bg-yellow-400 text-black shadow-lg scale-105" : "bg-white text-gray-600 border border-yellow-100 hover:bg-yellow-100"}`}>
              {tab}
            </button>
          ))}
        </motion.div>

        {/* SWIPER */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (_, className) {
              return `
                <span class="${className} custom-bullet"></span>
              `;
            },
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="pb-20 gallery-swiper">
          {products.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div layout onClick={() => setSelectedImage(index)} className="cursor-pointer group overflow-hidden rounded-4xl shadow-xl border border-yellow-100 bg-white">
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-87.5 object-cover group-hover:scale-110 transition-all duration-700" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* MODAL PREVIEW */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center px-6">
            {/* CLOSE */}
            <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 text-white text-3xl z-20">
              <FaTimes />
            </button>

            {/* LEFT */}
            <button onClick={() => setSelectedImage((prev) => (prev === 0 ? products.length - 1 : (prev ?? 0) - 1))} className="absolute left-6 text-white text-4xl z-20">
              <FaChevronLeft />
            </button>

            {/* IMAGE */}
            <motion.img
              key={selectedImage}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.3,
              }}
              src={products[selectedImage]}
              alt="Preview"
              className="max-w-full max-h-[85vh] rounded-3xl shadow-2xl"
            />

            {/* RIGHT */}
            <button onClick={() => setSelectedImage((prev) => (prev === products.length - 1 ? 0 : (prev ?? 0) + 1))} className="absolute right-6 text-white text-4xl z-20">
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryProduct;
