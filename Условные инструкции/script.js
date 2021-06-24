// if (выражение) инструкция;
if(true) console.log("Its true");
if(false) console.log("Its true");
var n = 5; 
if (n >3) {
	console.log(n);
}
if (n < 3) {
	console.log("hello");
	console.log(n);
} 
var name = "Dan", homecity;
if (name === "John") {
	homecity = "Boston";
} else if (name ==="Sorax") {
	homecity ="Belgorod"; 
} else if (name === "Bill") {
	homecity ="LA";
}
console.log(homecity);
/*switch(выражение) {
	case выражение: инструкции
	case выражение: инструкции
	case выражение: инструкции
	case выражение: инструкции
	default:инструкции 
} */
switch(name) {
	case "John": homecity = "Boston"; break;
	case "Sorax": homecity ="Belgorod`"; break;
	case "Bill": homecity = "LA";
	default: homecity = "Moscow";
}
console.log(homecity);
