"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, HeartHandshake, Timer } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Background photo: /public/assets/tooth-bg.jpg
// (high-res tooth image used as the section background)

const stats = [
  { value: 15, suffix: "+", label: "Anos de Experiência" },
  { value: 12, suffix: "K+", label: "Pacientes Atendidos" },
  { value: 22, suffix: "+", label: "Especialistas" },
  { value: 98, suffix: "%", label: "Satisfação" },
];

const pills = [
  { icon: Sparkles, label: "Tecnologia Digital 3D" },
  { icon: HeartHandshake, label: "Atendimento Humanizado" },
  { icon: Timer, label: "Sem Dor • Sem Espera" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Continuous floating animations ──────────────────────────────
      gsap.to(".float-blob-a", {
        scale: 1.12,
        duration: 7,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".float-blob-b", {
        scale: 0.9,
        duration: 9,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 3,
      });
      gsap.to(".lens-flare", {
        scale: 1.08,
        opacity: 0.85,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".shape-a", {
        y: -28,
        duration: 3.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".shape-b", {
        y: 22,
        x: 12,
        duration: 4.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.8,
      });
      gsap.to(".shape-c", {
        y: -18,
        x: -10,
        duration: 5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });
      gsap.to(".shape-d", {
        y: 20,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      });

      // ── Hero entrance timeline ──────────────────────────────────────
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(".hero-badge-row", {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hero-h1",
          { opacity: 0, y: 36, duration: 0.85, ease: "power3.out" },
          "-=0.2"
        )
        .from(
          ".hero-sub",
          { opacity: 0, y: 24, duration: 0.65, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          ".hero-pill",
          {
            opacity: 0,
            y: 12,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.25"
        )
        .from(
          ".hero-stat",
          {
            opacity: 0,
            y: 14,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.07,
          },
          "-=0.2"
        );

      // ── Animated stat counters ──────────────────────────────────────
      stats.forEach((stat, i) => {
        const el = document.querySelector(`.stat-val-${i}`);
        if (!el) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: stat.value,
          duration: 2.2,
          delay: 1.1 + i * 0.18,
          ease: "power2.out",
          onUpdate() {
            el.textContent = Math.round(counter.val) + stat.suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[100svh] lg:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#F5F8FB] to-[#DCEAF8] pt-20 lg:pt-20"
    >
      {/* Background tooth photo — on mobile we anchor to the right side so the
          smiling-face portion of the image stays visible; on desktop we center it */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat pointer-events-none opacity-90 bg-[position:80%_center] lg:bg-center"
        style={{ backgroundImage: "url('/assets/tooth-bg.jpg')" }}
        aria-hidden="true"
      />
      {/* Soft white overlay — stronger on the left where the text sits, lighter on the right so the tooth photo shows through */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/55 pointer-events-none" />

      {/* ── Lens flare — soft blue glow behind the headline ── */}
      <div
        className="lens-flare absolute top-1/4 left-[5%] w-[640px] h-[640px] pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(63,95,184,0.22) 0%, rgba(52,48,139,0.10) 30%, rgba(220,234,248,0.05) 55%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div
        className="lens-flare absolute top-[35%] left-[10%] w-[380px] h-[380px] pointer-events-none blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(110,170,58,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Background blobs */}
      <div className="float-blob-a pointer-events-none absolute -top-20 -right-20 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#DCEAF8]/80 via-[#F5F8FB]/60 to-transparent blur-3xl" />
      <div className="float-blob-b pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#6EAA3A]/8 via-[#3F5FB8]/6 to-transparent blur-3xl" />

      {/* Floating geometric shapes */}
      <div className="shape-a pointer-events-none absolute top-36 left-[4%] w-12 h-12 border-2 border-brand-primary/12 rounded-2xl rotate-12 hidden lg:block" />
      <div className="shape-b pointer-events-none absolute top-44 right-[8%] w-9 h-9 border-2 border-brand-accent/20 rounded-full hidden lg:block" />
      <div className="shape-c pointer-events-none absolute bottom-32 left-[8%] w-7 h-7 bg-brand-secondary/10 rounded-full hidden lg:block" />
      <div className="shape-d pointer-events-none absolute bottom-44 right-[4%] w-10 h-10 border border-brand-primary/10 rounded-xl rotate-45 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full py-6 sm:py-10 lg:py-16 relative z-10">
        <div className="max-w-3xl">
          {/* ── Text content (single column, left-aligned) ───── */}
          <div className="text-left">
            {/* Trust badge */}
            <div className="hero-badge-row mb-3.5 sm:mb-5">
              <span className="inline-flex items-center gap-1.5 bg-brand-primary/8 text-brand-primary font-heading font-semibold text-[11px] sm:text-xs px-3 sm:px-3.5 py-1.5 rounded-full border border-brand-primary/12 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                Excelência em Odontologia no Rio
              </span>
            </div>

            {/* Headline — short, balanced, left-aligned */}
            <h1 className="hero-h1 font-heading font-bold text-[1.6rem] sm:text-[2.2rem] lg:text-[2.8rem] xl:text-[3.2rem] text-gray-900 leading-[1.15] sm:leading-[1.1] tracking-tight mb-3.5 sm:mb-5 text-balance">
              Uma odontologia diferente.{" "}
              <span className="text-brand-primary">
                Cuidado, tecnologia e zero espera.
              </span>
            </h1>

            <p className="hero-sub font-body text-sm sm:text-lg text-gray-600 leading-snug sm:leading-relaxed mb-3 sm:mb-7 max-w-xl text-pretty">
              Atendimento humanizado, equipamentos modernos e a seriedade que
              você merece em cada consulta.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-7">
              <a
                href="#contato"
                className="hero-btn group inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-heading font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-primary/25 hover:-translate-y-px text-sm sm:text-base"
              >
                Agendar Consulta
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#servicos"
                className="hero-btn inline-flex items-center gap-2 border-2 border-brand-primary/20 text-brand-primary bg-white/70 backdrop-blur-sm font-heading font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl hover:border-brand-primary hover:bg-brand-light/50 transition-all duration-200 text-sm sm:text-base"
              >
                Ver Serviços
              </a>
            </div>

            {/* Pills — compact, single row of 3 */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-3.5 sm:mb-8 max-w-2xl">
              {pills.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.label}
                    className="hero-pill flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm border border-brand-light rounded-xl px-2 sm:px-3.5 py-2 sm:py-2.5 shadow-sm text-center sm:text-left"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-primary" />
                    </div>
                    <span className="font-heading font-semibold text-[9px] sm:text-xs text-gray-800 leading-tight">
                      {p.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="pt-3 sm:pt-6 border-t border-gray-200/70">
              <div className="grid grid-cols-4 gap-2 sm:gap-5">
                {stats.map((s, i) => (
                  <div key={i} className="hero-stat">
                    <div
                      className={`stat-val-${i} font-heading font-bold text-lg sm:text-2xl xl:text-3xl text-brand-primary tabular-nums leading-none`}
                    >
                      {s.value}
                      {s.suffix}
                    </div>
                    <div className="font-body text-[9px] sm:text-xs text-gray-500 mt-1 leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            d="M0 56L48 48C96 40 192 24 288 18C384 12 480 16 576 22C672 28 768 36 864 36C960 36 1056 28 1152 22C1248 16 1344 12 1392 10L1440 8V56H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
