import type { Metadata } from "next";
import "@/ui/styles/globals.css";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GameWaves",
  description: "Discover the World of Gaming Like Never Before",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>{children}</body>
    </html>
  );
}
