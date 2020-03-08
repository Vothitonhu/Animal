function Horse() {

}
Horse.prototype.sleep = function () {
    console.log("Sleeping...")
}
Horse.prototype.run = function () {
    console.log("Running...")
}
module.exports = Horse