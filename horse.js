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
module.exports = Horse