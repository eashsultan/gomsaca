import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GOMSACA — Gombe State Agency for the Control of AIDS",
    template: "%s | GOMSACA — Gombe State Agency for the Control of AIDS",
  },
  metadataBase: new URL("https://gomsaca.org.ng"),
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
  authors: [{ name: "Gombe State Agency for the Control of AIDS" }],
  openGraph: {
    title: "GOMSACA — Gombe State Agency for the Control of AIDS",
    description:
      "Gombe State Agency for the Control of Aids is an agency saddled with the responsibility of identifying and controlling the spread of HIV.",
    type: "website",
    locale: "en_NG",
    siteName: "GOMSACA",
    url: "https://gomsaca.org.ng",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOMSACA — Gombe State Agency for the Control of AIDS",
    description:
      "Gombe State Agency for the Control of Aids is an agency saddled with the responsibility of identifying and controlling the spread of HIV.",
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport = {
  themeColor: "#0B3C6D",
  width: "device-width",
  initialScale: 1,
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
