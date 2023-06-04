//Give me only the student name, grade and age from the list and organise the list based on age from oldest to youngest
const students = [
    { name: 'Quincy', grade: 96, gender: 'Female', hasGoodGrade: true, section: 'Science', age: 21 },
    { name: 'Jason', grade: 84, gender: 'Male', hasGoodGrade: true, section: 'Arts', age: 18 },
    { name: 'Alexis', grade: 100, gender: 'Female', hasGoodGrade: true, section: 'Science', age: 22 },
    { name: 'Sam', grade: 65, gender: 'male', hasGoodGrade: false, section: 'Commerce', age: 19 },
    { name: 'Katie', grade: 90, gender: 'Female', hasGoodGrade: true, section: 'Commerce', age: 17 }
  ];


  const studentInfo = students.map((student) => {
    return{
        name : student.name,
        grade : student.grade,
        age : student.age,
    }
  })

const sortAge = studentInfo.sort((a, b) => {
return b.age - a.age
});

  console.log(sortAge)