import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FunnelSection } from "@/components/FunnelSection";
import { MethodologySection } from "@/components/MethodologySection";
import { RankingSection } from "@/components/RankingSection";
import { AIClusterSection } from "@/components/AIClusterSection";
import { EconomicSection } from "@/components/EconomicSection";
import { CalculadoraRisco } from "@/components/CalculadoraRisco";
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

        <section id="about">
          <AboutSection />
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

        {/* SEÇÃO DA FERRAMENTA PRÁTICA */}
        <section id="calculadora" className="py-20 bg-secondary/20 border-y border-border/50">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Simule sua Realidade</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Utilize o motor de Inteligência Artificial do Inclu.IA para medir o impacto 
              da falta de infraestrutura na jornada de um aluno específico.
            </p>
          </div>
          <CalculadoraRisco />
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
