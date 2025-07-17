import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Transport from "@/components/Transport";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Services />
      <Transport />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;