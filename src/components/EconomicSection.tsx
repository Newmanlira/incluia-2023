import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Sparkles } from "lucide-react";

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
            Análise do prejuízo financeiro e social gerado pela exclusão educacional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              <h3 className="font-bold text-xl">Custo da Inação</h3>
            </div>
            
            <div className="text-center py-6">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                Perda de Produtividade
              </p>
              <p className="text-4xl md:text-5xl font-black stat-critical mb-2">
                R$ 187.278.000
              </p>
              <p className="text-sm text-muted-foreground">
                Calculado sobre 343 jovens da amostra PNS
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <p className="text-sm text-muted-foreground">
                Valor representa a diferença de renda média vitalícia (35 anos) entre cidadãos 
                com Ensino Médio completo vs. sem instrução. <strong className="text-destructive">Não inclui BPC e custos SUS.</strong>
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
              <h3 className="font-bold text-xl">Algoritmo da Herança (IPC)</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              O suporte pleno pode neutralizar o impacto da pobreza na trajetória educacional.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <div>
                  <p className="font-semibold">Cenário Deserto</p>
                  <p className="text-xs text-muted-foreground">Score 1.0 - Sem suporte</p>
                </div>
                <span className="text-2xl font-black text-destructive">10%</span>
              </div>
              
              <div className="flex justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div>
                  <p className="font-semibold">Cenário Oásis</p>
                  <p className="text-xs text-muted-foreground">Score 7.0 - Suporte pleno</p>
                </div>
                <span className="text-2xl font-black stat-oasis">40%</span>
              </div>
            </div>
            
            <div className="mt-6 text-center p-4 bg-success/10 rounded-lg border border-success/20">
              <p className="text-success font-bold text-lg">+300%</p>
              <p className="text-xs text-muted-foreground">
                Aumento na probabilidade de sucesso com infraestrutura adequada
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
