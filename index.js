const MissionCommander_class = require("./app/missionCommander");

const Carlo = new MissionCommander_class("Carlo")
const Fer = new MissionCommander_class("Fer")
const Rodrigo = new MissionCommander_class("Rodrigo")

console.log(Carlo.name)
console.log(Fer.name)
console.log(Rodrigo.name)