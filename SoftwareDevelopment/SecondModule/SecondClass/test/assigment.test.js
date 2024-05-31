import { Assigment } from "../entities/assigment";
import { AssigmentPromoted } from "../entities/assimentPromoted";
import { Calification } from "../entities/calification";

let mathematicalAnalysis;
let sytemDesign;

//funcion llamada antes de cada etst que acepta una funcion lambda
beforeEach(() => {
  mathematicalAnalysis = new AssigmentPromoted();
  sytemDesign = new Assigment();
});

// cada test debe ser independiente de si, lo que hacemos en el before es inicializarlas a cero

test("Con 8 y 8 promocionamos mathematicalAnalysis", () => {
  const nota1 = new Calification(8, 1);
  const nota2 = new Calification(8, 1);

  expect(mathematicalAnalysis.isPromoted([nota1, nota2])).toBeTruthy();
});

test("", () => {});

test("", () => {});
