function Pig(name) {
    this.name = name
}
Pig.prototype.eat = function () {
    console.log('Pig eat too much')
}
Dog.prototype.sayHi = function () {
    console.log('Hi everyone, my name is ' + this.name)
}