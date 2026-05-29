"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scan, Monitor, Cpu, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Clinic photo at /public/assets/clinica-tecnologia.jpg
// (drop a photo there and it will render in the left-side frame)

const technologies = [
  {
    icon: Scan,
    number: "01",
    title: "Scanner Intraoral 3D",
    desc: "Moldagem digital sem gel, sem desconforto e com resultado instantâneo na tela.",
    highlight: "Precisão de 7 microns",
    color: "border-brand-primary/15",
    iconBg: "bg-brand-light",
    iconColor: "text-brand-primary",
  },
  {
    icon: Monitor,
    number: "02",
    title: "Radiografia Digital 3D",
    desc: "Diagnóstico cone beam com 90% menos radiação que o RX convencional.",
    highlight: "90% menos radiação",
    color: "border-brand-secondary/15",
    iconBg: "bg-brand-lighter",
    iconColor: "text-brand-secondary",
  },
  {
    icon: Cpu,
    number: "03",
    title: "CAD/CAM — Prótese Digital",
    desc: "Coroas, inlays e facetas em cerâmica de alta resistência, com encaixe perfeito.",
    highlight: "Prótese em 1 visita",
    color: "border-brand-accent/20",
    iconBg: "bg-[#6EAA3A]/10",
    iconColor: "text-brand-accent",
  },
  {
    icon: Zap,
    number: "04",
    title: "Laser Odontológico",
    desc: "Procedimentos menos invasivos, sem bisturi e com cicatrização acelerada.",
    highlight: "Sem bisturi",
    color: "border-brand-primary/15",
    iconBg: "bg-brand-light",
    iconColor: "text-brand-primary",
  },
];

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        ".tech-header",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".tech-header", start: "top 90%", once: true },
        }
      );

      // Robust setup for items
      gsap.set(".tech-item", { opacity: 0, x: 30 });
      gsap.to(".tech-item", {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.13,
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 85%",
          once: true,
        },
      });

      // Photo column
      gsap.set(".tech-visual-col", { opacity: 0, x: -30 });
      gsap.to(".tech-visual-col", {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-visual-col",
          start: "top 85%",
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

  return (
    <section
      ref={sectionRef}
      id="tecnologia"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-lighter/70 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* ── LEFT: Clinic photo ───────────────────────────── */}
          <div className="tech-visual-col relative w-full order-2 lg:order-1">
            {/* Decorative shapes */}
            <div className="absolute -inset-3 bg-gradient-to-br from-brand-light via-brand-lighter to-white rounded-[2rem] -z-10" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-brand-accent/15 rounded-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-primary/8 rounded-2xl -z-10" />

            {/* Image frame (4:5 portrait) */}
            <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-brand-lighter to-brand-light rounded-[1.75rem] overflow-hidden shadow-2xl shadow-brand-primary/15 border border-white">
              <img
                src="/assets/clinica-tecnologia.jpg"
                alt="Tecnologia da Check Odontologia"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent p-6 pt-16">
                <div className="font-heading font-bold text-lg text-white leading-tight">
                  Equipamentos modernos
                </div>
                <div className="font-body text-xs text-white/85 mt-1">
                  Tecnologia que entrega resultados precisos
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Tech list + intro text ───────────────────────────── */}
          <div className="order-1 lg:order-2">
            <div className="tech-header mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-0.5 w-10 bg-brand-accent rounded-full" />
                <span className="font-body text-sm font-semibold text-brand-accent tracking-widest uppercase">
                  Nossa Tecnologia
                </span>
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight mb-4 text-balance">
                Diagnóstico e tratamento com{" "}
                <span className="text-brand-primary">precisão digital</span>
              </h2>
              <p className="font-body text-base lg:text-lg text-gray-600 leading-relaxed mb-3">
                Investimos no que existe de mais moderno em odontologia digital
                para que cada decisão clínica seja baseada em dados precisos —
                não em achismos.
              </p>
              <p className="font-body text-sm lg:text-base text-gray-500 leading-relaxed">
                Nosso <span className="font-semibold text-brand-primary">protocolo Check 360°</span>{" "}
                integra escaneamento 3D, radiografia digital e planejamento
                computadorizado em uma única consulta — menos sessões, menos
                desconforto e muito mais segurança.
              </p>
            </div>

            <div className="tech-grid flex flex-col gap-3.5">
              {technologies.map((t, i) => {
                const Icon = t.icon;
                return (
                  <div
                    key={i}
                    className={`tech-item flex gap-4 p-4 rounded-2xl border ${t.color} hover:border-brand-primary/30 bg-white hover:shadow-sm transition-all duration-300 group`}
                  >
                    <div
                      className={`w-11 h-11 ${t.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className={`w-5 h-5 ${t.iconColor}`} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-body text-xs text-gray-300 font-bold tabular-nums">
                          {t.number}
                        </span>
                        <h3 className="font-heading font-bold text-base text-gray-900">
                          {t.title}
                        </h3>
                      </div>
                      <p className="font-body text-sm text-gray-500 leading-relaxed mb-1.5">
                        {t.desc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-brand-accent">
                        <span className="w-1 h-1 bg-brand-accent rounded-full" />
                        {t.highlight}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
