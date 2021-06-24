// выражение1(test) ? выражение2 :выражение3
var x = 5;
var text = x > 10 ? "x больше десяти" : x < 10 ? "x меньше десяти" : "x равен десяти";

console.log(text);

if (x > 10) {
	text ="x больше десяти";
} else if (x<10) {
 text ="x меньше десяти";
} else { 
text = "x равен десяти";
}
console.log(text);

// выражение,(выводит правое выражение) выражение
var test = (15,20);
console.log((test, "Hello"));