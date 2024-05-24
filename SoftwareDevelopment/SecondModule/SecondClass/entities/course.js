export class Course {
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
  isACourseYoung() {
    return this.averageGeneralGradesAlumns() >= 7;
  }
}
