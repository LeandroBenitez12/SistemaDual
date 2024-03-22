// Dados 50 números enteros, informar el promedio de los mayores que 100 y la suma de los menores que –10
// por pantalla.

var arrayNumbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 9, 8, 1, -10, -19, -20, 189, 109, 627,
];

function getPromediodemayoresde100ySumademenoresque10(numeros) {
  var sumaNumerosMayor100 = 0;
  var numerosMayores100 = 0;
  var sumaMenoresmenos10 = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > 100) {
      sumaNumerosMayor100 += numeros[i];
      numerosMayores100++;
    } else if (numeros[i] < -10) {
      sumaMenoresmenos10 += numeros[i];
    }
  }
  var promedioNumerosMayoresA100 = sumaNumerosMayor100 / numerosMayores100;
  console.log(promedioNumerosMayoresA100, sumaMenoresmenos10);
}

getPromediodemayoresde100ySumademenoresque10(arrayNumbers);

/*
Se ingresa un conjunto de valores positivos terminado con un valor negativo. 
Se pide desarrollar el programa
que imprima el valor máximo del conjunto y su posición relativa dentro del mismo 
(el número de orden en el
que fue ingresado)
*/
//ya lo hicimos?

//Dado un valor numérico entero 5, determinar e imprimir un listado con los 5 primeros múltiplos de 3 que no
//sean múltiplos de 5.

function printListadoMultiplos(m) {
  var resultado_multiplo = 0;
  var i = 0;
  while (i < m) {
    resultado_multiplo += 3;
    if (resultado_multiplo % 3 == 0 && !(resultado_multiplo % 5 == 0)) {
      console.log(resultado_multiplo);
    }
    i++;
  }
  console.log("---");
}

printListadoMultiplos(5);

/*

12. Dado un número entero que representa una suma de dinero, desarrollar un programa que indique qué
cantidades de billetes de $1000, $500, $200, $100, $50, $20, $10 y monedas de $5, $2, $1 se deben utilizar
para alcanzar dicho monto, dando prioridad a los billetes de mayor valor.

*/

function getTextNumberOfBills(array1, array2) {
  var text = "";
  for (var i = 0; i < array1.length; i++) {
    if (array2[i] !== 0) {
      textForOneBill = array2[i] + " * " + array1[i] + " bills , ";
      text += textForOneBill;
    }
  }
  return text;
}

function getNumberOfBills(money) {
  const valuesBills = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  var numberOfBills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // array where i save the number of each bills to be used

  // I iterate to valuesBills , get the number of value bill to be used in the 'while' and i get always the higher bill
  // correcion eze con un while se hace todo
  for (var i = 0; i < valuesBills.length; i++) {
    while (money >= valuesBills[i]) {
      money -= valuesBills[i];
      numberOfBills[i] += 1;
    }
  }
  // i return to legend and array of numbers of billets to be used
  console.log(
    "The following number of bills should be used: " +
      getTextNumberOfBills(valuesBills, numberOfBills)
  );
  return numberOfBills;
}

getNumberOfBills(3579);

// hacer 9, 10, 12 , (13, 15)
//9. Desarrollar la función pow que recibe una base y un exponente y retorne la potencia.

function getPowerOfNumber(base, exponent) {
  //return base ** exponent;
  var power = 1;
  if (exponent === 0) {
    return 0;
  }
  for (var i = 0; i < exponent; i++) {
    power *= base;
  }
  return power;
}

console.log("Result " + getPowerOfNumber(4, 0));

// 10. Desarrollar una función que dado un número nos diga si es primo.

function isPrimeNumber(number) {
  if(number <= 1){
    return false;
  }
  // con while es mas correcto, porque tenemos condicion de corte, el for estamos cortando el flujo
  for (var n = 0; n < (number/2); n++) {
    if (n !== 1 && n !== 0) {
      if (number % n === 0) {
        return false;
      }
    }
  }
  /*
  var index = 2;
  var isPrime = false;
  while( index < (number/2) &&   ){
    if()
    index++;
  }
  */
  return true;
}

console.log(isPrimeNumber(4));

/*
13. Hacer un programa que, en primer lugar, le pida al usuario que ingrese un número, 
y que luego le muestre las siguientes opciones:
a) Aplicar suma: si selecciona esta opción, se le deberá pedir que ingrese otro número y mostrar el resultado.
Al mostrar el resultado, se le deberá preguntar si quiere seguir sumando: si responde que sí, se deberá
sumar el valor que se especifique; si responde que no, se deberá volver al menú principal.
b) Aplicar resta: si selecciona esta opción, se le deberá pedir que ingrese otro número y mostrar el resultado.
c) Transformar a número romano: si selecciona esta opción, se le deberá mostrar el número romano equivalente.
d) Potenciar: si selecciona esta opción, se le deberá pedir que ingrese otro número que será el exponente al
que se debe elevar el número inicial.
Se deberá tener en cuenta que, en todos los casos, siempre se debe volver al menú principal luego de ejecutar
la opción seleccionada.
Además, deberá agregarse una opción de salir: cuando se seleccione esta opción, se deberá mostrar por
pantalla todas las operaciones que realizó el usuario.
*/

