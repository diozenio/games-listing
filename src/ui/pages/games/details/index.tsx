import Scaffold from "@/ui/components/base/Scaffold/Scaffold";
import { useFetchGameById } from "@/ui/hooks/use-games";
import Image from "next/image";
import { AdditionsList, Gallery } from "./components";
import { ScrollArea } from "@radix-ui/themes";
import { BsStarFill } from "react-icons/bs";
import { Suspense } from "react";
import { LuArrowLeft, LuLoader } from "react-icons/lu";
import Link from "next/link";

interface GameDetailsPageProps {
  id: string;
  searchParams?: string;
}

const Details = async ({ id }: GameDetailsPageProps) => {
  const game = await useFetchGameById(id);

  if (!game || !game.id)
    return (
      <div className="flex flex-col items-center justify-center">
        <h1>Game not found</h1>
      </div>
    );

  return (
    <>
      <div className="w-full flex flex-col py-10 lg:flex-row lg:gap-8 lg:items-center">
        <div className="w-full h-[350px] lg:h-[500px] relative rounded-xl overflow-hidden lg:max-w-4xl bg-dark-800">
          {game.background_image ? (
            <Image
              src={game.background_image!}
              alt={game.name}
              width={1200}
              height={1200}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              No Image
            </div>
          )}
          <Gallery gameID={id} />
        </div>
        <div className="w-full flex flex-col py-6 gap-8 max-w-4xl">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center lg:items-start lg:flex-col justify-normal">
            <div>
              <h1 className="font-bold text-3xl mb-2 dark:text-dark-200">
                {game.name}
              </h1>
              <p className="text-2xl text-dark-600 dark:text-dark-500">
                {game.released}
              </p>
            </div>
            <div>
              <h2 className="font-bold text-2xl flex gap-1">
                Metacritc: {game.metacritic}
                <span>
                  <BsStarFill color="#80FF1C" />
                </span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl dark:text-dark-200">
              Description
            </h2>
            <ScrollArea className="max-h-40">
              <p className="text-2xl md:text-xl text-dark-700 dark:text-dark-400">
                {game.description ? game.description : "No description"}
              </p>
            </ScrollArea>
          </div>
        </div>
      </div>
      <AdditionsList gameID={id} />
    </>
  );
};

export default function GameDetailsPage({
  id,
  searchParams,
}: GameDetailsPageProps) {
  return (
    <Scaffold>
      <div className="flex flex-col flex-1">
        <Link
          href={"/" + (searchParams ? `?${searchParams}` : "")}
          className="flex gap-1 items-center font-semibold text-lg"
        >
          <LuArrowLeft />
          Back to home
        </Link>
        <Suspense
          fallback={
            <div className="flex flex-1 justify-center items-center">
              <LuLoader className="animate-spin" />
            </div>
          }
        >
          <Details id={id} />
        </Suspense>
      </div>
    </Scaffold>
  );
}
