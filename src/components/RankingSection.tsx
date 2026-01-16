import { motion } from "framer-motion";
import { MapPin, AlertTriangle, CheckCircle } from "lucide-react";

const rankingData = [
  { uf: "MA", percentage: 87.14, status: "Crítico" },
  { uf: "PI", percentage: 82.51, status: "Crítico" },
  { uf: "AM", percentage: 81.94, status: "Crítico" },
  { uf: "BA", percentage: 78.78, status: "Crítico" },
  { uf: "MG", percentage: 77.79, status: "Alta" },
  { uf: "SE", percentage: 77.18, status: "Alta" },
  { uf: "PA", percentage: 76.52, status: "Alta" },
  { uf: "PB", percentage: 75.55, status: "Alta" },
  { uf: "RN", percentage: 75.46, status: "Alta" },
  { uf: "RR", percentage: 75.05, status: "Alta" },
  { uf: "AC", percentage: 75.05, status: "Alta" },
  { uf: "PE", percentage: 72.09, status: "Média-Alta" },
  { uf: "SP", percentage: 71.18, status: "Média-Alta" },
  { uf: "RJ", percentage: 67.74, status: "Média" },
  { uf: "TO", percentage: 67.49, status: "Média" },
  { uf: "CE", percentage: 67.23, status: "Média" },
  { uf: "AL", percentage: 66.67, status: "Média" },
  { uf: "SC", percentage: 63.05, status: "Média" },
  { uf: "AP", percentage: 61.80, status: "Moderada" },
  { uf: "GO", percentage: 61.34, status: "Moderada" },
  { uf: "PR", percentage: 61.10, status: "Moderada" },
  { uf: "ES", percentage: 60.45, status: "Moderada" },
  { uf: "MT", percentage: 59.01, status: "Moderada" },
  { uf: "RS", percentage: 54.18, status: "Moderada" },
  { uf: "MS", percentage: 53.27, status: "Moderada" },
  { uf: "RO", percentage: 51.40, status: "Moderada" },
  { uf: "DF", percentage: 37.65, status: "Melhor" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Crítico":
      return "text-destructive bg-destructive/20";
    case "Alta":
      return "text-destructive/80 bg-destructive/15";
    case "Média-Alta":
      return "text-warning bg-warning/20";
    case "Média":
      return "text-warning/80 bg-warning/15";
    case "Moderada":
      return "text-primary/80 bg-primary/15";
    case "Melhor":
      return "text-success bg-success/20";
    default:
      return "text-muted-foreground bg-muted";
  }
};

export const RankingSection = () => {
  const criticalStates = rankingData.filter(s => s.status === "Crítico");
  const bestStates = rankingData.filter(s => s.status === "Melhor" || s.status === "Moderada").slice(-3).reverse();

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
          <span className="badge-critical mb-4 inline-flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            Geografia do Abandono
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Ranking do Abandono Estrutural
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Percentual de <span className="text-destructive font-semibold">Escolas Deserto</span>: 
            unidades sem Sala AEE e sem Monitores.
          </p>
        </motion.div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Critical states */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 border-destructive/30"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <h3 className="font-bold text-lg">Estados Críticos</h3>
            </div>
            <div className="space-y-3">
              {criticalStates.map((state, i) => (
                <div key={state.uf} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{state.uf}</span>
                  <span className="stat-critical font-bold text-xl">{state.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Best states */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 border-primary/30"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">Melhores Índices</h3>
            </div>
            <div className="space-y-3">
              {bestStates.map((state, i) => (
                <div key={state.uf} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{state.uf}</span>
                  <span className="stat-oasis font-bold text-xl">{state.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Full table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden max-w-4xl mx-auto"
        >
          <div className="p-6 border-b border-border/50">
            <h3 className="font-bold text-lg">Ranking Completo por UF</h3>
            <p className="text-sm text-muted-foreground">27 Unidades da Federação ordenadas por % de escolas sem suporte</p>
          </div>
          <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
            <table className="data-table">
              <thead className="sticky top-0 bg-card">
                <tr>
                  <th>Posição</th>
                  <th>UF</th>
                  <th>% Escolas Deserto</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rankingData.map((state, index) => (
                  <motion.tr
                    key={state.uf}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    <td className="font-mono text-muted-foreground">{index + 1}º</td>
                    <td className="font-bold">{state.uf}</td>
                    <td>
                      <span className={`font-bold ${state.status === "Crítico" ? 'text-destructive' : state.status === "Melhor" ? 'text-success' : 'text-foreground'}`}>
                        {state.percentage}%
                      </span>
                    </td>
                    <td>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(state.status)}`}>
                        {state.status}
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
