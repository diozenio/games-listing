import { Card } from "@/ui/components/Card";
import { useFetchGameAdditions } from "@/ui/hooks/use-games";

interface AdditionsListProps {
  gameID: string;
}

const AdditionsList = async ({ gameID }: AdditionsListProps) => {
  const additions = await useFetchGameAdditions(gameID);

  return (
    <div className="w-full flex flex-col items-center md:items-start gap-10 mt-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Game DLCs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!additions || additions.length === 0 ? (
          <p className="text-lg text-dark-500">
            {"This game doesn't have DLC's"}
          </p>
        ) : (
          additions.map((addition) => {
            return (
              <Card.Root
                href={`/games/${gameID}/additions/${addition.id}`}
                key={addition.id}
              >
                <Card.Image
                  src={addition.background_image!}
                  alt={`${addition.name} cover image`}
                />
                <Card.Content>
                  <Card.Title>{addition.name}</Card.Title>
                </Card.Content>
              </Card.Root>
            );
          })
        )}
      </div>
    </div>
  );
};

export { AdditionsList };
