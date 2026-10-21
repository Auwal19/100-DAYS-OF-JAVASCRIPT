const prompt = require('prompt-sync')();

let user_input = Number(prompt("Enter first number: "))

while ( user_input >= 10 ){
	let sum = 0;
	
	while( user_input > 0){
		let digit = user_input % 10;
		sum += digit
		user_input = (user_input - digit) / 10;
	}
	user_input = sum;
}

console.log(user_input)
	
	
	
	