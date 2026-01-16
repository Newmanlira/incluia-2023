import { motion } from "framer-motion";
import { Database, FileText, ExternalLink } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-20 border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Pipeline info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 max-w-4xl mx-auto mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Pipeline de Dados (ETL)</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="p-4 bg-secondary/50 rounded-lg text-center">
              <p className="text-3xl font-black stat-oasis mb-1">841.252</p>
              <p className="text-sm text-muted-foreground">Registros Processados</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg text-center">
              <p className="text-3xl font-black text-foreground mb-1">5.570</p>
              <p className="text-sm text-muted-foreground">Variáveis Cruzadas</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg text-center">
              <p className="text-3xl font-black text-foreground mb-1">215.545</p>
              <p className="text-sm text-muted-foreground">Escolas Analisadas</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">PNAD Contínua 2023</p>
                <p className="text-muted-foreground text-xs">IBGE • 366.916 registros</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">PNS - Pesquisa Nacional de Saúde</p>
                <p className="text-muted-foreground text-xs">IBGE • 293.726 registros</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Censo Escolar 2024</p>
                <p className="text-muted-foreground text-xs">INEP/MEC • 180.610 escolas</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-black mb-2">
              <span className="text-gradient-oasis">INCLU.IA</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Auditoria Algorítmica da Educação Inclusiva Brasileira
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              White Paper Completo <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Metodologia <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Dados Abertos <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          <div className="border-t border-border/50 pt-8">
            <p className="text-xs text-muted-foreground">
              © 2024 Projeto Inclu.IA • Dados: IBGE (PNAD, PNS) e INEP/MEC (Censo Escolar 2024)
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Portaria Interministerial nº 14/2025 (VAAF 2026)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
