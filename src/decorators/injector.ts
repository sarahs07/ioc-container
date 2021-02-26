import { Container } from '../di/container'

export function Injector(token: string): object {
  const container = new Container()
  return container.get(token)
}
