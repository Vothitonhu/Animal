function Pig(name) {
    this.name = name
}
Dog.prototype.sayHi = function () {
    console.log('Hi everyone, my name is ' + this.name)
}