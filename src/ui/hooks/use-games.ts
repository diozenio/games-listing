import { SearchParams } from "@/core/domain/types/searchParams";
import { DIContainer } from "@/ui/dicontainer";

export const useFetchGames = (searchParams: SearchParams) => {
  return DIContainer.getGameService().fetch(searchParams);
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
