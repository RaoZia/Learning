import "./App.css";
import Categories from "./components/Categories";
import ClientTestimonial from "./components/ClientTestimonial";
import Deals from "./components/Deals";
import FeaturedProducts from "./components/FeaturedProducts";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HotDeals from "./components/HotDeals";
import LatestNews from "./components/LatestNews";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SocialSection from "./components/SocialSection";
import SubscribeSection from "./components/SubscribeSection";
import SummerSection from "./components/SummerSection";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <Features />
      <Categories />
      <Products />
      <Deals />
      <HotDeals />
      <SummerSection />
      <FeaturedProducts />
      <LatestNews />
      <ClientTestimonial />
      <SocialSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default App;
