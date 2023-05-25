import { range } from "lodash";
import { QuadraticEquation } from "./QuadraticEquation";

const arr = new Array<QuadraticEquation>(3);
arr[0] = new QuadraticEquation(2, 3, 6);
arr[1] = new QuadraticEquation(-5, 17, 2);
arr[2] = new QuadraticEquation(6, 10, -7);

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
for (let i of range(0, arr.length)) {
  const x = arr[i].findRoots();
  if (x) {
    if (typeof x === "number") {
      if (x < min) min = x;
      if (x > max) max = x;
    } else {
      if (x[0] < min) min = x[0];
      if (x[0] > max) max = x[0];
      if (x[1] < min) min = x[1];
      if (x[1] > max) max = x[1];
    }
  }
}
