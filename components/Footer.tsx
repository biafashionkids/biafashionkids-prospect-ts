import Image from "next/image";
import Link from "next/link";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2 2C10.5 19.5 4.5 13.5 4.5 5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 8.5h2V5.3c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.6H5.7V16h2.8v8h3.4v-8h2.7l.4-3.4h-3.1V10c0-1 .3-1.5 1.7-1.5Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.2 3h-3v13a2.6 2.6 0 1 1-2.3-2.6v-3.1a5.7 5.7 0 1 0 5.3 5.7V9.4a7.6 7.6 0 0 0 4.3 1.3V7.6c-1.9 0-3.5-1.1-4-2.9-.2-.5-.3-1.1-.3-1.7Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4a.5.5 0 0 0 0-.5c-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.6 1.1 2.8.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

const institutionalLinks = [
  "Quem Somos",
  "Mapa do Site",
  "Privacidade e dados pessoais",
  "Fale Conosco",
  "Troca e devolução",
  "Entrega e frete",
  "Política de pagamento",
];

const programLinks = ["Blog Bia Fashion Kids", "Nossas Lojas", "Novidades"];

const socials = [
  { name: "Instagram", href: "#", icon: InstagramIcon },
  { name: "Facebook", href: "#", icon: FacebookIcon },
  { name: "TikTok", href: "#", icon: TikTokIcon },
];

const paymentIcons = [
  { name: "Visa", src: "/footer/visa.png" },
  { name: "Mastercard", src: "/footer/mastercard.png" },
  { name: "Boleto", src: "/footer/boleto.png" },
  { name: "Pix", src: "/footer/pix.png" },
];

const whatsappMessage = "Olá! Vim pelo site da Bia Fashion Kids e gostaria de mais informações.";
const whatsappHref = `https://wa.me/5511400000000?text=${encodeURIComponent(whatsappMessage)}`;

export function Footer() {
  return (
    <footer className="relative bg-white text-black">

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <nav aria-label="Institucional">
          <Image
            src="/logo/biafashionkids-logo.jpg"
            alt="Bia Fashion Kids"
            width={88}
            height={88}
            className="mb-5 h-[88px] w-[88px] rounded-full object-cover"
          />
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-black">
            Institucional
          </h3>
          <ul className="mt-5 space-y-3">
            {institutionalLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-sm text-black/70 transition hover:text-black">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-[108px]">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-black">
            Central de atendimento
          </h3>
          <div className="mt-5 space-y-3 text-sm text-black/70">
            <a href="tel:+551140000000" className="flex items-center gap-2 hover:text-black">
              <PhoneIcon />
              (11) 4000-0000
            </a>
            <p>0800 000 0000</p>
            <a href="mailto:contato@biafashionkids.com.br" className="hover:text-black">
              contato@biafashionkids.com.br
            </a>
            <p className="pt-1">
              Segunda a sexta-feira:
              <br />
              9h às 18h
            </p>
            <p>
              Sábado:
              <br />
              9h às 13h
            </p>
          </div>
        </div>

        <nav aria-label="Programas" className="pt-[108px]">
          <ul className="space-y-2">
            <li className="border-b border-black/15 pb-3">
              <Link href="#" className="font-display text-sm font-bold text-black transition hover:text-brand-pink-600">
                Seja uma revendedora
              </Link>
            </li>
            <li>
              <Link href="#" className="font-display text-sm font-bold text-black transition hover:text-brand-pink-600">
                Trabalhe conosco
              </Link>
            </li>
          </ul>
          <ul className="mt-5 space-y-3">
            {programLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="text-sm text-black/70 transition hover:text-black">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-[108px]">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-black">
            Acompanhe
          </h3>
          <div className="mt-5 flex h-8 items-center gap-4">
            {socials.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className={`flex h-8 items-center justify-center text-black transition hover:text-brand-pink-600 ${
                  s.name === "Facebook" ? "-translate-y-0.5" : ""
                }`}
              >
                <s.icon />
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-[108px]">
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-black">
            Compre seguro
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5">
            {paymentIcons.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={80}
                height={48}
                className="h-10 w-auto object-contain brightness-0"
              />
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 text-xs text-black/60">
            <LockIcon />
            Compra 100% segura
          </div>
        </div>
      </div>

      <div className="scallop-divider mx-4 text-black/20 sm:mx-8" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 px-4 py-6 text-center text-xs text-black/50 lg:px-8">
        <p className="text-sm">
          © {new Date().getFullYear()} Bia Fashion Kids. Todos os direitos reservados. CNPJ 00.000.000/0001-00, Rua
          das Flores, nº 123, São Paulo, SP, Brasil.
        </p>

        <div className="flex flex-wrap items-start justify-center gap-6">
          <div>
            <p className="mb-2 font-display text-xs font-bold uppercase tracking-wide text-black/60">
              Desenvolvimento:
            </p>
            <div className="group flex h-10 cursor-pointer items-center justify-center overflow-visible rounded-md border border-black/10 px-5">
              <Image
                src="/footer/rchlabs-black.png"
                alt="rchlabs"
                width={320}
                height={78}
                className="h-24 w-auto object-contain opacity-40 transition-opacity duration-200 group-hover:opacity-100"
              />
            </div>
          </div>

          <div>
            <p className="mb-2 font-display text-xs font-bold uppercase tracking-wide text-black/60">
              Plataforma:
            </p>
            <div className="group relative flex h-10 cursor-pointer items-center justify-center rounded-md border border-black/10 px-5">
              <Image
                src="/footer/mercadopago-black.png"
                alt="Mercado Pago"
                width={140}
                height={35}
                className="h-8 w-auto object-contain opacity-40 transition-opacity duration-200 group-hover:opacity-0"
              />
              <Image
                src="/footer/mercadopago-color.png"
                alt=""
                aria-hidden="true"
                width={140}
                height={35}
                className="absolute h-8 w-auto object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        title="Chat com a gente no WhatsApp!"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105"
      >
        <WhatsAppIcon />
      </a>
    </footer>
  );
}
