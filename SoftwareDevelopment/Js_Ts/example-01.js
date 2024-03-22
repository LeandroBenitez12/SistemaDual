var my_var;
my_var = "Juan Mateo";
my_int = 13;
console.log(my_var + " 45" + my_int);
console.log(my_int);

my_var = "Juan Lujcas";

console.log(my_var + "jdsjjs");

my_int = "Trece";
console.log(my_int, typeof my_int);

var my_age = 17;

var age_is_higher = my_age >= 18;

console.log(age_is_higher, typeof age_is_higher);

var my_signe = "Cancer";
var is_cancer = my_signe == "Cancer";

var cancer_and_age_higher = is_cancer || age_is_higher;

console.log(cancer_and_age_higher);

console.log("------------------------------------------------");

var nota_1 = 8;
var nota_2 = 2;
var nota_recuperatorio_1;
var nota_recuperatorio_2 = 5;
const NOTA_MINIMA = 6;
/*
var aprobo_parcial_1 =
  nota_1 >= NOTA_MINIMA || nota_recuperatorio_1 >= NOTA_MINIMA;
var aprobo_parcial_2 =
  nota_2 >= NOTA_MINIMA || nota_recuperatorio_2 >= NOTA_MINIMA;

var cursada_esta_aprobada = aprobo_parcial_1 && aprobo_parcial_2;

console.log("¿el alumno aprobo la materia? " + cursada_esta_aprobada);
if (cursada_esta_aprobada) {
  console.log("Felicitaciones, esta aprobado");
} else {
  console.log("El no esta aprobado");
}
*/
function apruebaParcial(nota, recuperatorio, nota_minima) {
  return (nota >= nota_minima) | (recuperatorio >= nota_minima);
}

function apruebaCursada(
  nota_1,
  nota_1_recuperatorio,
  nota_2,
  nota_2_recuperatorio,
  nota_minima
) {
  return (
    apruebaParcial(nota_1, nota_1_recuperatorio, nota_minima) &&
    apruebaParcial(nota_2, nota_2_recuperatorio, nota_minima)
  );
}

if (apruebaParcial(nota_1, nota_recuperatorio_1, NOTA_MINIMA)) {
  console.log("felicitaciones , aprobo Parcial 1");
} else {
  console.log("no aprobo el parcial 1 ");
}

if (apruebaParcial(nota_2, nota_recuperatorio_2, NOTA_MINIMA)) {
  console.log("felicitaciones , aprobo Parcial 2");
} else {
  console.log("no aprobo el parcial 2 ");
}

if (
  apruebaCursada(
    nota_1,
    nota_recuperatorio_1,
    nota_2,
    nota_recuperatorio_2,
    NOTA_MINIMA
  )
) {
  console.log("felicitaciones , aprobo Cursada");
} else {
  console.log("no aprobo la cursada");
}

function sonMultiplos(numero1, numero2) {
  return numero1 % numero2 == 0 || numero2 % numero1 == 0;
}

esMultiplo = sonMultiplos(3, 19);

if (esMultiplo) {
  console.log(esMultiplo);
} else {
  console.log(esMultiplo);
}

// EXERCISE

// Se ingresa un número con el formato YYYYMMDD. A partir de ese número mostrar el año (YYYY), el mes (MM) y el día (DD).
var fecha1 = 20241112;
var fecha2 = 20240202;

// lower Cammel Case
function getFecha(fecha) {
  var dia = fecha % 100; // obtenemos el dia haciendo el modulo de 100 de la fecha , obteniendo los dos ultimos numeros(YYYYMM'DD')
  fecha = (fecha - dia) / 100; // refrescamos fcha restando los dias para llevarlo a 0 y divimos por 100 para sacar esos ceros
  var mes = fecha % 100; // fecha = te queda (YYYYMM) , SACANDO EL MODULO 100 OBTENEMOS 2 ULTIMOS NUMEROS , EL MM
  fecha = (fecha - mes) / 100; // limpiamos mes
  var año = fecha % 10000; // fecha = YYYY -> que son los años , se puede sacar modulo o fecha igual año
  return "fecha: " + año + "/" + mes + "/" + dia;
}

