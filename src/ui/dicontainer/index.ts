import GameService from "@/core/services/GameService";
import GameAPI from "@/infra/api/games";

class DIContainer {
  static getGameService() {
    return new GameService(new GameAPI());
  }
}

export { DIContainer };
