import React from 'react';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import ContactUs from '@/components/ContactUs';

const projectData = [
  {
    id: 1,
    name: "IngreGenius",
    shortDescription: "Your AI-powered sous chef for personalized recipes, cooking assistance, and nutrition tracking all in one intuitive app.",
    fullDescription: "IngreGenius is an AI-powered recipe recommendation app that suggests dishes based on ingredients you have on hand. It uses machine learning algorithms to analyze flavor profiles and user preferences.",
    image: "/images/IngreGenius.png",
    link: "https://ingregenius.com"
  },
  {
    id: 2,
    name: "EcoTrack",
    shortDescription: "Carbon footprint tracker",
    fullDescription: "EcoTrack helps users monitor and reduce their carbon footprint. It provides personalized suggestions for eco-friendly lifestyle changes and connects users with local sustainability initiatives.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s",
    link: "https://ecotrack.org"
  },
  {
    id: 3,
    name: "MindfulMinutes",
    shortDescription: "Meditation and mindfulness app",
    fullDescription: "MindfulMinutes offers guided meditations, breathing exercises, and daily mindfulness prompts. It features progress tracking and community support to help users develop a consistent meditation practice.",
    image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    link: "https://mindfulminutes.app"
  }
];

const Home: React.FC = () => (
  <div>
    <HeroSection />
    <Services />
    <Portfolio projects={projectData} />
    <ContactUs />
  </div>
);

export default Home;
