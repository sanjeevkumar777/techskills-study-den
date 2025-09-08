import Hero from "@/components/Hero";
import BranchesGrid from "@/components/BranchesGrid";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index component rendering");
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <BranchesGrid />
      <div id="about">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
