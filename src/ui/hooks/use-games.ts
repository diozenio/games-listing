import { PaginationParams } from "@/core/domain/types/pagination";
import { DIContainer } from "@/ui/dicontainer";

export const useFetchGames = (params: PaginationParams) => {
  return DIContainer.getGameService().fetch(params);
};

export const useFetchGameById = (id: string) => {
  return DIContainer.getGameService().fetchById(id);
};

export const useSearchGames = (query: string) => {
  return DIContainer.getGameService().search(query);
};

export const useFetchScreenshots = (id: string) => {
  return DIContainer.getGameService().fetchScreenshots(id);
};

export const useFetchGameAdditions = (gameID: string) => {
  return DIContainer.getGameService().fetchGameAdditions(gameID);
};

export const useFetchAdditionDetails = (gameID: string, additionID: string) => {
  return DIContainer.getGameService().fetchAdditionDetails(gameID, additionID);
};
