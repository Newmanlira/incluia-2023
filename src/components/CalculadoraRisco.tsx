import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Calculator, AlertTriangle, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

export const CalculadoraRisco = () => {
  const [resultado, setResultado] = useState<number | null>(null);

  const getAlertStyles = (val: number) => {
    if (val <= 30) return 'border-green-500 bg-green-500/10 text-green-500'; // Verde
    if (val <= 50) return 'border-yellow-400 bg-yellow-400/10 text-yellow-400'; // Amarelo Claro
    if (val <= 70) return 'border-orange-500 bg-orange-500/10 text-orange-500'; // Laranja
    return 'border-red-600 bg-red-600/10 text-red-600'; // Vermelho
  };

  const getStatusText = (val: number) => {
    if (val > 70) return "NÍVEL CRÍTICO: O sistema falha gravemente em prover suporte, tornando a exclusão quase inevitável.";
    if (val > 50) return "RISCO ACENTUADO: Barreiras estruturais e socioeconômicas tornam a permanência improvável.";
    if (val > 30) return "ATENÇÃO: Vulnerabilidades detectadas exigem intervenção e suporte imediato.";
    return "NÍVEL ESTÁVEL: O suporte institucional presente atua como um fator real de retenção.";
  };

  const handleCalcular = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    
    const monitor = data.get('monitor') === 'sim';
    const aee = data.get('aee') === 'sim';
    const ciclo = data.get('ciclo');
    const renda = data.get('renda');
    const cor = data.get('cor');
    const banheiro = data.get('banheiro') === 'sim';
    const rampa = data.get('rampa') === 'sim';

    let risco = 0;

    // 1. GATILHO CRÍTICO (Item 8.4)
    if (!monitor && !aee && ciclo === 'medio') {
      risco = 91.2; 
    } else {
      // 2. LÓGICA DE EMPILHAMENTO (Itens 2, 12 e 13)
      if (ciclo === 'medio') risco += 21.98;
      else if (ciclo === 'f2') risco += 14.29;
      else risco += 11.32;

      if (renda === 'baixa') risco += 21.63;
      else if (renda === 'media') risco += 13.0;
      else risco += 5.88;

      if (cor === 'indigena') risco += 46.67;
      else if (cor === 'preta') risco += 19.25;
      else if (cor === 'parda') risco += 18.22;
      else if (cor === 'amarela') risco += 22.22;
      else risco += 18.43;

      // Fatores de Proteção
      if (monitor) risco -= 15;
      if (aee) risco -= 10;
      if (banheiro) risco -= 5;
      if (rampa) risco -= 5;
    }

    const finalScore = Math.min(Math.max(risco, 5), 99);
    setResultado(finalScore);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-card p-8 border-primary/30 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-black">Simulador de Exclusão Silenciosa</h2>
        </div>

        <form onSubmit={handleCalcular} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-tighter">Ciclo Escolar</label>
            <select name="ciclo" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="f1">Fundamental I (5-10 anos)</option>
              <option value="f2">Fundamental II (11-14 anos)</option>
              <option value="medio">Ensino Médio (15-18 anos)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-tighter">Cor/Raça Autodeclarada</label>
            <select name="cor" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="branca">Branca</option>
              <option value="preta">Preta</option>
              <option value="parda">Parda</option>
              <option value="indigena">Indígena</option>
              <option value="amarela">Amarela</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-tighter">Renda Familiar Mensal</label>
            <select name="renda" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="baixa">Até 1 Salário Mínimo</option>
              <option value="media">Entre 1 e 5 Salários</option>
              <option value="alta">Acima de 5 Salários Mínimos</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-tighter">Possui Monitor/Mediador?</label>
            <select name="monitor" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="nao">Não possui suporte humano</option>
              <option value="sim">Sim, acompanha o aluno</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-tighter">Sala de Recursos (AEE)?</label>
            <select name="aee" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="nao">Não possui</option>
              <option value="sim">Sim, a escola possui</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-tighter">Banheiro Adaptado (PNE)?</label>
            <select name="banheiro" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="nao">Não possui</option>
              <option value="sim">Sim, possui</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-tighter">Rampas/Acessibilidade?</label>
            <select name="rampa" className="w-full p-2 bg-secondary rounded-md border border-border">
              <option value="nao">Não possui</option>
              <option value="sim">Sim, possui</option>
            </select>
          </div>

          <button type="submit" className="md:col-span-2 bg-primary hover:bg-primary/90 text-primary-foreground font-black py-4 rounded-xl transition-all uppercase">
            Simular Risco de Exclusão
          </button>
        </form>

        {resultado !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className={`mt-8 p-6 rounded-xl border-2 transition-colors duration-500 ${getAlertStyles(resultado)}`}
          >
            <div className="flex items-center gap-4">
              {resultado > 70 ? <AlertTriangle className="w-12 h-12" /> : 
               resultado > 30 ? <AlertCircle className="w-12 h-12" /> : 
               <ShieldCheck className="w-12 h-12" />}
              <div>
                <p className="text-sm uppercase font-bold tracking-widest opacity-80">Probabilidade de Exclusão Silenciosa</p>
                <p className="text-5xl font-black">{resultado.toFixed(1)}%</p>
                <p className="text-sm mt-2 font-semibold">
                  {getStatusText(resultado)}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
