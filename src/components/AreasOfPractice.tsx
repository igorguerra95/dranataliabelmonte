import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Activity, 
  Sparkles, 
  HeartHandshake, 
  Compass, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Filter,
  Calendar
} from 'lucide-react';
import { CLINICAL_AREAS } from '../data/clinicalData';
import { ClinicalArea } from '../types';

interface AreasProps {
  onSelectAreaForBooking: (areaTitle: string) => void;
}

export const AreasOfPractice: React.FC<AreasProps> = ({ onSelectAreaForBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'neuro' | 'emocional' | 'relacoes'>('todos');
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#B38728]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#BE185D]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#BE185D]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#B38728]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#BE185D]" />;
      default:
        return <Brain className="w-6 h-6 text-[#B38728]" />;
    }
  };

  const filteredAreas = activeFilter === 'todos' 
    ? CLINICAL_AREAS 
    : CLINICAL_AREAS.filter(area => area.category === activeFilter);

  return (
    <section id="areas" className="py-20 lg:py-32 bg-[#F6F1EC]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#D4AF37]/30 text-[#8C6D1F] mb-4 shadow-sm">
            <span>Cuidado Especializado &bull; Baseado em Evidências</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-5">
            Áreas de Atuação &amp; Protocolos Clínicos
          </h2>
          <p className="text-base sm:text-lg text-[#4A3E45] font-light leading-relaxed">
            Cada mente é única. Através de métodos validados pela neurociência e pela psicoterapia cognitivo-comportamental, oferecemos intervenções sob medida para aliviar o sofrimento psíquico e restabelecer sua funcionalidade.
          </p>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter('todos')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === 'todos'
                  ? 'bg-[#2B1E24] text-white shadow-md'
                  : 'bg-white text-[#4A3E45] hover:bg-[#FAF5E8] border border-[#EADBCE]'
              }`}
            >
              Todas as Especialidades ({CLINICAL_AREAS.length})
            </button>
            <button
              onClick={() => setActiveFilter('neuro')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === 'neuro'
                  ? 'bg-[#B38728] text-white shadow-md'
                  : 'bg-white text-[#4A3E45] hover:bg-[#FAF5E8] border border-[#EADBCE]'
              }`}
            >
              Neuropsicologia &amp; Cognição
            </button>
            <button
              onClick={() => setActiveFilter('emocional')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === 'emocional'
                  ? 'bg-[#BE185D] text-white shadow-md'
                  : 'bg-white text-[#4A3E45] hover:bg-[#FAF5E8] border border-[#EADBCE]'
              }`}
            >
              Ansiedade, Depressão &amp; Humor
            </button>
            <button
              onClick={() => setActiveFilter('relacoes')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeFilter === 'relacoes'
                  ? 'bg-[#8C6D1F] text-white shadow-md'
                  : 'bg-white text-[#4A3E45] hover:bg-[#FAF5E8] border border-[#EADBCE]'
              }`}
            >
              Terapia de Casal &amp; Relações
            </button>
          </div>
        </div>

        {/* Grid de Cards de Especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredAreas.map((area: ClinicalArea) => {
              const isExpanded = expandedArea === area.id;

              return (
                <motion.div
                  key={area.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-7 border border-[#EADBCE]/80 hover:border-[#D4AF37]/60 shadow-[0_4px_25px_rgba(43,30,36,0.04)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.12)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Topo do Card: Ícone e Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-[#FAF5E8] flex items-center justify-center p-3 border border-[#D4AF37]/20 group-hover:scale-105 transition-transform">
                        {getIcon(area.icon)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#BE185D] bg-[#FDF2F8] px-2.5 py-1 rounded-full border border-[#F472B6]/25">
                        {area.badge}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="font-serif text-2xl font-semibold text-[#2B1E24] mb-3 group-hover:text-[#BE185D] transition-colors leading-snug">
                      {area.title}
                    </h3>

                    {/* Descrição Curta */}
                    <p className="text-sm text-[#4A3E45] font-light leading-relaxed mb-5">
                      {area.shortDesc}
                    </p>

                    {/* Sintomas e Queixas Comuns */}
                    <div className="mb-6 pt-4 border-t border-[#F6F1EC]">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#B38728] mb-3 flex items-center gap-1.5">
                        <span>Principais queixas acolhidas:</span>
                      </p>
                      <ul className="space-y-2">
                        {area.symptoms.slice(0, 3).map((symptom, sIdx) => (
                          <li key={sIdx} className="text-xs text-[#4A3E45] flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Detalhamento Expandível */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-6 pt-4 border-t border-[#F6F1EC] text-xs text-[#4A3E45] space-y-3"
                      >
                        <p className="leading-relaxed bg-[#FAF7F5] p-3 rounded-xl border border-[#EADBCE]">
                          {area.fullDesc}
                        </p>
                        <div>
                          <p className="font-bold text-[#BE185D] mb-1.5 uppercase text-[10px] tracking-wider">
                            Benefícios Terapêuticos:
                          </p>
                          <ul className="space-y-1.5">
                            {area.benefits.map((benefit, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-1.5">
                                <span className="text-[#BE185D] font-bold">&bull;</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Ações do Card */}
                  <div className="pt-5 border-t border-[#F6F1EC] flex flex-col gap-2 mt-4">
                    <button
                      onClick={() => onSelectAreaForBooking(area.title)}
                      className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] to-[#D4AF37] hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Agendar Consulta</span>
                    </button>

                    <button
                      onClick={() => setExpandedArea(isExpanded ? null : area.id)}
                      className="text-xs font-medium text-[#786C73] hover:text-[#BE185D] transition-colors py-1 cursor-pointer flex items-center justify-center gap-1"
                    >
                      <span>{isExpanded ? 'Ver menos detalhes' : 'Ver mais informações'}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Faixa Informativa Inferior sobre Encaminhamentos */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5E8] flex items-center justify-center text-[#B38728] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif text-lg sm:text-xl font-bold text-[#2B1E24]">
                Dúvidas sobre qual especialidade escolher?
              </p>
              <p className="text-xs sm:text-sm text-[#4A3E45]">
                Na primeira consulta realizamos a triagem clínica completa para indicar o melhor protocolo para você.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectAreaForBooking('Dúvida sobre especialidade / Triagem Inicial')}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#2B1E24] bg-[#FAF5E8] hover:bg-[#F472B6]/20 border border-[#D4AF37]/50 transition-all cursor-pointer"
          >
            Conversar com a Especialista
          </button>
        </div>

      </div>
    </section>
  );
};
