import { Fighter } from "../characters/Fighter";
import { Zombie } from "../characters/Zombie";
import { Ninja } from "../characters/Ninja";
import { Capitaine } from "../characters/Capitaine";
import { shuffleArray } from "../helper/arrayFunctions";
import { Fight } from "./Fight";

export type fightPair = {
  fighter1: Fighter;
  fighter2: Fighter;
};
export class Arena {
  fightersLife = 10;
  fighters: Fighter[] = [];
  fightPairs: fightPair[] = [];
  initFighters() {
    this.fighters = [
      new Zombie(this.fightersLife),
      new Fighter(this.fightersLife),
      new Ninja(this.fightersLife),
      new Capitaine(this.fightersLife),
    ];
  }

  getRandomFightsPair() {
    const fightersShuffled = shuffleArray(this.fighters);

    let pairs: fightPair[] = [];

    for (var i = 0; i < fightersShuffled.length - 1; i++) {
      for (var j = i; j < fightersShuffled.length - 1; j++) {
        pairs.push({
          fighter1: fightersShuffled[i],
          fighter2: fightersShuffled[j + 1],
        });
      }
    }
    this.fightPairs = pairs;
  }

  startCompetition() {
    this.fightPairs.forEach((pair) => {
      new Fight(pair, this.fightersLife).startFight();
    });
  }
}
