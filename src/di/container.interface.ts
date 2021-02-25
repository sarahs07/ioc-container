export type Factory = ()=>{};

export interface IContainer {
  register(name: string, factory: Factory, dependencies: Array<string>): void;
  get(name: string);
}