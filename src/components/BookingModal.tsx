import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Video, CheckCircle2, ShieldCheck, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, CLINICAL_AREAS } from '../data/clinicalData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedArea?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedArea
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    modality: 'Presencial (Belém)',
    areaOfInterest: preselectedArea || 'Avaliação Neuropsicológica Completa',
    preferredPeriod: 'Tarde',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedArea) {
      setFormData(prev => ({ ...prev, areaOfInterest: preselectedArea }));
    }
  }, [preselectedArea]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, Dra. Natalia Belmonte! Gostaria de informações sobre agendamento de consulta:\n\n` +
      `👤 *Nome:* ${formData.fullName}\n` +
      `📞 *Telefone:* ${formData.phone}\n` +
      `📧 *E-mail:* ${formData.email || 'Não informado'}\n` +
      `📍 *Modalidade:* ${formData.modality}\n` +
      `🧠 *Área:* ${formData.areaOfInterest}\n` +
      `🕒 *Período Preferido:* ${formData.preferredPeriod}\n` +
      (formData.message ? `💬 *Mensagem:* ${formData.message}` : '')
    );

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${text}`;
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose} 
      />

      {/* Conteúdo do Modal */}
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-[#D4AF37]/30 z-10 overflow-hidden my-8">
        
        {/* Cabeçalho do Modal */}
        <div className="bg-gradient-to-r from-[#2B1E24] to-[#4A3E45] p-6 text-white flex items-center justify-between border-b border-[#D4AF37]/40">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] block mb-1">
              Atendimento Humanizado &bull; {CONTACT_INFO.crp}
            </span>
            <h3 className="font-serif text-2xl font-bold">
              Agendar Consulta com Natalia Belmonte
            </h3>
            <p className="text-xs text-[#FAF5E8]/80 mt-0.5">
              Presencial em Belém (Pedreira) ou Online via Google Meet
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#2B1E24] mb-2">
                Solicitação Direcionada!
              </h4>
              <p className="text-xs sm:text-sm text-[#4A3E45] leading-relaxed mb-6">
                Abrimos o WhatsApp da Dra. Natalia Belmonte com seus dados pré-preenchidos. Nossa equipe responderá em breve com os horários disponíveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirmar no WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full text-xs font-semibold text-[#4A3E45] bg-[#FAF7F5] border border-[#EADBCE] hover:bg-white cursor-pointer"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Camila Soares"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm bg-[#FAF7F5]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (91) 98264-4888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm bg-[#FAF7F5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Ex: seuemail@dominio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm bg-[#FAF7F5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                  Modalidade *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, modality: 'Presencial (Belém)' })}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      formData.modality === 'Presencial (Belém)'
                        ? 'bg-[#FAF5E8] border-[#D4AF37] text-[#8C6D1F]'
                        : 'border-[#EADBCE] text-[#4A3E45] hover:bg-[#FAF7F5]'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Presencial Belém</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, modality: 'Online (Google Meet)' })}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      formData.modality === 'Online (Google Meet)'
                        ? 'bg-[#FDF2F8] border-[#F472B6] text-[#BE185D]'
                        : 'border-[#EADBCE] text-[#4A3E45] hover:bg-[#FAF7F5]'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>Online Brasil</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                  Área de Interesse *
                </label>
                <select
                  value={formData.areaOfInterest}
                  onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] outline-none text-sm bg-[#FAF7F5]"
                >
                  {CLINICAL_AREAS.map((a) => (
                    <option key={a.id} value={a.title}>
                      {a.title}
                    </option>
                  ))}
                  <option value="Desejo orientação na primeira sessão">
                    Outro / Quero conversar primeiro
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                  Preferência de Turno *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Manhã', 'Tarde', 'Noite'] as const).map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredPeriod: period })}
                      className={`py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
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

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                  Mensagem confidencial (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Conte um pouco sobre sua busca..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] outline-none text-sm bg-[#FAF7F5] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Entrar em contato</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#786C73] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sigilo ético garantido pelo Conselho Federal de Psicologia</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
