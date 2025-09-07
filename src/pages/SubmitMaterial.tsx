import SubmissionForm from "@/components/SubmissionForm";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SubmitMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 gradient-text">
              Share Your Study Materials
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help fellow students by sharing your notes, PDFs, and study materials. 
              All submissions are reviewed before being published on the website.
            </p>
          </div>
        </div>
        
        <SubmissionForm />
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            By submitting materials, you agree that they will be freely available to all students.
            We review all submissions to ensure quality and relevance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitMaterial;