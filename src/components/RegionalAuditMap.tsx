import { motion } from "framer-motion";
import { Map, AlertTriangle, CheckCircle2, helpCircle } from "lucide-react";

export const RegionalAuditMap = () => {
  const estados = [
    { uf: "DF", score: 5.30, ici: 0.57, status: "Oásis", cor: "text-cyan-500", desc: "Referência Nacional em conversão de recurso." },
    { uf: "MS", score: 4.42, ici: 0.44, status: "Oásis", cor: "text-cyan-500", desc: "Alta eficiência na ponta pedagógica." },
    { uf: "RR", score: 2.09, ici: 0.17, status: "Buraco Negro", cor: "text-red-500", desc: "Maior verba do país (VAAF), pior entrega." },
    { uf: "MA", score: 1.45, ici: 0.17, status: "Deserto", cor: "text-red-500", desc: "87,14% das escolas sem nenhum suporte." },
    { uf: "AM", score: 1.41, ici: 0.17, status: "Deserto", cor: "text-red-500", desc: "Vazamento crítico de valor aluno/ano." },
    { uf: "SP", score: 2.48, ici: 0.27, status: "Negligência", cor: "text-orange-500", desc: "Estado mais rico com suporte mínimo." }
  ];

  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <Map className="w-8 h-8 text-primary" />
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tighter">Geometria da Desigualdade</h3>
          <p className="text-sm text-muted-foreground">Mapeamento de Clusters por Eficiência de Gestão (ICI)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {estados.map((est, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl border-2 bg-secondary/20 ${est.status === 'Oásis' ? 'border-cyan-500/30' : 'border-red-500/30'}`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl font-black">{est.uf}</span>
              {est.status === 'Oásis' ? <CheckCircle2 className="text-cyan-500" /> : <AlertTriangle className="text-red-500" />}
            </div>
            
            <div className="space-y-1 mb-4">
              <div className="flex justify-between text-xs uppercase font-bold opacity-70">
                <span>Score Inclu.IA</span>
                <span>{est.score.toFixed(2)}</span>
              </div>
              <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
                <div className={`h-full ${est.status === 'Oásis' ? 'bg-cyan-500' : 'bg-red-500'}`} style={{ width: `${est.score * 10}%` }} />
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className={`text-2xl font-black ${est.cor}`}>{est.ici}</span>
              <span className="text-[10px] uppercase font-bold opacity-60">Índice ICI</span>
            </div>
            
            <p className="text-xs font-medium leading-relaxed italic opacity-80">
              "{est.desc}"
            </p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg flex items-center gap-3 text-xs">
        <Info className="w-4 h-4 text-primary" />
        <p>O <strong>Índice de Conversão Inclusiva (ICI)</strong> prova que o subsuporte não é uma fatalidade orçamentária, mas uma escolha de gestão local.</p>
      </div>
    </div>
  );
};
