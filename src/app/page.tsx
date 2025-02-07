import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import { Contact } from "lucide-react";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}