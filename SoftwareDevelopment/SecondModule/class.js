const person = {
  name: "Juan",
  lastName: "Pedro",
  file: 2020,
  // this : hace referencia a el mismo objeto donde estoy parado
  fullName: function () {
    return this.name + " " + this.lastName;
  },
  introduce: function () {
    console.log("Hola soy " + this.fullName());
  },
  greetToPerson: function (person) {
    console.log("Hola " + person + " soy " + this.fullName());
  },
};

person.introduce();

person.greetToPerson("Mariano");

console.log("-------------");
class Ubication {
  constructor(latitud, longitud) {
    this.latitud = latitud;
    this.longitud = longitud;
  }

  distanceUp(other) {
    const difAbsAmongLat = Math.pow(Math.abs(this.latitud - other.latitud), 2);
    const difAbsAmongLong = Math.pow(
      Math.abs(this.longitud - other.longitud),
      2
    );

    return Math.sqrt(difAbsAmongLat + difAbsAmongLong);
  }
}
class Person {
  file;
  birthDate;
  localization;
  gradeArray = [];

  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  addGrades(grade) {
    this.gradeArray.push(grade);
  }

  fullName() {
    return this.name + " " + this.lastName;
  }
  introduceMySelf() {
    console.log("Hola soy " + this.fullName());
  }
  greetToPerson(person) {
    console.log("Hola " + person + " soy " + this.fullName());
  }
  greetToPersonAlumn(alumn) {
    console.log("Hola " + alumn.fullName() + " soy " + this.fullName());
  }
  getAge() {
    return 18;
    var today = new Date(); // instancia fecha

    const birthDate = new Date(this.birthDate); // 'YYYY-MM-DD'
    console.log("año actual: " + today.getFullYear());

    if (birthDate.getMonth > today.getMonth) {
      return today.getFullYear() - birthDate.getFullYear() - 1;
    } else if (birthDate.getDay() > today.getMonth) {
      return today.getFullYear() - birthDate.getFullYear() - 1;
    } else {
      return today.getFullYear() - birthDate.getFullYear();
    }
  }
  livingNear(otherPerson) {
    return this.localization.distanceUp(otherPerson.localization) < 20;
  }
  getAverageGrade() {
    var fullGrade = 0;
    for (var i; i < gradeArray.length; i++) {
      fullGrade += gradeArray[i];
    }
    return fullGrade / gradeArray.length;
  }
}

const robert = new Person("roberto", "Pedro"); //instancia
// robert.name = "roberto"; No se necesita porque creamos un metodo constructor
// robert.lastName = "Pedro";

const nadia = new Person("Nadia", "Nose");
// nadia.name = "NADIA";
// nadia.lastName = "NOSE";
nadia.birthDate = "2020-05-20";
nadia.greetToPerson("Manolo");

robert.greetToPersonAlumn(nadia);
nadia.greetToPersonAlumn(robert);

console.log(nadia.getAge());

const maria = new Person("Maria", "bRITEZ");
maria.greetToPerson(); // undefined by default

console.log("-------------");
class Curso {
  name;
  nameTeacher;
  alumns = [];

  addAlumns(alumn) {
    this.alumns.push(alumn);
  }

  averageAlumnsAge() {
    var agesSum = 0;
    for (var i; i < this.alumns.length; i++) {
      agesSum += this.alumns[i].getAge();
    }
    return agesSum / this.alumns.length;
  }
  algunAlumnoViveCerca() {
    var j = 0;
    var isNear = false;
    while (!isNear && j < this.alumns.length - 1) {
      const currentAlumn = this.alumns[j];
      var i = 1 + j;
      while (!isNear && i < this.alumns.length) {
        const otherAlum = this.alumns[i];
        isNear = currentAlumn.livingNear(otherAlum);
        i++;
      }
      j++;
    }
    return isNear;
  }
  isACourseYoung() {
    return this.averageAlumnsAge() < 22;
  }
  averageGeneralGradesAlumns() {
    var gradesSum = 0;
    for (var i; i < this.alumns.length; i++) {
      gradesSum += this.alumns[i].getAverageGrade();
    }
    return gradesSum / this.alumns.length;
  }
}

const courseOne = new Curso();
courseOne.name = "Desarrollo Web";
courseOne.nameTeacher = "Ezequiel Escobar";
courseOne.addAlumns(nadia);
courseOne.addAlumns(robert);
console.log(courseOne.averageAlumnsAge());

robert.localization = new Ubication(10, 30);
nadia.localization = new Ubication(70, 30);

console.log(nadia.livingNear(robert));

console.log(courseOne.algunAlumnoViveCerca());

// un curso es joven si el promedio de sus edades es menor A 22

console.log("-------------");

//saber promedio general de un curso , teninedo en cuenta que cada alumno va a tener 2 calificaciones por curso
nadia.addGrades(7);
nadia.addGrades(2);
robert.addGrades(3);
robert.addGrades(2);

console.log(courseOne.averageGeneralGradesAlumns());
