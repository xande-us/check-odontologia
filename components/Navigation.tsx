"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X, Phone } from "lucide-react";

// Logo at /public/assets/logo.png — drop the file in to render it.

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.from(".nav-logo", {
        opacity: 0,
        x: -24,
        duration: 0.6,
        ease: "power3.out",
      }).from(
        ".nav-link",
        {
          opacity: 0,
          y: -12,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.07,
        },
        "-=0.3"
      ).from(
        ".nav-actions",
        {
          opacity: 0,
          x: 24,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, navRef);

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="nav-logo flex items-center group">
          <img
            src="/assets/logo.png"
            alt="Check Odontologia"
            className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link relative font-body text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors duration-200 group py-1"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-brand-accent rounded-full group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-5 nav-actions">
          <a
            href="tel:+5521976208291"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-primary transition-colors duration-200 font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            (21) 97620-8291
          </a>
          <a
            href="#contato"
            className="bg-brand-accent text-white font-heading font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-brand-accent/90 transition-all duration-200 hover:shadow-md hover:shadow-brand-accent/25 hover:-translate-y-px active:translate-y-0"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 text-brand-primary rounded-lg hover:bg-brand-light transition-colors"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-brand-light`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="font-body text-gray-700 hover:text-brand-primary font-medium py-2.5 border-b border-gray-50 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={closeMobile}
            className="mt-3 bg-brand-accent text-white font-heading font-semibold text-sm py-3 rounded-xl text-center"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </nav>
  );
}

