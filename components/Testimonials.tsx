"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Mariana Souza",
    initials: "MS",
    treatment: "Tratamento de Canal",
    rating: 5,
    text: "Atendimento extremamente pontual, sem aquela espera intermináve de outros consultórios. O Dr. Pablo é claro, técnico e atencioso. Fui muito bem cuidada — diagnóstico preciso e tratamento sem dor nenhuma. Recomendo de olhos fechados!",
    color: "bg-brand-primary",
  },
  {
    name: "Rafael Oliveira",
    initials: "RO",
    treatment: "Limpeza & Profilaxia",
    rating: 5,
    text: "Clínica impecável e atendimento direto ao ponto. Dr. Pablo Barros é um profissional muito sério, explica tudo com paciência e passa segurança. Fui atendido na hora marcada — algo raro hoje em dia.",
    color: "bg-brand-secondary",
  },
  {
    name: "Camila Ferreira",
    initials: "CF",
    treatment: "Implante Dentário",
    rating: 5,
    text: "Mudou minha vida! Tinha vergonha de sorrir por causa de um dente perdido. O Dr. Pablo planejou tudo digitalmente, me explicou cada etapa e o resultado ficou perfeito. Atendimento humano de verdade, do começo ao fim.",
    color: "bg-brand-accent",
  },
  {
    name: "Lucas Almeida",
    initials: "LA",
    treatment: "Avaliação Geral",
    rating: 4,
    text: "Gostei muito do atendimento. Dr. Pablo é bem técnico e fez um diagnóstico detalhado. Só achei a sala de espera um pouco pequena, mas isso é detalhe. Fui chamado pontualmente e saí muito satisfeito.",
    color: "bg-brand-primary",
  },
  {
    name: "Patricia Mendes",
    initials: "PM",
    treatment: "Prótese Dentária",
    rating: 5,
    text: "Profissional excepcional. O Dr. Pablo Barros é cuidadoso, atento aos detalhes e tem um conhecimento técnico que inspira confiança imediatamente. A clínica é limpa, organizada e o ambiente é acolhedor. Minha família toda vai se consultar lá.",
    color: "bg-brand-secondary",
  },
  {
    name: "Bruno Santos",
    initials: "BS",
    treatment: "Restauração",
    rating: 5,
    text: "Atendimento rápido e indolor. Saí da clínica no mesmo dia com o problema resolvido.",
    color: "bg-brand-accent",
  },
  {
    name: "Juliana Castro",
    initials: "JC",
    treatment: "Endodontia",
    rating: 4,
    text: "O Dr. Pablo é um excelente endodontista — diagnóstico certeiro e procedimento muito tranquilo. Senti zero dor, o que era o que mais me preocupava. Recomendo.",
    color: "bg-brand-primary",
  },
  {
    name: "Eduardo Pinto",
    initials: "EP",
    treatment: "Implante Dentário",
    rating: 5,
    text: "Procurei vários dentistas antes de fechar com a Check Odontologia. O que me convenceu foi a seriedade e a transparência do Dr. Pablo — ele não empurra tratamento, ele resolve o seu problema. Implante perfeito, sem dor e com acompanhamento exemplar.",
    color: "bg-brand-secondary",
  },
  {
    name: "Beatriz Lima",
    initials: "BL",
    treatment: "Clareamento Dental",
    rating: 5,
    text: "Ambiente sofisticado e o Dr. Pablo Barros inspira muita confiança. Clareamento rápido, sem sensibilidade alguma, e o resultado superou minhas expectativas. Já indiquei pra várias amigas.",
    color: "bg-brand-accent",
  },
  {
    name: "Thiago Rodrigues",
    initials: "TR",
    treatment: "Prótese sobre Implante",
    rating: 4,
    text: "Trabalho impecável do Dr. Pablo. Diagnóstico preciso, explicação clara e procedimento dentro do tempo combinado. Vale o que cobra.",
    color: "bg-brand-primary",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < count
              ? "text-amber-400 fill-amber-400"
              : "text-gray-200 fill-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testi-header",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testi-header",
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.set(".testi-card", { opacity: 0, y: 36 });
      gsap.to(".testi-card", {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".testi-grid",
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
      id="depoimentos"
      className="py-24 lg:py-32 bg-brand-lighter relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-light/60 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="testi-header text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-0.5 w-10 bg-brand-accent rounded-full" />
            <span className="font-body text-sm font-semibold text-brand-accent tracking-widest uppercase">
              Depoimentos
            </span>
            <div className="h-0.5 w-10 bg-brand-accent rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-4xl xl:text-5xl text-gray-900 leading-tight mb-4 text-balance">
            O que dizem nossos{" "}
            <span className="text-brand-primary">pacientes</span>
          </h2>
          <p className="font-body text-lg text-gray-500 max-w-lg mx-auto">
            Histórias reais de quem confiou no cuidado do Dr. Pablo Barros e da
            Check Odontologia.
          </p>
        </div>

        <div className="testi-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testi-card bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-light hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <Quote className="w-7 h-7 text-brand-light mb-3" />

              <StarRow count={t.rating} />

              <p className="font-body text-sm text-gray-600 leading-relaxed my-4 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="font-heading font-bold text-xs text-white">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-gray-900">
                    {t.name}
                  </div>
                  <div className="font-body text-xs text-brand-accent font-medium">
                    {t.treatment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
