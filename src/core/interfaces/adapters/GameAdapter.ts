import Game from "@/core/domain/models/games/Game";
import Screenshot from "@/core/domain/models/games/Screenshots";
import { PaginationParams } from "@/core/domain/types/pagination";

abstract class GameAdapter {
  abstract fetch(paginationParams: PaginationParams): Promise<Game[]>;
  abstract fetchById(id: string): Promise<Game>;
  abstract search(query: string): Promise<Game[]>;
  abstract fetchScreenshots(id: string): Promise<Screenshot[]>;
  abstract fetchGameAdditions(gameID: string): Promise<Game[]>;
  abstract fetchAdditionDetails(
    gameID: string,
    additionID: string
  ): Promise<Game>;
}

export default GameAdapter;
