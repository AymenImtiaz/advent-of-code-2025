const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input.txt', 'utf8' );
const banks = input.split('\n');

let totalOutputJoltage = 0;

for(const bank of banks){
	const maxJoltage = findMaxJoltage(bank);
	totalOutputJoltage += maxJoltage;
}

console.log('totalOutputJoltage: ',totalOutputJoltage);

function findMaxJoltage(bank){
	let maxJoltageTenthValue = 0;
	let maxJoltageTenthIndex = 0;
	let maxJoltageUnitValue = 0;
	
	for(let i = 0; i < bank.length - 1; i++){
		if(bank[i] > maxJoltageTenthValue){
			maxJoltageTenthValue = parseInt(bank[i]);
			maxJoltageTenthIndex = i;
		}
	}

	for(let i = maxJoltageTenthIndex + 1; i < bank.length; i++){
		if(bank[i] > maxJoltageUnitValue){
			maxJoltageUnitValue = parseInt(bank[i]);
		}
	}

	return maxJoltageTenthValue * 10 + maxJoltageUnitValue;	
}