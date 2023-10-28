import Scaffold from "@/ui/components/base/Scaffold/Scaffold";
import { GameList, SearchBar } from "./components/";
import { Suspense } from "react";
import { Skeleton } from "@/ui/components";
import { SearchParams } from "@/core/domain/types/searchParams";

export default function GamesListPage({ page, pageSize, query }: SearchParams) {
  return (
    <Scaffold>
      <div className="w-full flex flex-col items-center">
        <div className="my-32 w-full lg:max-w-4xl flex flex-col items-center">
          <h1 className="text-2xl mb-4 md:text-4xl md:mb-6 lg:text-6xl font-bold text-center">
            Game<span className="text-[#E54666]">Waves</span>: Unleashing Gaming
            Enchantment
          </h1>
          <p className="text-center md:text-lg lg:text-2xl">
            Discover the World of Gaming Like Never Before
          </p>
          <SearchBar />
        </div>
        <div className="w-full flex flex-col items-center md:items-start gap-10 mt-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Best Games of 2023:
          </h2>
          <Suspense fallback={<Skeleton />}>
            <GameList page={page} pageSize={pageSize} query={query} />
          </Suspense>
        </div>
      </div>
    </Scaffold>
  );
}
