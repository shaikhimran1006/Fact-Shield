import React from "react";
import { useTranslation } from "react-i18next"; // Import the hook
import Hero from "../Hero/Hero";
import FeatureCard from "../FeatureCard/FeatureCard";
import Chatbot from "../Chatbot/Chatbot";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation(); // Use the translation hook
  const navigate = useNavigate();

  const features = [
    {
      color: "hover:shadow-[0_0_15px_20px_rgba(225,171,147,0.5)]",
      btntext: t("getStarted"), // Translate the button text
      title: t("factChecker"),  // Translate the title
      description: t("verifyAuthenticity"), // Translate the description
      image: "/src/assets/text.jpg",
      onClick: () => navigate("/news"),
    },
    {
      color: "hover:shadow-[0_0_15px_20px_rgba(220,252,231,1)]",
      btntext: t("startAnalysis"),
      title: t("imageInspector"),
      description: t("detectTamperedImages"),
      image: "/src/assets/photo.jpg",
      onClick: () => navigate("/photos"),
    },
    {
      color: "hover:shadow-[0_0_15px_20px_rgba(234,232,255,1)]",
      btntext: t("analyzeNow"),
      title: t("deepfakeDetector"),
      description: t("identifyFakeVideos"),
      image: "/src/assets/video.jpg",
      onClick: () => window.location.href = "http://127.0.0.1:8000/",
    },
    {
      color: "hover:shadow-[0_0_15px_20px_rgba(243,235,189,1)]",
      btntext: t("analyzeNow"),
      title: t("Content Detector"),
      description: t("identifyFakeTranscripts"),
      image: "/src/assets/transcript.jpg",
      onClick: () => navigate("/transcript"),
    },
    {
      color: "hover:shadow-[0_0_15px_20px_rgba(57,93,231,0.2)]",
      btntext: t("analyzeNow"),
      title: t("socialMediaDetector"),
      description: t("identifyFakeSocialMediaPosts"),
      image: "/src/assets/media.jpg",
      onClick: () => navigate("/socialmedia"),
    },
   
  ];

  return (
    <div className="static min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </main>
      <div className="fixed bottom-16 right-10 justify-self-end">
        <Chatbot />
      </div>
    </div>
  );
}
