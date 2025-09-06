import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, BookOpen, Calendar } from "lucide-react";

interface SemesterViewProps {
  branchId: string;
  semesters: number;
}

// Sample subjects data for different branches
const semesterSubjects: { [key: string]: { [semester: number]: string[] } } = {
  cse: {
    1: ["Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Programming for Problem Solving", "Engineering Graphics"],
    2: ["Engineering Mathematics-II", "Engineering Physics-II", "Engineering Chemistry-II", "Environmental Science", "Data Structures"],
    3: ["Engineering Mathematics-III", "Digital Logic Design", "Computer Organization", "Discrete Mathematics", "Object Oriented Programming"],
    4: ["Engineering Mathematics-IV", "Operating Systems", "Database Management Systems", "Computer Networks", "Software Engineering"],
    5: ["Theory of Computation", "Machine Learning", "Web Technologies", "Computer Graphics", "Elective-I"],
    6: ["Compiler Design", "Artificial Intelligence", "Distributed Systems", "Information Security", "Elective-II"],
    7: ["Mobile Computing", "Big Data Analytics", "Cloud Computing", "Blockchain Technology", "Project Work-I"],
    8: ["Internet of Things", "Deep Learning", "DevOps", "Capstone Project", "Industrial Training"]
  },
  ece: {
    1: ["Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Basic Electrical Engineering", "Engineering Graphics"],
    2: ["Engineering Mathematics-II", "Engineering Physics-II", "Circuit Theory", "Electronic Devices", "Signals and Systems"],
    3: ["Engineering Mathematics-III", "Analog Electronics", "Digital Electronics", "Network Theory", "Electromagnetic Theory"],
    4: ["Control Systems", "Communication Systems", "VLSI Design", "Microprocessors", "Antenna Theory"],
    5: ["Digital Signal Processing", "Embedded Systems", "Optical Communication", "RF Engineering", "Elective-I"],
    6: ["Satellite Communication", "Radar Systems", "Digital Communication", "Power Electronics", "Elective-II"],
    7: ["Wireless Communication", "Biomedical Electronics", "Advanced VLSI", "Project Work-I", "Elective-III"],
    8: ["5G Technology", "IoT Systems", "Machine Learning for ECE", "Capstone Project", "Industrial Training"]
  },
  // Add other branches similarly...
  eee: {
    1: ["Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Basic Electrical Engineering", "Engineering Graphics"],
    2: ["Engineering Mathematics-II", "Circuit Analysis", "Electrical Machines-I", "Electronic Devices", "Network Theory"],
    3: ["Power Systems-I", "Electrical Machines-II", "Control Systems", "Power Electronics", "Electrical Measurements"],
    4: ["Power Systems-II", "Electrical Drives", "Microprocessors", "Renewable Energy", "High Voltage Engineering"],
    5: ["Power System Protection", "Electric Drives Control", "Smart Grid", "Electric Vehicles", "Elective-I"],
    6: ["Power Quality", "HVDC Transmission", "Energy Management", "Industrial Automation", "Elective-II"],
    7: ["Renewable Energy Integration", "Electric Vehicle Technology", "Smart Grid Technologies", "Project Work-I", "Elective-III"],
    8: ["Sustainable Energy", "Advanced Power Electronics", "Grid Integration", "Capstone Project", "Industrial Training"]
  },
  it: {
    1: ["Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Programming Fundamentals", "Engineering Graphics"],
    2: ["Engineering Mathematics-II", "Data Structures", "Database Systems", "Web Programming", "Computer Networks"],
    3: ["Software Engineering", "Object Oriented Programming", "Operating Systems", "System Analysis", "IT Infrastructure"],
    4: ["Web Technologies", "Mobile App Development", "Network Security", "Cloud Computing", "Agile Methodology"],
    5: ["Big Data Analytics", "Machine Learning", "DevOps", "Blockchain", "Elective-I"],
    6: ["AI and ML", "Cyber Security", "Full Stack Development", "Project Management", "Elective-II"],
    7: ["Advanced Web Technologies", "Data Science", "IoT Applications", "Project Work-I", "Elective-III"],
    8: ["Emerging Technologies", "Industry 4.0", "Digital Transformation", "Capstone Project", "Industrial Training"]
  },
  civil: {
    1: ["Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Engineering Mechanics", "Engineering Graphics"],
    2: ["Engineering Mathematics-II", "Strength of Materials", "Fluid Mechanics", "Surveying", "Building Materials"],
    3: ["Structural Analysis", "Geotechnical Engineering", "Environmental Engineering", "Transportation Engineering", "Concrete Technology"],
    4: ["Design of Structures", "Foundation Engineering", "Water Resources", "Highway Engineering", "Construction Management"],
    5: ["Advanced Structural Design", "Earthquake Engineering", "Waste Water Treatment", "Traffic Engineering", "Elective-I"],
    6: ["Pre-stressed Concrete", "Rock Mechanics", "Hydrology", "Pavement Design", "Elective-II"],
    7: ["Advanced Foundation Design", "Structural Dynamics", "Water Treatment", "Project Work-I", "Elective-III"],
    8: ["Green Building Technology", "Smart Cities", "Sustainable Construction", "Capstone Project", "Industrial Training"]
  },
  mech: {
    1: ["Engineering Mathematics-I", "Engineering Physics", "Engineering Chemistry", "Engineering Mechanics", "Engineering Graphics"],
    2: ["Engineering Mathematics-II", "Strength of Materials", "Thermodynamics", "Manufacturing Processes", "Material Science"],
    3: ["Fluid Mechanics", "Heat Transfer", "Machine Design", "Automotive Engineering", "Industrial Engineering"],
    4: ["Internal Combustion Engines", "Refrigeration", "Production Technology", "Dynamics of Machines", "Control Engineering"],
    5: ["Advanced Manufacturing", "CAD/CAM", "Finite Element Analysis", "Robotics", "Elective-I"],
    6: ["Automobile Engineering", "Renewable Energy Systems", "Advanced Materials", "Mechatronics", "Elective-II"],
    7: ["Industry 4.0", "Additive Manufacturing", "Electric Vehicles", "Project Work-I", "Elective-III"],
    8: ["Sustainable Manufacturing", "AI in Manufacturing", "Advanced Robotics", "Capstone Project", "Industrial Training"]
  }
};

const SemesterView = ({ branchId, semesters }: SemesterViewProps) => {
  const handleDownload = (semester: number, type: 'notes' | 'papers') => {
    // In a real app, this would trigger actual downloads
    alert(`Downloading ${type} for Semester ${semester}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array.from({ length: semesters }, (_, index) => {
        const semesterNumber = index + 1;
        const subjects = semesterSubjects[branchId]?.[semesterNumber] || [];
        
        return (
          <Card key={semesterNumber} className="card-hover neon-border bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Semester {semesterNumber}
                  </CardTitle>
                  <CardDescription>
                    {subjects.length} subjects available
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  Year {Math.ceil(semesterNumber / 2)}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Subjects list */}
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {subjects.map((subject, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="truncate">{subject}</span>
                  </div>
                ))}
              </div>
              
              {/* Download buttons */}
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button
                  onClick={() => handleDownload(semesterNumber, 'notes')}
                  className="flex-1 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30"
                  variant="outline"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Notes
                </Button>
                <Button
                  onClick={() => handleDownload(semesterNumber, 'papers')}
                  className="flex-1 bg-secondary/50 hover:bg-secondary text-secondary-foreground"
                  variant="outline"
                  size="sm"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Papers
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SemesterView;