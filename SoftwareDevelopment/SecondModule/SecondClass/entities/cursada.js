export class Cursada {
  constructor(alumn, course) {
    this.alumn = alumn;
    this.course = course;
    this.califications = [];
  }
  addCalification(oneCalification) {
    this.califications.push(oneCalification);
  }

  average() {
    const amountCalification = this.califications.length;
    let totalCalification = 0;
    for (let i=0; i < amountCalification; i++) {
      totalCalification += this.califications[i].nota;
    }
    return totalCalification / amountCalification;
  }

  //alumno aprobo cursada si alguna nota es > = 6;

  /*
  isApproveCourse() {
    let i = 0;
    let approved = false;
    while (i < amountCalification.length && !approved) {
      if (this.califications[i].nota >= 6) {
        approved = true;
      }
      i++;
    }
    return approved;
  }
  */
  // forma mas simple

  isApproved() {
    return this.califications.some((c) => c.nota >= 6);
  }
}