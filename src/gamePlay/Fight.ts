import { fightPair } from "./Arena";
import { Fighter } from "../characters/Fighter";
export class Fight {
  fighter1: Fighter;
  fighter2: Fighter;

  constructor(fighters: fightPair, fightersLife: number) {
    this.fighter1 = fighters.fighter1;
    this.fighter2 = fighters.fighter2;
    this.fighter1.setLife(fightersLife);
    this.fighter2.setLife(fightersLife);
  }

  startFight() {
    console.log(
      "\n \n \n \n \n",
      "Start fight between",
      this.fighter1,
      "and ",
      this.fighter2
    );

    while (this.fighter1.getLife() > 0 && this.fighter2.getLife() > 0) {
      process.stdout.write("Fighter 1: ");
      this.fighter2.receiveAttaque(this.fighter1.randomAttack());

      // stop fight if fighter2 is dead
      if (this.fighter2.getLife() < 1) break;

      process.stdout.write("Fighter 2: ");
      this.fighter1.receiveAttaque(this.fighter2.randomAttack());
    }

    console.log("------------------- Fight finished   -------------------");

    console.log(
      "------------------- Fighter 1 health -------------------",
      this.fighter1.getLife()
    );

    console.log(
      "------------------- Fighter 2 health -------------------",
      this.fighter2.getLife()
    );

    const winner = this.fighter1.getLife() > 0 ? "fighter 1" : "fighter 2";
    console.log(
      "------------------- The winner is  -------------------",
      winner
    );
  }
}
