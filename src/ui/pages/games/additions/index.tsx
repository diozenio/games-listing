import Scaffold from "@/ui/components/base/Scaffold/Scaffold";
import { useFetchAdditionDetails } from "@/ui/hooks/use-games";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { BsStarFill } from "react-icons/bs";
import { LuArrowLeft, LuLoader } from "react-icons/lu";

interface AdditionsDetailsPageProps {
  gameID: string;
  additionID: string;
}

const Details = async ({ gameID, additionID }: AdditionsDetailsPageProps) => {
  const addition = await useFetchAdditionDetails(gameID, additionID);

  if (!addition || !addition.id)
    return (
      <div className="flex flex-col items-center justify-center">
        <h1>DLC not found</h1>
      </div>
    );

  return (
    <>
      <div className="w-full flex flex-col py-10 lg:flex-row lg:gap-8 lg:items-center">
        <div className="w-full h-[350px] lg:h-[500px] relative rounded-xl overflow-hidden lg:max-w-4xl">
          <Image
            src={addition.background_image!}
            alt={addition.name}
            width={1200}
            height={1200}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col py-6 gap-8 max-w-4xl">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center lg:items-start lg:flex-col justify-normal">
            <div>
              <h1 className="font-bold text-3xl mb-2 dark:text-dark-200">
                DLC: {addition.name}
              </h1>
              <p className="text-2xl text-dark-600 dark:text-dark-500">
                {addition.released}
              </p>
            </div>
            <div>
              <h2 className="font-bold text-2xl flex gap-1">
                Metacritc: {addition.metacritic}
                <span>
                  <BsStarFill color="#80FF1C" />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function AdditionsDetailsPage({
  gameID,
  additionID,
}: AdditionsDetailsPageProps) {
  return (
    <Scaffold>
      <div className="flex flex-col flex-1">
        <Link
          href={"/games/" + gameID}
          className="flex gap-1 items-center font-semibold text-lg"
        >
          <LuArrowLeft />
          Back to game
        </Link>
        <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center">
              <LuLoader className="animate-spin" />
            </div>
          }
        >
          <Details gameID={gameID} additionID={additionID} />
        </Suspense>
      </div>
    </Scaffold>
  );
}
