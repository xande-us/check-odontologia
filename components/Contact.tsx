"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Instagram, Clock, Send, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "5521976208291";
const WHATSAPP_DISPLAY = "(21) 97620-8291";
const INSTAGRAM_HANDLE = "@dr.pablobarros";
const INSTAGRAM_URL = "https://instagram.com/dr.pablobarros";
const CLINIC_ADDRESS_LINE_1 = "Av. Paranapuã, 1.680 — Sala 307";
const CLINIC_ADDRESS_LINE_2 = "Tauá, Ilha do Governador — Rio de Janeiro/RJ";

const contactInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    value: CLINIC_ADDRESS_LINE_1,
    sub: CLINIC_ADDRESS_LINE_2,
  },
  {
    icon: Phone,
    label: "Telefone & WhatsApp",
    value: WHATSAPP_DISPLAY,
    sub: "Atendimento direto pelo WhatsApp",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: INSTAGRAM_HANDLE,
    sub: "Siga e acompanhe nossos conteúdos",
  },
  {
    icon: Clock,
    label: "Horário de Funcionamento",
    value: "Seg–Sex: 8h às 19h",
    sub: "Sábado: 8h às 13h",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-header",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-header", start: "top 90%", once: true },
        }
      );

      gsap.set(".contact-form-col", { opacity: 0, y: 30 });
      gsap.to(".contact-form-col", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-form-col", start: "top 85%", once: true },
      });

      // Info cards — these were the ones stuck invisible on mobile
      gsap.set(".contact-info-item", { opacity: 0, y: 16 });
      gsap.to(".contact-info-item", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".contact-info-grid",
          start: "top 90%",
          once: true,
        },
      });

      gsap.set(".contact-whatsapp", { opacity: 0, y: 16, scale: 0.96 });
      gsap.to(".contact-whatsapp", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".contact-whatsapp",
          start: "top 95%",
          once: true,
        },
      });
    }, sectionRef);

    const t1 = window.setTimeout(() => ScrollTrigger.refresh(), 50);
    const t2 = window.setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      ctx.revert();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-brand-lighter border border-gray-200 rounded-xl px-4 py-3 font-body text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 transition-all duration-200";

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="py-10 sm:py-20 lg:py-28 bg-brand-lighter relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-light/60 rounded-full -translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-light/40 rounded-full translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Header */}
        <div className="contact-header text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-0.5 w-10 bg-brand-accent rounded-full" />
            <span className="font-body text-xs sm:text-sm font-semibold text-brand-accent tracking-widest uppercase">
              Contato
            </span>
            <div className="h-0.5 w-10 bg-brand-accent rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl xl:text-5xl text-gray-900 leading-tight mb-3 sm:mb-4 text-balance">
            Agende sua{" "}
            <span className="text-brand-primary">consulta</span>
          </h2>
          <p className="font-body text-sm sm:text-lg text-gray-500 max-w-lg mx-auto">
            Preencha o formulário ou chame direto no WhatsApp — respondemos
            rápido para você marcar seu horário.
          </p>
        </div>

        {/* Form — centered */}
        <div className="contact-form-col">
          <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-gray-100">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900">
                  Mensagem enviada!
                </h3>
                <p className="font-body text-gray-500 max-w-sm">
                  Recebemos seu contato. Em breve nosso time falará com você
                  para agendar sua consulta.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 font-body text-sm text-brand-primary hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 max-w-2xl mx-auto"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-semibold text-gray-500 mb-1.5 block uppercase tracking-wide">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="João da Silva"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-gray-500 mb-1.5 block uppercase tracking-wide">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(21) 99999-9999"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-semibold text-gray-500 mb-1.5 block uppercase tracking-wide">
                    Serviço de interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Selecione um serviço</option>
                    <option>Limpeza & Profilaxia</option>
                    <option>Restauração / Obturação</option>
                    <option>Clareamento Dental</option>
                    <option>Tratamento de Canal</option>
                    <option>Estética / Facetas</option>
                    <option>Implantes & Próteses</option>
                    <option>Avaliação Geral</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs font-semibold text-gray-500 mb-1.5 block uppercase tracking-wide">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Conte-nos um pouco sobre o que você precisa..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-heading font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-brand-primary/25 hover:-translate-y-px mt-1"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </button>

                <p className="text-center font-body text-xs text-gray-400">
                  Resposta rápida — entraremos em contato em breve.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* WhatsApp CTA — centered below form */}
        <div className="contact-whatsapp mt-3 sm:mt-6 flex justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-px text-sm sm:text-base"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar no WhatsApp agora
          </a>
        </div>

        {/* Contact info — centered grid */}
        <div className="contact-info-grid grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-12 max-w-3xl mx-auto">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            const isInstagram = info.label === "Instagram";
            const isPhone = info.label === "Telefone & WhatsApp";
            const Wrapper = (props: { children: React.ReactNode }) =>
              isInstagram ? (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-item flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-brand-light hover:shadow-sm transition-all duration-200 text-left"
                >
                  {props.children}
                </a>
              ) : isPhone ? (
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="contact-info-item flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-brand-light hover:shadow-sm transition-all duration-200 text-left"
                >
                  {props.children}
                </a>
              ) : (
                <div className="contact-info-item flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:border-brand-light hover:shadow-sm transition-all duration-200 text-left">
                  {props.children}
                </div>
              );

            return (
              <Wrapper key={i}>
                <div className="w-11 h-11 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-primary" />
                </div>
                <div className="min-w-0">
                  <div className="font-body text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">
                    {info.label}
                  </div>
                  <div className="font-heading font-semibold text-sm text-gray-900 break-words">
                    {info.value}
                  </div>
                  <div className="font-body text-xs text-gray-500 mt-0.5">
                    {info.sub}
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
