import Link from "next/link";

const categories = ["Lançamentos", "Meninas", "Meninos", "Avulsos", "Calçados", "Promoções", "Atacado"];

const stripeColors = ["bg-brand-gold-400", "bg-brand-pink-500", "bg-brand-sky-400"];

export function CategoryNav() {
  return (
    <nav aria-label="Categorias" className="bg-[#F6F6F6]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 overflow-x-auto whitespace-nowrap px-4 py-4 lg:gap-10 lg:px-8">
        {categories.map((cat) => (
          <Link
            key={cat}
            href="#"
            className="relative px-3 py-1.5 text-base font-medium uppercase tracking-wide text-gray-800 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            {cat}
          </Link>
        ))}
      </div>
      <div className="flex h-1 w-full">
        {categories.map((cat, i) => (
          <span key={cat} className={`flex-1 ${stripeColors[i % stripeColors.length]}`} />
        ))}
      </div>
    </nav>
  );
}
