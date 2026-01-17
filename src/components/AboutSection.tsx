import { motion } from "framer-motion";
import { ShieldCheck, Database, Search, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">O que é o Projeto INCLU.IA?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O <strong>INCLU.IA</strong> é uma iniciativa de auditoria algorítmica independente 
              que nasceu para dar visibilidade ao que os relatórios oficiais costumam omitir: 
              a falência do suporte estrutural para alunos neurodivergentes no Brasil.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Auditoria, não apenas dados</h4>
                <p className="text-muted-foreground text-sm">
                  Não apenas coletamos dados; auditamos processos. Cruzamos o <strong>Censo Escolar 2024</strong> 
                  com a <strong>PNS</strong> e <strong>PNAD</strong> para identificar onde o 
                  investimento público se perde antes de chegar ao aluno.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Independência Científica</h4>
                <p className="text-muted-foreground text-sm">
                  Utilizamos modelos de <strong>Machine Learning (Random Forest)</strong> para remover 
                  vieses políticos. Nossa hierarquia de pesos é baseada no que realmente evita a evasão, 
                  não no que é mais barato de construir.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Foco na Permanência</h4>
                <p className="text-muted-foreground text-sm">
                  O Brasil foca no acesso (matrícula). O INCL.IA foca na <strong>permanência com dignidade</strong>. 
                  Acreditamos que uma escola sem monitor e sem sala de recursos é uma escola que exclui.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="mt-1 p-2 bg-primary/10 rounded-lg h-fit">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Transparência Radical</h4>
                <p className="text-muted-foreground text-sm">
                  Todo o nosso processamento é aberto. Desde os microdados do INEP até os scripts de 
                  análise no VS Code, permitindo que qualquer cidadão audite nossa metodologia.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-2xl text-center"
          >
            <p className="text-primary font-medium italic">
              "Nossa missão é transformar microdados frios em evidências quentes para políticas 
              públicas que coloquem o humano acima do cimento."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
