const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input.txt', 'utf8' );
const lines = input.split('\n');

const freshRanges = lines.slice(0, lines.indexOf('')).map(line => line.split('-').map(Number));
const availableIngredients = lines.slice(lines.indexOf('') + 1).map(Number);

let freshIngredients = 0;

for(const ingredient of availableIngredients){
	if( freshRanges.some(range => ingredient >= range[0] && ingredient <= range[1]) ){
		freshIngredients++;
	}
}

console.log('freshIngredients: ', freshIngredients);
