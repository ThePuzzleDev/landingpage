import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Description from '../../components/Description';
import DownloadButton from '../../components/Download';
import Features from '../../components/Features';
import PrivacyPolicy from '../../components/PrivacyPolicy';
import './projects.css'

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
      "Secure Authentication"
    ],
    privacyPolicy: {
      lastUpdated: "24.07.2023",
      appName: "IngreGenius",
      description: "An innovative recipe app powered by Google’s Gemini API to provide personalized cooking experiences.",
      sections: [
        {
          title: "Information We Collect",
          content: [
            "When you download the app and create an account, we may collect personal information, including your name, email address, and other information that can be used to identify you.",
            "We collect information about your use of the Services, including the recipes you generate or save. We also gather information about the device you use, such as device type, operating system, IP address, and unique device identifiers."
          ]
        },
        {
          title: "How We Use Your Information",
          content: [
            "Provide, maintain, and improve our Services",
            "Communicate with you, including sending service-related announcements and promotional materials",
            "Protect the security and integrity of our Services",
            "Comply with legal obligations and resolve disputes"
          ]
        },
        {
          title: "Sharing Your Information",
          content: [
            "We may share your information with third-party service providers who help us provide, maintain, and improve our Services.",
            "We may share your information to comply with legal obligations, protect our rights, or prevent fraud and abuse.",
            "In the event of a merger, acquisition, or other business transfer, we may share your information with the acquiring or merged entity."
          ]
        },
        {
          title: "Your Rights and Choices",
          content: [
            "You can access, update, or delete your personal information by logging into your account or contacting us at thepuzzledev@gmail.com."
          ]
        },
        {
          title: "Data Retention and Security",
          content: [
            "We retain your personal information for as long as necessary to provide our Services and for other legitimate purposes, in accordance with our data retention policy. We maintain reasonable security measures to protect your information from unauthorized access, disclosure, or loss."
          ]
        },
        {
          title: "Changes to This Privacy Policy",
          content: [
            "We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our app. Your continued use of the Services after any changes constitutes your acceptance of the updated Privacy Policy."
          ]
        },
        {
          title: "Contact Us",
          content: [
            "The Puzzle Dev",
            "Ratnagiri, Maharashtra, India.",
            "thepuzzledev@gmail.com"
          ]
        }
      ]
    }
  },
  // other projects...
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
        {/* Pass the privacy policy data if it exists */}
        {project.privacyPolicy && <PrivacyPolicy policy={project.privacyPolicy} />}
      </main>
    </div>
  );
};

export default ProjectDetail;