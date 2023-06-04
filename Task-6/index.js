const students = [
    { name: 'Quincy', grade: 96, gender: 'Female', hasGoodGrade: true, section: 'Science', age: 21 },
    { name: 'Jason', grade: 84, gender: 'Male', hasGoodGrade: true, section: 'Arts', age: 18 },
    { name: 'Alexis', grade: 100, gender: 'Female', hasGoodGrade: true, section: 'Science', age: 22 },
    { name: 'Sam', grade: 65, gender: 'male', hasGoodGrade: false, section: 'Commerce', age: 19 },
    { name: 'Katie', grade: 90, gender: 'Female', hasGoodGrade: true, section: 'Commerce', age: 17 }
  ];
  
  const studentWithHighestGrade = students.reduce((highestGradeStudent, currentStudent) => {
    if (currentStudent.grade > highestGradeStudent.grade) {
      return currentStudent;ss
    } else {
      return highestGradeStudent;
    }
  });
  
  console.log(studentWithHighestGrade);
