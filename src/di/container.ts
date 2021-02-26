import { IContainer, ServiceDefDep } from './container.interface';

export class Container implements IContainer {
  private _services: Map<string, ServiceDefDep>

  constructor() {
    this._services = new Map()
  }

  /**
   * @usage it gets called by the decorator @inject
   * to get a singleton instance of the dependency to be returned
   */
  public get<T>(name: string): T {
    return this._get(name);
  }

  /**
   * @usage it gets called by the decorator @injectable
   * to register any class annotated by the @injectable decorator.
   */
  public register(
    name: string,
    definition: {},
    dependencies: Array<string> = []
  ) {
    try {
      if (!this._isValidName(name))
        throw new Error(`Invalid dependency name provided to register`)
      if (!this._isValidDefinition(definition))
        throw new Error(`Invalid dependency definition provided`)
      if (!Array.isArray(dependencies))
        throw new Error(`Dependencies need to be supplied as array`)

      return this._services.set(name, {
        definition: definition,
        dependencies: dependencies,
      })
    } catch (e) {
      throw new Error(`Unable to register dependency ${e}`)
    }
  }

  private _get<T>(name: string): T {
    try {
      if (!this._isValidName(name))
        throw new Error(`Invalid dependency name provided to fetch`)

      let service: any = this._services.get(name)
      if (this._isValidDefinition(service.definition)) {
        console.log('heee ', typeof this._createSingleton(service), this._createSingleton(service));
        return this._createSingleton(service)
      }
    } catch (e) {
      throw new Error(`Unable to create dependency instance ${e}`)
    }
  }

  private _fetchDependencies(dependencies: Array<string>) {
    try {
      return dependencies.map((name) => this._get(name))
    } catch (e) {
      throw new Error(`_resolvedDependencies ${e}`)
    }
  }

  private _createSingleton(service: any) {
    try {
      return new service.definition(
        ...this._fetchDependencies(service.dependencies)
      )
    } catch (e) {
      throw new Error(`_createSingleton ${e}`)
    }
  }

  private _isValidName(name: string) {
    if (typeof name !== 'string' || name.length === 0) return false
    return true
  }

  private _isValidDefinition(definition: {}) {
    return typeof definition !== 'object'
  }
}
