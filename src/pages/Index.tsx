import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FunnelSection } from "@/components/FunnelSection";
import { MethodologySection } from "@/components/MethodologySection";
import { RankingSection } from "@/components/RankingSection";
import { AIClusterSection } from "@/components/AIClusterSection";
import { EconomicSection } from "@/components/EconomicSection";
import { ICISection } from "@/components/ICISection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <div className="section-divider" />
        
        <section id="funnel">
          <FunnelSection />
        </section>
        
        <section id="methodology">
          <MethodologySection />
        </section>
        
        <div className="section-divider" />
        
        <section id="ranking">
          <RankingSection />
        </section>
        
        <section id="ai">
          <AIClusterSection />
        </section>
        
        <section id="economic">
          <EconomicSection />
        </section>
        
        <section id="ici">
          <ICISection />
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
