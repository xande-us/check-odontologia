import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Check Odontologia | Dr. Pablo Barros — Ilha do Governador/RJ",
  description:
    "Clínica odontológica com tecnologia digital, atendimento humanizado e sem espera, sob direção do Dr. Pablo Barros. Tauá, Ilha do Governador — Rio de Janeiro.",
  keywords:
    "odontologia, dentista, Dr. Pablo Barros, Check Odontologia, Ilha do Governador, Tauá, Rio de Janeiro, clareamento, restauração, limpeza dental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${plusJakarta.variable} ${inter.variable} font-body bg-white text-gray-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
