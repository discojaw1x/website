var classof = function(object) {
	return Object.prototype.toString.call(object).slice(8,-1);
};
console.log(classof(""));
console.log(classof([]));
console.log(classof({}));
console.log(classof(function(){}));
console.log(classof(32423));
console.log(classof(true));
console.log(classof(/\d/));

// console.log({}.toString());

// console.log(Object.prototype.toString.call([]));
// console.log(Object.prototype.toString.call(/\w/));
// console.log(Object.prototype.toString.call(function(){}));

// console.log(Object.prototype.toString.call("hi"));
// console.log(Object.prototype.toString.call(3454));
// console.log(Object.prototype.toString.call(true));



// var Person, person, anotherPerson;

// Person = function(name) {
// 	this.name = name;
// };

// Person.prototype.greet = function () {
// 	console.log("Hello, my name is " + this.name);
// };

// Person.prototype.toString = function(){
// 	return this.name;
// };

// Person.prototype.valueOf = function () {
// return 100;
// };

// Developer = function (name,skills) {
// 	Person.apply(this, arguments);
// 	this.skills = skills || [];
// };

// Developer.prototype = Object.create(Person.prototype);
// Developer.prototype.constructor = Developer;

// developer = new Developer("John", ["ruby", "ror", "python"]);

// console.log(+developer);




// var func = function(arg) {
// 	return arg + 10;
// };
// console.log(func.toString());


// console.log("The name is:" + developer);
// console.log([1,2,3, [4,5,6]].toString());


// console.log(developer.toString());
// console.log("" developer);
// console.log(developer.valueOf);


// console.log(developer.name);
// console.log(developer.skills);
// developer.greet();

// console.log(developer instanceof Developer);
// console.log(developer instanceof Person);



// person = new Person("Jack");
// console.log(person.name);
// person.greet();

// anotherPerson = new Person("Bruce");
// console.log(anotherPerson.name);
// anotherPerson.greet();

// console.log(anotherPerson instanceof Person);
// console.log(Person.prototype.isPrototypeOf(anotherPerson));

// console.log(anotherPerson.__proto__);