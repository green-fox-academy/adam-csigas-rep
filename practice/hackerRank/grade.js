'use strict';

let mygrades = [73, 67, 38, 33];



function gradingStudents(grades) {
  grades.map(e => {
    if (e % 5 > 2) {
      return e = e - e%5 + 5;
    }
  });
  return grades;
}

console.log(gradingStudents(mygrades))