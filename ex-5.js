const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(sum,students) {
  // Start coding here
  return sum+students.score/4
}

//getAverageStudentScore(students); // Output: 87.5
getAverageStudentScore = students.reduce(getAverageStudentScore,0)
console.log(getAverageStudentScore)