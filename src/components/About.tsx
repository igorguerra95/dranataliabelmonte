import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  GraduationCap, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Calendar,
  MessageSquare
} from 'lucide-react';
import { CONTACT_INFO } from '../data/clinicalData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Graduação em Psicologia',
      desc: 'Formação com ênfase em processos clínicos e psicopatologia geral.'
    },
    {
      icon: Award,
      title: 'Especialista em Neuropsicologia Clínica',
      desc: 'Habilitação técnica para testagem neurocognitiva, laudos e reabilitação cerebral.'
    },
    {
      icon: BookOpen,
      title: 'Aperfeiçoamento em TCC',
      desc: 'Terapia Cognitivo-Comportamental baseada em evidências para transtornos de ansiedade e humor.'
    },
    {
      icon: ShieldCheck,
      title: 'Membro Regular do CFP',
      desc: `${CONTACT_INFO.crp} — Atuação ética, sigilosa e com atualização científica contínua.`
    }
  ];

  const values = [
    {
      title: 'Acolhimento Sem Julgamentos',
      text: 'Um refúgio seguro onde todas as suas vulnerabilidades, medos e pensamentos mais difíceis são recebidos com empatia profunda e respeito absoluto.'
    },
    {
      title: 'Rigor Científico Aplicado',
      text: 'Nenhuma técnica utilizada em sessão é fruto de modismos passageiros. Trabalhamos exclusivamente com intervenções validadas pela comunidade científica internacional.'
    },
    {
      title: 'Autonomia Emocional como Meta',
      text: 'O propósito da terapia não é torná-lo dependente do consultório, mas capacitá-lo com ferramentas cognitivas para que você governe a própria vida com serenidade.'
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#FAF7F5] relative overflow-hidden">
      {/* Detalhes de Fundo */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#F472B6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco 1: Grid Biográfico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Imagem e Credencial (5 colunas) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Moldura com Textura e Borda Dourada */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-[#FAF5E8] via-white to-[#FDF2F8] shadow-[0_20px_50px_rgba(43,30,36,0.08)] border border-[#D4AF37]/40">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-[#F6F1EC]">
                  <img
                    src="https://images.unsplash.com/photo-1594824813580-c1195655781a?auto=format&fit=crop&w=900&q=85"
                    alt="Dra. Natalia Belmonte em atendimento clínico"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Selo de Registro Profissional */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md py-3 px-5 rounded-2xl shadow-xl border border-[#D4AF37]/30 text-center">
                  <p className="font-serif text-lg font-bold text-[#2B1E24]">
                    Natalia Belmonte
                  </p>
                  <p className="text-xs text-[#BE185D] font-bold tracking-widest uppercase">
                    {CONTACT_INFO.crp} &bull; Belém - PA
                  </p>
                </div>
              </div>

              {/* Box Flutuante de Filosofia */}
              <div className="mt-12 bg-white/90 p-5 rounded-2xl border border-[#EADBCE] shadow-sm">
                <p className="font-serif italic text-sm text-[#4A3E45] leading-relaxed text-center">
                  &ldquo;A mente humana não precisa de fórmulas mágicas, mas de compreensão profunda, método científico e um espaço onde a dor seja finalmente escutada.&rdquo;
                </p>
              </div>

            </div>
          </div>

          {/* Coluna de Texto e Trajetória (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#F472B6]/40 text-[#BE185D] mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trajetória Clínica &amp; Abordagem Humanizada</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-6">
              Uma escuta fundamentada na ciência, dedicada à sua individualidade.
            </h2>

            <div className="space-y-4 text-base text-[#4A3E45] font-light leading-relaxed">
              <p>
                Ao longo de mais de uma década dedicada aos estudos da psique e do cérebro, percebi que a maior barreira para a recuperação emocional é o sentimento de isolamento: acreditar que a dor é um sinal de fraqueza pessoal.
              </p>
              <p>
                Como <strong className="font-semibold text-[#2B1E24]">Neuropsicóloga e Psicóloga Clínica</strong>, trago para o consultório a ponte entre a biologia cerebral e a vivência subjetiva. Quando entendemos como a ansiedade ativa a amígdala ou de que forma o estresse prolongado afeta o córtex pré-frontal, o sofrimento deixa de ser um mistério culposo e se torna algo compreensível, mapeável e tratável.
              </p>
              <p>
                Em meu consultório na Pedreira em Belém ou através dos atendimentos online, você encontra um ambiente acolhedor, pontual e rigorosamente confidencial, desenhado para que você se sinta seguro desde o primeiro instante.
              </p>
            </div>

            {/* Grid de Formação e Credenciais */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#EADBCE]/70 hover:border-[#D4AF37]/40 shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF5E8] flex items-center justify-center text-[#B38728] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-semibold text-xs text-[#2B1E24] leading-snug">
                        {cred.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#786C73] leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Botão de Contato */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-[#786C73]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Atendimento presencial em Belém &amp; Online</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bloco 2: Pilares da Prática Clínica */}
        <div className="mt-20 pt-16 border-t border-[#EADBCE]/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2B1E24] mb-3">
              Os 3 Pilares do Meu Atendimento
            </h3>
            <p className="text-sm text-[#4A3E45]">
              Princípios que guiam cada sessão, cada avaliação e cada laudo emitido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#EADBCE]/80 hover:border-[#F472B6]/40 shadow-[0_4px_20px_rgba(43,30,36,0.03)] hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#FDF2F8] text-[#BE185D] flex items-center justify-center font-serif text-lg font-bold mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-serif text-xl font-bold text-[#2B1E24] mb-3">
                  {val.title}
                </h4>
                <p className="text-sm text-[#4A3E45] font-light leading-relaxed">
                  {val.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
