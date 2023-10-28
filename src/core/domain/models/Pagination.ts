import DTO from "@/core/domain/types/HTTP/DTO";
import Model from "@/core/domain/models/model";

class Pagination<T extends Model> {
  private _count: number;
  private _next: string | null;
  private _previous: string | null;
  private _results: T[];

  constructor(
    count: number,
    next: string | null,
    previous: string | null,
    results: T[]
  ) {
    this._count = count;
    this._results = results;
    this._next = next;
    this._previous = previous;
  }

  static fromJSON<T extends Model>(
    json: DTO,
    itemFactory: (json: DTO) => T
  ): Pagination<T> {
    return new Pagination(
      Number(json["count"]),
      json["next"] ? String(json["next"]) : null,
      json["previous"] ? String(json["previous"]) : null,
      (json["results"] as DTO[])?.map(itemFactory)
    );
  }

  get count(): number {
    return this._count;
  }

  get results(): T[] {
    return this._results;
  }

  get next(): string | null {
    return this._next;
  }

  get previous(): string | null {
    return this._previous;
  }
}

export default Pagination;
