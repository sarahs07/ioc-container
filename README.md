# ioc-container

This liberary is a very minimalistic implemention of dependency injection mechanism. 

## Background:

Although Inversion of Control (IoC) is mainly about removing dependency on concrete implemention of dependencies and using interfaces instead of classes.
Due to given short time, I chose to implement the DI first and it can be further enhanced to make it more abstract.

## Usage:

It follows the classical IoC implementation which can be used in two ways: 

### With API methods as below

```ts
// register a factory
container.register('mockService', mockService, ['dependencyOne', 'dependencyTwo']);
```
and then

```ts
// retrieve a service
container.get('mockService');
```

### With decorators 
This provide a convenient interface for marking
specific classes (‘@injectable’) that can be used as dependencies.
Class that need a dependency to be injected use @inject with the token specifying the dependency name.
Potential service/dependecy class annotation

```
@injectable('httpInterceptService')
class httpInterceptService {}
```

Client: component or another service needing an instance of this service to be injected.

```
@inject('httpInterceptService') httpInterceptService;
```





