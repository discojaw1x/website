// throw выражение

// throw "Hello"

// 10 = "string"

// var myError = new ReferenceError("My Error Message");
// console.log(myError.name);
// console.log(myError.message);

// throw myError;

// var calculate = function(n) {
// 	if (n > 10) throw new Error("n show be less than 10");
// 	return n + 10;
// };

// calculate(20);

// try {
// 	инструкции
// } catсh (идентификатор){
// 	инструкции
// } finally {
// 	инструкции
// }

try {
	calculate(20);
} catch (e) {
	console.log("Can't execute calculate: " + e.message);	
}
