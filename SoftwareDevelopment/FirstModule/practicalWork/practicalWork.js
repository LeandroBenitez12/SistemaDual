// function usually used
function wordSeparator(phrase, arg) {
  var word = "";
  var wordList = [];
  var i = 0;
  while (i < phrase.length) {
    if (phrase[i] != arg) {
      word += phrase[i];
    } else {
      if (word !== "") {
        wordList.push(word);
        word = "";
      }
    }

    i++;
  }
  return wordList;
}

/*
Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de
título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula.
*/
console.log("---------------------Exercise One---------------------------");

function convertToTitle(phrase) {
  var word = [];
  var title = "";
  const argument = " ";
  const wordList = wordSeparator(phrase, argument);
  for (var i = 0; i < wordList.length; i++) {}
  return title;
}

const phrase = "hello PEOPLE My name is LEANDRO";
// convertToTitle(phrase);

/*
2.
Concatenar elementos de un array con un separador personalizado:
Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de
texto que contenga todos los elementos del array concatenados con el separador especificado.
● Ejemplo: Si la entrada es ["Hola", "Mundo", "JavaScript"] y el separador “-”, la
salida debería ser "Hola-Mundo-JavaScript"

*/
console.log(
  "----------------------------EXERCISE 2------------------------------------"
);

function concatenateArray(array, separator) {
  console.log(typeof array);
  if (typeof array != "object") return "Ingrese un Array";
  textString = "";
  for (var i = 0; i < array.length; i++) {
    if (i >= array.length - 1) {
      textString += array[i];
    } else {
      textString += array[i] + separator;
    }
  }
  return textString;
}
array = ["Hello", "World", "I", "am", "Leandro"];

console.log(concatenateArray(array, "*"));

/*
3.
Revertir las palabras de una frase:
Crear una función que reciba una cadena de texto y devuelva la misma cadena con las palabras
en orden inverso.
● Ejemplo: Si la entrada es "JavaScript es divertido", la salida debería ser “divertido es
JavaScript”
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cada palabra podría
ser insertada en un array (¿para qué?)

*/
console.log(
  "----------------------------EXERCISE 3------------------------------------"
);

function getStringReverting(string) {
  const arrayString = wordSeparator(string, " ");
  var phraseInverted = "";
  for (var i = arrayString.length - 1; i > -1; i--) {
    if (i == -1) {
      phraseInverted += arrayString[i];
    } else {
      phraseInverted += arrayString[i] + " ";
    }
  }
  return phraseInverted;
}

console.log(getStringReverting(phrase));

/*
4.
Contar la cantidad de veces que aparece una palabra en una cadena:
Crear una función que reciba una cadena de texto y una palabra, y devuelva la cantidad de
veces que aparece esa palabra en la cadena.
● Ejemplo: Si la entrada es "El sol brilla y el cielo está despejado.", y la palabra que se
quiere buscar es “el”, la salida debería ser el número 2.
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cuando se tenga una
palabra, se la podrá comparar con la palabra buscada y si coincide … (siga usted!)
*/
console.log(
  "----------------------------EXERCISE 4------------------------------------"
);

function wordsCount(phrase, text) {
  var count = 0;
  const arrayString = wordSeparator(phrase, " ");
  for (var i = 0; i < arrayString.length; i++) {
    arrayString[i] = arrayString[i].toLowerCase();
    if (arrayString[i] === text) count++;
  }
  return count;
}
const newPhraseCount =
  "Hola soy leandro soy programador full stack soy 19 años soy leandro";
console.log(wordsCount(newPhraseCount, "qsy"));

/*
5. Comprobar si una cadena de texto termina con un determinado sufijo:
Crear una función que reciba una cadena de texto y un sufijo, y devuelva true si la cadena
termina con ese sufijo, false en caso contrario.
● Ejemplo: Si la entrada es "JavaScript es un lenguaje de programación" y se pretende
saber si termina con “ción”, debería devolver true.
● Ayuda: Se espera que el ejercicio se resuelva con ciclos inexactos
*/
console.log(
  "---------------------------Exercise 5-------------------------------------"
);

function endsStringsWithSuffix(string, suffix) {
  var j = suffix.length - 1;
  var i = string.length - 1;
  while (j > -1) {
    if (string[i] != suffix[j]) {
      return false;
    }
    j--;
    i--;
  }
  return true;
}
const thirdPrashe = "Estoy escuchando";
console.log(endsStringsWithSuffix(thirdPrashe, "ando"));

