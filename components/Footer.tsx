"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  "Limpeza & Profilaxia",
  "Restauração / Obturação",
  "Clareamento Dental",
  "Tratamento de Canal",
  "Estética & Facetas",
  "Implantes & Próteses",
];

const quickLinks = [
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Nossos Serviços", href: "#servicos" },
  { label: "Nossa Tecnologia", href: "#tecnologia" },
  { label: "Nossa Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-col", {
        scrollTrigger: { trigger: ".footer-grid", start: "top 90%", once: true },
        opacity: 0,
        y: 24,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.1,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand col */}
          <div className="footer-col lg:col-span-1">
            <div className="mb-5 inline-block bg-white/95 rounded-2xl p-3">
              <img
                src="/assets/logo.png"
                alt="Check Odontologia"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="font-body text-sm text-gray-400 leading-relaxed mb-6">
              Cuidado humanizado, tecnologia de ponta e atendimento sério na
              Ilha do Governador — Rio de Janeiro.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/dr.pablobarros"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/5 hover:bg-brand-primary rounded-xl flex items-center justify-center transition-all duration-200 group"
              >
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://wa.me/5521976208291"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-white/5 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-all duration-200 group"
              >
                <WhatsAppIconSmall className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="font-heading font-bold text-sm text-white mb-5 uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-accent rounded-full group-hover:scale-150 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="font-heading font-bold text-sm text-white mb-5 uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="font-body text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-brand-primary rounded-full group-hover:scale-150 transition-transform" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="footer-col">
            <h4 className="font-heading font-bold text-sm text-white mb-5 uppercase tracking-wider">
              Localização
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-body text-sm text-gray-300">
                    Av. Paranapuã, 1.680 — Sala 307
                  </div>
                  <div className="font-body text-xs text-gray-500">
                    Tauá, Ilha do Governador — Rio de Janeiro/RJ
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a
                  href="tel:+5521976208291"
                  className="font-body text-sm text-gray-300 hover:text-white transition-colors"
                >
                  (21) 97620-8291
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a
                  href="https://instagram.com/dr.pablobarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-gray-300 hover:text-white transition-colors"
                >
                  @dr.pablobarros
                </a>
              </div>
            </div>

            {/* CRO */}
            <div className="mt-5 p-3 border border-white/5 rounded-xl bg-white/[0.04]">
              <p className="font-body text-xs text-gray-500 leading-relaxed">
                Responsável técnico: Dr. Pablo Barros — CRO-RJ 49212
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-gray-600">
            © {new Date().getFullYear()} Check Odontologia. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="font-body text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="font-body text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIconSmall({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
