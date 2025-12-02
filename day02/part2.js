const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input.txt', 'utf8' );
const ranges = input.split(',');

let allIds = [];
let sumOfInvalidIds = 0;

for(const range of ranges){
	generateAllIdsForGivenRange(range);
}

//console.log('allIds: ', allIds);

for(let id of allIds){
	id = id.toString();
	if(id.length >= 2 && id[0].repeat(id.length) === id){
		//console.log('invalid id: ', id);
		sumOfInvalidIds += parseInt(id);
	}
	else{
		if(id.length % 2 === 0){
			//console.log('even id: ', id);
			handleEvenId(id);
		}
		else{
			//console.log('odd id: ', id);
			handleOddId(id);
		}
	}
}

console.log('sumOfInvalidIds: ', sumOfInvalidIds);

function handleOddId(id){
	for(let i =3; i<(id.length)/2; i++){
		//console.log('i: ', i);
		let substring = id.substring(0, i);
		//console.log('substring: ', substring);
		//console.log('substring.repeat(id.length/i): ', substring.repeat(id.length/i));
		if(substring.repeat(id.length/i) === id){
			//console.log('invalid id: ', id);
			sumOfInvalidIds += parseInt(id);
			return;
		}
	}
}

function handleEvenId(id){
	for(let i =2; i<(id.length+1) / 2; i++){
	//console.log('i: ', i);
		let substring = id.substring(0, i);
		//console.log('substring: ', substring);
		//console.log('substring.repeat(id.length/i): ', substring.repeat(id.length/i));
		if(substring.repeat(id.length/i) === id){
			//console.log('invalid id: ', id);
			sumOfInvalidIds += parseInt(id);
			return;
		}
	}
}

function generateAllIdsForGivenRange(range){
	const [start, end] = range.split('-').map(Number);
	//console.log('start: ', start);
	//console.log('end: ', end);
	for(let i = start; i <= end; i++){
		//console.log('i: ', i);
		allIds.push(i.toString());
	}
}