console.log(getFecha(fecha1));
// Dadas dos fechas en formato AAAAMMDD, informar cual es la más reciente.

function getLegendFechaMasRecientes(fecha1, fecha2) {
  if (fecha1 > fecha2) {
    return getFecha(fecha1) + " es mayor a " + getFecha(fecha2);
  } else if (fecha1 < fecha2) {
    return getFecha(fecha1) + " es menor a " + getFecha(fecha2);
  }
  return (
    "Las fechas " + getFecha(fecha1) + "y" + getFecha(fecha2) + " son iguales"
  );
}

console.log(getLegendFechaMasRecientes(fecha1, fecha2));

/*
11. Desarrollar una función que calcule el máximo común divisor (MCD) entre dos números unNumero
otroNumero, teniendo en cuenta el siguiente algoritmo:
a. Dividir unNumero por otroNumero, y calcular el resto sabiendo que éste siempre cumple con:
0<R<otroNumero
b. Si R==0 entonces el MCD es otroNumero; sino seguir a paso C
c. Reemplazar unNumero por otroNumero, otroNumero por R y volver al paso A

*/

function calcularMCDEntre2Numeros(unNumero, otroNumero) {
  // a
  var resto = unNumero % otroNumero;
  // b
  if (resto === 0) {
    return otroNumero;
  }
  // c
  return calcularMCDEntre2Numeros(otroNumero, resto);
}

var mcd2Numeros = calcularMCDEntre2Numeros(50, 10);
console.log(mcd2Numeros);

// Dados 10 valores numéricos, informar cual es el mayor de ellos por pantalla.
function higherTwoNumbers() {
  var firstNumber = prompt("Enter a first number: ");
  var secondNumber = prompt("Enter a second Number: ");
  if (firstNumber > secondNumber) {
    return firstNumber;
  }
  return secondNumber;
}

function higherTwoNumbersBetter() {
  const firstNumber = prompt("Enter a first number: "); // no nos interesa pisar este dato entonces es const
  const secondNumber = prompt("Enter a second Number: ");
  // hardcodeado
  var higherNumber;
  if (firstNumber > secondNumber) {
    higherNumber = firstNumber;
  } else higherNumber = secondNumber;
  return higherNumber;
}

function higher10NumbersAskedToUser() {
  var higherNumber = -99999;
  // hardcodeado
  for (var i = 0; i < 10; i++) {
    const numberEntered = prompt("Enter a Number: ");

    if (numberEntered >= higherNumber) {
      higherNumber = numberEntered;
    }
  }

  return higherNumber;
}

function higherNumbersAskedToUser() {
  var higherNumber = -99999;
  const amountNumberEntered = prompt("Entered the number to compare");
  for (var i = 0; i < 10; i++) {
    const numberEntered = prompt("Enter a Number: ");

    if (numberEntered >= higherNumber) {
      higherNumber = numberEntered;
    }
  }

  return higherNumber;
}

higherTwoNumbers();

const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array de nº elementos las posiciones varian de 0 a n-1
const valuefivePostion = listNumbers[4];

// work in clase
function higherNumberOfList(numeros) {
  numberHigher = -999999;
  for (var i = 0; i < numeros.length; i++) {
    const numberPosition = numeros[i];
    if (numberPosition >= numberHigher) numberHigher = numberPosition;
  }
  return numberHigher;
}

higherNumberOfList(listNumbers);

// -------------------------------------
// ciclos inexactos
function higherListUntilNegativeNumberFirst(numeros) {
  var numberHigher = -99999;
  var i = 0;
  var numberPosition = numeros[i];
  while (i < numeros.length && numeros[i] >= 0) {
    if (numberPosition > numberHigher) numberHigher = numeros[i];
    i++;
  }
  return numberHigher;
}

