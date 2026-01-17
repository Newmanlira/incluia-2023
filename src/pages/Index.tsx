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
// IMPORTANDO OS NOVOS COMPONENTES QUE CRIAMOS
import { RegionalAuditMap } from "@/components/RegionalAuditMap";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* 1. INTRODUÇÃO E CONTEXTO */}
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>
        
        <div className="section-divider" />
        
        {/* 2. ANÁLISE DE FLUXO E METODOLOGIA */}
        <section id="funnel">
          <FunnelSection />
        </section>
        
        <section id="methodology">
          <MethodologySection />
        </section>
        
        <div className="section-divider" />
        
        {/* 3. GEOGRAFIA E AUDITORIA REGIONAL */}
        <section id="ranking" className="py-20">
          <div className="container mx-auto px-4">
            <RankingSection />
            {/* INSERINDO O MAPA DE AUDITORIA LOGO ABAIXO DO RANKING */}
            <div className="mt-16">
              <RegionalAuditMap />
            </div>
          </div>
        </section>
        
        {/* 4. INTELIGÊNCIA ARTIFICIAL */}
        <section id="ai">
          <AIClusterSection />
        </section>
        
        <div className="section-divider" />

        {/* 5. IMPACTO ECONÔMICO, SOCIAL E REFUGIADOS */}
        {/* O EconomicSection agora contém os Refugiados e Saúde Mental */}
        <section id="economic">
          <EconomicSection />
        </section>

        {/* 6. FERRAMENTA PRÁTICA: SIMULADOR DE EXCLUSÃO SILENCIOSA */}
        <section id="calculadora" className="py-20 bg-secondary/20 border-y border-border/50">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
              Simule a Exclusão Silenciosa
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Utilize o motor de Inteligência Artificial do Inclu.IA para medir o impacto 
              da falta de infraestrutura e das vulnerabilidades sociais na jornada do aluno.
            </p>
          </div>
          <CalculadoraRisco />
        </section>
        
        {/* 7. EFICIÊNCIA DE GESTÃO FINAL */}
        <section id="ici">
          <ICISection />
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
