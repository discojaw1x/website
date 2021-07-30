var array = ["Some string", "Another String", "Third String",
"JavaScript", "Sorax", "GTA", "SMP", "zONE"];

var numbers = [1,2,3,4,5,6];

// array.forEach(function(element, index, array){
// 	array[index] = element.toUpperCase();
// });

// console.log(array.map(function(e){return e.toUpperCase()}));
 
// var filtered = array.filter(function(e){
// return e.indexOf('o') === -1;
// });

// console.log(filtered);

// console.log(array.every(function(e){
// 	return e.length > 4
// }));

// console.log(array.some(function(e){return e.indexOf('z') !== -1}));

// console.log(array.some(function(e){return e.indexOf('x') !== -1}));

// var reduced = numbers.reduce(function(a,b){
// return a*(b % 3 === 0 ? b : 1);  /* умножаем на числа кратные трём */ 
// });

var reduced = numbers.reduceRight(function(a,b){
return Math.pow(a,b);
});

console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(3));
console.log(numbers.lastIndexOf(10));