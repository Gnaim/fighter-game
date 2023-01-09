import { Fighter } from "./Fighter";
export class Capitaine extends Fighter {
  receiveAttaque(attackDammage: number): number {
    const attackReduced = attackDammage > 0 ? attackDammage - 1 : 0;
    return super.receiveAttaque(attackReduced);
  }

  pied(): number {
    return 1;
  }
}
