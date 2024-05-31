import { Assigment } from "./assigment";
export class AssigmentPromoted extends Assigment {
  isPromoted(calification) {
    return super.calificationInstance(calification).every(c => c.notaMayorA(8));
  }
}
