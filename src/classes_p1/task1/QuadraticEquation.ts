export class QuadraticEquation {
  public a: number;
  public b: number;
  public c: number;

  constructor(a: number, b: number, c: number) {
    if (a == 0) {
      throw new Error("Not a quadratic equation");
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  public findRoots(): [number, number] | number | null {
    const d: number = Math.pow(this.b, 2) - 4 * this.a * this.c;

    let x1: number;
    let x2: number;
    if (d > 0) {
      x1 = (-this.b + Math.sqrt(d)) / (2 * this.a);
      x2 = (-this.b - Math.sqrt(d)) / (2 * this.a);
      return [x1, x2];
    } else if (d == 0) {
      x1 = -this.b / (2 * this.a);
      return x1;
    } else {
      return null;
    }
  }

  public findExtremum(): [number, number, boolean] {
    const x: number = -((this.b / 2) * this.a);
    const y: number = -(
      ((Math.pow(this.b, 2) - 4 * this.a * this.c) / 4) *
      this.a
    );

    // false if min, true if max
    if (this.a > 0) {
      return [x, y, false];
    } else {
      return [x, y, true];
    }
  }

  public findIntervals(): [number, boolean] {
    const vertex = -this.b / (2 * this.a);

    if (this.a > 0) {
      // убывает до, возрастает после
      return [vertex, false];
    } else {
      // возрастает до, убывает после
      return [vertex, true];
    }
  }
}
