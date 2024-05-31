export class Assigment {
  nombre;

  calificationInstance(califications) {
    //filter devuelve una coleccion/ lista con los que cumplen la condicion
    return califications.filter(c => c.isFirstIntance());
  }
  isApprove(califications) {
    return califications.filter(c => c.notaMayorA(6).length >= 2);
  }
  isPromoted(califications) {
    return false;
  }
}
