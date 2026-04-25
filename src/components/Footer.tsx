function MapPinIcon() {
  return (
    <svg className="h-5 w-5 text-teal-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 5a2.5 2.5 0 010 6.5z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-teal-200"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
    </svg>
  );
}

import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/phone";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal-950 text-teal-50">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgb(20_184_166/0.25),transparent)]"
        aria-hidden
      />
      <div
        className="h-1 w-full bg-gradient-to-r from-teal-500/80 via-cyan-400/60 to-emerald-500/80"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-2">
            <p className="text-xl font-bold tracking-tight text-white">Nasa Pharmacy</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-teal-200/90">
              Your local chemist in Adarsh Nagar — quality medicines, careful counselling, and a
              team that takes time to listen.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Prescriptions", "Delivery", "Health checks", "Guidance"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-teal-800/60 bg-teal-900/40 px-3 py-1 text-xs font-medium text-teal-200"
                >
                  <SparkIcon />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-white">Visit us</p>
            <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-teal-200/90">
              <MapPinIcon />
              <span>
                Main Gali, Adarsh Nagar
                <br />
                Sonipat, Haryana 131001
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Call</p>
            <a
              className="mt-2 inline-flex text-lg font-semibold text-cyan-300/95 underline decoration-cyan-500/40 underline-offset-2 transition hover:text-white"
              href={`tel:${PHONE_TEL}`}
            >
              {PHONE_DISPLAY}
            </a>
            <p className="mt-2 text-xs text-teal-400/80">We’re happy to answer your questions</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-teal-800/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-teal-300/80">
            © {new Date().getFullYear()} Nasa Pharmacy. All rights reserved.
          </p>
          <p className="text-xs text-teal-300/80">
            Medicines are dispensed in line with valid prescriptions and applicable law.
          </p>
        </div>
      </div>
    </footer>
  );
}
