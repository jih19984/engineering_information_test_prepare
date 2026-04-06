import { LandingHero } from "@/widgets/landing-hero/ui/landing-hero";
import { StudyFeatures } from "@/widgets/study-features/ui/study-features";
import { StudyRoadmap } from "@/widgets/study-roadmap/ui/study-roadmap";

export function HomePage() {
  return (
    <main className="flex-1">
      <LandingHero />
      <StudyFeatures />
      <StudyRoadmap />
    </main>
  );
}
