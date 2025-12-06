const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input.txt', 'utf8' );
const lines = input.split('\n');

const freshRanges = lines.slice(0, lines.indexOf('')).map(line => line.split('-').map(Number));
let rangesToProcess = freshRanges;
let uniqueRanges;
let freshIngredientsCount = 0;
let haveMoreRanges = true;

do{
	uniqueRanges = getUniqueRanges(rangesToProcess);
	rangesToProcess = uniqueRanges;
}while(haveMoreRanges)

for(const range of uniqueRanges){
	freshIngredientsCount += range[1] - range[0] + 1;
}

console.log('freshIngredientsCount: ', freshIngredientsCount);

function getUniqueRanges(ranges){
	console.log('fresh ranges: ', ranges);
	let uniqueRanges = [];
	for(const newRange of ranges){
		//if the starting and end both fall in some existing range, dont add the new range at all
		if( uniqueRanges.some(existingRange => newRange[0] >= existingRange[0] && newRange[1] <= existingRange[1]) ){
			continue;
		}
		//if the starting and end of new range completely contain some existing range, replace the existing range with the new range
		let overlappedRange = uniqueRanges.find(existingRange => newRange[0] <= existingRange[0] && newRange[1] >= existingRange[1]);
		if( overlappedRange ){
			uniqueRanges = uniqueRanges.filter(range => range !== overlappedRange);
			uniqueRanges.push(newRange);
			continue;
		}
		//if the starting falls in some existing range, replace the end of the existing range with the end of the bigger range
		let startOverlap = uniqueRanges.find(existingRange => newRange[0] >= existingRange[0] && newRange[0] <= existingRange[1]);
		if( startOverlap ){
			uniqueRanges = uniqueRanges.filter(range => range !== startOverlap);
			uniqueRanges.push([startOverlap[0], Math.max(startOverlap[1], newRange[1])]);
			continue;
		}
		//if the end falls in some existing range, replace the starting of the existing range with the starting of the smaller range
		let endOverlap = uniqueRanges.find(existingRange => newRange[1] >= existingRange[0] && newRange[1] <= existingRange[1]);
		if( endOverlap ){
			uniqueRanges = uniqueRanges.filter(range => range !== endOverlap);
			uniqueRanges.push([Math.min(endOverlap[0], newRange[0]), endOverlap[1]]);
			continue;
		}
		//if the new range is completely outside of some existing range, add the new range to the unique ranges
		if( !uniqueRanges.some(existingRange => newRange[0] >= existingRange[0] && newRange[1] <= existingRange[1]) ){
			uniqueRanges.push(newRange);
		}
	}

	if( uniqueRanges.length === ranges.length ){
		haveMoreRanges = false;
	}
	return uniqueRanges;
}