function operationArithmetics(optionOperation) {
  var continueOperationSum = true;
  while (continueOperationSum) {
    var secondNumberEntered = prompt("Enter a second number: ");
    var result = 0;
    if (optionOperation === "+") {
      result = firstNumberEntered + secondNumberEntered;
      console.log("The result is = " + result);
    } else if (optionOperation === "-") {
      result = firstNumberEntered - secondNumberEntered;
      console.log("The result is = " + result);
    } else if (optionOperation === "**") {
      result = firstNumberEntered ** secondNumberEntered;
      console.log("The result is = " + result);
    }
    var consult = prompt("You wish continue? (Y/N)");
    if (consult === "N") {
      continueOperationSum = false;
    }
  }
}

/*
La conversión de números enteros a números romanos es un proceso más complicado, que implica dividir repetidamente el número entero por los valores numéricos de las letras romanas, utilizando las reglas de escritura de los números romanos para obtener la representación correcta.
*/

function convertToRomanNumber(number) {
  var romanNumbers = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ]; // array of Roman numbers in string format
  var integerNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; // numeros romanos a enteros
  var roman = ""; // integer number converted to roman number and return
  var amountRomanNumber = []; 
  for(var i=0;i< integerNumbers.length;i++){
    amountRomanNumber[i] = 0; // cantidad de repeticiones de la division por un numero de la lista integerNumbers[]
  }
  // recorro integerNumbers
  for (var i = 0; i < integerNumbers.length; i++) {
    /* si el numero es mayor a valor de la lista integerNumbers se va a restar hasta que sea menor , cada resta es una repeticion de veces que se suma en la lista de cantidad de veces que entra ese numero de la lista integerNumbers en el numero a convertir a romano
     */
    while (number >= integerNumbers[i]) {
      //porciento10 = number * 10 / 100;
      number -= integerNumbers[i];
      amountRomanNumber[i] += 1;
    }
    //console.log(amountRomanNumber);
    // condicionales

    if (amountRomanNumber[i] > 3) {
      roman += romanNumbers[i];
    } else if (amountRomanNumber[i] <= 3 && amountRomanNumber[i] != 0) {
      for (var j = 0; j < amountRomanNumber[i]; j++) {
        roman += romanNumbers[i];
      }
    }
  }

  console.log(amountRomanNumber); // obtengo un array que me dice la cantidad de veces que un numero se repite en la division vs numerosromanos
  console.log(roman);
}

convertToRomanNumber(99);

function menuCalculator(firstNumberEntered) {
  const options = [
    "A. Apply Sum",
    "B. Apply Subtraction",
    "C. Apply Power",
    "Q. Exit",
  ];
  var optionSelected = "";
  var operationsRealized = [];
  while (optionSelected != "Q") {
    console.log("-----MENU-----");
    for (var i; i < options.length; i++) {
      console.log(options[i]);
    }
    optionSelected = prompt("Enter a Option: ");
    if (optionSelected === "Q") {
      console.log("operations Realized: ");
      for (var i; i < operationsRealized.length; i++) {
        console.log(i + operationsRealized[i]);
      }
    } else if (optionSelected === "A") {
      operationArithmetics("+");
    } else if (optionSelected === "B") {
      operationArithmetics("-");
    } else if (optionSelected === "D") {
      operationArithmetics("**");
    } else if (optionSelected === "C") {
    }
  }
}

/*

15. Desarrollar las funciones y estructuras necesarias para que:
a. Se permita crear una matriz de N filas y M columnas
b. Se permita multiplicar una matriz por un valor escalar. Tener en cuenta el siguiente ejemplo:
c. Se permita multiplicar una matriz por otra matriz (de la misma dimensión). Tener en cuenta el
siguiente ejemplo:


*/
console.log(
  "------------------------A----------------------------------------"
);
function createArray(nRows, mColumns) {
  var rows = [];
  var array = [];
  for (var t = 0; t < nRows; t++) {
    array[t] = rows; // agrego las filas de mi array
    for (var i = 0; i < mColumns; i++) {
      rows[i] = i + 2; // agrego valores de mis filas segun tamaño columnas
    }
  }
  return array;
}

console.log(createArray(5, 4));

console.log(
  "------------------------B----------------------------------------"
);

function arrayMultiplication(valueScale, array) {
  var newArray = [];
  var rows = [];
  var newRows = [];
  for (var i = 0; i < array.length; i++) {
    rows = array[i];
    newArray[i] = newRows;
    for (var j = 0; j < rows.length; j++) {
      newRows[j] = rows[j] * valueScale;
    }
  }
  return newArray;
}

console.log(arrayMultiplication(2, createArray(1, 4)));
