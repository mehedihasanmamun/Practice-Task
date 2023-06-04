//Give me the list of students only with name, grade & section who got more than 90
const students = [
    { name: 'Quincy', grade: 96, gender: 'Female', hasGoodGrade: true, section: 'Science', age: 21 },
    { name: 'Jason', grade: 84, gender: 'Male', hasGoodGrade: true, section: 'Arts', age: 18 },
    { name: 'Alexis', grade: 100, gender: 'Female', hasGoodGrade: true, section: 'Science', age: 22 },
    { name: 'Sam', grade: 65, gender: 'male', hasGoodGrade: false, section: 'Commerce', age: 19 },
    { name: 'Katie', grade: 90, gender: 'Female', hasGoodGrade: true, section: 'Commerce', age: 17  }
  ];
  
  const highGradeStudents = students.filter(student => student.grade > 90)
    .map(student => {
      return {
        name: student.name,
        grade: student.grade,
        section: student.section
      };
    });
  
  console.log(highGradeStudents);