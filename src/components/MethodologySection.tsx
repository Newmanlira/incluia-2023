import { motion } from "framer-motion";
import { Calculator, Users, BookOpen, Heart, Accessibility, AlertTriangle } from "lucide-react";

const scoreComponents = [
  { 
    name: "Apoio Humano", 
    weight: 40, 
    icon: Users, 
    description: "Profissionais Monitores e Mediadores",
    color: "bg-primary" 
  },
  { 
    name: "Suporte Pedagógico", 
    weight: 30, 
    icon: BookOpen, 
    description: "Salas de Recursos Multifuncionais (AEE)",
    color: "bg-primary/80" 
  },
  { 
    name: "Dignidade Biológica", 
    weight: 20, 
    icon: Heart, 
    description: "Banheiros adaptados (PNE)",
    color: "bg-primary/60" 
  },
  { 
    name: "Acessibilidade", 
    weight: 10, 
    icon: Accessibility, 
    description: "Rampas e elevadores",
    color: "bg-primary/40" 
  },
];

export const MethodologySection = () => {
  return (
    <section className="py-20 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-oasis mb-4 inline-flex items-center gap-2">
            <Calculator className="w-3 h-3" />
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Score INCLU.IA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Métrica ponderada de <span className="text-primary font-semibold">0 a 10</span> que traduz 
            o nível de suporte que o Estado oferece ao aluno neurodivergente.
          </p>
        </motion.div>

        {/* Score breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Weight bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-bold mb-6">Composição de Pesos</h3>
            <div className="space-y-6">
              {scoreComponents.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="text-primary font-bold">{item.weight}%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.weight * 2.5}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`h-full rounded-full ${item.color}`}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* National score */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 flex flex-col justify-center"
          >
            <div className="text-center mb-8">
              <p className="text-muted-foreground mb-2 uppercase tracking-wider text-sm">Média Nacional</p>
              <div className="relative inline-block">
                <span className="text-8xl font-black stat-oasis">3,20</span>
                <span className="text-2xl text-muted-foreground absolute -right-8 top-0">/10</span>
              </div>
              <p className="text-destructive font-semibold mt-4">
                Menos de 1/3 do suporte básico necessário
              </p>
            </div>
            
            {/* Scale visualization */}
            <div className="relative h-4 bg-secondary rounded-full overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="w-1/3 bg-destructive/50" />
                <div className="w-1/3 bg-warning/50" />
                <div className="w-1/3 bg-success/50" />
              </div>
              <motion.div
                initial={{ left: 0 }}
                whileInView={{ left: "32%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-1/2 -translate-y-1/2 w-4 h-6 bg-foreground rounded-sm shadow-lg"
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Crítico</span>
              <span>Alerta</span>
              <span>Adequado</span>
            </div>
          </motion.div>
        </div>

        {/* Paradox card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 border-warning/30">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-warning/20 rounded-xl shrink-0">
                <AlertTriangle className="w-6 h-6 text-warning" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  O Paradoxo da Rampa
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-black text-warning mb-1">0.42</p>
                    <p className="text-sm text-muted-foreground">
                      Correlação Rampa × Frequência Escolar
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-primary mb-1">0.37</p>
                    <p className="text-sm text-muted-foreground">
                      Correlação Monitor × Frequência Escolar
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-sm border-t border-border/50 pt-4">
                  A rampa apresenta maior correlação porque, sem ela, o aluno não entra no prédio. 
                  O Score INCLU.IA mantém peso maior para monitores porque mede a 
                  <strong className="text-primary"> Qualidade da Inclusão</strong>, não apenas o acesso físico.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
