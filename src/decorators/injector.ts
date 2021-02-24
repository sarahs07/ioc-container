import { Container } from '../di/container';

export function Injector(token: string): void {
  const container = new Container();
  container.get(token);
}