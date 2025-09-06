import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Youtube, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-card/50 border-t border-border backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">B.Tech Study Hub</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your comprehensive resource for B.Tech notes, previous papers, and study materials. 
              Created with passion to help students excel in their engineering journey.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Sanjeev Kumar</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#branches" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Engineering Branches
              </a>
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <button 
                onClick={() => document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Study Materials
              </button>
            </nav>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect With Me</h4>
            <div className="space-y-3">
              <Button
                onClick={() => openLink('https://youtube.com/@sanjeev_techskills?si=C6EkkE_pX4piLnNA')}
                variant="outline"
                size="sm"
                className="w-full justify-start bg-card/50 border-primary/30 hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="w-4 h-4 mr-2 text-red-500" />
                Sanjeev_TechSkills
                <ExternalLink className="w-3 h-3 ml-auto" />
              </Button>
              
              <Button
                onClick={() => openLink('https://www.linkedin.com/in/sanjeevkumar77?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}
                variant="outline"
                size="sm"
                className="w-full justify-start bg-card/50 border-primary/30 hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="w-4 h-4 mr-2 text-blue-500" />
                LinkedIn Profile
                <ExternalLink className="w-3 h-3 ml-auto" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Follow for latest updates and educational content
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 B.Tech Study Hub. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Built for students, by a student</span>
            <span>•</span>
            <span>Free educational resources</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;