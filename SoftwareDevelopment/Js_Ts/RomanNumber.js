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
  var decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; // numeros romanos a enteros
  var roman = ""; // integer number converted to roman number and return
  // var amountRomanNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // cantidad de repeticiones de la division por un numero de la lista decimalNumbers[]
  var i = 0;
  // recorro decimalNumbers
  while (number > 0 && i < decimalNumbers.length) {
    while (decimalNumbers[i] <= number) {
      number -= decimalNumbers[i];
      roman += romanNumbers[i];
    }
    i++;
  }

  return roman;
}

console.log(convertToRomanNumber(9999));
