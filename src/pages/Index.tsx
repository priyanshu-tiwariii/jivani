import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import ImpactMilestones from "@/components/ImpactMilestones";
import Timeline from "@/components/Timeline";
import HowIThink from "@/components/HowIThink";
import DecisionLog from "@/components/DecisionLog";
import ExperimentsArchive from "@/components/ExperimentsArchive";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background page-atmosphere overflow-x-hidden">
      <Navigation />
      <main className="pt-14 sm:pt-16 relative z-10">
        <Hero />
        <FeaturedProducts />
        <ImpactMilestones />
        <Timeline />
        <HowIThink />
        <DecisionLog />
        <ExperimentsArchive />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
