import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOMSACA — Gombe State Agency for the Control of AIDS",
  description:
    "Gombe State Agency for the Control of Aids is an agency saddled with the responsibility of identifying and controlling the spread of HIV.",
  keywords: [
    "GOMSACA",
    "Gombe State",
    "HIV/AIDS",
    "AIDS control",
    "Nigeria",
    "public health",
    "HIV prevention",
    "HIV treatment",
    "health agency",
  ],
  openGraph: {
    title: "GOMSACA — Gombe State Agency for the Control of AIDS",
    description:
      "Gombe State Agency for the Control of Aids is an agency saddled with the responsibility of identifying and controlling the spread of HIV.",
    type: "website",
    locale: "en_NG",
    siteName: "GOMSACA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
