"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 15, suffix: "+", label: "Anos de Experiência", sub: "Desde 2009" },
  { value: 12, suffix: "K+", label: "Pacientes Atendidos", sub: "e crescendo" },
  { value: 22, suffix: "+", label: "Especialistas", sub: "em 12 áreas" },
  { value: 98, suffix: "%", label: "Taxa de Satisfação", sub: "NPS premium" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stats-inner", {
        scrollTrigger: { trigger: ".stats-inner", start: "top 90%", once: true },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
      });

      stats.forEach((s, i) => {
        const el = document.querySelector(`.stats-num-${i}`);
        if (!el) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          scrollTrigger: {
            trigger: ".stats-inner",
            start: "top 85%",
            once: true,
          },
          val: s.value,
          duration: 2.4,
          delay: i * 0.15,
          ease: "power2.out",
          onUpdate() {
            el.textContent = Math.round(counter.val) + s.suffix;
          },
        });
      });

      gsap.from(".stat-block", {
        scrollTrigger: { trigger: ".stats-inner", start: "top 85%", once: true },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-brand-primary py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="stats-inner grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-block text-center lg:text-left lg:px-8 lg:border-l border-white/10 first:border-0 first:pl-0"
            >
              <div
                className={`stats-num-${i} font-heading font-bold text-4xl xl:text-5xl text-white tabular-nums`}
              >
                {s.value}
                {s.suffix}
              </div>
              <div className="font-heading font-semibold text-base text-white/90 mt-1">
                {s.label}
              </div>
              <div className="font-body text-sm text-white/40 mt-0.5">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
