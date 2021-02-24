import { IContainer } from './container.interface';
import { IProvider } from './provider.interface';

export class Container implements IContainer{

  private _services: Map<string, object>;
  public providers: { [key: string]: any } = {};

  constructor(){
    this._services = new Map();
  }

  /**
   * @usage it gets called by the decorator @inject 
   * to get a singleton instance of the dependency to be returned
   */
  public get(name: string): Object{
    return this._get(name);
  }

  /**
   * @usage it gets called by the decorator @injectable 
   * to register any class annotated by the @injectable decorator.
   */

  public register(name: string, definition: object, dependencies: Array<string> = []){
    try{
      if (!this._isValidName) console.error(`Invalid dependency name provided to register`);
      if (!this._isValidDefinition) console.error(`Invalid dependency definiation provided`);
      if(!Array.isArray(dependencies)) {
        console.error(`Dependencies need to be supplied as array`);
        return false;
      }
      this._services.set(name, {definition: definition, dependencies: dependencies});

    }
    catch(e){
      console.error(`Unable to register dependency $e`);
    }
  }

  private _get(name: string): Array<Object> | Object{
    if (!this._isValidName) {
      throw new Error(`Invalid dependency name provided to fetch`);
      return false;
    }
    let service: any = this._services.get(name);

    if (service) return this._resolveDependencies(service.dependencies);
    return false;
  }

  private _resolveDependencies(dependencies: Array<string>){
    return dependencies.map(name => this._get(name));
  }

  private _isValidName(name:string){
    console.log('in _isValidName');
    if(typeof name !== 'string' || name.length === 0) return false;
    return true;
  }

  private _isValidDefinition(definition: object){
    if(typeof definition !== 'function') return false;
    return true;
  }
}
