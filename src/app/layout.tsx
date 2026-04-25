import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppLoader } from "@/components/AppLoader";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasa Pharmacy | Adarsh Nagar, Sonipat",
  description:
    "Nasa Pharmacy in Sonipat, Haryana — prescription filling, delivery, blood pressure testing, medication review, and pharmacist consultation. Main Gali, Adarsh Nagar.",
  keywords: [
    "pharmacy",
    "chemist",
    "Sonipat",
    "Adarsh Nagar",
    "Haryana",
    "Nasa Pharmacy",
    "prescription",
    "medicine delivery",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-teal-950">
        <AppLoader>{children}</AppLoader>
      </body>
    </html>
  );
}
