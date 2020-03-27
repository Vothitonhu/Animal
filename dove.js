function Dove() {
    this.name = name;
}
Dove.prototype.sleep = function () {
    console.log("Sleeping...")
}
Dove.prototype.fly = function () {
    console.log("Flying...")
}
Dove.prototype.run = function () {
    console.log('Dove run slowly...')
}
Dove.prototype.swim = function () {
    console.log('Dove can not swim ...')
}
module.exports = Dove