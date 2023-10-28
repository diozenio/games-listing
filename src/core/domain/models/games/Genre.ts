import DTO from "@/core/domain/types/HTTP/DTO";
import Model from "@/core/domain/models/model";

class Genre extends Model {
  private _id: string;
  private _name: string;

  constructor() {
    super();
    this._id = this._name = "";
  }

  static fromJSON(json: DTO): Genre {
    const obj = new Genre();
    obj._id = String(json["id"]);
    obj._name = String(json["name"]);
    return obj;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
}

export default Genre;
