export class Course {
  name;
  nameTeacher;
  studentsCourse = []; // coleccion
  assigment;

  addAlumns(alumn) {
    this.studentsCourse.push(alumn);
  }

  averageAlumnsAge() {
    var agesSum = 0;
    for (var i; i < this.studentsCourse.length; i++) {
      agesSum += this.studentsCourse[i].alumns.getAge();
    }
    return agesSum / this.studentsCourse.length;
  }
  algunAlumnoViveCerca() {
    var j = 0;
    var isNear = false;
    while (!isNear && j < this.studentsCourse.length - 1) {
      const currentAlumn = this.studentsCourse.alumns[j];
      var i = 1 + j;
      while (!isNear && i < this.studentsCourse.length) {
        const otherAlum = this.studentsCourse.alumns[i];
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
    for (var i; i < this.studentsCourse.length; i++) {
      gradesSum += this.studentsCourse[i].getAverageGrade();
    }
    return gradesSum / this.studentsCourse.length;
  }
  approvedCourse() {
    return this.averageGeneralGradesAlumns() >= 7;
  }
  // me interesa saber si en un curso todos aprobaron la cursada
  areEverythingApproved() {
    return this.studentsCourse.every((c) => c.isApproved()); // every verifica que todos sean true
  }
}
