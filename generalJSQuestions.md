### What is a closure?

A closure is an environment whereby an inner function is able to derive values for it's variables from it's lexical (surrounding/outer) scrope e.g.

```JS
function () { 
  y = 1;
  function (x) {
  return x+y;
  }
}
```

### b. What are their disadvantages?

There are two main disadvantages:

1. Having a function inside another function has adverse effect on memory consumption and slows down the application.
2. Closures if not set to null can prevent from garbage collection and can lead to memory leaks.

### 2. How does the inheritance system in JavaScript work?

Inheritance system in JavaScript works via prototypical inheritance which is not similar to the conventional OO inheritance.
Every data type (under the hood) is a JavaScript Object which has it's own set of private properties and methods added to '__protype__'

The 'Object.prototype' property represents the Object prototype object.
All prototype properties and methods become available to all instances of the object with the same implementation.

### 3.  a. What is `this`

this is a variable / object whose value is set at the time of it's invocation. 

### b. How can you change its value?

it's value can be changed in couple of ways e.g.

1. using arrow functions ```() => {}```
which set the value of this it's a lexical scope just like a closure function.

2. chaining bing() to the function invocation e.g. 
    ``` this.functionA().bind(this)
    



