import React from 'react';
import { 
  MapPin, 
  Video, 
  CheckCircle2, 
  Coffee, 
  VolumeX, 
  Lock, 
  Globe2, 
  ShieldCheck, 
  Calendar,
  Clock
} from 'lucide-react';
import { CONTACT_INFO } from '../data/clinicalData';

interface ModalityProps {
  onOpenBooking: () => void;
}

export const ModalitySection: React.FC<ModalityProps> = ({ onOpenBooking }) => {
  return (
    <section id="espaco" className="py-20 lg:py-32 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#F472B6]/30 text-[#BE185D] mb-4 shadow-sm">
            Flexibilidade &amp; Conveniência
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-4">
            Duas Formas de Cuidar da Sua Mente
          </h2>
          <p className="text-base text-[#4A3E45] font-light leading-relaxed">
            Seja no aconchego do nosso consultório privativo em Belém ou no conforto do seu lar através de plataforma criptografada, você recebe o mesmo padrão de excelência clínica e sigilo.
          </p>
        </div>

        {/* Comparativo em 2 Grandes Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Presencial em Belém */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADBCE] hover:border-[#D4AF37]/60 shadow-[0_4px_30px_rgba(43,30,36,0.04)] hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FAF5E8] text-[#8C6D1F] border border-[#D4AF37]/30 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Presencial em Belém
                </span>
                <span className="text-xs text-[#786C73]">Bairro Pedreira</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1E24] mb-4">
                Consultório Privativo e Acolhedor
              </h3>

              <p className="text-sm text-[#4A3E45] font-light leading-relaxed mb-6">
                Um espaço cuidadosamente planejado na Travessa Angustura para ser o seu santuário de descompressão e paz. Isolamento acústico, climatização suave e ambiente que inspira serenidade.
              </p>

              {/* Foto do Ambiente */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                  alt="Consultório acolhedor de Natalia Belmonte em Belém"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {CONTACT_INFO.address}
                </span>
              </div>

              {/* Benefícios Presenciais */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E45]">
                  <VolumeX className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>Isolamento acústico rigoroso para total confidencialidade</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E45]">
                  <Coffee className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>Ambiente climatizado com café especial e água aromatizada</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E45]">
                  <Clock className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>Pontualidade britânica: sem atrasos ou salas de espera cheias</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E45]">
                  <MapPin className="w-4 h-4 text-[#B38728] shrink-0" />
                  <span>Fácil acesso e opções de estacionamento no entorno</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-[#2B1E24] bg-[#FAF5E8] hover:bg-[#D4AF37] hover:text-white border border-[#D4AF37]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta Presencial</span>
            </button>
          </div>

          {/* Card 2: Psicoterapia Online */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADBCE] hover:border-[#BE185D]/60 shadow-[0_4px_30px_rgba(43,30,36,0.04)] hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FDF2F8] text-[#BE185D] border border-[#F472B6]/30 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" />
                  Psicoterapia Online
                </span>
                <span className="text-xs text-[#786C73]">Brasil e Exterior</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1E24] mb-4">
                Terapia Onde Você Estiver
              </h3>

              <p className="text-sm text-[#4A3E45] font-light leading-relaxed mb-6">
                Atendimento por videoconferência com link criptografado de alta resolução. Ideal para quem tem rotina corrida, viaja com frequência ou reside em outras cidades do Brasil e do mundo.
              </p>

              {/* Foto Ilustrativa Online */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=900&q=80"
                  alt="Sessão de psicoterapia online segura com Natalia Belmonte"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#F472B6]" />
                  Google Meet criptografado de ponta a ponta
                </span>
              </div>

              {/* Benefícios Online */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E45]">
                  <Globe2 className="w-4 h-4 text-[#BE185D] shrink-0" />
                  <span>Atendimento a pacientes em todos os estados brasileiros e expatriados</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E45]">
                  <ShieldCheck className="w-4 h-4 text-[#BE185D] shrink-0" />
                  <span>Total conformidade com a Resolução CFP nº 11/2018</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E45]">
                  <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0" />
                  <span>Sem tempo perdido em trânsito: conecte-se do conforto de casa</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4A3E45]">
                  <Lock className="w-4 h-4 text-[#BE185D] shrink-0" />
                  <span>Segurança digital e sigilo absoluto garantidos</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] to-[#F472B6] hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Video className="w-4 h-4" />
              <span>Agendar Consulta Online</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
