const Things = function (things) {}

Things.prototype.putThingsInAHandbag = function (thing, thingName) {
    this[thing] = thingName
}

Things.prototype.removeThingsFromAHandbag = function (thing) {
    delete this[thing]
}

const handbag = new Things ()





