const grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];

//outer loop rows, inner loop columns
//compute the average for eachStudent given that each row represents a students grade accross subjects

//  columnar processing, the outer loop moves through the rows, and the inner loop processes the columns
const processGrades = (grades) => {
  for (let row = 0; row < grades.length; row++) {
    let total = 0;
    let average = 0.0;
    let studentGrades = grades[row];
    for (let col = 0; col < studentGrades.length; col++) {
      total = total + studentGrades[col];
    }
    average = total / studentGrades.length;
    console.log(`average for student ${row + 1}: ${average.toFixed(2)}`);
  }
};

// row wise processing
const processGradesByRow = (grades) => {
    for (let col = 0; col < grades.length; col++) {
        const element = array[col];
        
    }
}

console.log(processGrades(grades));
