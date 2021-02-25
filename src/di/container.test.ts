import { Container } from './container';

describe('IoC Container', () => {
  let container: Container;
  let mockService = class MockService{};
  let dependencyOne = class dependencyOne{};
  let dependencyTwo = class dependencyTwo{};

  beforeEach(()=>{
    container = new Container();
  });

  test('get method - checks for validity of the dependency name', () => {
    expect(() => container.get('')).toThrow('Invalid dependency name provided to fetch');
  });

  test('get method - returns the specified dependency instance', () => {
    container.register('mockService', mockService, ['dependencyOne', 'dependencyTwo']);
    container.register('dependencyOne', dependencyOne);
    container.register('dependencyTwo', dependencyTwo);

    let spy_isValidName = spyOn<any>(container, '_isValidName');
    spy_isValidName.and.returnValue(true);

    let spy_isValidDefinition = spyOn<any>(container, '_isValidDefinition');
    spy_isValidDefinition.and.returnValue(true);
    const instanceCreated = container.get('mockService');

    expect(spy_isValidName).toHaveBeenCalled();
    expect(spy_isValidDefinition).toHaveBeenCalled();

    expect(instanceCreated instanceof mockService).toBe(true);
  });

  test('register method - checks for validity of the dependency name', () => {
    expect(() => container.register('', mockService)).toThrow('Invalid dependency name provided to register');
  });

  test('register method - registers the specified dependency', () => {
    let spy_isValidName = spyOn<any>(container, '_isValidName');
    spy_isValidName.and.returnValue(true);

    let spy_isValidDefinition = spyOn<any>(container, '_isValidDefinition');
    spy_isValidDefinition.and.returnValue(true);
    
    container.register('mockService', mockService);

    expect(spy_isValidName).toHaveBeenCalled();
    expect(spy_isValidDefinition).toHaveBeenCalled();

    expect(typeof container['_services']).toBe('object');
  });

})