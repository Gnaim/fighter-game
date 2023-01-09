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
    return 1;
  }

  protected pied(): number {
    return 2;
  }
}
