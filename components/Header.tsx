"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./icons/Logo";
import { navLinks } from "@/data/products";

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20c1.6-4 5-6 8-6s6.4 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20s-7.5-4.6-10-9.3C.4 7 2.3 3.5 6 3.5c2 0 3.6 1.1 4.5 2.6.9-1.5 2.5-2.6 4.5-2.6 3.7 0 5.6 3.5 4 7.2C19.5 15.4 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 8h12l1 12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20.5L6 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(2);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      {/* Row 1: mobile menu, logo, search, actions */}
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:py-4">
        <button
          type="button"
          className="text-brand-ink lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Bia Fashion Kids - página inicial">
          <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="hidden font-display text-xl font-bold text-brand-pink-600 sm:block">
            Bia <span className="text-brand-gold-600">Fashion Kids</span>
          </span>
        </Link>

        <form
          role="search"
          className="ml-2 hidden flex-1 items-center rounded-full border-2 border-brand-pink-100 bg-brand-pink-50/60 px-4 py-2 focus-within:border-brand-pink-400 md:flex"
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchIcon />
          <input
            type="search"
            placeholder="Buscar vestidos, conjuntos, calçados..."
            className="w-full bg-transparent px-3 text-sm text-brand-ink placeholder:text-brand-ink/50 focus:outline-none"
            aria-label="Buscar produtos"
          />
          <button
            type="submit"
            className="rounded-full bg-brand-pink-500 px-4 py-1.5 text-sm font-bold text-white transition hover:bg-brand-pink-600"
          >
            Buscar
          </button>
        </form>

        <nav className="ml-auto flex items-center gap-3 text-brand-ink sm:gap-5">
          <Link href="#" className="hidden items-center gap-1 text-xs font-semibold sm:flex flex-col sm:flex-row" aria-label="Minha conta">
            <UserIcon />
            <span className="hidden lg:inline">Entrar</span>
          </Link>
          <Link href="#" className="relative" aria-label="Lista de desejos">
            <HeartIcon />
          </Link>
          <Link href="#carrinho" className="relative" aria-label={`Carrinho, ${cartCount} itens`}>
            <BagIcon />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold-500 text-[11px] font-bold text-brand-ink">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>

      {/* Mobile search */}
      <div className="px-4 pb-3 md:hidden">
        <form
          role="search"
          className="flex items-center rounded-full border-2 border-brand-pink-100 bg-brand-pink-50/60 px-4 py-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <SearchIcon />
          <input
            type="search"
            placeholder="Buscar produtos..."
            className="w-full bg-transparent px-3 text-sm text-brand-ink placeholder:text-brand-ink/50 focus:outline-none"
            aria-label="Buscar produtos"
          />
        </form>
      </div>

      {/* Row 2: category navigation, like Milon's category strip */}
      <div className="hidden border-t border-brand-pink-100 bg-brand-pink-500 lg:block">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-3 text-sm font-bold uppercase tracking-wide text-white/90 transition hover:text-brand-gold-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile drawer nav */}
      {menuOpen && (
        <nav className="border-t border-brand-pink-100 bg-brand-pink-500 lg:hidden">
          <ul className="flex flex-col divide-y divide-white/10 px-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-bold uppercase tracking-wide text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
