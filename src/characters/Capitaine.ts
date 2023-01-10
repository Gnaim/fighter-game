import { GameConfig } from "../gameConfig/gameConfig";
import { Fighter } from "./Fighter";
const gameConfig: GameConfig = require("../gameConfig/gameConfig.json");

export class Capitaine extends Fighter {
  receiveAttaque(attackDammage: number): number {
    const attackReduced = attackDammage > 0 ? attackDammage - 1 : 0;
    return super.receiveAttaque(attackReduced);
  }

  pied(): number {
    return gameConfig.character.capitaine.attack.pied;
  }

  getAttacksList() {
    return super.getAttacksList().map((func) => func.bind(this));
  }
}
