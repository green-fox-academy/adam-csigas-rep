'use strict';

let Mahgrades = [73, 67, 38, 33, 84, 29];

const logika = e => {
  if (e < 38) {
    return e;
  }
  if (e % 5 > 2) {
    return e - e % 5 + 5;
  }
  return e;
};

function gradingStudents(grades) {
  return grades.map(logika);
}

/* function gradingStudents(grades) {
  grades.map(e => {
    if (e % 5 > 2) {
      return e = e - e%5 + 5;
    }
  });
  return grades;
} */

console.log(gradingStudents(Mahgrades))