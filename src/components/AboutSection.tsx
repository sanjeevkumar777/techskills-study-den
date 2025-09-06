import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, Linkedin, Mail, ExternalLink, GraduationCap, BookOpen } from "lucide-react";

const AboutSection = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-card/30 to-background">
      <div className="container mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the creator behind this educational platform
          </p>
        </div>

        <Card className="neon-border bg-card/80 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Profile image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full overflow-hidden neon-glow">
                    <img 
                      src="/lovable-uploads/c9dcbaff-3dee-4035-989d-2acb168e0841.png"
                      alt="Sanjeev Kumar Ayinala"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-primary/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Name and title */}
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Sanjeev Kumar Ayinala
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      <GraduationCap className="w-3 h-3 mr-1" />
                      B.Tech CSE Student
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Python Programmer
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      AI/ML & Web Dev Enthusiast
                    </Badge>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Tech Content Creator
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-center lg:text-left">
                  I'm Sanjeev Kumar Ayinala, a B.Tech CSE student, Python programmer, and content creator passionate about making technology simple and accessible.
                  <br /><br />
                  I run Sanjeev_TechSkills (YouTube) where I share Python tutorials, tech guides, and student motivation in Telugu + English. My focus areas include Python, AI/ML, Data Science, and Full-Stack Web Development.
                  <br /><br />
                  I strongly believe skills matter more than marks and aim to build a career at the intersection of technology, education, and innovation.
                </p>

                {/* Social links */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button
                    onClick={() => openLink('https://youtube.com/@sanjeev_techskills?si=C6EkkE_pX4piLnNA')}
                    className="bg-red-600 hover:bg-red-700 text-white neon-glow"
                    size="sm"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    Sanjeev_TechSkills
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                  
                  <Button
                    onClick={() => openLink('https://www.linkedin.com/in/sanjeevkumar77?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    size="sm"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                </div>

                {/* Mission statement */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    "To democratize quality engineering education by providing free, comprehensive, 
                    and well-organized study materials for all B.Tech students, regardless of their background or resources."
                  </p>
                </div>
              </div>
            </div>

            {/* Stats or achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Branches Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">Study Materials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Previous Papers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Students Helped</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;