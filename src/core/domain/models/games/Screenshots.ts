import DTO from "@/core/domain/types/HTTP/DTO";
import Model from "@/core/domain/models/model";

class Screenshot extends Model {
  private _id: string;
  private _image: string;

  constructor() {
    super();
    this._id = this._image = "";
  }

  static fromJSON(json: DTO): Screenshot {
    const obj = new Screenshot();
    obj._id = String(json["id"]);
    obj._image = String(json["image"]);
    return obj;
  }

  get id(): string {
    return this._id;
  }

  get image(): string {
    return this._image;
  }
}

export default Screenshot;
