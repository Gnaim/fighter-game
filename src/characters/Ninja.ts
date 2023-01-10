import { GameConfig } from "../gameConfig/gameConfig";
import { Fighter } from "./Fighter";
const gameConfig: GameConfig = require("../gameConfig/gameConfig.json");

export class Ninja extends Fighter {
  coupDeKatana(): number {
    return gameConfig.character.ninja.attack.coupDeKatana;
  }

  getAttacksList() {
    return super
      .getAttacksList()
      .concat(this.coupDeKatana)
      .map((func) => func.bind(this));
  }
}
