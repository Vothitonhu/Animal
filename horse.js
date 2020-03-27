function Horse() {

}
Horse.prototype.sleep = function () {
    console.log("Sleeping...")
}
Horse.prototype.run = function () {
    console.log("Running...")
}
Horse.prototype.eat = function () {
    console.log('Horse eat grass')
}
Horse.prototype.fly = function () {
    console.log('Horse can not fly ...');
}
Horse.prototype.swim = function () {
    console.log('Horse can not swim ...');
}
module.exports = Horse