const benefits = [
  {
    title: "Frete grátis",
    text: "Em compras acima de R$ 199",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 7h11v9H3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 10h4l3 3v3h-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.6" fill="currentColor" />
        <circle cx="17" cy="18" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Até 6x sem juros",
    text: "No cartão de crédito",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Troca fácil",
    text: "Até 30 dias após a compra",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 0 1 14-5.3M20 4v4h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12a8 8 0 0 1-14 5.3M4 20v-4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Compra segura",
    text: "Seus dados sempre protegidos",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function BenefitsBar() {
  return (
    <section className="border-y border-brand-pink-100 bg-white" aria-label="Vantagens de comprar na Bia Fashion Kids">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4">
        {benefits.map((b) => (
          <div key={b.title} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-pink-50 text-brand-pink-500">
              {b.icon}
            </span>
            <div>
              <p className="text-sm font-extrabold text-brand-ink">{b.title}</p>
              <p className="text-xs text-brand-ink/60">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
