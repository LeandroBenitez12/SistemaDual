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

  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
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
  algunAlumnViveCerca() {
    var i = 0;
    var j = 0;
    var isNear = false;
    while (!isNear && j < alumns.length) {
      while (!isNear) {
        if (this.alumns[j].livingNear(this.alumns[i])) {
          isNear = true;
          return true;
        }
        i++;
        if (i > alumns.length) i = j;
      }
      j++;
    }
  }
}

const courseOne = new Curso();
courseOne.name = "Desarrollo Web";
courseOne.nameTeacher = "Ezequiel Escobar";
courseOne.addAlumns(nadia);
courseOne.addAlumns(robert);
console.log(courseOne.averageAlumnsAge());

robert.localization = new Ubication(70, 30);
nadia.localization = new Ubication(70, 30);

console.log(nadia.livingNear(robert));

//
