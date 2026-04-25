import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

const services = [
  {
    title: "Prescription filling",
    description: "Accurate dispensing of your doctor’s medicines with care and clear instructions.",
    accent: "from-teal-500 to-cyan-600",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    title: "Pharmacist consultation",
    description: "Speak with a qualified pharmacist for advice on treatments and safe medicine use.",
    accent: "from-emerald-500 to-teal-600",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "Medication review",
    description: "We review your medicines to help avoid interactions and get the most from your therapy.",
    accent: "from-cyan-500 to-blue-600",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Blood pressure testing",
    description: "Quick, convenient monitoring to support your heart health between doctor visits.",
    accent: "from-rose-400 to-red-500",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Delivery",
    description: "Get your medicines delivered to your door when you need them — ask us for details.",
    accent: "from-amber-500 to-orange-600",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
  },
] as const;

const mapQuery = "Nasa+Pharmacy+Main+Gali+Adarsh+Nagar+Sonipat+Haryana+131001";
const mapHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-600/90 sm:text-sm">
      <span className="h-px w-8 bg-gradient-to-r from-teal-500 to-cyan-400" aria-hidden />
      {children}
    </p>
  );
}

function HeroVisual() {
  return (
    <div className="relative flex min-h-[280px] w-full max-w-md items-center justify-center lg:max-w-none">
      <div
        className="pointer-events-none absolute -inset-6 rounded-full bg-cyan-400/15 blur-3xl motion-reduce:blur-none"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-teal-300/20 blur-3xl motion-reduce:blur-none"
        aria-hidden
      />
      <div className="animate-float-soft relative w-full max-w-sm rounded-[2rem] border border-white/40 bg-gradient-to-br from-white/90 via-white/70 to-emerald-50/80 p-6 shadow-2xl shadow-teal-900/10 ring-1 ring-teal-500/10 backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            Your health, our priority
          </span>
          <span
            className="flex h-3 w-3 items-center justify-center"
            title="We’re here for you"
            aria-label="We’re here for you"
          >
            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex items-end gap-3">
            <div className="h-20 w-14 rotate-3 rounded-2xl bg-gradient-to-b from-teal-200 to-teal-400 shadow-inner ring-1 ring-white/30" />
            <div className="h-24 w-20 -rotate-1 rounded-2xl bg-gradient-to-b from-cyan-200 to-teal-500 shadow-lg ring-1 ring-white/40" />
            <div className="h-16 w-14 -rotate-2 rounded-2xl bg-gradient-to-b from-emerald-200 to-cyan-400 shadow ring-1 ring-white/20" />
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-teal-100/80 bg-white/60 p-3 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.5 9.5h15M4.5 9.5L12 4l7.5 5.5M4.5 9.5V20h4M19.5 9.5V20h-4M8.5 20v-5.5M15.5 20v-5.5M10 20h4"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-teal-950">Community care</p>
              <p className="text-xs text-teal-800/70">Local · Trusted · Attentive</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-teal-800/60">
          <span className="font-medium">Walk-ins & calls welcome</span>
          <span className="font-mono text-[0.7rem] text-teal-500/80">Haryana · 131001</span>
        </div>
      </div>
    </div>
  );
}

function WaveDivider() {
  return (
    <div
      className="translate-y-px text-emerald-50/80"
      aria-hidden
    >
      <svg className="block w-full" viewBox="0 0 1200 48" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,32 C200,0 400,64 600,32 C800,0 1000,48 1200,24 L1200,48 L0,48 Z"
        />
      </svg>
    </div>
  );
}

