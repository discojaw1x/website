// Простые типы
var myNumber = 2525,
myString="Some string",
myBool = true,
myNull = null,
myUndef = undefined,
anotherVar = 345;
console.log(typeof myNull);
console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myUndef);
console.log("Sorax".toUpperCase());
// Обьектные типы
var obj = {name :"sorax"},
array = [1,2,3],
regexp = /w+/g,
func = function (){};
console.log(""),
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);
obj.name = "passive star";
array[1] =325235;
console.log(array);
console.log(myString.toUpperCase());
console.log(myString);
var a,b,c,d;
a = b = c = d = 5;
console.log(a,b,c,d);