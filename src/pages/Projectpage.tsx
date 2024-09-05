import { useRouter } from 'next/router';
import Header from '../components/Header';
import Description from '../components/Description';
import DownloadButton from '../components/Download';
import Features from '../components/Features';
import PrivacyPolicy from '../components/PrivacyPolicy';

// Mock data; replace with your data fetching logic
const projectData = [
  {
    id: 1,
    name: "IngreGenius",
    description: "Your AI-powered sous chef for personalized recipes, cooking assistance, and nutrition tracking—all in one intuitive app.",
    features: [
      "AI Powered Recipe Generation",
      "Tailored Recipes",
      "Ingredient Substitutions",
      "Meal & Nutrition Tracking",
      "Secure Authentication"
    ],
  },
  // Add other projects here
];

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectData.find(p => p.id === parseInt(id as string));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header name={project.name} />
      <main className="container mx-auto px-4">
        <Description text={project.description} imageSrc={''} />
        <DownloadButton />
        <Features features={project.features} />
        <PrivacyPolicy policy={undefined} />
      </main>
    </div>
  );
}
