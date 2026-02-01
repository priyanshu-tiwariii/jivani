import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ImpactMilestones from "@/components/ImpactMilestones";
import Timeline from "@/components/Timeline";
import HowIThink from "@/components/HowIThink";
import DecisionLog from "@/components/DecisionLog";
import ExperimentsArchive from "@/components/ExperimentsArchive";
import BuildingNext from "@/components/BuildingNext";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <FeaturedProducts />
        <ImpactMilestones />
        <Timeline />
        <HowIThink />
        <DecisionLog />
        <ExperimentsArchive />
        <BuildingNext />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
