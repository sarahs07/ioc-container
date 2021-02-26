import { Container } from '../di/container';

export function Injectable(name: string, definition: {}, dependencies: Array<string>): any {
  const container = new Container();
  container.register(name, definition, dependencies);
}