//verificar meotdo promedio y fue aprobado
import { Cursada } from "../entities/cursada.js";
import { Calification } from "../entities/calification.js";

import { Course } from "../entities/course.js";

test("saca 9 y 1 y debe ser 5 el promedio ", () => {
  const cursadaAlumns = new Cursada(null, null); // no los necesito

  const firstCalification = new Calification();
  firstCalification.nota = 9;

  cursadaAlumns.addCalification(firstCalification);

  const secondCalification = new Calification();
  secondCalification.nota = 1;

  cursadaAlumns.addCalification(secondCalification);

  const avg = cursadaAlumns.average(); // obtengo prom

  //creamos el valor conocido - esperado
  const avgExpected = 5;

  //asercion ( "!important") // verification
  expect(avg).toBe(avgExpected);
});

test("pregunto si aprobo cursada y deberia ser true ", () => {
  const cursadaAlumns = new Cursada(null, null); // no los necesito

  const firstCalification = new Calification();
  firstCalification.nota = 10;

  cursadaAlumns.addCalification(firstCalification);

  const secondCalification = new Calification();
  secondCalification.nota = 10;

  cursadaAlumns.addCalification(secondCalification);

  const approved = cursadaAlumns.isApproved();

  //creamos el valor conocido - esperado
  const approvedExpected = true;

  //asercion ( "!important") // verification
  expect(approved).toBe(approvedExpected);
});

test("pregunto si aprobo cursada y deberia ser false porque no aprobo ", () => {
  const cursadaAlumns = new Cursada(null, null); // no los necesito

  const firstCalification = new Calification();
  firstCalification.nota = 2;

  cursadaAlumns.addCalification(firstCalification);

  const secondCalification = new Calification();
  secondCalification.nota = 2;

  cursadaAlumns.addCalification(secondCalification);

  const approved = cursadaAlumns.isApproved();

  //creamos el valor conocido - esperado
  const approvedExpected = false;

  //asercion ( "!important") // verification
  expect(approved).toBe(approvedExpected);
});

// test curso el buen desempeño es un approvedCourse
test("le pregunto si es un curso aprobado y no lo es", () => {});
