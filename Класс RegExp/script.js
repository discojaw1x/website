// var input = document.getElementsByClassName('input')[0],
// output = document.getElemntsByClassName('output')[0],
// voc = {
// 	name: 'Sorax',
// 	title: 'Javascript Tuts',
// 	resourse: 'Youtube'
// };

// input.addEventListener('keyup', function(){
// 	output innerHTML = this.value.replace(
// 		/\{\w*)\}\}g, function(match,value){
// return voc[value];
// 		}
// 		);
// }, false);

// var pattern = /\w+/g;

// console.log(pattern.global);
// console.log(pattern.ignoreCase);
// console.log(pattern.multiline);

// console.log(pattern.lastIndex);

// var pattern = /\w+@\w+\.\w+/g,
// string = "Nulla at nulla test@test.com, eget luctus tortor. Nulla facilisi.";
// console.log(pattern.test(string));
// console.log(pattern.test(string));
// console.log(pattern.test(string));
// console.log(pattern.test(string));

// var pattern = /\w+/g,
// string = "How we survive is what makes us who we are",

// match;

// while(match = pattern.exec(string)) {
// 	console.log(match);
// 	console.log(match[0] + "(Index: " + match.index + " )");
// }

var pattern = /(w+)@(\w\.\w+)/g,
string = "How we jaw1x@domain.com survive is what makes us who we are",
match;

while( match = pattern.exec(string)) {
	console.log("Name: " + match[1] + ", Domain: " + match[2]);
}







// // console.log(pattern.exec(string));
// console.log(pattern.lastIndex);
// console.log(pattern.exec(string));
// console.log(pattern.exec(string));
// console.log(pattern.exec(string));
// console.log(pattern.exec(string));
// console.log(pattern.exec(string));
