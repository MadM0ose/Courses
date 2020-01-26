const Things = function (things) {}

const handbag = new Things ()

Things.prototype.putThingsInAHandbag = function (thing, thingName) {
    this[thing] = thingName
}

Things.prototype.removeThingsFromAHandbag = function (thing) {
    delete this[thing]
}









const GetInfo = function () {}
const user1 = new GetInfo () 
const user2 = new GetInfo ()

user1.name = "Liza"
user1.registered = true
user1.data = new Date (2020, 01, 25)


user2.name = "Danya"
user2.registered = false
user2.data = new Date (2020, 01, 25)

GetInfo.prototype.getInfo = function userInfo () {
    if(this.registered === true){
      console.log(
        "Дата регистрации: " + this.data
          .toLocaleString().split(", ")[0]
      )
      }
    else {
      console.log(
        "Незарегистрированный пользователь: " + this.name
      )
    }
}


