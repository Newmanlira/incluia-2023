import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Sparkles, Brain, HeartCrack, ShoppingCart } from "lucide-react";

export const EconomicSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-alert mb-4 inline-flex items-center gap-2">
            <DollarSign className="w-3 h-3" />
            Impacto Econômico
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            O Custo da Omissão
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A exclusão escolar não é apenas uma falha pedagógica; é um motor de pobreza e adoecimento psíquico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Cost card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 border-destructive/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-destructive/20 rounded-xl">
                <DollarSign className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-bold text-xl">Prejuízo de Capital Humano</h3>
            </div>
            
            <div className="text-center py-6">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                Perda de Produtividade Vitalícia
              </p>
              <p className="text-4xl md:text-5xl font-black stat-critical mb-2">
                R$ 187.278.000
              </p>
              <p className="text-sm text-muted-foreground">
                Diferença de renda projetada para 343 jovens (Amostra PNS)
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <p className="text-sm text-muted-foreground">
                Este valor representa a riqueza que deixa de ser gerada pela interrupção do ciclo educacional. <strong className="text-destructive">A exclusão escolar é uma barreira direta à mobilidade social.</strong>
              </p>
            </div>
          </motion.div>

          {/* Algorithm card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 border-primary/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl">O Impacto da Estrutura (IPC)</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              A auditoria prova que o suporte técnico pode neutralizar a vulnerabilidade social.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <div>
                  <p className="font-semibold">Escola Deserto</p>
                  <p className="text-xs text-muted-foreground">Sem suporte especializado</p>
                </div>
                <span className="text-2xl font-black text-destructive">10%</span>
              </div>
              
              <div className="flex justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div>
                  <p className="font-semibold">Escola Oásis</p>
                  <p className="text-xs text-muted-foreground">Suporte técnico pleno</p>
                </div>
                <span className="text-2xl font-black stat-oasis">40%</span>
              </div>
            </div>
            
            <div className="mt-6 text-center p-4 bg-success/10 rounded-lg border border-success/20">
              <p className="text-success font-bold text-lg">+300%</p>
              <p className="text-xs text-muted-foreground">
                Ganho na probabilidade de sucesso acadêmico com infraestrutura adequada.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- SEÇÃO 8: SAÚDE MENTAL E MISÉRIA (CICATRIZES DA EXCLUSÃO) --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-black mb-8 flex items-center gap-2">
            <HeartCrack className="text-destructive w-6 h-6" />
            8. Saúde Mental e Miséria: As Cicatrizes da Exclusão
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 border-l-4 border-l-destructive">
              <Brain className="w-8 h-8 text-destructive mb-4" />
              <h4 className="font-bold text-lg mb-2">Colapso Psíquico</h4>
              <p className="text-2xl font-black stat-critical mb-2">36,61%</p>
              <p className="text-sm text-muted-foreground">
                Dos neurodivergentes fora da escola sofrem de desânimo e tristeza crônica. A escola que não acolhe, adoece.
              </p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-destructive">
              <TrendingUp className="w-8 h-8 text-destructive rotate-180 mb-4" />
              <h4 className="font-bold text-lg mb-2">Abandono Etário</h4>
              <p className="text-2xl font-black stat-critical mb-2">-98,60%</p>
              <p className="text-sm text-muted-foreground">
                Queda brutal no suporte humano no Ensino Médio. O Estado retira o mediador no auge da complexidade social.
              </p>
            </div>

            <div className="glass-card p-6 border-l-4 border-l-destructive">
              <ShoppingCart className="w-8 h-8 text-destructive mb-4" />
              <h4 className="font-bold text-lg mb-2">Face da Miséria</h4>
              <p className="text-2xl font-black stat-critical mb-2">10,70%</p>
              <p className="text-sm text-muted-foreground">
                Dos lares com evadidos vivem em vulnerabilidade extrema. A exclusão escolar gera fome e dependência.
              </p>
            </div>
          </div>
          
          <p className="mt-8 text-center text-sm text-muted-foreground italic">
            "A escola brasileira aceita a matrícula, mas nega o suporte. O resultado não é apenas evasão, é a interrupção da dignidade humana."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
