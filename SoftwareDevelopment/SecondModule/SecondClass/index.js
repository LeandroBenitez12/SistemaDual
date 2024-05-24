import { Localization } from "./entities/localization.js";
import { Alumn } from "./entities/alumn.js";
import { Course } from "./entities/course.js";

// test unitarios
// test es efectivo si encontraste una falla
// si el test no tira error
const robert = new Alumn("roberto", "Pedro"); //instancia
// robert.name = "roberto"; No se necesita porque creamos un metodo constructor
// robert.lastName = "Pedro";

const nadia = new Alumn("Nadia", "Nose");
// nadia.name = "NADIA";
// nadia.lastName = "NOSE";
nadia.birthDate = "2021-06-27";
nadia.greetToPerson("Manolo");

robert.greetToPersonAlumn(nadia);
nadia.greetToPersonAlumn(robert);

console.log(nadia.getAge());

const maria = new Alumn("Maria", "bRITEZ");
maria.greetToPerson(); // undefined by default

console.log("-------------");

const courseOne = new Course();
courseOne.name = "Desarrollo Web";
courseOne.nameTeacher = "Ezequiel Escobar";
courseOne.addAlumns(nadia);
courseOne.addAlumns(robert);
console.log(courseOne.averageAlumnsAge());

robert.localization = new Localization(10, 30);
nadia.localization = new Localization(70, 30);

console.log(nadia.livingNear(robert));

console.log(courseOne.algunAlumnoViveCerca());

// un curso es joven si el promedio de sus edades es menor A 22

console.log("-------------");

//saber promedio general de un curso , teninedo en cuenta que cada alumno va a tener 2 calificaciones por curso
nadia.addGrades(7);
nadia.addGrades(2);
robert.addGrades(3);
robert.addGrades(2);

console.log(courseOne.averageGeneralGradesAlumns());

/*
 npm init para iniciar proyecto, package.json 
 al querer instalar el framework jestjs se trae las el arbol de 
 dependencias de esas bibliotecas, todo eso lo gestiona package-lock por nosotros  
*/
