import BlogSection from "@/components/homePage/BlogSection";
import HeroSection from "@/components/homePage/HeroSection";
import ProjectSection from "@/components/homePage/ProjectSection";
import SkillsSection from "@/components/homePage/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection title="Featured Projects" featured={true} />
      <SkillsSection />
      <BlogSection title="Featured Blogs" featured={true} />
    </>
  );
}
