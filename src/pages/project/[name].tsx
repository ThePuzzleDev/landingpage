import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Description from '../../components/Description';
import DownloadButton from '../../components/Download';
import Features from '../../components/Features';
import PrivacyPolicy from '../../components/PrivacyPolicy';

// Mock data; replace with your data fetching logic or use getStaticProps
const projectData = [
  {
    name: "IngreGenius",
    description: "Your AI-powered sous chef for personalized recipes, cooking assistance, and nutrition tracking—all in one intuitive app.",
    features: [
      "AI Powered Recipe Generation",
      "Tailored Recipes",
      "Ingredient Substitutions",
      "Meal & Nutrition Tracking",
      "Secure Authentication",
    ],
  },
  {
    name: "EcoTrack",
    description: "Track and reduce your carbon footprint with personalized recommendations.",
    features: [
      "Carbon Footprint Tracking",
      "Eco-friendly Tips",
      "Local Sustainability Initiatives",
    ],
  },
  // Add more projects here
];

const ProjectDetail = () => {
  const router = useRouter();
  const { name } = router.query; // Get the project name from the URL

  const project = projectData.find(p => p.name.toLowerCase() === (name as string)?.toLowerCase());

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header name={project.name} />
      <main className="container mx-auto px-4">
        <Description text={project.description} />
        <DownloadButton />
        <Features features={project.features} />
        <PrivacyPolicy />
      </main>
    </div>
  );
};

export default ProjectDetail;
