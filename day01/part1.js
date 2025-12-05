const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input.txt', 'utf8' );
const lines = input.split('\n');

let marker = 50;
const SIZE = 100;
let zeroCounter = 0;

for(const line of lines){
	const [direction, steps] = [line[0], parseInt(line.substring(1))];
	if(direction === 'L'){
		moveLeft(steps);
	} else {
		moveRight(steps);
	}

	if(marker === 0){
		zeroCounter++;
	}
}

console.log('zeroCounter', zeroCounter);

function moveLeft(steps){

	marker = (marker - steps + SIZE) % SIZE;
}

function moveRight(steps){

	marker = (marker + steps) % SIZE;
}

