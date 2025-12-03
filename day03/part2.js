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

	const [ maxJoltageFor12thPlaceValue, maxJoltageFor12thPlaceIndex] = findMaxPlaceValue( 0, 11, bank);
	
	const [ maxJoltageFor11thPlaceValue, maxJoltageFor11thPlaceIndex] = findMaxPlaceValue( maxJoltageFor12thPlaceIndex + 1, 10, bank );

	const [ maxJoltageFor10thPlaceValue, maxJoltageFor10thPlaceIndex] = findMaxPlaceValue( maxJoltageFor11thPlaceIndex + 1, 9, bank );

	const [ maxJoltageFor9thPlaceValue, maxJoltageFor9thPlaceIndex] = findMaxPlaceValue( maxJoltageFor10thPlaceIndex + 1, 8, bank );

	const [ maxJoltageFor8thPlaceValue, maxJoltageFor8thPlaceIndex] = findMaxPlaceValue( maxJoltageFor9thPlaceIndex + 1, 7, bank );

	const [ maxJoltageFor7thPlaceValue, maxJoltageFor7thPlaceIndex] = findMaxPlaceValue( maxJoltageFor8thPlaceIndex + 1, 6, bank );

	const [ maxJoltageFor6thPlaceValue, maxJoltageFor6thPlaceIndex] = findMaxPlaceValue( maxJoltageFor7thPlaceIndex + 1, 5, bank );

	const [ maxJoltageFor5thPlaceValue, maxJoltageFor5thPlaceIndex] = findMaxPlaceValue( maxJoltageFor6thPlaceIndex + 1, 4, bank );

	const [ maxJoltageFor4thPlaceValue, maxJoltageFor4thPlaceIndex] = findMaxPlaceValue( maxJoltageFor5thPlaceIndex + 1, 3, bank );

	const [maxJoltageFor3rdPlaceValue, maxJoltageFor3rdPlaceIndex] = findMaxPlaceValue( maxJoltageFor4thPlaceIndex + 1, 2, bank );

	const [maxJoltageFor2ndPlaceValue, maxJoltageFor2ndPlaceIndex] = findMaxPlaceValue( maxJoltageFor3rdPlaceIndex + 1, 1, bank );

	const [maxJoltageFor1stPlaceValue, maxJoltageFor1stPlaceIndex] = findMaxPlaceValue( maxJoltageFor2ndPlaceIndex + 1, 0, bank );

	console.log(maxJoltageFor12thPlaceValue + maxJoltageFor11thPlaceValue + maxJoltageFor10thPlaceValue + maxJoltageFor9thPlaceValue + maxJoltageFor8thPlaceValue + maxJoltageFor7thPlaceValue + maxJoltageFor6thPlaceValue + maxJoltageFor5thPlaceValue + maxJoltageFor4thPlaceValue + maxJoltageFor3rdPlaceValue + maxJoltageFor2ndPlaceValue + maxJoltageFor1stPlaceValue);
	return parseInt(maxJoltageFor12thPlaceValue + maxJoltageFor11thPlaceValue + maxJoltageFor10thPlaceValue + maxJoltageFor9thPlaceValue + maxJoltageFor8thPlaceValue + maxJoltageFor7thPlaceValue + maxJoltageFor6thPlaceValue + maxJoltageFor5thPlaceValue + maxJoltageFor4thPlaceValue + maxJoltageFor3rdPlaceValue + maxJoltageFor2ndPlaceValue + maxJoltageFor1stPlaceValue);	
}

function findMaxPlaceValue(startingIndex, endingIndex, bank){
	let maxValue = '0';
	let maxIndex = 0;

	//console.log('placeValue: ', placeValue);
	//console.log('substring bank: ', bank);
	for(let i = startingIndex; i < bank.length - endingIndex; i++){
		if(bank[i] > maxValue){
			maxValue = bank[i];
			maxIndex = i;
		}
	}
	return [maxValue, maxIndex];
}