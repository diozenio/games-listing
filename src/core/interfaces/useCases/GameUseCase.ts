import { PaginationParams } from "@/core/domain/types/pagination";
import Game from "@/core/domain/models/games/Game";
import GameAdapter from "../adapters/GameAdapter";
import Screenshot from "@/core/domain/models/games/Screenshots";

abstract class GameUseCase {
  constructor(protected readonly adapter: GameAdapter) {}
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

export default GameUseCase;
