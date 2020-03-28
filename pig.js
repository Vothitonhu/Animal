function Pig(name) {
    this.name = name
}
Pig.prototype.eat = function () {
    console.log('Pig eats too much')
}
Pig.prototype.run = function () {
    console.log('Pig runs so slowly')
}
