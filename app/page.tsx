import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import AnimatedStats from "./components/AnimatedStats";
import Testimonials from "./components/Testimonials";
import AssessmentIntro from "./components/AssessmentIntro";
import CareersOverview from "./components/CareersOverview";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-[#eaf3fc] to-white dark:from-[#0a1a2f] dark:to-black">
      {/* Hero Section (Header Banner) */}
      <section className="w-full flex flex-col items-center justify-center pt-24 pb-16 px-4 bg-gradient-to-b from-[#eaf3fc] to-white dark:from-[#0a1a2f] dark:to-black">
        <HeroSection />
      </section>

      {/* Social Proof/Testimonial Cards Row */}
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 pb-12">
        <Testimonials />
      </section>

      {/* Platform Features/Feed Solution Grid */}
      <section className="w-full max-w-6xl mx-auto flex flex-col items-center gap-12 pb-20">
        <FeatureGrid />
      </section>

      {/* Animated Stats Row (Brand Logos/Stats) */}
      <section className="w-full max-w-6xl mx-auto flex flex-col items-center gap-12 pb-20">
        <AnimatedStats />
      </section>

      {/* Assessment Intro (Call to Action) */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-[#f5f8fd] to-white dark:from-[#1a2332] dark:to-black">
        <AssessmentIntro />
      </section>

      {/* Careers Overview (Platform Overview) */}
      <section className="w-full max-w-6xl mx-auto flex flex-col items-center gap-12 pb-20">
        <CareersOverview />
      </section>

      {/* About Section (FAQ/Info) */}
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center gap-12 pb-20">
        <AboutSection />
      </section>
    </main>
  );
}
