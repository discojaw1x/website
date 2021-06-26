// var a = 10;
// var string = "My String";
// var object = {x: 10};
// var a = 10, b = 20;
// a = b;
// b = 15;
// console.log(a);
// var a = {x: 10}, b = {x: 20};
// a = b;
// b.x = 15;
// console.log(a.x);
// a.x=45;
// console.log(b.x);
////////////////////////////////////////////////////////////
var Person = {
    constructor: function(name,age,gender) {
    	this.name = name;
    	this.age = age;
    	this.gender = gender;
    	return this;
    },
        greet: function() { 
		console.log("Hi my name is " + this.name);
	}
};

var WebDeveloper = Object.create(Person);
WebDeveloper.constructor = function(name,age,gender,skills) {
	Person.constructor.apply(this,arguments);
	this.sklls=skills || [];
	return this;
};
WebDeveloper.develop = function (){
	console.log("Working...");
};

var developer = Object.create(WebDeveloper).constructor("Jack", 21, "male", ["html", "css", "js", "php", "mysql"]);

console.log(developer.skills);
developer.develop();
console.log(developer.name);
developer.greet();


// var person, anotherPerson, thirdPerson;

// person = Object.create(Person).constructor("John", 35, "male");
// anotherPerson = Object.create(Person).constructor("Jessica", 28, "female");
// thirdPerson = Object.create(Person).constructor("Bruce", 38, "male");

// console.log(person.name);
// console.log(anotherPerson.age);
// console.log(thirdPerson.name);

// person.greet();
// anotherPerson.greet();
// thirdPerson.greet();

// console.log(Person.isPrototypeOf(person));


// var person = {
// 	name: "John",
// 	age: 35,
// 	gender: "male",
// 	greet: function() {
// 		console.log("Hi, my name is" + this.name);
// 	}
// }
// var anotherPerson = {
// 	name: "Jessica",
// 	age: 23,
// 	gender: "female",
// 	greet: function() {
// 		console.log("Hi, my name is" + this.name);
// 	}
// }
// var thirdPerson = {
// 	name: "Bruce",
// 	age: 38,
// 	gender: "male",
// 	greet:function() {
// 		console.log("Hi, my name is" + this.name);
// 	}
// }
