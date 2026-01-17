import { motion } from "framer-motion";
import { TrendingDown, Users, AlertCircle } from "lucide-react";

const funnelData = [
  { stage: "Fundamental I", ages: "5-10 anos", rate: 11.32, color: "bg-warning/80" },
  { stage: "Fundamental II", ages: "11-14 anos", rate: 14.29, color: "bg-warning" },
  { stage: "Ensino Médio", ages: "15-18 anos", rate: 21.98, color: "bg-destructive" },
];

export const FunnelSection = () => {
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
            <Users className="w-3 h-3" />
            Análise de Fluxo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            O Funil da Adolescência
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A mecânica da <span className="text-destructive font-semibold">"Expulsão Branca"</span>: 
            o fenômeno onde a complexidade acadêmica aumenta enquanto o suporte estatal sofre um **apagão deliberado**.
          </p>
        </motion.div>

        {/* Funnel visualization */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {funnelData.map((item, index) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="funnel-bar border border-border/50"
                style={{
                  width: `${100 - index * 10}%`,
                  marginLeft: `${index * 5}%`,
                }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-8 rounded-full ${item.color}`} />
                  <div>
                    <p className="font-semibold text-foreground">{item.stage}</p>
                    <p className="text-xs text-muted-foreground">{item.ages}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingDown className={`w-4 h-4 ${index === 2 ? 'text-destructive' : 'text-warning'}`} />
                  <span className={`text-2xl font-black ${index === 2 ? 'stat-critical' : 'stat-alert'}`}>
                    {item.rate}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Critical alert card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 border-destructive/30 glow-critical">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-destructive/20 rounded-xl shrink-0">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Diagnóstico Crítico: A Ruptura do Suporte
                </h3>
                <p className="text-muted-foreground mb-4">
                  A auditoria identificou que a transição para o Ensino Médio não é apenas pedagógica, é um **deserto de assistência**. A queda na presença de monitores atinge:
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black stat-critical">-98,60%</span>
                  <span className="text-muted-foreground">de suporte humano</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4 border-t border-border/50 pt-4">
                  <strong>O que isso significa?</strong> Para o Estado, ao completar 15 anos, o aluno neurodivergente "deixa de precisar" de auxílio. Essa retirada massiva de profissionais configura uma <strong className="text-destructive">expulsão programada</strong> mascarada de autonomia.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
