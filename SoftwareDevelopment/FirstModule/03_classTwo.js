/* Crear una funcion que escriba un array como parametro 
y que devuelve un nuevo array sin los elementos duplicados
*/
// includes
/*
function borrarElementosDuplicados(array) {
  const arraySinDuplicar = [];
  for (var i = 0; i < array.length; i++) {
    elementoDuplicado = array.includes(i);
    if(elementoDuplicado != )
  }
  return newArray;
}

const array = [0, 2, 0, 3, 6, 0, 2, 7, 1, 7, 1, 9, 3];

console.log(borrarElementosDuplicados(array));
*/

/* Crear una funcion que reciba un param / cadena y devuelva el string invertido */

function getPalabraInvertida(string) {
  var stringInvertido = "";
  // itero desde cantidad caracteres de string -1 , ya que itero el 0 y ejecuto bucle hasta llegar a ultimo valor del str y mientras voy restando la variable de inicializacion
  for (var i = string.length - 1; i >= 0; i--) {
    stringInvertido += string[i];
  }
  return stringInvertido;
}

console.log(getPalabraInvertida("Leandr0o"));

/* crear funcion que reciba str y que cuente cantidad de vocales que tiene */

function cantidadVocalesString(string) {
  const vocales = ["A", "E", "I", "O", "U"];
  string = string.toUpperCase();
  var cantidadVocales = 0;
  for (var i = 0; i < string.length; i++) {
    var index = 0;
    while (index < vocales.length) {
      if (string[i] == vocales[index]) {
        cantidadVocales++;
      }
      index++;
    }
  }
  return cantidadVocales;
}

console.log(cantidadVocalesString("Leandrito"));

// quiero una funcion que me diga si un numero es palindromo o no

function isPalidrom(palabra) {
  palabra = palabra.toUpperCase();
  var palabraInvertida = getPalabraInvertida(palabra).toUpperCase();
  return palabra == palabraInvertida;
}

console.log(isPalidrom("Neuqen"));

// crear una funcion que calcule el factorial de un numero
function calculoFactorialDeUnNumero(numeroAFactorizar) {
  var resultadoFactorial = 1;
  for (var i = 1; i < numeroAFactorizar + 1; i++) {
    resultadoFactorial *= i;
    //console.log(resultadoFactorial);
  }
  return resultadoFactorial;
}

console.log("Factorial: " + calculoFactorialDeUnNumero(10));
// crear una funcion que reciba un arrays de numeros y devuelva el numero
// que mas veces se repitio , si existe colicion que devuelva cualquiera
// crear una funcion que ingrese una lista y retorne el elemento que mas se repite , si hay coalicion debemos retornar cualquiera
function numeroRepetidoEnArray(arrayDeNumeros) {
  var numeroMasRepetido = 0;
  var elementoNuevo = 0;
  var i = 0;
  var otralista = [];
  for (var i = 0; i < arrayDeNumeros.length; i++) {
    otralista[i] = 0;
  }
  while (i < arrayDeNumeros.length) {
    elementoNuevo = arrayDeNumeros[i];
    console.log(elementoNuevo);
    if (arrayDeNumeros.includes(elementoNuevo)) {
      numeroMasRepetido = elementoNuevo;
      otralista[i] += 1;
    }
    i++;
  }
  return numeroMasRepetido, otralista;
}
const arrayNumerosRepetidos = [3, 4, 5, 6, 7, 2, 3, 3, 6, 6, 2, 1];
console.log(
  "Numero mas Repetido: " +
    numeroRepetidoEnArray(arrayNumerosRepetidos)
);
//crear una funcion que reciba una palabra y letra y devuelva la cantidad de veces que aparece esa letra en la
numeroRepetidoEnArray(arrayNumerosRepetidos);