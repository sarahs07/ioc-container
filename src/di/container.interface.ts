export interface IContainer {
  register(name: string, factory: any, dependencies: Array<string>): void;
}