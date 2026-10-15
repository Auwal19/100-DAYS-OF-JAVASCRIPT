let table = [2, 7, 8, 5,6,3];
let target = 9;

for (let index = 0; index < table.length; index++){
	for(let count = index + 1; count < table.length; count++){
		sum = table[index] + table[count]
		if (sum == target)
			console.log([index,count])
}

}