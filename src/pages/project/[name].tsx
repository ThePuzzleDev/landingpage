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
    appStoreLink: "https://apps.apple.com/in/app/ingregenius/id6670257708",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.thepuzzldev.ingregenius&pcampaignid=web_share",
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
    appStoreLink: "https://apps.apple.com/us/app/immersiveedu/id6738431824",
    downloadText: "Download Now",
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
  {
    name: "GetLine",
    icon: "/images/GetLine/GetLineLogo.png",
    description: "GetLine is an AI-powered quote generator that creates personalized quotes based on user preferences. Enter a mood, topic, or favorite inspiration, and let AI craft meaningful quotes just for you.",
    appStoreLink: "",
    downloadText: "Download Now",
    features: [
      "AI-Powered Quote Generation",
      "Personalized Quotes Based on User Interests",
      "Minimalist & Elegant Design",
      "Save & Share Your Favorite Quotes",
      "Light & Dark Mode"
    ],
    screenshots: [
      "/images/GetLine/1.PNG",
      "/images/GetLine/2.png",
      "/images/GetLine/3.png",
      "/images/GetLine/4.png",
      "/images/GetLine/5.png",
      "/images/GetLine/6.png",
      "/images/GetLine/7.png",
      "/images/GetLine/8.png"
    ],
    privacyPolicy: {
      lastUpdated: "14.01.2025",
      appName: "GetLine",
      description: "GetLine is an AI-powered quote generator that creates personalized quotes based on user preferences. Users can enter prompts and receive AI-generated quotes inspired by their favorite movies, shows, artists, and themes.",
      sections: [
        {
          title: "Information We Collect",
          content: [
            "GetLine does not require account creation. However, we store user preferences such as selected movies, shows, artists, and themes locally using Core Data.",
            "We also collect and store user-saved quotes within the app for easy access."
          ]
        },
        {
          title: "How We Use Your Information",
          content: [
            "We use the collected information to:",
            "- Generate personalized AI-powered quotes based on user preferences",
            "- Save and display user-selected quotes",
            "- Enhance app functionality and improve the user experience",
            "- Ensure smooth performance and personalization of results"
          ]
        },
        {
          title: "Sharing Your Information",
          content: [
            "GetLine does not share or sell your data to third parties.",
            "Your stored preferences and saved quotes remain on your device.",
            "We do not use third-party analytics or advertising services."
          ]
        },
        {
          title: "Data Security",
          content: [
            "GetLine stores all user preferences and saved quotes locally on the device using Core Data.",
            "We implement security best practices to ensure data integrity and prevent unauthorized access.",
            "Since data is stored locally, deleting the app will remove all stored preferences and saved quotes."
          ]
        },
        {
          title: "User Rights and Choices",
          content: [
            "You have control over your data, including the ability to:",
            "- Update, add, or remove preferred movies, shows, and themes in your profile settings",
            "- Delete saved quotes individually or reset all data",
            "- Uninstall the app to remove all stored data"
          ]
        },
        {
          title: "Data Retention",
          content: [
            "All user data is stored locally on the device and retained as long as the app remains installed.",
            "Deleting the app will permanently remove all stored data."
          ]
        },
        {
          title: "Children's Privacy",
          content: [
            "GetLine is not intended for children under 13. We do not knowingly collect any personal information from children."
          ]
        },
        {
          title: "Changes to This Privacy Policy",
          content: [
            "We may update this Privacy Policy from time to time. Any significant changes will be communicated via an in-app notification."
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
  }
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
        <DownloadButton link={project.appStoreLink} buttonText={project.downloadText} playStoreLink = {project.playStoreLink} />
        <Features features={project.features} screenshots={project.screenshots} />
        {/* Pass the privacy policy data if it exists */}
        {project.privacyPolicy && <PrivacyPolicy policy={project.privacyPolicy} />}
      </main>
    </div>
  );
};

export default ProjectDetail;
