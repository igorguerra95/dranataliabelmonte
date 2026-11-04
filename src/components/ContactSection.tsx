import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle,
  Calendar,
  Sparkles
} from 'lucide-react';
import { CONTACT_INFO, CLINICAL_AREAS } from '../data/clinicalData';
import { BookingFormData } from '../types';

interface ContactSectionProps {
  initialArea?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialArea }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    modality: 'Presencial (Belém)',
    areaOfInterest: initialArea || 'Avaliação Neuropsicológica Completa',
    preferredPeriod: 'Tarde',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Gerar link formatado do WhatsApp
    const text = encodeURIComponent(
      `Olá, Dra. Natalia Belmonte! Gostaria de agendar uma consulta:\n\n` +
      `👤 *Nome:* ${formData.fullName}\n` +
      `📞 *Telefone:* ${formData.phone}\n` +
      `📧 *E-mail:* ${formData.email || 'Não informado'}\n` +
      `📍 *Modalidade:* ${formData.modality}\n` +
      `🧠 *Área de Interesse:* ${formData.areaOfInterest}\n` +
      `🕒 *Período Preferido:* ${formData.preferredPeriod}\n` +
      (formData.message ? `💬 *Mensagem/Queixa:* ${formData.message}` : '')
    );

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${text}`;

    setSubmitted(true);
    // Abre WhatsApp em nova aba ou deep link
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-[#F6F1EC]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#D4AF37]/30 text-[#8C6D1F] mb-4 shadow-sm">
            <MessageCircle className="w-3.5 h-3.5 text-[#BE185D]" />
            <span>Atendimento Humanizado &bull; Agendamento</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-4">
            Dê o Primeiro Passo Rumo à Sua Serenidade
          </h2>
          <p className="text-base text-[#4A3E45] font-light leading-relaxed">
            Estamos prontos para acolher sua história. Preencha o formulário abaixo para pré-agendamento ou entre em contato diretamente pelo WhatsApp com a nossa equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Coluna 1: Informações de Contato e Mapa (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card com Dados Oficiais */}
            <div className="bg-white rounded-3xl p-8 border border-[#EADBCE] shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#2B1E24] mb-6">
                Canais de Atendimento
              </h3>

              <div className="space-y-6">
                
                {/* Telefone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF5E8] flex items-center justify-center text-[#B38728] shrink-0 border border-[#D4AF37]/25">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#786C73]">
                      Telefone &amp; WhatsApp Oficial
                    </p>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent('Olá, Dra. Natalia! Gostaria de informações sobre horários de consulta.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#2B1E24] hover:text-[#BE185D] transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <p className="text-[11px] text-[#B38728]">Resposta rápida em horário comercial</p>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FDF2F8] flex items-center justify-center text-[#BE185D] shrink-0 border border-[#F472B6]/25">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#786C73]">
                      Endereço do Consultório
                    </p>
                    <p className="text-sm font-semibold text-[#2B1E24]">
                      {CONTACT_INFO.address}
                    </p>
                    <p className="text-[11px] text-[#786C73]">Bairro Pedreira &bull; Belém - Pará</p>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF5E8] flex items-center justify-center text-[#B38728] shrink-0 border border-[#D4AF37]/25">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#786C73]">
                      Horário de Funcionamento
                    </p>
                    <p className="text-xs sm:text-sm text-[#2B1E24] font-medium leading-relaxed">
                      {CONTACT_INFO.hours}
                    </p>
                    <p className="text-[11px] text-[#786C73]">Atendimento mediante agendamento prévio</p>
                  </div>
                </div>

                {/* Sigilo Profissional */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FDF2F8] flex items-center justify-center text-[#BE185D] shrink-0 border border-[#F472B6]/25">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#786C73]">
                      Registro e Ética Profissional
                    </p>
                    <p className="text-sm font-semibold text-[#2B1E24]">
                      {CONTACT_INFO.crp}
                    </p>
                    <p className="text-[11px] text-[#786C73]">Conselho Regional de Psicologia</p>
                  </div>
                </div>

              </div>

              {/* Botão Direto de WhatsApp */}
              <div className="mt-8 pt-6 border-t border-[#F6F1EC]">
                <a
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent('Olá, Dra. Natalia Belmonte! Gostaria de conversar sobre horários para consulta.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl text-center text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Conversar Agora no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card Visual de Localização em Belém */}
            <div className="bg-white rounded-3xl p-6 border border-[#EADBCE] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2B1E24] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#BE185D]" />
                  Localização Estratégica
                </span>
                <span className="text-[11px] text-[#786C73]">Pedreira &bull; Belém</span>
              </div>
              <p className="text-xs text-[#4A3E45] leading-relaxed mb-4">
                Localizado na Tv. Angustura, em ponto nobre e de fácil acesso na Pedreira, com proximidade a vias arteriais e vagas para estacionar com tranquilidade.
              </p>
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-[#EADBCE] relative bg-[#FAF7F5]">
                {/* Embed OpenStreetMap / Link interativo */}
                <iframe
                  title="Localização Natalia Belmonte Belém"
                  src="https://maps.google.com/maps?q=Travessa+Angustura+Pedreira+Belem+PA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Coluna 2: Formulário Inteligente de Pré-Agendamento (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/35 shadow-[0_10px_40px_rgba(43,30,36,0.06)] relative">
              
              <div className="mb-8">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#BE185D] bg-[#FDF2F8] border border-[#F472B6]/30 inline-block mb-2">
                  Pré-Agendamento Rápido
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1E24]">
                  Solicite Sua Consulta
                </h3>
                <p className="text-xs sm:text-sm text-[#4A3E45] mt-1">
                  Seus dados são confidenciais e protegidos pela LGPD e pelo sigilo do CFP.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-[#FAF5E8]/60 rounded-2xl border border-[#D4AF37]/50 my-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#2B1E24] mb-2">
                    Solicitação Encaminhada!
                  </h4>
                  <p className="text-sm text-[#4A3E45] max-w-md mx-auto mb-6">
                    Sua mensagem foi estruturada e aberta no WhatsApp com a Dra. Natalia Belmonte. Se a janela não abriu automaticamente, clique no botão abaixo para concluir o envio.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full text-xs font-semibold text-[#4A3E45] bg-white border border-[#EADBCE] hover:bg-[#FAF7F5] cursor-pointer"
                    >
                      Preencher Novamente
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Silva"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-[#FAF7F5]/50 focus:bg-white"
                    />
                  </div>

                  {/* Telefone WhatsApp & E-mail */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (91) 98264-4888"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-[#FAF7F5]/50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                        E-mail para Confirmação
                      </label>
                      <input
                        type="email"
                        placeholder="Ex: seuemail@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-[#FAF7F5]/50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Modalidade de Atendimento */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                      Modalidade Preferencial *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modality: 'Presencial (Belém)' })}
                        className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          formData.modality === 'Presencial (Belém)'
                            ? 'bg-[#FAF5E8] border-[#D4AF37] text-[#8C6D1F] shadow-sm'
                            : 'border-[#EADBCE] text-[#4A3E45] hover:bg-[#FAF7F5]'
                        }`}
                      >
                        <MapPin className="w-4 h-4 text-[#D4AF37]" />
                        <span>Presencial (Belém - Pedreira)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modality: 'Online (Google Meet)' })}
                        className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          formData.modality === 'Online (Google Meet)'
                            ? 'bg-[#FDF2F8] border-[#F472B6] text-[#BE185D] shadow-sm'
                            : 'border-[#EADBCE] text-[#4A3E45] hover:bg-[#FAF7F5]'
                        }`}
                      >
                        <ShieldCheck className="w-4 h-4 text-[#BE185D]" />
                        <span>Online (Brasil ou Exterior)</span>
                      </button>
                    </div>
                  </div>

                  {/* Especialidade / Motivo */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                      Área de Interesse Principal *
                    </label>
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-[#FAF7F5]/50 focus:bg-white"
                    >
                      {CLINICAL_AREAS.map((a) => (
                        <option key={a.id} value={a.title}>
                          {a.title}
                        </option>
                      ))}
                      <option value="Dúvida / Triagem Inicial com a Psicóloga">
                        Ainda não tenho certeza (Desejo orientação na primeira sessão)
                      </option>
                    </select>
                  </div>

                  {/* Melhor Período */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                      Melhor Período para as Sessões *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Manhã', 'Tarde', 'Noite'] as const).map((period) => (
                        <button
                          key={period}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredPeriod: period })}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-center ${
                            formData.preferredPeriod === period
                              ? 'bg-[#2B1E24] text-white border-[#2B1E24]'
                              : 'border-[#EADBCE] text-[#4A3E45] hover:bg-[#FAF7F5]'
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mensagem Opcional */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                      Conte brevemente o que você busca (opcional e confidencial)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Estou enfrentando crises constantes de ansiedade e gostaria de saber os horários disponíveis para iniciar..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-[#FAF7F5]/50 focus:bg-white resize-none"
                    />
                  </div>

                  {/* Botão de Envio */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-[0_10px_30px_rgba(190,24,93,0.3)] hover:shadow-[0_15px_40px_rgba(190,24,93,0.45)] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Entrar em contato</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#786C73] text-center pt-2">
                    Ao enviar, você será direcionado para o WhatsApp com a sua solicitação pronta.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
