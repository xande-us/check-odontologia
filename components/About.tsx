"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Zap, ShieldCheck, Users as UsersIcon, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Dr. Pablo Barros photo at /public/assets/dr-pablo-barros.jpg
// (drop a portrait there and it will render in the right-side frame)

const values = [
  {
    icon: ShieldCheck,
    color: "text-brand-primary",
    bg: "bg-brand-light",
    title: "Confiança",
    desc: "Transparência em cada etapa — você entende tudo o que será feito.",
  },
  {
    icon: Zap,
    color: "text-brand-secondary",
    bg: "bg-brand-lighter",
    title: "Tecnologia",
    desc: "Equipamentos modernos para resultados precisos e duradouros.",
  },
  {
    icon: Heart,
    color: "text-brand-accent",
    bg: "bg-[#6EAA3A]/10",
    title: "Cuidado Humano",
    desc: "Empatia, atenção e respeito em cada visita à clínica.",
  },
  {
    icon: UsersIcon,
    color: "text-brand-primary",
    bg: "bg-brand-light",
    title: "Dedicação Total",
    desc: "Atendimento personalizado focado nas suas reais necessidades.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header bits
      gsap.fromTo(
        ".about-label",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-label", start: "top 90%", once: true },
        }
      );

      gsap.fromTo(
        ".about-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-heading", start: "top 90%", once: true },
        }
      );

      // Text column — set first, then animate (avoids stuck-invisible bug)
      gsap.set(".about-text-col", { opacity: 0, x: -30 });
      gsap.to(".about-text-col", {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-text-col", start: "top 85%", once: true },
      });

      // Visual column
      gsap.set(".about-visual-col", { opacity: 0, x: 30 });
      gsap.to(".about-visual-col", {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about-visual-col", start: "top 85%", once: true },
      });

      // Value cards (the formerly invisible ones)
      gsap.set(".value-card", { opacity: 0, y: 32 });
      gsap.to(".value-card", {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".values-grid", start: "top 90%", once: true },
      });

      gsap.fromTo(
        ".about-deco-bar",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-deco-bar", start: "top 95%", once: true },
        }
      );
    }, sectionRef);

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
      id="sobre"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lighter rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="about-label flex items-center gap-3 mb-3">
          <div className="about-deco-bar h-0.5 w-12 bg-brand-accent rounded-full" />
          <span className="font-body text-sm font-semibold text-brand-accent tracking-widest uppercase">
            Sobre Nós
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Text */}
          <div className="about-text-col">
            <h2 className="about-heading font-heading font-bold text-4xl xl:text-5xl text-gray-900 leading-tight mb-6">
              Uma clínica feita para{" "}
              <span className="text-brand-primary">cuidar de você</span>
            </h2>

            <p className="font-body text-lg text-gray-600 leading-relaxed mb-5">
              A Check Odontologia nasceu para mudar a relação das pessoas com o
              dentista. Aqui você encontra ambiente acolhedor, equipamentos
              modernos e um time que coloca o seu conforto acima de tudo.
            </p>
            <p className="font-body text-base text-gray-500 leading-relaxed mb-8">
              Sob a direção do{" "}
              <span className="font-semibold text-brand-primary">
                Dr. Pablo Barros
              </span>
              , combinamos rigor técnico, formação contínua e um padrão de
              atendimento humanizado para entregar sorrisos saudáveis,
              naturais e duradouros — sem dor, sem espera e sem surpresas.
            </p>

            <div className="values-grid grid grid-cols-2 gap-4 mb-8">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div
                    key={i}
                    className="value-card bg-white border border-gray-100 rounded-2xl p-4 hover:border-brand-light hover:shadow-md transition-all duration-300 group"
                  >
                    <div
                      className={`w-10 h-10 ${v.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className={`w-4 h-4 ${v.color}`} />
                    </div>
                    <h3 className="font-heading font-bold text-sm text-gray-900 mb-1">
                      {v.title}
                    </h3>
                    <p className="font-body text-xs text-gray-500 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href="#servicos"
              className="inline-flex items-center gap-2 font-heading font-semibold text-brand-primary hover:text-brand-secondary transition-colors text-base group"
            >
              Conheça nossos serviços
              <span className="w-6 h-6 rounded-full bg-brand-light flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 6h8M6 2l4 4-4 4" />
                </svg>
              </span>
            </a>
          </div>

          {/* Right: Dr. Pablo Barros image + credential */}
          <div className="about-visual-col">
            <div className="relative">
              {/* Soft background frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-brand-light via-brand-lighter to-white rounded-[2rem] -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-primary/8 rounded-2xl -z-10" />

              {/* Image frame */}
              <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-brand-lighter to-brand-light rounded-[1.75rem] overflow-hidden shadow-xl shadow-brand-primary/10 border border-white">
                <img
                  src="/assets/dr-pablo-barros.jpg"
                  alt="Dr. Pablo Barros — Diretor clínico da Check Odontologia"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 pt-12">
                  <div className="font-heading font-bold text-xl text-white leading-tight">
                    Dr. Pablo Barros
                  </div>
                  <div className="font-body text-sm text-white/85 mt-1">
                    Diretor Clínico • Check Odontologia
                  </div>
                </div>
              </div>

              {/* CRO credential badge */}
              <div className="mt-5 bg-brand-lighter rounded-2xl p-4 flex items-center gap-4 border border-brand-light">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-gray-900">
                    Credenciado pelo CRO-RJ
                  </div>
                  <div className="font-body text-xs text-gray-500 mt-0.5">
                    Registro CRO-RJ 49212 • Responsável técnico da clínica
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
