import Pagination from "../domain/models/Pagination";
import Game from "../domain/models/games/Game";
import Screenshot from "../domain/models/games/Screenshots";
import { SearchParams } from "../domain/types/searchParams";
import GameUseCase from "../interfaces/useCases/GameUseCase";

class GameService extends GameUseCase {
  fetch(searchParams: SearchParams): Promise<Pagination<Game>> {
    return this.adapter.fetch(searchParams);
  }
  fetchById(id: string): Promise<Game> {
    return this.adapter.fetchById(id);
  }
  search(query: string): Promise<Pagination<Game>> {
    return this.adapter.search(query);
  }
  fetchScreenshots(id: string): Promise<Screenshot[]> {
    return this.adapter.fetchScreenshots(id);
  }
  fetchGameAdditions(gameID: string): Promise<Game[]> {
    return this.adapter.fetchGameAdditions(gameID);
  }
  fetchAdditionDetails(gameID: string, additionID: string): Promise<Game> {
    return this.adapter.fetchAdditionDetails(gameID, additionID);
  }
}

export default GameService;
