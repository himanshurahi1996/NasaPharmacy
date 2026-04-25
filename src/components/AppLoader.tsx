"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type AppLoaderProps = {
  children: React.ReactNode;
};

export function AppLoader({ children }: AppLoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center bg-teal-50 transition-opacity duration-500 ${
          loading ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!loading}
      >
        <div className="flex flex-col items-center gap-5 px-6 text-center">
          <div className="relative h-24 w-56 sm:h-28 sm:w-64">
            <Image
              src="/logo.png"
              alt="Nasa Pharmacy"
              fill
              sizes="(max-width: 640px) 224px, 256px"
              className="object-contain"
              priority
            />
          </div>
          <div className="h-1.5 w-40 overflow-hidden rounded-full bg-teal-200">
            <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" />
          </div>
        </div>
      </div>

      <div className={loading ? "opacity-0" : "opacity-100"}>{children}</div>
    </>
  );
}
