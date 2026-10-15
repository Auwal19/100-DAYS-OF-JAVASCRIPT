const prompt = require("prompt-sync")();



while(true){
let number = Number(prompt("Enter a number from 1-10: "))
	if (Number.isNaN(number)){
		console.log("Enter a valid number");}
	else if(number > 10){
		console.log("Can't count up to 10");}
		
	else{
		for(let index = 1; index <= number; index++){
			if(index % 2 ==0){
			console.log("",  "# # # #")
			
			}else{
				console.log("# # # #")
	}
	}
	break;
}
}






















































//for(let count = 1; count <= 4; count++){
	//if number 