const trustPills = [
  { t: "Licensed team", s: "Qualified pharmacists" },
  { t: "Adarsh Nagar", s: "Easy to find" },
  { t: "Safe dispensing", s: "Quality assured" },
  { t: "We listen", s: "No rush" },
] as const;

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section
          className="relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%222%22%20cy%3D%222%22%20r%3D%221%22%20fill%3D%22%2314b8a6%22%20fill-opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')] opacity-90"
            aria-hidden
          />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-6 pt-10 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:items-center lg:gap-8 lg:pb-12 lg:pt-20">
            <div>
              <SectionLabel>Sonipat · Nasa Pharmacy</SectionLabel>
              <h1
                id="hero-heading"
                className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-teal-950 sm:text-4xl sm:leading-tight lg:text-5xl"
              >
                Care you can count on,{" "}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  right in your neighbourhood
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-teal-900/80 sm:text-lg">
                <strong className="font-semibold text-teal-900">Nasa Pharmacy</strong> is here
                for prescriptions, health checks, and expert advice — so you and your family feel
                supported every day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-teal-800 px-7 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 ring-1 ring-white/20 transition hover:shadow-xl hover:shadow-teal-900/20"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      d="M2.5 4.5C2.5 3.4 3.4 2.5 4.5 2.5h1.1c.5 0 1 .3 1.2.8l1.2 2.4c.2.5.1 1.1-.3 1.4l-1.2 1a12 12 0 006.2 6.2l1-1.2c.4-.4 1-.5 1.4-.3l2.4 1.2c.5.2.8.7.8 1.2V19.5c0 1.1-.9 2-2 2h-.5A17.5 17.5 0 012.5 5v-.5Z"
                      strokeWidth={1.75}
                      strokeLinejoin="round"
                    />
                  </svg>
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-teal-200/80 bg-white/80 px-7 text-sm font-semibold text-teal-900 shadow-sm ring-1 ring-teal-500/5 transition hover:border-cyan-300/80 hover:bg-cyan-50/50"
                >
                  <svg
                    className="h-4 w-4 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 5a2.5 2.5 0 010 6.5z" />
                  </svg>
                  Get directions
                </a>
              </div>
              <div className="mt-8 grid max-w-md grid-cols-2 gap-2 sm:grid-cols-4 sm:max-w-2xl">
                {trustPills.map((p) => (
                  <div
                    key={p.t}
                    className="rounded-2xl border border-white/30 bg-gradient-to-b from-white/50 to-white/5 px-3 py-2.5 text-left shadow-sm backdrop-blur-sm"
                  >
                    <p className="text-xs font-bold text-teal-950">{p.t}</p>
                    <p className="text-[0.7rem] text-teal-700/70">{p.s}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <HeroVisual />
            </div>
            <div className="col-span-2 lg:hidden">
              <HeroVisual />
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-b from-white via-cyan-50/30 to-white">
          <WaveDivider />
        </div>

        <section
          id="about"
          className="border-b border-teal-100/60 bg-gradient-to-b from-white to-emerald-50/20"
          aria-labelledby="about-heading"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <SectionLabel>Why choose us</SectionLabel>
            <h2
              id="about-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-teal-950 sm:text-3xl"
            >
              Your community pharmacy
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-teal-900/80">
              We combine quality products with a personal touch. From filling prescriptions to
              answering your questions, our team is focused on your wellbeing — whether you walk in
              or order for delivery.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  n: "01",
                  text: "Licensed, experienced staff you can talk to in person or by phone.",
                },
                {
                  n: "02",
                  text: "A calm, clean environment that puts patient safety first.",
                },
                {
                  n: "03",
                  text: "Convenient services so managing your health is a little easier.",
                },
              ].map((row) => (
                <li
                  key={row.n}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-teal-100/80 bg-gradient-to-br from-white p-5 shadow-sm ring-1 ring-teal-500/5 transition hover:shadow-md hover:ring-teal-400/20"
                >
                  <span
                    className="absolute -right-2 -top-2 h-20 w-20 rounded-full bg-gradient-to-br from-teal-200/20 to-cyan-200/10 blur-2xl"
                    aria-hidden
                  />
                  <span
                    className="inline-flex w-fit rounded-full border border-teal-200/60 bg-teal-50/80 px-2.5 py-0.5 text-[0.65rem] font-bold text-teal-800"
                    aria-hidden
                  >
                    {row.n}
                  </span>
                  <p className="relative z-10 mt-3 text-sm font-medium leading-relaxed text-teal-900/90">
                    {row.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="services"
          className="relative overflow-hidden border-t border-teal-100/50 bg-gradient-to-b from-emerald-50/40 via-cyan-50/20 to-white"
          aria-labelledby="services-heading"
        >
          <div
            className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-teal-200/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <div className="max-w-2xl">
              <SectionLabel>What we offer</SectionLabel>
              <h2
                id="services-heading"
                className="mt-2 text-2xl font-bold tracking-tight text-teal-950 sm:text-3xl"
              >
                Services
              </h2>
              <p className="mt-2 text-base leading-relaxed text-teal-900/80">
                Everything you expect from a full-service chemist, tailored to our local community.
              </p>
            </div>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li
                  key={s.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/50 bg-white/80 p-1 shadow-md shadow-teal-900/5 ring-1 ring-teal-500/10 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-900/10"
                >
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${s.accent} rounded-t-[0.8rem] opacity-90 group-hover:opacity-100`}
                    aria-hidden
                  />
                  <div className="flex flex-1 flex-col p-4 pt-4 sm:p-5">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-md transition group-hover:scale-105`}
                      aria-hidden
                    >
                      {s.icon}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-teal-950">{s.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-teal-800/80">
                      {s.description}
                    </p>
                    <span
                      className="mt-4 text-xs font-semibold uppercase tracking-wide text-teal-500/80 opacity-0 transition group-hover:opacity-100"
                    >
                      Ask at counter →
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-teal-100/60 bg-white"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <SectionLabel>Location</SectionLabel>
            <h2
              id="contact-heading"
              className="mt-2 text-2xl font-bold tracking-tight text-teal-950 sm:text-3xl"
            >
              Find us
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-teal-900/80">
              Step in, call, or open directions — we’re always glad to help.
            </p>
            <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-stretch">
              <address className="not-italic">
                <div className="relative h-full overflow-hidden rounded-2xl border border-teal-100/80 bg-gradient-to-br from-teal-50/90 via-white to-cyan-50/40 p-6 shadow-lg shadow-teal-900/5 ring-1 ring-teal-500/5 sm:p-8">
                  <div
                    className="pointer-events-none absolute -right-6 top-0 h-32 w-32 rounded-full bg-cyan-200/30 blur-2xl"
                    aria-hidden
                  />
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-teal-600">
                    Address
                  </p>
                  <p className="mt-2 text-xl font-bold text-teal-950">Nasa Pharmacy</p>
                  <p className="mt-1 text-base leading-relaxed text-teal-900/90">
                    Main Gali, Adarsh Nagar
                    <br />
                    Sonipat, Haryana 131001
                  </p>
                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.15em] text-teal-600">
                    Phone
                  </p>
                  <a
                    className="mt-2 block text-2xl font-bold tracking-tight text-teal-800 transition hover:text-cyan-700"
                    href={`tel:${PHONE_TEL}`}
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-teal-800 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          d="M2.5 4.5C2.5 3.4 3.4 2.5 4.5 2.5h1.1c.5 0 1 .3 1.2.8l1.2 2.4c.2.5.1 1.1-.3 1.4l-1.2 1a12 12 0 006.2 6.2l1-1.2c.4-.4 1-.5 1.4-.3l2.4 1.2c.5.2.8.7.8 1.2V19.5c0 1.1-.9 2-2 2h-.5A17.5 17.5 0 012.5 5v-.5Z"
                          strokeWidth={1.75}
                          strokeLinejoin="round"
                        />
                      </svg>
                      Call now
                    </a>
                    <a
                      href={mapHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-teal-200/90 bg-white/80 text-sm font-semibold text-teal-900 transition hover:border-cyan-300/80"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </address>
              <div className="min-h-[280px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl shadow-teal-900/10 ring-1 ring-teal-200/60">
                <iframe
                  title="Nasa Pharmacy location on Google Maps"
                  className="h-full min-h-[280px] w-full grayscale-[0.1] transition hover:grayscale-0"
                  src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
