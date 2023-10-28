import AdditionsDetailsPage from "@/ui/pages/games/additions";

export default async function AdditionsDetails({
  params: { gameID, additionID },
}: {
  params: { gameID: string; additionID: string };
}) {
  return <AdditionsDetailsPage gameID={gameID} additionID={additionID} />;
}
