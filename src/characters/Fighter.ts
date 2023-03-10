import { GameConfig } from "../gameConfig/gameConfig";
import { getRandomElement } from "../helper/arrayFunctions";
const gameConfig: GameConfig = require("../gameConfig/gameConfig.json");
export class Fighter {
  private life: number;

  constructor(life: number) {
    this.life = life;
  }

  getLife(): number {
    return this.life;
  }

  setLife(life: number) {
    this.life = life;
  }

  receiveAttaque(attackDammage: number): number {
    this.life -= attackDammage <= this.life ? attackDammage : this.life;
    return this.life;
  }

  protected poing(): number {
    return gameConfig.character.fighter.attack.poing;
  }

  protected pied(): number {
    return gameConfig.character.fighter.attack.pied;
  }

  protected getAttacksList() {
    return [this.poing, this.pied].map((func) => func.bind(this));
  }

  randomAttack(): number {
    const randomAttackSelected = getRandomElement(this.getAttacksList());
    console.log(
      "Attack with",
      randomAttackSelected.name.split(" ").pop(),
      randomAttackSelected()
    );
    return randomAttackSelected();
  }
}
