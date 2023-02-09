'use strict'

const myCar = {

    year: "2006",

    make: "Mitsubishi",

    model: "Outlander Sport",

    vroom: function(){
        return("My car is a " + this.year + " " + this.make + " " + this.model)
    }
}

console.log(myCar.make)

document.write(myCar.vroom())

function ps2Games (game, rating, score){
    this.game = game;
    this.rating = rating;
    this.score = score;
}

ps2Games.prototype.price = "$10"

const RaC2002 = new ps2Games ('Ratchet and Clank', '96%', '9/10')

const RaCGC = new ps2Games ('Ratchet and clank Going Cammando', '96%', '9/10')

const RaCUUA = new ps2Games ('Ratchet and Clank Up Your Arsenal', '97%', '9.2/10')

console.log(RaC2002, ps2Games.prototype)

console.log(RaCGC)

console.log(RaCUUA)