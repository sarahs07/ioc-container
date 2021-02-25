import { Container } from '../di/container';

type Factory = ()=>{};

export function Injectable(name: string, definition: Factory, dependencies: Array<string>): any {
  const container = new Container();
  container.register(name, definition, dependencies);
}