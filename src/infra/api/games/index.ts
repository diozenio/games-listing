import GameAdapter from "@/core/interfaces/adapters/GameAdapter";
import { BackendClient } from "@/infra/api/client/BackendClient";
import Game from "@/core/domain/models/games/Game";
import Screenshot from "@/core/domain/models/games/Screenshots";
import { SearchParams } from "@/core/domain/types/searchParams";
import Pagination from "@/core/domain/models/Pagination";

class GameAPI extends GameAdapter {
  async fetch(searchParams: SearchParams): Promise<Pagination<Game>> {
    const response = await BackendClient.get("/games", {
      params: {
        ...searchParams,
      },
    });
    return Pagination.fromJSON(response.data, Game.fromJSON);
  }

  async fetchById(id: string): Promise<Game> {
    const response = await BackendClient.get(`/games/${id}`);
    return Game.fromJSON(response.data);
  }

  async search(query: string): Promise<Pagination<Game>> {
    const response = await BackendClient.get("/games", {
      params: {
        query,
      },
    });
    return Pagination.fromJSON(response.data, Game.fromJSON);
  }
  async fetchScreenshots(id: string): Promise<Screenshot[]> {
    const response = await BackendClient.get(`/games/${id}/screenshots`);
    return response.data.results?.map(Screenshot.fromJSON);
  }
  async fetchGameAdditions(gameID: string): Promise<Game[]> {
    const response = await BackendClient.get(`/games/${gameID}/additions`);
    return response.data?.results?.map(Game.fromJSON);
  }
  async fetchAdditionDetails(
    gameID: string,
    additionID: string
  ): Promise<Game> {
    const response = await BackendClient.get(
      `/games/${gameID}/additions/${additionID}`
    );
    return Game.fromJSON(response.data);
  }
}

export default GameAPI;
