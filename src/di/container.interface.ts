export interface IContainer {
  register(name: string, factory: {}, dependencies: Array<string>): void;
  get(name: string)<T>: T;
}

export type ServiceDefDep = {
  definition: {};
  dependencies: Array<string>
}
