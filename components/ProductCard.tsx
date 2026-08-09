import { formatBRL, type Product } from "@/data/products";
import { iconMap } from "./icons";

const tintBg: Record<Product["tint"], string> = {
  pink: "bg-brand-pink-50",
  sky: "bg-brand-sky-100",
  gold: "bg-brand-gold-100",
};

const badgeStyle: Record<NonNullable<Product["badge"]>, string> = {
  Lançamento: "bg-brand-sky-500 text-white",
  "Mais vendido": "bg-brand-gold-500 text-brand-ink",
  "Últimas peças": "bg-brand-pink-500 text-white",
};

export function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon];

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl2 border border-brand-pink-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`relative flex aspect-square items-center justify-center ${tintBg[product.tint]}`}>
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide ${badgeStyle[product.badge]}`}
          >
            {product.badge}
          </span>
        )}
        <button
          type="button"
          aria-label={`Favoritar ${product.name}`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-brand-pink-500 opacity-0 transition group-hover:opacity-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 20s-7.5-4.6-10-9.3C.4 7 2.3 3.5 6 3.5c2 0 3.6 1.1 4.5 2.6.9-1.5 2.5-2.6 4.5-2.6 3.7 0 5.6 3.5 4 7.2C19.5 15.4 12 20 12 20Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Icon className="h-28 w-28 transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold uppercase tracking-wide text-brand-pink-400">{product.category}</p>
        <h3 className="mt-1 line-clamp-2 font-display text-base font-bold text-brand-ink">{product.name}</h3>

        <div className="mt-auto pt-3">
          {product.oldPrice && (
            <p className="text-xs text-brand-ink/40 line-through">{formatBRL(product.oldPrice)}</p>
          )}
          <p className="text-lg font-extrabold text-brand-pink-600">{formatBRL(product.price)}</p>
          <p className="text-xs text-brand-ink/60">{product.installments}</p>
        </div>

        <button
          type="button"
          className="mt-3 w-full rounded-full bg-brand-ink py-2.5 text-sm font-bold text-white transition hover:bg-brand-pink-600"
        >
          Adicionar à sacola
        </button>
      </div>
    </article>
  );
}
