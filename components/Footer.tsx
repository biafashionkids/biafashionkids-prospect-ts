import Link from "next/link";
import { Logo } from "./icons/Logo";

const columns: { title: string; links: string[] }[] = [
  {
    title: "Institucional",
    links: ["Sobre a Bia Fashion Kids", "Nossas lojas", "Trabalhe conosco", "Trocas e devoluções"],
  },
  {
    title: "Ajuda",
    links: ["Central de atendimento", "Como comprar", "Formas de pagamento", "Prazo de entrega", "Fale conosco"],
  },
  {
    title: "Categorias",
    links: ["Meninas", "Meninos", "Bebês", "Calçados", "Acessórios"],
  },
];

const socials = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "WhatsApp", href: "#" },
];

const paymentMethods = ["Visa", "Mastercard", "Elo", "Pix", "Boleto"];

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-3" aria-label="Bia Fashion Kids - página inicial">
            <Logo className="h-14 w-14" />
            <span className="font-display text-xl font-bold">
              Bia <span className="text-brand-gold-400">Fashion Kids</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Moda infantil com carinho: peças confortáveis, coloridas e cheias de estilo para
            acompanhar cada aventura da criançada.
          </p>

          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold transition hover:bg-brand-pink-500"
              >
                {s.name.charAt(0)}
              </Link>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-brand-gold-400">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-white/70 transition hover:text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="scallop-divider mx-4 text-white/20 sm:mx-8" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {paymentMethods.map((method) => (
            <span
              key={method}
              className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/80"
            >
              {method}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-white/60">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          Site seguro — seus dados protegidos
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Bia Fashion Kids. Todos os direitos reservados. CNPJ 00.000.000/0001-00
      </div>
    </footer>
  );
}
