import { motion } from "framer-motion";
import { BarChart3, ArrowRight } from "lucide-react";

const iciData = [
  { uf: "RR", score: 2.09, vaaf: "R$ 12.639,50", ici: 0.17, status: "Vazamento Crítico" },
  { uf: "AM", score: 1.41, vaaf: "R$ 8.347,90", ici: 0.17, status: "Vazamento Crítico" },
  { uf: "MA", score: 1.45, vaaf: "R$ 8.347,90", ici: 0.17, status: "Vazamento Crítico" },
  { uf: "AC", score: 1.89, vaaf: "R$ 9.715,46", ici: 0.19, status: "Alta Negligência" },
  { uf: "MG", score: 2.07, vaaf: "R$ 9.835,13", ici: 0.21, status: "Alta Negligência" },
  { uf: "SP", score: 2.48, vaaf: "R$ 9.150,70", ici: 0.27, status: "Moderado" },
  { uf: "RJ", score: 2.80, vaaf: "R$ 8.347,90", ici: 0.34, status: "Eficiência Média" },
  { uf: "PR", score: 3.59, vaaf: "R$ 9.571,42", ici: 0.38, status: "Eficiência Alta" },
  { uf: "GO", score: 3.69, vaaf: "R$ 8.928,20", ici: 0.41, status: "Eficiência Alta" },
  { uf: "MS", score: 4.42, vaaf: "R$ 10.137,98", ici: 0.44, status: "Eficiência Alta" },
  { uf: "DF", score: 5.30, vaaf: "R$ 9.330,26", ici: 0.57, status: "Referência Nacional" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Vazamento Crítico":
      return "text-destructive bg-destructive/20";
    case "Alta Negligência":
      return "text-destructive/80 bg-destructive/15";
    case "Moderado":
      return "text-warning bg-warning/20";
    case "Eficiência Média":
      return "text-warning/80 bg-warning/15";
    case "Eficiência Alta":
      return "text-primary/80 bg-primary/15";
    case "Referência Nacional":
      return "text-success bg-success/20";
    default:
      return "text-muted-foreground bg-muted";
  }
};

export const ICISection = () => {
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
            <BarChart3 className="w-3 h-3" />
            Eficiência de Gestão
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Índice de Conversão Inclusiva (ICI)
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Eficiência real de cada estado em transformar investimento FUNDEB em suporte tangível.
          </p>
        </motion.div>

        {/* Highlight comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 max-w-4xl mx-auto mb-12"
        >
          <h3 className="font-bold text-lg text-center mb-8">O Abismo da Eficiência</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-success/20 border-2 border-success flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-black text-success">DF</span>
              </div>
              <p className="text-4xl font-black stat-oasis">0.57</p>
              <p className="text-sm text-muted-foreground">Referência Nacional</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block" />
              <span className="text-2xl font-black text-primary">3,3x</span>
              <span className="text-xs text-muted-foreground">mais eficiente</span>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-destructive/20 border-2 border-destructive flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-black text-destructive">RR</span>
              </div>
              <p className="text-4xl font-black stat-critical">0.17</p>
              <p className="text-sm text-muted-foreground">Vazamento Crítico</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
            Roraima recebe o <strong className="text-foreground">maior VAAF do Brasil (R$ 12.639)</strong> mas entrega um dos piores Scores (2.09), 
            caracterizando uso do aluno neurodivergente como "gerador de receita" sem contrapartida.
          </p>
        </motion.div>

        {/* ICI Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden max-w-5xl mx-auto"
        >
          <div className="p-6 border-b border-border/50">
            <h3 className="font-bold text-lg">Ranking de Eficiência (ICI)</h3>
            <p className="text-sm text-muted-foreground">ICI = Score Inclu.IA ÷ VAAF 2026</p>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>UF</th>
                  <th>Score</th>
                  <th>VAAF 2026</th>
                  <th>ICI</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {iciData.map((item, index) => (
                  <motion.tr
                    key={item.uf}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="font-bold">{item.uf}</td>
                    <td className="font-mono">{item.score.toFixed(2)}</td>
                    <td className="text-muted-foreground text-sm">{item.vaaf}</td>
                    <td>
                      <span className={`font-mono font-bold ${item.ici >= 0.4 ? 'stat-oasis' : item.ici <= 0.2 ? 'stat-critical' : 'text-foreground'}`}>
                        {item.ici.toFixed(2)}
                      </span>
                    </td>
                    <td>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
