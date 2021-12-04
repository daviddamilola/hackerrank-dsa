function rotateLeft(a) {
  const last = a.shift();
  a.push(last);
}

function rotLeft(a, d) {
  // Write your code here
  while (d > 0) {
    rotateLeft(a);
    d = d - 1;
  }
  return a
}

rotLeft([1, 2, 3, 4, 5], 4);