/* 

6. Eliminar los espacios en blanco al inicio y final de una cadena:
Crear una función que reciba una cadena de texto y elimine los espacios en blanco al inicio y
final de la misma.
● Ejemplo: Si la entrada es " JavaScript es divertido “, la salida debería ser "JavaScript
es divertido".
● Ayuda: Se sugiere utilizar un ciclo exacto para recorrer toda la frase y que cada vez que
se encuentre un caracter no “vacío” (espacio) se lo considere para la nueva palabra “sin
espacios”. Si se le busca la vuelta, se puede reutilizar la función del punto 2.

*/
console.log(
  "----------------------------EXERCISE 6------------------------------------"
);

function removeSpacesEnd(str) {
  const argument = " ";
  const wordList = wordSeparator(str, argument);
  return concatenateArray(wordList, argument);
}

const sixthWord = "      JavaScript es divertido           ";
console.log(removeSpacesEnd(sixthWord));

/* 
7. Extraer el dominio de una dirección de correo electrónico:
Crear una función que reciba una dirección de correo electrónico y devuelva únicamente el
dominio de la misma.
● Ejemplo: Si la entrada es “jhondoe@ahk.com.ar”, la salida debería ser “ahk.com.ar”
*/

console.log(
  "----------------------------EXERCISE 7------------------------------------"
);

function extractDomain(email) {
  const arroba = "@";
  var isDomain = false;
  var domain = "";
  for (var i = 0; i < email.length; i++) {
    if (isDomain) {
      domain += email[i];
    }
    if (email[i] == arroba) {
      isDomain = true;
    }
  }
  console.log(domain);
  return domain;
}

const email = "Leandro@ahk.com.ar";
extractDomain(email);

/* 
8.
Combinar dos arrays alternando sus elementos:
Crear una función que reciba dos arrays y devuelva un nuevo array con los elementos de ambos
arrays combinados alternativamente.
● Ejemplo: Si la entrada fueran los arrays [1, 2, 3] y ['a', 'b', 'c', ‘d’], la salida debería ser [1,
‘a’, 2, ‘b’, 3, ‘c’, ‘d’]

*/

console.log(
  "----------------------------EXERCISE 8------------------------------------"
);

function combineArrays(arrayOne, arrayTwo) {
  const amountElements = arrayOne.length + arrayTwo.length - 1;
  const diferenceAmountElements = arrayOne.length - arrayTwo.length;
  const combinationArray = [];
  var alterar = true;
  var i = 0;
  var j = 0;
  while (i < arrayOne.length || j < arrayTwo.length) {
    if (i < arrayOne.length) combinationArray.push(arrayOne[i]);
    if (i < arrayTwo.length) combinationArray.push(arrayTwo[i]);
    i++;
    j++;
  }
  console.log(combinationArray);
  return combinationArray;
}

const firstArray = [1, 2];
const secondArray = ["a", "b", "c", "d"];

combineArrays(firstArray, secondArray);

/* 

9. Calcular impuestos:
Desarrollar una función que permita conocer los impuestos que debe abonar una persona dada
su edad y sus ingresos mensuales. Los impuestos a abonar por una persona entre 18 y 20 años
es un 10% de los ingresos; las personas entre 21 y 30 deben abonar 15% de los ingresos; y todo el resto un 40%. Los menores de edad no abonan impuestos.
● Ejemplo: Si la entrada fuera la edad 18 e ingreso 1000, la salida esperada debería ser
100.
*/

console.log(
  "----------------------------EXERCISE 9------------------------------------"
);

function calculatePorcentage(total, porcentage) {
  return (total * porcentage) / 100;
}
function getPersonTaxesToPay(age, monthlyIncome) {
  const agesRange = [18, 21, 30];
  const impuestosPorcentageRange = [10, 15, 40];
  if (age < agesRange[0]) return 0;
  else if (age >= agesRange[0] && age < agesRange[1]) {
    return calculatePorcentage(monthlyIncome, impuestosPorcentageRange[0]);
  } else if (age >= agesRange[1] && age <= agesRange[2]) {
    return calculatePorcentage(monthlyIncome, impuestosPorcentageRange[1]);
  } else {
    return calculatePorcentage(monthlyIncome, impuestosPorcentageRange[2]);
  }
}

console.log(getPersonTaxesToPay(-17, 1000));
/*
10. Resumen de cantidad de likes:
Desarrollar una función que, dada una cantidad numérica de likes, devuelva un texto informativo
de la cantidad de likes en formato de “K” para miles y “M” para millones.
● Ejemplo: Si la entrada fuera 1400, la salida debería ser “1.4K”; o si la entrada fuera “34
567” la salida debería ser “34.5K”.
*/
console.log("---------------------EXERCISE 10---------------------------");
