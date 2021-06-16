class ArrayUtilities {
  static addZeros = (array) => array.map(v => v*10 )
  static moreThanFifty = (array) => array.filter(v => v>50)
  static removeFirst = (array) => array.filter((n,i) => i>0)
  static sumAll = (array) => array.reduce((acc, v) => acc+v)
  static divide = (number) => number.toString().split(""); 
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
