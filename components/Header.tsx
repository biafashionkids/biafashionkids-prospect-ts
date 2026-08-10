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

function OrdersIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 3.5h6a1 1 0 0 1 1 1V6H8V4.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 12h7M8.5 15.5h7M8.5 8.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
    <header className="relative z-50 bg-white shadow-sm">
      {/* Row 1: logo, search, account actions */}
      <div className="relative mx-auto flex max-w-7xl items-center gap-6 px-4 py-6 lg:gap-10 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Bia Fashion Kids - página inicial">
          <Image
            src="/logo/biafashionkids-logo.jpg"
            alt="Bia Fashion Kids"
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
            priority
          />
        </Link>

        <form
          role="search"
          className="hidden w-full max-w-[380px] items-center rounded-xl border border-gray-300 bg-white px-4 py-2 md:absolute md:left-1/2 md:flex md:-translate-x-1/2"
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
          <Link href="#" className="group hidden items-center gap-2 text-base text-gray-600 lg:flex">
            <UserIcon />
            <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
              Minha Conta
            </span>
          </Link>
          <Link href="#" className="group hidden items-center gap-2 text-base text-gray-600 lg:flex">
            <OrdersIcon />
            <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full">
              Meus Pedidos
            </span>
          </Link>
          <Link
            href="#carrinho"
            className="flex items-center gap-1 text-gray-600"
            aria-label={`Carrinho, ${cartCount} itens`}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="text-sm font-bold text-brand-pink-600">({cartCount})</span>
            )}
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
