export class QuadraticEquation {
  public a: number;
  public b: number;
  public c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  public findRoots() {
    const d: number = Math.pow(this.b, 2) - 4 * this.a * this.c;
  }
}
