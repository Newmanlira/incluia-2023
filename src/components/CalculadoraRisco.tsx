import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Calculator, AlertTriangle, CheckCircle2 } from "lucide-react";

export const CalculadoraRisco = () => {
  const [resultado, setResultado] = useState<number | null>(null);

  const handleCalcular = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    
    let score = 0;
    // PESOS REAIS EXTRAÍDOS DA AUDITORIA ALGORÍTMICA
    if (data.get('idade') === 'sim') score += 71.08;   // Transição Ensino Médio
    if (data.get('infra') === 'nao') score += 17.86;  // Falta de Sala AEE/Acessibilidade
    if (data.get('renda') === 'baixa') score += 9.74;  // Vulnerabilidade Social
    if (data.get('monitor') === 'nao') score += 1.32;  // Ausência de Monitoria

    setResultado(score);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="glass-card p-8 border-primary/30 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-black">Simulador de Risco Inclu.IA</h2>
        </div>

        <form onSubmit={handleCalcular} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">O aluno está no Ensino Médio?</label>
            <select name="idade" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="nao">Não (Ensino Fundamental)</option>
              <option value="sim">Sim (15 a 18 anos)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Renda Familiar</label>
            <select name="renda" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="alta">Acima de 2 salários mínimos</option>
              <option value="baixa">Até 1 salário mínimo</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Possui Sala de Recursos (AEE)?</label>
            <select name="infra" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="sim">Sim, a escola possui</option>
              <option value="nao">Não possui</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Possui Monitor/Mediador?</label>
            <select name="monitor" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="sim">Sim, acompanha o aluno</option>
              <option value="nao">Não possui suporte humano</option>
            </select>
          </div>

          <button type="submit" className="md:col-span-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl transition-all">
            CALCULAR PROBABILIDADE DE EVASÃO
          </button>
        </form>

        {resultado !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className={`mt-8 p-6 rounded-xl border-2 ${resultado > 50 ? 'border-destructive bg-destructive/10' : 'border-success bg-success/10'}`}
          >
            <div className="flex items-center gap-4">
              {resultado > 50 ? <AlertTriangle className="w-12 h-12 text-destructive" /> : <CheckCircle2 className="w-12 h-12 text-success" />}
              <div>
                <p className="text-sm uppercase font-bold tracking-widest">Risco Estimado</p>
                <p className="text-4xl font-black">{resultado.toFixed(2)}%</p>
                <p className="text-sm mt-2">
                  {resultado > 50 
                    ? "Alerta crítico: A ausência de suporte institucional potencializa o risco de expulsão branca." 
                    : "Risco moderado: A presença de suporte atua como fator de retenção pedagógica."}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
