import { Fighter } from "./Fighter";
export class Ninja extends Fighter {
  coupDeKatana(): number {
    return 5;
  }

  getAttacksList() {
    return super
      .getAttacksList()
      .concat(this.coupDeKatana)
      .map((func) => func.bind(this));
  }
}
