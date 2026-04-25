"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2.5 4.5C2.5 3.4 3.4 2.5 4.5 2.5h1.1c.5 0 1 .3 1.2.8l1.2 2.4c.2.5.1 1.1-.3 1.4l-1.2 1a12 12 0 006.2 6.2l1-1.2c.4-.4 1-.5 1.4-.3l2.4 1.2c.5.2.8.7.8 1.2V19.5c0 1.1-.9 2-2 2h-.5A17.5 17.5 0 012.5 5v-.5Z"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-200/60 bg-teal-50/70 shadow-[0_1px_0_0_rgba(45,212,191,0.12)] backdrop-blur-xl">
      <div
        className="h-1 w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500"
        aria-hidden
      />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center font-semibold text-teal-950"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-11 w-36 sm:h-12 sm:w-40">
            <Image
              src="/logo.png"
              alt="Nasa Pharmacy"
              fill
              sizes="(max-width: 640px) 144px, 160px"
              className="scale-125 object-contain"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-teal-800/90 transition hover:bg-teal-100/80 hover:text-teal-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`tel:${PHONE_TEL}`}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-900/15 ring-1 ring-inset ring-white/20 transition hover:from-teal-500 hover:to-teal-600 hover:shadow-lg"
          >
            <PhoneIcon className="h-4 w-4 opacity-90 transition group-hover:scale-110" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-teal-200/80 bg-gradient-to-b from-white to-teal-50/50 text-teal-900 shadow-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-teal-100/80 bg-gradient-to-b from-white to-teal-50/30 px-4 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-0.5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-base font-medium text-teal-950 hover:bg-teal-100/50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
