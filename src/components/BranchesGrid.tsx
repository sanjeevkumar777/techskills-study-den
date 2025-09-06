import { useState } from "react";
import BranchCard from "./BranchCard";
import SemesterView from "./SemesterView";
import { 
  Cpu, 
  Zap, 
  CircuitBoard, 
  Monitor, 
  Building, 
  Cog,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Branch {
  id: string;
  title: string;
  fullName: string;
  description: string;
  semesters: number;
  subjects: number;
  icon: React.ReactNode;
}

const branches: Branch[] = [
  {
    id: "cse",
    title: "CSE",
    fullName: "Computer Science Engineering",
    description: "Programming, algorithms, software development, and computer systems design.",
    semesters: 8,
    subjects: 45,
    icon: <Monitor />
  },
  {
    id: "ece",
    title: "ECE", 
    fullName: "Electronics & Communication",
    description: "Electronic circuits, communication systems, signal processing, and embedded systems.",
    semesters: 8,
    subjects: 42,
    icon: <CircuitBoard />
  },
  {
    id: "eee",
    title: "EEE",
    fullName: "Electrical & Electronics",
    description: "Power systems, electrical machines, control systems, and power electronics.",
    semesters: 8,
    subjects: 40,
    icon: <Zap />
  },
  {
    id: "it",
    title: "IT",
    fullName: "Information Technology", 
    description: "Software engineering, database systems, networking, and web technologies.",
    semesters: 8,
    subjects: 43,
    icon: <Cpu />
  },
  {
    id: "civil",
    title: "Civil",
    fullName: "Civil Engineering",
    description: "Structural engineering, construction management, and infrastructure development.",
    semesters: 8,
    subjects: 38,
    icon: <Building />
  },
  {
    id: "mech",
    title: "Mech",
    fullName: "Mechanical Engineering",
    description: "Mechanical systems, thermodynamics, manufacturing, and automotive engineering.",
    semesters: 8,
    subjects: 41,
    icon: <Cog />
  }
];

const BranchesGrid = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const handleBranchClick = (branchId: string) => {
    setSelectedBranch(branchId);
  };

  const handleBackClick = () => {
    setSelectedBranch(null);
  };

  if (selectedBranch) {
    const branch = branches.find(b => b.id === selectedBranch);
    return (
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Button 
              onClick={handleBackClick}
              variant="outline"
              className="mb-4 bg-card/50 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Branches
            </Button>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              {branch?.fullName}
            </h2>
            <p className="text-muted-foreground">
              Select a semester to access study materials
            </p>
          </div>
          <SemesterView branchId={selectedBranch} semesters={branch?.semesters || 8} />
        </div>
      </section>
    );
  }

  return (
    <section id="branches" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Choose Your Branch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your engineering branch to access comprehensive study materials, 
            notes, and previous year question papers organized by semester.
          </p>
        </div>

        {/* Branches grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div 
              key={branch.id} 
              className="animate-slide-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BranchCard
                title={branch.title}
                fullName={branch.fullName}
                description={branch.description}
                semesters={branch.semesters}
                subjects={branch.subjects}
                icon={branch.icon}
                onClick={() => handleBranchClick(branch.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesGrid;