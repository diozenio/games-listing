import GameDetailsPage from "@/ui/pages/games/details";

export default async function GameDetails({
  params: { gameID },
}: {
  params: { gameID: string };
}) {
  return <GameDetailsPage id={gameID} />;
}
