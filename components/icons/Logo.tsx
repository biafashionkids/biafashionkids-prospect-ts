import type { SVGProps } from "react";

/**
 * Placeholder logo mark inspired by the Bia Fashion Kids brand: a pink
 * roundel, script "Bia" wordmark, "Fashion Kids" subtitle, a dot-and-line
 * divider, and two tiny garment silhouettes. Swap for the real .png/.svg
 * once available — everywhere it's used (Header, Footer) expects the same
 * square-ish aspect ratio.
 */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="110" cy="110" r="108" fill="#C2578A" />
      <circle cx="110" cy="110" r="94" fill="none" stroke="#FFFFFF" strokeWidth="4" />
      <text
        x="110"
        y="112"
        textAnchor="middle"
        fontFamily="var(--font-baloo), system-ui, sans-serif"
        fontWeight={700}
        fontSize="64"
        fill="#F4C21B"
      >
        Bia
      </text>
      <text
        x="110"
        y="140"
        textAnchor="middle"
        fontFamily="var(--font-baloo), system-ui, sans-serif"
        fontWeight={600}
        fontSize="20"
        fill="#F8D34E"
      >
        Fashion Kids
      </text>
      <line x1="30" y1="154" x2="190" y2="154" stroke="#FFFFFF" strokeWidth="3" />
      <circle cx="110" cy="154" r="4.5" fill="#FFFFFF" />
      <g transform="translate(58, 168) scale(0.42)">
        <path
          d="M40 6c-6 0-16 8-20 18L4 32c-4 2-6 6-6 10v6l10 3-4 62c-.4 6 4.4 11 10.4 11h44c6 0 10.8-5 10.4-11l-4-62 10-3v-6c0-4-2-8-6-10L58 24c-4-10-12-18-18-18Z"
          fill="#F8C2DA"
          stroke="#84345C"
          strokeWidth="4"
        />
      </g>
      <g transform="translate(112, 172) scale(0.4)">
        <path
          d="M32 8 12 20c-4 2-7 6-7 11l3 20 10-4v62c0 4 3 7 7 7h44c4 0 7-3 7-7V47l10 4 3-20c0-5-3-9-7-11L62 8c-3 6-10 10-18 10s-15-4-18-10Z"
          fill="#7ED2EC"
          stroke="#1F6E8C"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
}
