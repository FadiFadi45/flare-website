import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Productions from "@/components/Productions";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Productions />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
