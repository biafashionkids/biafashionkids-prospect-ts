const messages = [
  "Frete grátis nas compras acima de R$ 199",
  "Novidades toda semana para meninas e meninos",
  "Até 6x sem juros no cartão",
  "Troca fácil em até 30 dias",
];

export function TopBar() {
  return (
    <div className="w-full bg-brand-ink text-brand-cream text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl overflow-hidden px-4">
        <div className="flex h-9 items-center">
          <div className="no-scrollbar flex w-full animate-marquee gap-16 whitespace-nowrap motion-reduce:animate-none motion-reduce:overflow-x-auto">
            {[...messages, ...messages].map((msg, i) => (
              <span key={i} className="flex items-center gap-2 font-semibold tracking-wide">
                <span className="text-brand-gold-500">✦</span>
                {msg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
