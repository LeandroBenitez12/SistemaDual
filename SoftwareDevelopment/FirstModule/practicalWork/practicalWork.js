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
  var title = "";
  const argument = " ";
  const wordList = wordSeparator(phrase, argument);
  for (var i = 0; i < wordList.length; i++) {
    wordList[i].toLowerCase();
    console.log(title);
    for (var j = 0; j < wordList[i].length; j++) {
      wordList[i][0].toUpperCase();
    }
    title += wordList[i] + " ";
  }
  console.log(title);
  return title;
}

const phrase = "hello PEOPLE My name is LEANDRO ";
convertToTitle(phrase);
