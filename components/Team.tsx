"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, GraduationCap, UserPlus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Pablo's photo at /public/assets/dr-pablo-barros.jpg (same one used in About)

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-header", {
        scrollTrigger: { trigger: ".team-header", start: "top 85%", once: true },
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".team-card", {
        scrollTrigger: { trigger: ".team-grid", start: "top 80%", once: true },
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.13,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="equipe"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-lighter/70 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="team-header text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-0.5 w-10 bg-brand-accent rounded-full" />
            <span className="font-body text-sm font-semibold text-brand-accent tracking-widest uppercase">
              Nossa Equipe
            </span>
            <div className="h-0.5 w-10 bg-brand-accent rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-4xl xl:text-5xl text-gray-900 leading-tight mb-4">
            Profissionais dedicados ao{" "}
            <span className="text-brand-primary">seu sorriso</span>
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-lg mx-auto">
            Conheça quem cuida de você na Check Odontologia.
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Dr. Pablo Barros card */}
          <div className="team-card group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-brand-light hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-2 w-full bg-brand-primary opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Photo */}
            <div className="relative aspect-square bg-gradient-to-br from-brand-lighter to-brand-light overflow-hidden">
              <img
                src="/assets/dr-pablo-barros.jpg"
                alt="Dr. Pablo Barros"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-primary/40 pointer-events-none">
                <span className="font-heading font-bold text-3xl mb-1">PB</span>
                <span className="font-body text-[10px] uppercase tracking-widest">
                  Foto em breve
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-heading font-bold text-lg text-gray-900 leading-snug mb-1">
                Dr. Pablo Barros
              </h3>
              <p className="font-body text-sm text-brand-secondary font-semibold mb-4">
                Diretor Clínico & Cirurgião-Dentista
              </p>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  <span className="font-body text-xs text-gray-500">
                    CRO-RJ 49212
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-xs text-gray-500">
                    Cirurgião-dentista com sólida formação clínica
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-50 bg-brand-light rounded-lg px-3 py-2.5">
                <p className="font-body text-xs text-gray-600 leading-relaxed">
                  Responsável técnico pela Check Odontologia. Atendimento
                  personalizado, técnico e humanizado.
                </p>
              </div>
            </div>
          </div>

          {/* Placeholder slot 1 — futuro profissional */}
          <PlaceholderTeamCard />

          {/* Placeholder slot 2 — futuro profissional */}
          <PlaceholderTeamCard />
        </div>

        <p className="text-center mt-10 font-body text-sm text-gray-400">
          Equipe em expansão — novos profissionais em breve.
        </p>
      </div>
    </section>
  );
}

function PlaceholderTeamCard() {
  return (
    <div className="team-card group bg-white border border-dashed border-gray-200 rounded-2xl overflow-hidden hover:border-brand-light/80 transition-all duration-300">
      <div className="h-2 w-full bg-gray-100" />

      <div className="relative aspect-square bg-gradient-to-br from-brand-lighter/60 to-white flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-light/50 flex items-center justify-center">
          <UserPlus className="w-7 h-7 text-brand-primary/40" />
        </div>
      </div>

      <div className="p-6 text-center">
        <h3 className="font-heading font-bold text-lg text-gray-400 leading-snug mb-1">
          Em breve
        </h3>
        <p className="font-body text-sm text-gray-400 mb-4">
          Novo profissional
        </p>
        <p className="font-body text-xs text-gray-400 leading-relaxed">
          Estamos selecionando especialistas para expandir o atendimento.
        </p>
      </div>
    </div>
  );
}
