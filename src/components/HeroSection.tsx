import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, BarChart3 } from "lucide-react";

const KPICard = ({ 
  value, 
  label, 
  sublabel, 
  variant = "critical",
  icon: Icon,
  delay = 0 
}: { 
  value: string; 
  label: string; 
  sublabel?: string;
  variant?: "critical" | "alert" | "oasis";
  icon: React.ElementType;
  delay?: number;
}) => {
  const variantStyles = {
    critical: "stat-critical glow-critical",
    alert: "stat-alert",
    oasis: "stat-oasis glow-oasis",
  };

  const badgeStyles = {
    critical: "badge-critical",
    alert: "badge-alert",
    oasis: "badge-oasis",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-6 lg:p-8 text-center group hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex justify-center mb-4">
        <div className={`p-3 rounded-xl ${variant === 'critical' ? 'bg-destructive/20' : variant === 'alert' ? 'bg-warning/20' : 'bg-primary/20'}`}>
          <Icon className={`w-6 h-6 ${variant === 'critical' ? 'text-destructive' : variant === 'alert' ? 'text-warning' : 'text-primary'}`} />
        </div>
      </div>
      <p className={`text-4xl lg:text-5xl xl:text-6xl font-black mb-3 ${variantStyles[variant]}`}>
        {value}
      </p>
      <p className="text-foreground font-semibold text-sm lg:text-base mb-1">{label}</p>
      {sublabel && (
        <span className={badgeStyles[variant]}>{sublabel}</span>
      )}
    </motion.div>
  );
};

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-16 lg:py-0">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="badge-critical flex items-center gap-2">
            <AlertTriangle className="w-3 h-3" />
            Auditoria Algorítmica 2024
          </span>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
            <span className="text-foreground">INCLU.IA:</span>{" "}
            <span className="text-gradient-critical">A Anatomia da Exclusão</span>
            <br />
            <span className="text-muted-foreground">Educacional Neurodivergente no Brasil</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Auditoria algorítmica sobre o <span className="text-primary font-semibold">Censo 2024</span>, 
            <span className="text-primary font-semibold"> PNS</span> e <span className="text-primary font-semibold">PNAD</span>: 
            Onde o direito à educação encontra o deserto do suporte.
          </p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <KPICard
            value="18,28%"
            label="Evasão Neurodivergente"
            sublabel="vs 2,97% Geral"
            variant="critical"
            icon={TrendingDown}
            delay={0.2}
          />
          <KPICard
            value="91,06%"
            label="Abandono na Maioridade"
            sublabel="Pós 18 anos"
            variant="alert"
            icon={AlertTriangle}
            delay={0.3}
          />
          <KPICard
            value="3,20"
            label="Score Nacional"
            sublabel="Infraestrutura (0-10)"
            variant="oasis"
            icon={BarChart3}
            delay={0.4}
          />
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Explorar dados</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
