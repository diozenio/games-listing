import DTO from "@/core/domain/types/HTTP/DTO";
import Model from "@/core/domain/models/model";
import Platform from "./Platform";
import Genre from "./Genre";
import Screenshot from "./Screenshots";

class Game extends Model {
  private _id: string;
  private _name: string;
  private _background_image?: string;
  private _released?: string;
  private _metacritic?: number;
  private _genres?: Genre[];
  private _platforms?: Platform[];
  private _screenshotsCount?: number;
  private _shortScreenshots?: Screenshot[];
  private _description?: string;

  constructor() {
    super();
    this._id =
      this._name =
      this._background_image =
      this._released =
      this._description =
        "";
    this._metacritic = this._screenshotsCount = 0;
    this._genres = [];
    this._platforms = [];
    this._shortScreenshots = [];
  }

  static fromJSON(json: DTO): Game {
    const obj = new Game();
    if (json["id"]) obj._id = String(json["id"]);
    if (json["name"]) obj._name = String(json["name"]);
    if (json["background_image"])
      obj._background_image = String(json["background_image"]);
    if (json["released"]) obj._released = String(json["released"]);
    if (json["metacritic"]) obj._metacritic = Number(json["metacritic"]);
    if (json["genres"])
      obj._genres = (json["genres"] as DTO[]).map(Genre.fromJSON);
    if (json["platforms"])
      obj._platforms = (json["platforms"] as DTO[]).map(Platform.fromJSON);
    if (json["screenshots_count"])
      obj._screenshotsCount = Number(json["screenshots_count"]);
    if (json["short_screenshots"])
      obj._shortScreenshots = (json["short_screenshots"] as DTO[]).map(
        Screenshot.fromJSON
      );
    if (json["description_raw"])
      obj._description = String(json["description_raw"]);
    return obj;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get background_image(): string | undefined {
    return this._background_image;
  }

  get released(): string | undefined {
    return this._released;
  }

  get metacritic(): number | undefined {
    return this._metacritic;
  }

  get genres(): Genre[] | undefined {
    return this._genres;
  }

  get platforms(): Platform[] | undefined {
    return this._platforms;
  }

  get screenshots_count(): number | undefined {
    return this._screenshotsCount;
  }

  get short_screenshots(): Screenshot[] | undefined {
    return this._shortScreenshots;
  }

  get description(): string | undefined {
    return this._description;
  }
}

export default Game;
