"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Smile,
  Sparkles,
  Activity,
  Layers,
  Sun,
  Brush,
  Wrench,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  // ── Highlighted main services ──
  {
    icon: Activity,
    accent: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    title: "Endodontia",
    desc: "Tratamento de canal moderno, indolor e com altíssima taxa de sucesso. Você sai aliviado e com o dente preservado.",
    detail: "Tratamento sem dor",
    highlight: true,
  },
  {
    icon: Wrench,
    accent: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    title: "Implantes Dentários",
    desc: "Reposição de dentes com implantes de titânio integrados ao osso. Estética natural e função plena de volta.",
    detail: "Planejamento digital 3D",
    highlight: true,
  },
  {
    icon: Layers,
    accent: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    title: "Próteses Dentárias",
    desc: "Próteses fixas, removíveis ou sobre implantes feitas sob medida — conforto, naturalidade e durabilidade.",
    detail: "Sob medida para você",
    highlight: true,
  },
  // ── Other core services ──
  {
    icon: Brush,
    accent: "bg-brand-light",
    iconColor: "text-brand-secondary",
    title: "Limpeza & Profilaxia",
    desc: "Higienização profissional completa, remoção de tártaro e aplicação de flúor para uma boca saudável.",
    detail: "Resultado imediato",
    highlight: false,
  },
  {
    icon: Sparkles,
    accent: "bg-brand-light",
    iconColor: "text-brand-secondary",
    title: "Restauração Estética",
    desc: "Tratamento de cáries com resinas estéticas de alta resistência. Restaurações imperceptíveis e duradouras.",
    detail: "Materiais de ponta",
    highlight: false,
  },
  {
    icon: Sun,
    accent: "bg-brand-light",
    iconColor: "text-brand-secondary",
    title: "Clareamento Dental",
    desc: "Sorrisos visivelmente mais brancos em poucas sessões, com técnica segura e sem sensibilidade.",
    detail: "Até 8 tons mais branco",
    highlight: false,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".svc-header",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc-header",
            start: "top 90%",
            once: true,
          },
        }
      );

      // Set initial state explicitly so cards never get stuck invisible
      gsap.set(".svc-card", { opacity: 0, y: 40 });

      // Cards stagger in on scroll
      gsap.to(".svc-card", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: { amount: 0.55, grid: [2, 3], from: "start" },
        scrollTrigger: {
          trigger: ".svc-grid",
          start: "top 90%",
          once: true,
        },
      });

      // CTA
      gsap.fromTo(
        ".svc-cta",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".svc-cta",
            start: "top 95%",
            once: true,
          },
        }
      );
    }, sectionRef);

    // Make sure ScrollTrigger has correct positions after the React tree settles
    const t1 = window.setTimeout(() => ScrollTrigger.refresh(), 50);
    const t2 = window.setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="py-24 lg:py-32 bg-brand-lighter relative overflow-hidden"
    >
      {/* Subtle bg decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-light/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="svc-header text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-0.5 w-10 bg-brand-accent rounded-full" />
            <span className="font-body text-sm font-semibold text-brand-accent tracking-widest uppercase">
              Nossos Serviços
            </span>
            <div className="h-0.5 w-10 bg-brand-accent rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-4xl xl:text-5xl text-gray-900 leading-tight mb-4 text-balance">
            Tratamentos modernos para{" "}
            <span className="text-brand-primary">cada necessidade</span>
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-xl mx-auto">
            Da prevenção à reabilitação completa — atendimento técnico, seguro
            e personalizado em um só lugar.
          </p>
        </div>

        {/* 2 × 3 Grid */}
        <div className="svc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`svc-card group relative bg-white rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                  s.highlight
                    ? "border-brand-primary/15 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/8"
                    : "border-gray-100 hover:border-brand-light hover:shadow-lg hover:shadow-brand-primary/6"
                }`}
              >
                {/* Highlight ribbon */}
                {s.highlight && (
                  <span className="absolute top-5 right-5 inline-flex items-center gap-1 bg-brand-accent/10 text-brand-accent font-heading font-semibold text-[10px] px-2 py-1 rounded-full uppercase tracking-wider">
                    Destaque
                  </span>
                )}

                <div
                  className={`w-14 h-14 ${s.accent} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className={`w-6 h-6 ${s.iconColor}`} />
                </div>

                <h3 className="font-heading font-bold text-lg text-gray-900 mb-2.5 leading-snug">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed mb-5">
                  {s.desc}
                </p>

                <div className="pt-4 border-t border-gray-50">
                  <span className="font-body text-xs text-brand-accent font-semibold">
                    {s.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="svc-cta text-center mt-12">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-heading font-semibold px-8 py-4 rounded-xl hover:bg-brand-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-primary/25 hover:-translate-y-px"
          >
            Agendar Consulta
            <Smile className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
