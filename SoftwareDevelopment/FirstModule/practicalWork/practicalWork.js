/*
Crear una función que reciba una frase (string) y devuelva la misma frase con el formato de
título, donde la primera letra de cada palabra está en mayúscula y el resto en minúscula.
*/
function wordSeparator(phrase, arg) {
  if (typeof phrase !== "string") {
    console.error("No es una cadena el argumento");
    return;
  }
  var word = "";
  var wordList = [];
  for (var i = 0; i < phrase.length; i++) {
    if (phrase[i] == arg) {
      wordList.push(word);
      word = "";
    } else {
      word += phrase[i];
    }
  }
  wordList.push(word);
  return wordList;
}

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

Concatenar elementos de un array con un separador personalizado:
Crear una función que reciba un array de strings y un separador, y devuelva una sola cadena de
texto que contenga todos los elementos del array concatenados con el separador especificado.
● Ejemplo: Si la entrada es ["Hola", "Mundo", "JavaScript"] y el separador “-”, la
salida debería ser "Hola-Mundo-JavaScript"

*/

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

Revertir las palabras de una frase:
Crear una función que reciba una cadena de texto y devuelva la misma cadena con las palabras
en orden inverso.
● Ejemplo: Si la entrada es "JavaScript es divertido", la salida debería ser “divertido es
JavaScript”
● Ayuda: Se sugiere recorrer la frase con algún ciclo de repetición. Cada vez que se
encuentre un espacio en blanco se habrá encontrado una palabra. Cada palabra podría
ser insertada en un array (¿para qué?)

*/

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
