import { motion } from "framer-motion";
import { 
  DollarSign, TrendingUp, Sparkles, Brain, 
  HeartCrack, ShoppingCart, MapPin, PlaneTakeoff, Info, ArrowUpRight 
} from "lucide-react";

export const EconomicSection = () => {
  const casosRefugiados = [
    { origem: "Uiramutã (RR)", destino: "São Felipe D’Oeste (RO)", km: "1.837,96 km", score: "0.32" },
    { origem: "Pacaraima (RR)", destino: "São Felipe D’Oeste (RO)", km: "1.818,85 km", score: "0.90" }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-alert mb-4 inline-flex items-center gap-2">
            <DollarSign className="w-3 h-3" />
            Impacto Socioeconômico
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            O Custo da Omissão
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A exclusão escolar não é apenas uma falha pedagógica; é um dreno econômico estrutural que hipoteca o futuro do PIB.
          </p>
        </motion.div>

        {/* CONTADOR DE IMPACTO E IPC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-destructive/30 bg-destructive/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-destructive/20 rounded-xl">
                <DollarSign className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-bold text-xl uppercase tracking-tighter">Prejuízo de Capital Humano</h3>
            </div>
            
            <div className="text-center py-6">
              <p className="text-4xl md:text-6xl font-black stat-critical mb-2 animate-pulse">
                R$ 187.278.000
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                Riqueza Vitalícia Desperdiçada
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <p className="text-sm text-muted-foreground">
                Diferença de renda projetada para 343 jovens evadidos. A exclusão é uma barreira direta à mobilidade social.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-primary/30 bg-primary/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl">
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl uppercase tracking-tighter">O Impacto da Estrutura (IPC)</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <span className="font-semibold">Escola Deserto</span>
                <span className="text-2xl font-black text-destructive">10% de sucesso</span>
              </div>
              <div className="flex justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                <span className="font-semibold">Escola Oásis</span>
                <span className="text-2xl font-black text-primary">40% de sucesso</span>
              </div>
            </div>
            
            <div className="mt-6 text-center p-4 bg-success/10 rounded-lg border border-success/20">
              <p className="text-success font-black text-2xl">+300%</p>
              <p className="text-xs text-muted-foreground uppercase font-bold">
                Ganho na probabilidade de sucesso com suporte pleno
              </p>
            </div>
          </motion.div>
        </div>

        {/* SEÇÃO: REFUGIADOS EDUCACIONAIS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 border-amber-900/30 mb-20 bg-amber-950/5 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6 text-amber-500">
            <PlaneTakeoff className="w-8 h-8" />
            <h3 className="text-2xl font-black uppercase tracking-tighter">Refugiados Educacionais: A Expedição Impossível</h3>
          </div>
          <p className="text-muted-foreground mb-8">
            O direito à educação é anulado pela barreira geográfica. Famílias em "Municípios Deserto" enfrentam distâncias hercúleas para acessar o suporte básico.
          </p>

          <div className="grid gap-4">
            {casosRefugiados.map((caso, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-secondary/30 rounded-xl border border-amber-500/20">
                <div className="flex items-center gap-6">
                  <div>
                    <span className="block text-[10px] font-bold opacity-50 uppercase tracking-widest">Origem (Deserto)</span>
                    <span className="font-bold text-lg">{caso.origem}</span>
                  </div>
                  <div className="h-px w-12 bg-amber-500/30 hidden md:block" />
                  <div>
                    <span className="block text-[10px] font-bold opacity-50 uppercase tracking-widest">Suporte Pleno</span>
                    <span className="font-bold text-lg">{caso.destino}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="block text-3xl font-black text-amber-500">{caso.km}</span>
                  <span className="text-[10px] font-bold uppercase opacity-60">Distância Geodésica Mínima</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-2 text-xs text-muted-foreground italic bg-amber-500/5 p-4 rounded-lg">
            <Info className="w-4 h-4 flex-shrink-0 text-amber-500" />
            <p>
              A distância física é a ferramenta silenciosa de exclusão: o Estado garante a matrícula, mas o suporte técnico está a dois mil quilômetros de distância.
            </p>
          </div>
        </motion.div>

        {/* SEÇÃO 8: SAÚDE MENTAL E MISÉRIA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-8">
            <HeartCrack className="text-destructive w-6 h-6" />
            <h3 className="text-2xl font-black uppercase tracking-tighter">As Cicatrizes da Exclusão Silenciosa</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 border-l-4 border-l-destructive bg-destructive/5">
              <Brain className="w-8 h-8 text-destructive mb-4" />
              <h4 className="font-bold text-lg mb-2">Colapso Psíquico</h4>
              <p className="text-3xl font-black text-destructive mb-2">36,61%</p>
              <p className="text-sm text-muted-foreground">
                Sofrem de desânimo e tristeza crônica. A escola que não acolhe, adoece.
              </p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-destructive bg-destructive/5">
              <TrendingUp className="w-8 h-8 text-destructive rotate-180 mb-4" />
              <h4 className="font-bold text-lg mb-2">Abandono Etário</h4>
              <p className="text-3xl font-black text-destructive mb-2">-98,60%</p>
              <p className="text-sm text-muted-foreground">
                Queda brutal no suporte humano no Ensino Médio. Um desinvestimento programado.
              </p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-destructive bg-destructive/5">
              <ShoppingCart className="w-8 h-8 text-destructive mb-4" />
              <h4 className="font-bold text-lg mb-2">Face da Miséria</h4>
              <p className="text-3xl font-black text-destructive mb-2">10,70%</p>
              <p className="text-sm text-muted-foreground">
                Lares com evadidos vivem em vulnerabilidade econômica extrema.
              </p>
            </div>
          </div>
          
          <p className="mt-12 text-center text-lg font-medium text-muted-foreground italic border-t border-border pt-8">
            "O resultado combinado da exclusão não é apenas evasão, é o encarceramento do indivíduo na invisibilidade social."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
