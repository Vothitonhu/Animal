var Dog = require('./Dog')
var dog = new Dog('Lucy')
dog.sayHi()

var Cat = require('./Cat')
var tom = new Cat('Tom')
dog.eat(tom)
console.log(dog)