import { Fighter } from "./Fighter";
export class Zombie extends Fighter {
  sortUsed = false;
  tripleAttack = false;

  sort(): number {
    this.sortUsed = true;
    this.tripleAttack = true;
    return 0;
  }

  protected poing(): number {
    if (this.tripleAttack) {
      this.tripleAttack = false;
      return super.poing() * 3;
    } else {
      return super.poing();
    }
  }

  protected pied(): number {
    if (this.tripleAttack) {
      this.tripleAttack = false;
      return super.pied() * 3;
    } else {
      return super.pied();
    }
  }

  protected getAttacksList() {
    const list = this.sortUsed
      ? super.getAttacksList()
      : super.getAttacksList().concat(this.sort);
    return list.map((func) => func.bind(this));
  }
}
