import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, BookOpen, FileText } from "lucide-react";

interface BranchCardProps {
  title: string;
  fullName: string;
  description: string;
  semesters: number;
  subjects: number;
  icon: React.ReactNode;
  onClick: () => void;
}

const BranchCard = ({ title, fullName, description, semesters, subjects, icon, onClick }: BranchCardProps) => {
  return (
    <Card className="group cursor-pointer card-hover neon-border bg-card/80 backdrop-blur-sm overflow-hidden">
      <CardHeader className="relative">
        {/* Icon with glow effect */}
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
          <div className="text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground font-medium">
          {fullName}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        {/* Stats */}
        <div className="flex gap-3">
          <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground">
            <BookOpen className="w-3 h-3 mr-1" />
            {semesters} Semesters
          </Badge>
          <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground">
            <FileText className="w-3 h-3 mr-1" />
            {subjects}+ Subjects
          </Badge>
        </div>
        
        {/* Action button */}
        <Button 
          onClick={onClick}
          className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 group-hover:border-primary transition-all duration-300"
          variant="outline"
        >
          Browse Materials
          <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default BranchCard;