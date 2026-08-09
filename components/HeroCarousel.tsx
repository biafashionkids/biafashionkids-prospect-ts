"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DressIcon, JacketIcon, OnesieIcon } from "./icons/ClothingIcons";

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  from: string;
  to: string;
  Illustration: typeof DressIcon;
};

const slides: Slide[] = [
  {
    id: "colecao-nova",
    eyebrow: "Coleção Nova Estação",
    title: "Estilo fofo do jeitinho deles",
    subtitle: "Vestidos, conjuntos e muito mais com até 30% OFF",
    cta: "Ver coleção",
    from: "from-brand-pink-400",
    to: "to-brand-pink-600",
    Illustration: DressIcon,
  },
  {
    id: "meninos",
    eyebrow: "Linha Meninos",
    title: "Conforto pra brincar sem parar",
    subtitle: "Camisas polo, bermudas e casacos com preços especiais",
    cta: "Comprar agora",
    from: "from-brand-sky-400",
    to: "to-brand-sky-600",
    Illustration: JacketIcon,
  },
  {
    id: "bebe",
    eyebrow: "Cantinho do Bebê",
    title: "Macio como um abraço",
    subtitle: "Bodies e conjuntinhos em algodão hipoalergênico",
    cta: "Descobrir",
    from: "from-brand-gold-400",
    to: "to-brand-gold-600",
    Illustration: OnesieIcon,
  },
];

const AUTOPLAY_MS = 5500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const pause = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const resume = () => {
    pause();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Destaques Bia Fashion Kids"
      className="relative overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="relative h-[420px] sm:h-[480px] lg:h-[560px]">
        {slides.map((slide, i) => {
          const isActive = i === index;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${slides.length}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 bg-gradient-to-br ${slide.from} ${slide.to} transition-opacity duration-700 ${
                isActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <div className="mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10">
                <div className="max-w-xl text-white">
                  <p className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                    {slide.eyebrow}
                  </p>
                  <h1 className="font-display text-4xl font-bold leading-tight drop-shadow-sm sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-base font-semibold text-white/90 sm:text-lg">{slide.subtitle}</p>
                  <Link
                    href="#produtos"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-ink shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
                  >
                    {slide.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <slide.Illustration
                  className="ml-auto hidden h-64 w-64 animate-float drop-shadow-xl sm:block lg:h-80 lg:w-80"
                  aria-hidden="true"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-brand-ink shadow-md transition hover:bg-white sm:flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Próximo slide"
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/80 p-2 text-brand-ink shadow-md transition hover:bg-white sm:flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir para o slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-7 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
