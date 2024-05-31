export class Calification {
  descripcion;
  constructor(nota, instance) {
    this.nota = nota;
    this.instance = instance;
  }
  isFirstIntance(
    
  ) {
    return this.instance === 1;
  }
  notaMayorA(num) {
    return this.nota >= num;
  }
}
