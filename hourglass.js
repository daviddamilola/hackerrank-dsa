function hourglassSum(arr) {
  // Write your code here

  const sumOfPosition = (row, column, arr) => {
    const top = arr[row - 1][column];
    const topRight = arr[row - 1][column + 1];
    const topLeft = arr[row - 1][column - 1];
    const bottom = arr[row + 1][column];
    const bottomRight = arr[row + 1][column + 1];
    const bottomLeft = arr[row + 1][column - 1];
 
    return (
      top +
      topRight +
      topLeft +
      bottom +
      bottomRight +
      bottomLeft +
      arr[row][column]
    );
  };

  const resultArray = [];

  for (let row = 1; row < arr.length - 1; row++) {
    for (let column = 1; column < arr.length - 1; column++) {
      resultArray.push(sumOfPosition(row, column, arr));
    }
  }

  return Math.max(...resultArray);
}

console.log(
  hourglassSum([
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
