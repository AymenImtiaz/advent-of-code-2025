/**
 * --- Day 4: Printing Department ---
You ride the escalator down to the printing department. They're clearly getting ready for Christmas; they have lots of large rolls of paper everywhere, and there's even a massive printer in the corner (to handle the really big print jobs).

Decorating here will be easy: they can make their own decorations. What you really need is a way to get further into the North Pole base while the elevators are offline.

"Actually, maybe we can help with that," one of the Elves replies when you ask for help. "We're pretty sure there's a cafeteria on the other side of the back wall. If we could break through the wall, you'd be able to keep moving. It's too bad all of our forklifts are so busy moving those big rolls of paper around."

If you can optimize the work the forklifts are doing, maybe they would have time to spare to break through the wall.

The rolls of paper (@) are arranged on a large grid; the Elves even have a helpful diagram (your puzzle input) indicating where everything is located.

For example:

..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
The forklifts can only access a roll of paper if there are fewer than four rolls of paper in the eight adjacent positions. If you can figure out which rolls of paper the forklifts can access, they'll spend less time looking and more time breaking down the wall to the cafeteria.

In this example, there are 13 rolls of paper that can be accessed by a forklift (marked with x):

..xx.xx@x.
x@@.@.@.@@
@@@@@.x.@@
@.@@@@..@.
x@.@@@@.@x
.@@@@@@@.@
.@.@.@.@@@
x.@@@.@@@@
.@@@@@@@@.
x.x.@@@.x.
Consider your complete diagram of the paper roll locations. How many rolls of paper can be accessed by a forklift?


 */

const fs = require('fs');
const input = fs.readFileSync( __dirname + '/input.txt', 'utf8' );

const rows = input.split('\n').map(row => row.split(''));
let accessibleRolls = 0;


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
			}
		}
	});
});

console.log('accessibleRolls: ', accessibleRolls);


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