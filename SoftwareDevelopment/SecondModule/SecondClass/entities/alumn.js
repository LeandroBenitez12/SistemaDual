export class Alumn {
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
      var today = new Date(); // instancia fecha
  
      const birthDate = new Date(this.birthDate); // 'YYYY-MM-DD'
  
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