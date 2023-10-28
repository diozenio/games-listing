import type { Metadata } from "next";
import "@/ui/styles/globals.css";
import "@radix-ui/themes/styles.css";
import ThemeProvider from "@/ui/providers/ThemeProvider";
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
      <body className={font.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
