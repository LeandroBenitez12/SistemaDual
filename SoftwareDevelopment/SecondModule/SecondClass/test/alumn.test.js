import { Alumn } from "../entities/alumn";
//recibe 2 par un string ( describe escenario de prueba a testear ) y
// arrow function = funciones anonimas
//cada test deberia ser aislado

test("pregunto a roberto su nombre completo y nos dice roberto perez", () => {
  // escribimos nuestro caso de prueba
  // crear todo lo necesario para que el test funcione
  // se puede hacer un coverage , para saber cuantas lineas del code ya se probo , etc
  //configuramos datos de prueba
  const roberto = new Alumn("roberto", "perez");

  const fullNameRoberto = roberto.fullName();

  //creamos el valor conocido - esperado
  const fullNameExpected = "roberto perez";

  //asercion ( "!important") // verification
  expect(fullNameRoberto).toBe(fullNameExpected);
});

test("pregunto a roberto su edad y nos devuelve 18", () => {
  const roberto = new Alumn("roberto", "perez"); // inicializamos objeto roberto
  roberto.birthDate = "2005-05-31"; // agregamos fecha de nacimiento
  const ageRoberto = roberto.getAge(); //obtenemos edad roberto

  //creamos el valor conocido - esperado
  const ageRobertoExpected = 19;

  //asercion ( "!important") // verification
  expect(ageRoberto).toBe(ageRobertoExpected);
});
