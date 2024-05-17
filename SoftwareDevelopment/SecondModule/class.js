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

class Person {
  name;
  lastName;
  file;
  birthDate;

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
    var today = new Date(); // instancia fecha

    const birthDate = new Date(this.birthDate); // 'YYYY-MM-DD'
    console.log("año actual: " + today.getFullYear());
    if (birthDate.getMonth < today.getMonth) {
      return today.getFullYear() - birthDate.getFullYear() - 1;
    } else if (birthDate.getDay() < today.getMonth) {
    }
  }
}

const robert = new Person(); //instancia
robert.name = "roberto";
robert.lastName = "Pedro";

const nadia = new Person();
nadia.name = "NADIA";
nadia.lastName = "NOSE";
nadia.birthDate = "2020-05-19";
nadia.greetToPerson("Manolo");

robert.greetToPersonAlumn(nadia);
nadia.greetToPersonAlumn(robert);

console.log(nadia.getAge());

const maria = new Person();
maria.greetToPerson(); // unefined by default
