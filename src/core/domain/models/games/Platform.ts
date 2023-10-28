import DTO from "@/core/domain/types/HTTP/DTO";
import Model from "@/core/domain/models/model";

class Platform extends Model {
  private _id: string;
  private _name: string;

  constructor() {
    super();
    this._id = this._name = "";
  }

  static fromJSON(json: DTO): Platform {
    const obj = new Platform();
    const platform = json.platform as DTO;
    obj._id = String(platform.id);
    obj._name = String(platform.name);
    return obj;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
}

export default Platform;
