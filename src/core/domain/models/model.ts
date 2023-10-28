abstract class Model {
  static fromJSON(_: Record<string, unknown>): Model {
    throw new Error("you need to implement the fromJSON method");
  }
}

export default Model;
