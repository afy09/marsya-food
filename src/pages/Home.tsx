import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Product from "../components/Product";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import HowToOrder from "../components/HowToOrder";
import Partnership from "../components/Mitra";
import GalleryProduct from "../components/galeri";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Benefits />
      <HowToOrder />
      <Partnership />
      <GalleryProduct />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Home;
