"use client";

import { useRef } from "react";
import Image from "next/image";

type Brand = {
  id: string;
  name: string;
  image?: string;
};

const brands: Brand[] = [
  { id: "marca-1", name: "Marca 1" },
  { id: "marca-2", name: "Marca 2" },
  { id: "marca-3", name: "Marca 3" },
  { id: "marca-4", name: "Marca 4" },
  { id: "marca-5", name: "Marca 5" },
  { id: "marca-6", name: "Marca 6" },
  { id: "marca-7", name: "Marca 7" },
  { id: "marca-8", name: "Marca 8" },
  { id: "marca-9", name: "Marca 9" },
];

export function BrandsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByItem = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const item = el.querySelector<HTMLElement>("[data-brand]");
    const amount = (item?.offsetWidth ?? el.clientWidth / 4) + 24;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="relative bg-white py-10" aria-label="Marcas">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center text-xl font-bold uppercase tracking-[0.3em] text-black sm:text-2xl">
          Nossas Marcas
        </h2>
        <div className="mx-auto mt-2 h-1 w-14 bg-black" />
      </div>

      <button
        type="button"
        onClick={() => scrollByItem(-1)}
        aria-label="Ver marcas anteriores"
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-brand-ink shadow-md transition hover:bg-white sm:flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="m15 6-6 6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => scrollByItem(1)}
        aria-label="Ver mais marcas"
        className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-brand-ink shadow-md transition hover:bg-white sm:flex"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-8 lg:justify-center lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            data-brand
            className="flex w-1/3 shrink-0 snap-start flex-col items-center gap-4 sm:w-1/4 lg:w-1/6"
          >
            <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-xs text-gray-400 sm:h-32 sm:w-32">
              {brand.image ? (
                <Image src={brand.image} alt={brand.name} fill className="object-cover" sizes="128px" />
              ) : (
                "Logo"
              )}
            </div>
            <p className="text-base font-bold text-black">{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
