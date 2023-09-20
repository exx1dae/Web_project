var groupmates = [
  {
    name: "Nikita",
    group: "BFI2102",
    age: 20,
    marks: [4, 6, 5, 5, 4],
  },
  {
    name: "Egor",
    group: "BFI2102",
    age: 20,
    marks: [3, 2, 4, 4, 3],
  },
  {
    name: "Danil",
    group: "BFI2102",
    age: 19,
    marks: [2, 5, 4, 3, 5],
  },
  {
    name: "Timofey",
    group: "BFI2102",
    age: 20,
    marks: [5, 5, 5, 4, 5],
  },
];

var rpad = function (str, length) {
  str = str.toString();
  while (str.length < length) str = str + " ";
  return str;
};

var printStudents = function (students) {
  console.log(
    rpad("Имя студента", 15),
    rpad("Группа", 8),
    rpad("Возраст", 8),
    rpad("Оценки", 20)
  );

  for (var i = 0; i <= students.length - 1; i++) {
    console.log(
      rpad(students[i]["name"], 15),
      rpad(students[i]["group"], 8),
      rpad(students[i]["age"], 8),
      rpad(students[i]["marks"], 20)
    );
  }
  console.log("\n");
};

printStudents(groupmates);

function filterStudents(age) {
  return groupmates.filter((student) => student.age === age);
}

console.log("Найдем студентов которым 20");
printStudents(filterStudents(20));
