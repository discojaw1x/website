var date = new Date(1990,3,1, 10, 24, 22, 345);
console.log(date);
console.log(date.toString());

console.log(date.getMilliseconds());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log("");
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getYear());
console.log(date.getFullYear());

date.setDate(15);
console.log(date);

console.log(date.getTime());
console.log(new Date(1945,0,1).getTime());
console.log(new Date (0));

console.log(date.getUTCHours());

console.log(date.toTimeString());
console.log(date.toDateString());

console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());

console.log(Date.now());