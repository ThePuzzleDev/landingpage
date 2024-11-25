// ProjectDetail.tsx
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Description from '../../components/Description';
import DownloadButton from '../../components/Download';
import Features from '../../components/Features';
import PrivacyPolicy from '../../components/PrivacyPolicy';
import './projects.css';
import { Reviews } from '@/components/AppScreenshots';

// Mock data; replace with your data fetching logic or use getStaticProps
const projectData = [
  {
    name: "IngreGenius",
    icon: "/images/IngreGenius.png",
    description: "Your AI-powered sous chef for personalized recipes, cooking assistance, and nutrition tracking—all in one intuitive app.",
    downloadLink: "https://apps.apple.com/in/app/ingregenius/id6670257708",
    downloadText: "Download Now",
    features: [
      "AI Powered Recipe Generation",
      "Tailored Recipes",
      "Ingredient Substitutions",
      "Meal & Nutrition Tracking",
      "Secure Authentication"
    ],
    screenshots: [
     '/images/Screenshots/1.png',
  '/images/Screenshots/2.png',
  '/images/Screenshots/3.png',
  '/images/Screenshots/4.png',
  '/images/Screenshots/5.png',
  '/images/Screenshots/6.png',
    ],
    privacyPolicy: {
      lastUpdated: "07.09.2024",
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
  {
    name: "Immersive Edu",
    icon: "/images/ImmersiveEdu/appicon.png",
    description: "ImmersiveEdu revolutionizes learning with augmented reality, turning complex topics into interactive, engaging experiences. Perfect for curious minds exploring innovative and user-friendly education.",
    downloadLink: "",
    downloadText: "Coming Soon",
    features: [
      "AR-Powered Learning",
      "Interactive Concept Mastery",
      "Smart Note-Taking",
      "Engaging Quizzes",
    ],
    screenshots: [
      '/images/ImmersiveEdu/1.png',
   '/images/ImmersiveEdu/2.png',
   '/images/ImmersiveEdu/3.png',
   '/images/ImmersiveEdu/4.png',
   '/images/ImmersiveEdu/5.png',
   '/images/ImmersiveEdu/6.png',
     ],
    privacyPolicy: {
      lastUpdated: "21.11.2024",
      appName: "Immersive Edu",
      description: "ImmersiveEdu revolutionizes learning with augmented reality, turning complex topics into interactive, engaging experiences. Perfect for curious minds exploring innovative and user-friendly educatio.",
      sections: [
        {
          title: "Information We Collect",
          content: [
            "When you create an account in ImmersiveEdu, we collect your email address, authentication method, and profile photo URL (if provided).",
             "We also store user-generated content, including notes, progress data, timestamps of note creation and modification, and customization preferences for notes such as color, font size, and styling."
          ]
        },
        {
          title: "How We Use Your Information",
          content: [
            "We use the collected information to:",
            "- Authenticate and manage user accounts",
            "- Provide and personalise educational services",
            "- Save and sync user-created notes",
            "- Track and manage user learning progress",
            "- Improve app functionality and user experience",
            "- Communicate service-related announcements",
            "- Ensure app security and prevent unauthorised access"
          ]
        },
        {
          title: "Sharing Your Information",
          content: [
            "We may share your information:",
            "- With third-party service providers (Firebase Authentication, Firestore)",
            "- To comply with legal obligations",
            "- To protect our rights and prevent fraud",
            "- In the event of a business merger or acquisition",
          ]
        },
        {
          title: "Data Security",
          content: [
            "We implement industry-standard security measures to protect your data, including:",
            "- Secure Firebase Authentication",
            "- Encrypted storage of sensitive information",
            "- Keychain management for password storage",
            "- Restricted access to user data",
          ]
        },
        {
          title: "User Rights and Choices",
          content: [
            "You can:",
            "- Access and update your account information",
            "- Delete your account and associated data",
            "- Reset your password",
            "- Choose your preferred authentication method",
            "You can access, update, or delete your personal information by logging into your account or contacting us at thepuzzledev@gmail.com."
          ]
        },
        {
          title: "Data Retention",
          content: [
              "We retain your personal information:",
              "- As long as necessary to provide our  services",
              "- In accordance with legal and business requirements",
              "- Until you choose to delete your account",
          ]
        },
        {
          title: "Children's Privacy",
          content: [
            "ImmersiveEdu is not intended for children under 13. We do not knowingly collect personal information from children.",
          ]
        },
        {
          title: "Changes to This Privacy Policy",
          content: [
            "We may update this policy periodically. We will notify you of significant changes via email or in-app notification."
          ]
        },
        {
          title: "Contact Us",
          content: [
            "The Puzzle Dev",
            "Ratnagiri, Maharashtra, India.",
            "thepuzzledev@gmail.com"
          ]
        },
      ]
    }
  },
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
        <Description text={project.description} imageSrc={project.icon} />
        <DownloadButton link={project.downloadLink} buttonText={project.downloadText} />
        <Features features={project.features} screenshots={project.screenshots} />
        {/* Pass the privacy policy data if it exists */}
        {project.privacyPolicy && <PrivacyPolicy policy={project.privacyPolicy} />}
      </main>
    </div>
  );
};

export default ProjectDetail;
