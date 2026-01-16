import { motion } from "framer-motion";
import { Brain, Cpu, Target, Zap } from "lucide-react";

const algorithmResults = [
  { rank: "1º 🏆", algorithm: "Random Forest", score: "0.8473", status: "Modelo Eleito" },
  { rank: "2º", algorithm: "Decision Tree", score: "0.8473", status: "Convergência Total" },
  { rank: "3º", algorithm: "AdaBoost", score: "0.8473", status: "Convergência Total" },
  { rank: "4º", algorithm: "Logistic Regression", score: "0.8473", status: "Convergência Total" },
  { rank: "5º", algorithm: "Naive Bayes", score: "0.7329", status: "Performance Inferior" },
];

const clusters = [
  {
    name: "Oásis de Eficiência",
    description: "Benchmark Nacional",
    states: ["DF (5.30)", "PR (3.59)", "GO (3.69)"],
    color: "bg-primary",
    borderColor: "border-primary/50",
    textColor: "text-primary",
  },
  {
    name: "Zona de Transição",
    description: "Gestão em Evolução",
    states: ["MT (3.58)", "SC (3.53)", "RS (3.65)", "RO (3.98)"],
    color: "bg-success",
    borderColor: "border-success/50",
    textColor: "text-success",
  },
  {
    name: "Zona de Sobrevivência",
    description: "Perigo de Abandono",
    states: ["MA (1.45)", "AM (1.40)", "PI (1.85)", "SP (2.47)"],
    color: "bg-warning",
    borderColor: "border-warning/50",
    textColor: "text-warning",
  },
  {
    name: "Outlier Crítico",
    description: "Buraco Negro de Recurso",
    states: ["RR (2.09)"],
    color: "bg-destructive",
    borderColor: "border-destructive/50",
    textColor: "text-destructive",
    highlight: true,
  },
];

export const AIClusterSection = () => {
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
            <Brain className="w-3 h-3" />
            Machine Learning
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Inteligência Artificial e Clusters
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Auditoria algorítmica com <span className="text-primary font-semibold">K-Means</span> e 
            benchmark de modelos preditivos.
          </p>
        </motion.div>

        {/* Algorithm tournament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Torneio de Algoritmos</h3>
              <p className="text-sm text-muted-foreground">Benchmark de performance preditiva</p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Ranking</th>
                  <th>Algoritmo</th>
                  <th>F1-Score</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {algorithmResults.map((item, index) => (
                  <tr key={item.algorithm}>
                    <td className="font-bold">{item.rank}</td>
                    <td className="font-medium">{item.algorithm}</td>
                    <td>
                      <span className={`font-mono font-bold ${index === 0 ? 'stat-oasis' : index === 4 ? 'text-muted-foreground' : 'text-primary'}`}>
                        {item.score}
                      </span>
                    </td>
                    <td>
                      <span className={`text-xs ${index === 0 ? 'text-primary' : index === 4 ? 'text-muted-foreground' : 'text-success'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-primary mb-1">Dominância de Padrão</p>
                <p className="text-xs text-muted-foreground">
                  A convergência do F1-Score <strong>0.8473</strong> em 4 arquiteturas distintas prova que o nexo entre 
                  "Infraestrutura de Suporte" e "Presença do Aluno" é uma <span className="text-primary">constante matemática</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Clusters */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-center mb-8"
          >
            4 Perfis de Gestão (K-Means Clustering)
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clusters.map((cluster, index) => (
              <motion.div
                key={cluster.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-card p-6 ${cluster.borderColor} ${cluster.highlight ? 'glow-critical' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-3 h-3 rounded-full ${cluster.color} mt-1.5 shrink-0`} />
                  <div className="flex-1">
                    <h4 className={`font-bold ${cluster.textColor}`}>{cluster.name}</h4>
                    <p className="text-xs text-muted-foreground mb-3">{cluster.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cluster.states.map((state) => (
                        <span 
                          key={state}
                          className="px-2 py-1 bg-secondary rounded text-xs font-mono"
                        >
                          {state}
                        </span>
                      ))}
                    </div>
                    {cluster.highlight && (
                      <p className="text-xs text-destructive mt-3 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        Maior VAAF (R$ 12.639) com Score 2.09
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
