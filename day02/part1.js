const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input.txt', 'utf8' );
const ranges = input.split(',');

let allIds = [];
let sumOfInvalidIds = 0;

for(const range of ranges){
	//console.log('range: ', range);
	generateAllIdsForGivenRange(range);
}

//console.log('allIds: ', allIds);

for(let id of allIds){
	id = id.toString();
	//console.log('id: ', id);
	if(id.length % 2 === 0){
		//console.log('even id: ', id);
		if(id.substring(0, id.length / 2) === id.substring(id.length / 2)){
			//console.log('invalid id: ', id);
			sumOfInvalidIds += parseInt(id);
		}
	}
	else{
		for(let i = 0; i < id.length; i++){

			if(id[i] != id[i + 1]){
				break;
			}
			else if(i === id.length - 1){
				//console.log('invalid id: ', id);
				sumOfInvalidIds += parseInt(id);
			}
		}
	}
}

console.log(sumOfInvalidIds);


function generateAllIdsForGivenRange(range){
	const [start, end] = range.split('-').map(Number);
	//console.log('start: ', start);
	//console.log('end: ', end);
	for(let i = start; i <= end; i++){
		//console.log('i: ', i);
		allIds.push(i.toString());
	}
}

