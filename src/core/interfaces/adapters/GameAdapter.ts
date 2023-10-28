import Pagination from "@/core/domain/models/Pagination";
import Game from "@/core/domain/models/games/Game";
import Screenshot from "@/core/domain/models/games/Screenshots";
import { SearchParams } from "@/core/domain/types/searchParams";

abstract class GameAdapter {
  abstract fetch(searchParams: SearchParams): Promise<Pagination<Game>>;
  abstract fetchById(id: string): Promise<Game>;
  abstract search(query: string): Promise<Pagination<Game>>;
  abstract fetchScreenshots(id: string): Promise<Screenshot[]>;
  abstract fetchGameAdditions(gameID: string): Promise<Game[]>;
  abstract fetchAdditionDetails(
    gameID: string,
    additionID: string
  ): Promise<Game>;
}

export default GameAdapter;
