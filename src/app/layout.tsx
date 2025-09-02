import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.scss";
import "./global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design de Nails | Beleza e Estilo",
  description:
    "Landing Page profissional de Design de Nails. Agende seu horário e descubra novas tendências em unhas artísticas, esmaltação em gel e nail art personalizada.",
  keywords: [
    "design de nails",
    "unhas decoradas",
    "nail art",
    "esmaltação em gel",
    "alongamento de unhas",
    "manicure profissional",
    "beleza",
    "estilo",
  ],
  authors: [
    { name: "Fernando Ferreira", url: "https://fernandodev.vercel.app/" },
  ],
  creator: "Fernando Ferreira",
  publisher: "Vercel",
  applicationName: "Design de Nails",
  metadataBase: new URL("https://ayumifer.vercel.app/"),

  openGraph: {
    title: "Design de Nails | Beleza e Estilo",
    description:
      "Unhas impecáveis com os melhores designs e técnicas modernas. Confira nossa galeria e agende já seu atendimento!",
    url: "https://ayumifer.vercel.app/",
    siteName: "Design de Nails",
    locale: "pt_BR",
    type: "website",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://ayumifer.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
