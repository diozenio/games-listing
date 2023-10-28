import React, { PropsWithChildren } from "react";
import { Header, Footer } from "@/ui/components/base";

export default function Scaffold({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-full flex flex-col bg-pageBackground bg-no-repeat bg-cover">
      <Header />
      <main className="flex flex-col flex-1">
        <div className="flex h-full px-6 md:px-10 flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
