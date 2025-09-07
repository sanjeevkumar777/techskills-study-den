import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowDown, BookOpen, Download } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToContent = () => {
    document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">TechSkills</span>
            <br />
            Study Den
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Your complete resource for B.Tech notes, previous papers, and study materials.
            <br />
            <span className="text-primary font-semibold">All branches • All semesters • All subjects</span>
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full neon-border">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>Comprehensive Notes</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full neon-border">
              <Download className="w-4 h-4 text-primary" />
              <span>Previous Papers</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full neon-border">
              <span className="w-4 h-4 text-primary font-bold">6+</span>
              <span>Engineering Branches</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContent}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl neon-glow transition-all duration-300 hover:scale-105"
              >
                Explore Study Materials
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                onClick={() => navigate('/submit')}
                variant="outline"
                size="lg" 
                className="px-8 py-6 text-lg font-semibold rounded-xl border-primary/30 hover:bg-primary/10 transition-all duration-300"
              >
                Submit Materials
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Join thousands of B.Tech students in their academic journey
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary opacity-70" />
      </div>
    </section>
  );
};

export default Hero;