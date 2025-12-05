const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input.txt', 'utf8' );

let rows = input.split('\n').map(row => row.split(''));
let accessibleRolls = 0;
let removedRolls = 0;
let haveMoreRollsToRemove = true;
let rollsToRemove =[];


do{
	rows.forEach(( row, rowIndex ) => {
		row.forEach(( char, columnIndex ) => {
			if( char === '@'){
				let adjacentRolls = 0;

				if( adjacentRolls < 4 && rowIndex > 0 && columnIndex > 0 && getTopLeft(rowIndex, columnIndex) === '@'){
					adjacentRolls++;
				}
				if( adjacentRolls < 4 && rowIndex > 0 && getTop(rowIndex, columnIndex) === '@'){
					adjacentRolls++;
				}
				if( adjacentRolls < 4 && rowIndex > 0 && columnIndex < row.length - 1 && getTopRight(rowIndex, columnIndex) === '@'){
					adjacentRolls++;
				}
				if( adjacentRolls < 4 && columnIndex < row.length - 1 && getRight(rowIndex, columnIndex) === '@'){
					adjacentRolls++;
				}
				if( adjacentRolls < 4 && rowIndex < rows.length - 1 && columnIndex < row.length - 1 && getBottomRight(rowIndex, columnIndex) === '@'){
					adjacentRolls++;
				}
				if( adjacentRolls < 4 && rowIndex < rows.length - 1 && getBottom(rowIndex, columnIndex) === '@'){
					adjacentRolls++;
				}
				if( adjacentRolls < 4 && rowIndex < rows.length - 1 && columnIndex > 0 && getBottomLeft(rowIndex, columnIndex) === '@'){
					adjacentRolls++;
				}
				if( adjacentRolls < 4 && columnIndex > 0 && getLeft(rowIndex, columnIndex) === '@'){
					adjacentRolls++;
				}
				if( adjacentRolls < 4){
					accessibleRolls++;
					rollsToRemove.push([rowIndex, columnIndex]);
				}
			}
		});
	});

	if( rollsToRemove.length > 0 ){
		rollsToRemove.forEach(roll => {
			rows[roll[0]][roll[1]] = '.';
			removedRolls++;
		});
		rollsToRemove = [];
		accessibleRolls = 0;
	}
	else{
		haveMoreRollsToRemove = false;
	}
}while(haveMoreRollsToRemove);

console.log('removedRolls: ', removedRolls);


function getTopLeft(rowIndex, columnIndex){
	return rows[rowIndex - 1][columnIndex - 1];
}

function getTop(rowIndex, columnIndex){
	return rows[rowIndex - 1][columnIndex];
}

function getTopRight(rowIndex, columnIndex){
	return rows[rowIndex - 1][columnIndex + 1];
}

function getRight(rowIndex, columnIndex){
	return rows[rowIndex][columnIndex + 1];
}

function getBottomRight(rowIndex, columnIndex){
	return rows[rowIndex + 1][columnIndex + 1];
}

function getBottom(rowIndex, columnIndex){
	return rows[rowIndex + 1][columnIndex];
}

function getBottomLeft(rowIndex, columnIndex){
	return rows[rowIndex + 1][columnIndex - 1];
}

function getLeft(rowIndex, columnIndex){
	return rows[rowIndex][columnIndex - 1];
}