# ioc-container

This liberary is a very minimalistic implemention of dependency injection mechanism. 

## Usage:

It follows the classical IoC implementation to use decorators that provide a convenient interface for marking
specific classes (‘@injectable’) that can be used as dependencies.
Class that need a dependency to be injected use @inject with the token specifying the dependency name.

e.g. 
Potential service/dependecy:

@injectable('httpInterceptService')
class httpInterceptService {}

Client: component or another service needing an instance of this service to be injected.

@inject httpInterceptService






