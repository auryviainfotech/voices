import type { Metadata } from "next";
import { Inter, Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Medi Voices - Healthcare Innovation Magazine",
  description: "A quarterly healthcare magazine focused on innovations, insights, and inspiring stories in the healthcare industry. Bringing you the latest in medical technology, research, and patient care advancements.",
  keywords: "healthcare, medical innovation, digital health, telemedicine, medical research, patient care, healthcare technology",
  authors: [{ name: "Medi Voices" }],
  openGraph: {
    title: "Medi Voices - Healthcare Innovation Magazine",
    description: "A quarterly healthcare magazine focused on innovations, insights, and inspiring stories in the healthcare industry.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} ${merriweather.variable} font-body antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
