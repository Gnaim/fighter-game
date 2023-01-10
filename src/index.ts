import { Arena } from "./gamePlay/Arena";

const arena = new Arena();
console.log("init fighters");
arena.initFighters();
arena.getRandomFightsPair();

console.log("Start the competetion");
arena.startCompetition();
