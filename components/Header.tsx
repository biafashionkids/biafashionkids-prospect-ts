"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CategoryNav } from "./CategoryNav";

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
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 20c1.6-4 5-6 8-6s6.4 2 8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5.5h16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H9l-4 3.5V16H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M7 9.5h10M7 13h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2.5 2.5h2l1 2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.5 4.7h14.3a1 1 0 0 1 .96 1.28l-1.8 6.2a1.5 1.5 0 0 1-1.45 1.1H9.2a1.5 1.5 0 0 1-1.46-1.15L5.5 4.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9.2 13.3 8.3 16h9.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.7" cy="19.3" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.5" cy="19.3" r="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Header() {
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Row 1: logo, search, account actions */}
      <div className="relative mx-auto flex max-w-7xl items-center gap-6 px-4 py-6 lg:gap-10 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Bia Fashion Kids - página inicial">
          <Image
            src="/logo/biafashionkids-logo.jpg"
            alt="Bia Fashion Kids"
            width={68}
            height={68}
            className="h-[68px] w-[68px] rounded-full object-cover"
            priority
          />
        </Link>

        <form
          role="search"
          className="hidden w-full max-w-[380px] items-center rounded-xl border border-gray-300 bg-white px-4 py-2 md:absolute md:left-[38%] md:flex md:-translate-x-1/2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="O que você procura?"
            className="w-full bg-transparent text-sm text-black placeholder:text-gray-400 focus:outline-none"
            aria-label="Buscar produtos"
          />
          <button
            type="submit"
            aria-label="Buscar"
            className="shrink-0 border-l border-gray-200 pl-3 text-gray-500"
          >
            <SearchIcon />
          </button>
        </form>

        <div className="ml-auto flex shrink-0 items-center gap-8 text-brand-ink">
          <Link href="#" className="hidden items-center gap-2 text-gray-700 lg:flex">
            <ChatIcon />
            <span className="text-sm leading-tight">
              Central de
              <br />
              <span className="font-bold text-black">Atendimento</span>
            </span>
          </Link>
          <Link href="#" className="hidden items-center gap-2 text-gray-700 lg:flex">
            <UserIcon />
            <span className="text-sm leading-tight">
              Olá, Bem-vindo(a)
              <br />
              <span className="font-bold text-black">Entre</span> ou{" "}
              <span className="font-bold text-black">Cadastre-se</span>
            </span>
          </Link>
          <Link
            href="#carrinho"
            className="flex items-center gap-2 text-gray-700"
            aria-label={`Carrinho, ${cartCount} itens`}
          >
            <span className="relative shrink-0">
              <CartIcon />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-pink-100 text-[11px] font-bold text-brand-pink-600">
                {cartCount}
              </span>
            </span>
            <span className="hidden text-sm leading-tight lg:block">
              <span className="font-bold text-black">Minha Sacola</span>
              <br />
              R$ 0,00
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile search */}
      <div className="px-4 pb-4 md:hidden">
        <form
          role="search"
          className="flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2.5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="O que você procura?"
            className="w-full bg-transparent text-sm text-black placeholder:text-gray-400 focus:outline-none"
            aria-label="Buscar produtos"
          />
          <button type="submit" aria-label="Buscar" className="shrink-0 border-l border-gray-200 pl-3 text-gray-500">
            <SearchIcon />
          </button>
        </form>
      </div>

      <CategoryNav />
    </header>
  );
}
