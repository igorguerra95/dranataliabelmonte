import React from 'react';
import { ShieldCheck, Phone, MapPin, Mail, Heart, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, CLINICAL_AREAS } from '../data/clinicalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#21161B] text-[#FAF5E8] border-t border-[#D4AF37]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Apresentação e Identidade (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Natalia Belmonte
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Neuropsicóloga &amp; Psicóloga Clínica &bull; {CONTACT_INFO.crp}
            </p>
            <p className="text-xs sm:text-sm text-[#FAF5E8]/70 leading-relaxed font-light max-w-sm">
              Atendimento neuropsicológico e psicoterapia humanizada embasada em evidências científicas. Um espaço seguro para resgatar a sua paz, autonomia e equilíbrio emocional.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Conforme Código de Ética do CFP (Conselho Federal de Psicologia)</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Navegação
            </p>
            <ul className="space-y-2 text-xs text-[#FAF5E8]/80 font-light">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Especialista
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodologia Clínica
                </a>
              </li>
              <li>
                <a href="#espaco" className="hover:text-white transition-colors">
                  Consultório em Belém &amp; Online
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos de Pacientes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato e Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização e Atendimento (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Atendimento &amp; Consultório
            </p>
            <div className="space-y-3 text-xs text-[#FAF5E8]/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="hover:underline text-white font-medium"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                <span>Horários: Segunda a Sexta das 08h às 20h • Sábados das 08h às 13h</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Faixa Ética e Emergências */}
        <div className="py-6 border-b border-white/10 text-xs text-[#FAF5E8]/60 leading-relaxed space-y-2">
          <p className="text-center sm:text-left">
            <strong>Aviso Legal de Emergência:</strong> A psicoterapia e os atendimentos online não constituem serviço de pronto-socorro ou emergência psiquiátrica. Em casos de crises agudas ou ideação suicida, acione imediatamente o <strong>SAMU (192)</strong> ou contate o <strong>CVV (Centro de Valorização da Vida) pelo número 188</strong> (ligação gratuita nacional, 24 horas).
          </p>
          <p className="text-center sm:text-left">
            Atendimento em conformidade com o Código de Ética Profissional do Psicólogo e as Resoluções CFP nº 11/2018 e CFP nº 06/2019.
          </p>
        </div>

        {/* Direitos Autorais e Créditos */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF5E8]/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Natalia Belmonte. Todos os direitos reservados. {CONTACT_INFO.crp}.
          </p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com excelência e cuidado humano</span>
            <Heart className="w-3.5 h-3.5 text-[#F472B6]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
