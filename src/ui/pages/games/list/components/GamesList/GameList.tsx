import { SearchParams } from "@/core/domain/types/searchParams";
import { Card } from "@/ui/components";
import { useFetchGames } from "@/ui/hooks/use-games";
import { PaginationBar } from "./PaginationBar";

const GameList = async ({ page, pageSize, query }: SearchParams) => {
  const {
    results: games,
    next,
    previous,
  } = await useFetchGames({ page, pageSize, query });

  if (!games) return <h1>No games found</h1>;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games?.map((game) => (
          <Card.Root key={game.id} href={`/games/${game.id}`}>
            <Card.Image
              src={game.background_image!}
              alt={`${game.name} cover image`}
            />
            <Card.Content>
              <Card.Title>{game.name}</Card.Title>
              <div>
                <h6 className="mb-2 font-semibold">Available on:</h6>
                <ul className="w-full flex flex-row flex-wrap gap-2">
                  {game.platforms?.map((platform, index) => (
                    <>
                      {index > 0 && (
                        <span
                          key={`${game.id}-separator-${platform.id} ${index}}`}
                          className="text-gray-400"
                        >
                          -
                        </span>
                      )}
                      <li key={`${game.id}-platform-${platform.id}`}>
                        {platform.name}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div>
                <h6 className="mb-2 font-semibold">Genres:</h6>
                <div className="w-full flex flex-row flex-wrap gap-2">
                  {game.genres?.length! > 0 ? (
                    game.genres?.map((genre) => (
                      <Card.Tag key={`${game.id}-genre-${genre.id}`}>
                        {genre.name}
                      </Card.Tag>
                    ))
                  ) : (
                    <span className="text-gray-400">No genres</span>
                  )}
                </div>
              </div>
            </Card.Content>
          </Card.Root>
        ))}
      </div>
      <PaginationBar
        next={next}
        page={page}
        previous={previous}
        pageSize={pageSize}
        query={query}
      />
    </>
  );
};

export { GameList };
