//Find the total grade score and average grade score of the students age above 18
 
const students = [
    { name: 'Quincy', grade: 96, gender: 'Female', hasGoodGrade: true, section: 'Science', age: 21 },
    { name: 'Jason', grade: 84, gender: 'Male', hasGoodGrade: true, section: 'Arts', age: 18 },
    { name: 'Alexis', grade: 100, gender: 'Female', hasGoodGrade: true, section: 'Science', age: 22 },
    { name: 'Sam', grade: 65, gender: 'male', hasGoodGrade: false, section: 'Commerce', age: 19 },
    { name: 'Katie', grade: 90, gender: 'Female', hasGoodGrade: true, section: 'Commerce', age: 17 }
  ];


  const studentAbove18 = students.filter(student => student.age > 18);
  console.log(studentAbove18);

  const totalGradeScore = studentAbove18.reduce((total, student) =>  total + student.grade,0);
  console.log(totalGradeScore);

  const averageGradeScore = totalGradeScore / studentAbove18.length;
  console.log(averageGradeScore);

console.log("Total Grade Score:"+ totalGradeScore);
console.log("Average Grade Score:"+ averageGradeScore); 
  