var user = {
	name: "Frank",
	id: 42345,
	friends: [2452, 62523, 8969],
	toJSON: function() {
		return {
			name: this.name,
			lastVisit: this.LastVisit
		}
	}
};

var userData = JSON.stringify(user);
console.log(userData);

console.log(JSON.parse(userData));