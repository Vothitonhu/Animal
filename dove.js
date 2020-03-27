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
module.exports = Dove