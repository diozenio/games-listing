import GameAdapter from "@/core/interfaces/adapters/GameAdapter";
import { BackendClient } from "@/infra/api/client/BackendClient";
import { PaginationParams } from "@/core/domain/types/pagination";
import Game from "@/core/domain/models/games/Game";
import Screenshot from "@/core/domain/models/games/Screenshots";

class GameAPI extends GameAdapter {
  async fetch(paginationParams: PaginationParams): Promise<Game[]> {
    const response = await BackendClient.get("/games", {
      params: {
        ...paginationParams,
      },
    });
    return response.data.results.map(Game.fromJSON);
  }

  async fetchById(id: string): Promise<Game> {
    const response = await BackendClient.get(`/games/${id}`);
    return Game.fromJSON(response.data);
  }

  async search(query: string): Promise<Game[]> {
    const response = await BackendClient.get("/games", {
      params: {
        query,
      },
    });
    return response.data.results.map(Game.fromJSON);
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
