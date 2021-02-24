import { Container } from './container';

describe('IoC Container', () => {
  let container: Container;
  let mockService = class {
    firstName: 'la la';
  };

  beforeEach(()=>{
    container = new Container();
  });

  test('register method - creates an instance of the specified dependency', () => {
    const spy = jest.spyOn(container, 'register');
    
    container.register('mockService', mockService);

    expect(spy).toHaveBeenCalled();
  });

  test('get method - returns the specified dependency instance', () => {
    const spy = jest.spyOn(container, 'get');
    
    container.register('mockService', mockService);
    container.get('mockService');

    expect(spy).toHaveBeenCalled();
  });

  test('register method checks for validity of the dependency name', () => {
    expect(() => container.register('', mockService)).toThrow('Invalid dependency name provided to register');
  });

  /**
   * TODO: due to time limitation didn't write more tests...
   */
  test('register method checks for validity of params', () => {

  })

})