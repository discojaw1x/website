// var months = ["January", "February", "March", "April"];

// months[4] = "May";

// console.log(months);
// console.log(months.length);

// months[months.length] = "June";
// console.log(months);

// months[20] = "Something";
// months["SomeProperty"] = "someValue";
// console.log(months);

// // months.length = 2;
// // console.log(months);

// delete months[3];
// console.log(months);
// console.log(months[3]);

// console.log(Array.isArray(months));
// console.log(Array.isArray("Hello"));


// // console.log(typeof months);

// // var myArray = new Array(32,622,1213);
// // console.log(myArray);
// // console.log(myArray.length);

// // var thirdArray = [,,,23];
// // console.log(thirdArray);
// // console.log(thirdArray.length);

var array = ["Some string", "Another String", "Third String"];

// console.log(array.join(" || "));
// console.log(array.sort());
// console.log(array.reverse());
// console.log(array);

// console.log(array.concat("Hello", ["Even", " ", "Strings"]));

// console.log(array.slice(1));

console.log(array.splice(1,1, "Sorax", "WebDev"));
console.log(array);

array.push("Javascript");
console.log(array);
array.unshift("Hello there!");
console.log(array);

console.log(array.pop());
console.log(array.pop());
console.log(array.pop()); 
console.log(array);

 console.log(array.shift());
 console.log(array);