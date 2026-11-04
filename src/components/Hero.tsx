import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  CheckCircle2, 
  Calendar,
  Brain,
  MapPin
} from 'lucide-react';
import { CONTACT_INFO } from '../data/clinicalData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  const stats = [
    { value: '+1.400', label: 'Sessões Clínicas Realizadas', icon: Sparkles },
    { value: '98%', label: 'Índice de Adesão Terapêutica', icon: Heart },
    { value: '10+', label: 'Anos de Estudo e Prática', icon: Brain },
    { value: '100%', label: 'Sigilo Profissional Ético', icon: ShieldCheck }
  ];

  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-28">
      {/* Elementos Decorativos de Fundo Nobres */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#FDF2F8] via-[#FAF5E8]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#F472B6]/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-[-100px] w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Conteúdo Editorial (7 colunas) */}
          <motion.div
            className="lg:col-span-7 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill Badge Superior */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white border border-[#D4AF37]/30 text-[#8C6D1F] shadow-[0_2px_10px_rgba(212,175,55,0.08)] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                Neurociência Clínica &amp; Acolhimento Humano
              </span>
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold text-[#BE185D] bg-[#FDF2F8] border border-[#F472B6]/25">
                {CONTACT_INFO.crp}
              </span>
            </motion.div>

            {/* Headline Magnético com Clamp 48–96px */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-[#2B1E24] text-[clamp(2.75rem,6vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.03em] mb-6"
            >
              Compreender a sua mente para{' '}
              <span className="italic font-normal text-[#BE185D] relative inline-block">
                reconstruir
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#D4AF37]/50"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0 15 Q 50 0 100 15"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              a sua paz.
            </motion.h1>

            {/* Subheadline Clara e Empática */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#4A3E45] font-light leading-relaxed mb-8 max-w-2xl"
            >
              Olá, sou a <strong className="font-semibold text-[#2B1E24]">Natalia Belmonte</strong>. Unimos o rigor da investigação neuropsicológica a um espaço terapêutico genuinamente seguro, acolhedor e sem julgamentos. Cuidado especializado para ansiedade, depressão, avaliação cognitiva e relações de casal.
            </motion.p>

            {/* Destaques Rápidos em Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-9 max-w-xl">
              <div className="flex items-center gap-2 text-sm text-[#4A3E45] bg-white/70 p-2.5 rounded-xl border border-[#EADBCE]/70">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Consultório em <strong>Belém (Pedreira)</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4A3E45] bg-white/70 p-2.5 rounded-xl border border-[#EADBCE]/70">
                <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0" />
                <span>Atendimento <strong>Online para todo o Brasil</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4A3E45] bg-white/70 p-2.5 rounded-xl border border-[#EADBCE]/70">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Recibo para <strong>Reembolso em Planos</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4A3E45] bg-white/70 p-2.5 rounded-xl border border-[#EADBCE]/70">
                <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0" />
                <span>Terapia Baseada em <strong>Evidências (TCC)</strong></span>
              </div>
            </motion.div>

            {/* Bloco de CTAs de Alta Conversão */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-[0_10px_30px_rgba(190,24,93,0.3)] hover:shadow-[0_15px_40px_rgba(190,24,93,0.45)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#areas"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-[#2B1E24] bg-white border border-[#EADBCE] hover:border-[#D4AF37] hover:bg-[#FAF5E8]/60 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <span>Conhecer Especialidades</span>
              </a>
            </motion.div>

            {/* Aviso de Sigilo e Segurança */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center gap-2 text-xs text-[#786C73]"
            >
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>
                Atendimento 100% confidencial, pautado pelas normas éticas do Conselho Federal de Psicologia.
              </span>
            </motion.div>
          </motion.div>

          {/* Coluna Visual: Composição Nobre & Cards Flutuantes (5 colunas) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura Dourada com Gradiente e Borda Hairline */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-[#FAF5E8] via-white to-[#FDF2F8] shadow-[0_20px_50px_rgba(43,30,36,0.12)] border border-[#D4AF37]/35">
                
                {/* Imagem Principal da Especialista */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#FAF7F5]">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85"
                    alt="Natalia Belmonte Neuropsicóloga e Psicóloga Clínica"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1E24]/70 via-[#2B1E24]/10 to-transparent" />
                  
                  {/* Legenda sobre a foto */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="font-serif text-2xl font-bold">Natalia Belmonte</p>
                    <p className="text-xs text-[#FAF5E8] tracking-wider uppercase font-medium">
                      Neuropsicóloga &bull; {CONTACT_INFO.crp}
                    </p>
                  </div>
                </div>

                {/* Card Flutuante 1: Avaliação Neuropsicológica */}
                <div className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.2)] border border-[#D4AF37]/30 max-w-[210px] hidden sm:block">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF5E8] flex items-center justify-center text-[#B38728] shrink-0">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2B1E24] leading-tight">Mapeamento Cognitivo</p>
                      <p className="text-[10px] text-[#786C73]">Laudos e TDAH Adulto</p>
                    </div>
                  </div>
                </div>

                {/* Card Flutuante 2: Acolhimento Humanizado */}
                <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_30px_rgba(190,24,93,0.18)] border border-[#F472B6]/30 max-w-[230px]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FDF2F8] flex items-center justify-center text-[#BE185D] shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-xs font-bold text-[#2B1E24]">Espaço Seguro</p>
                      </div>
                      <p className="text-[10px] text-[#786C73]">Escuta sem julgamentos</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Tag de Localização */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-[#4A3E45]">
                <MapPin className="w-4 h-4 text-[#BE185D]" />
                <span>Tv. Angustura - Pedreira, Belém - PA &amp; Online</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Faixa de Métricas de Impacto com Grid de 4 Colunas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 lg:mt-24 pt-10 border-t border-[#EADBCE]/80"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#EADBCE]/60 hover:border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(43,30,36,0.03)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5E8] to-[#FDF2F8] flex items-center justify-center mb-3 text-[#B38728] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="font-serif text-3xl sm:text-4xl font-bold text-[#2B1E24] tracking-tight mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4A3E45] font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
