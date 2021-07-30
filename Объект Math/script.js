console.log(Math.pow(2,5));

console.log(Math.sqrt(400));
console.log(Math.sqrt(9));
console.log(Math.abs(300));
console.log(Math.abs(-300));

console.log(Math.round(9.6));
console.log(Math.round(9.2));

console.log(Math.floor(9.6));
console.log(Math.ceil(9.2));

console.log(Math.min(6,9,2,5));
console.log(Math.max(6,9,2,5));

console.log(Math.exp(1));
console.log(Math.exp(2));
console.log(Math.log(5));

console.log(Math.sin(1));
console.log(Math.cos(1));
console.log(Math.tan(1));
console.log(Math.atan(1));
console.log(Math.asin(1));
console.log(Math.acos(1));

console.log(Math.PI);
console.log(Math.cos(Math.PI));
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);

console.log(Math.random());
console.log(Math.random());

console.log(-10 + Math.random() * 20);

var getRandom = function*(min, max) {
	return Math.random() * (max - min) + min;
};

console.log(getRandom(10,20));
console.log(getRandom(-100,100));