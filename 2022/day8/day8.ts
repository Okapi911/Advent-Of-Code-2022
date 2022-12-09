import * as fs from 'fs';

let tabl: string[] = fs.readFileSync('./2022/day8/input8.in', 'utf-8').split('\n');
let tablIndividual = tabl.map((value) => value.split('').map(Number));

let visibleTrees = new Set();

Array.from(Array(tablIndividual[0].length).keys()).map((value, index) => {
    verticalScenery(tablIndividual, index, false);
    verticalScenery(tablIndividual, index, true);
});

function verticalScenery(forestData: number[][], column: number, reversed = false, ini = -1, max = Infinity) {
    let maxHeight = ini;
    if (reversed) {
        forestData = forestData.reverse();
    }
    forestData.map((value, row) => {
        if (value[column] > maxHeight) {
            maxHeight = value[column];
            if (value[column] > max) {
                maxHeight = Infinity;
            }
            if (reversed) {
                let reversedPosition = tablIndividual.length - row - 1;
                visibleTrees.add([reversedPosition, column].join('-'));
            } else {
                visibleTrees.add([row, column].join('-'));
            }
        }

        return value;
    });
    if (reversed) {
        forestData = forestData.reverse();
    }
}

Array.from(Array(tablIndividual.length).keys()).map((value, index) => {
    horizontalScenery(tablIndividual, index);
    horizontalScenery(tablIndividual, index, false);
});

function horizontalScenery(forestData: number[][], row: number, reversed: boolean = true, ini = -1, max = Infinity) {
    let maxHeight = ini;
    if (reversed) {
        forestData[row] = forestData[row].reverse();
    }
    forestData[row].map((value, column) => {
        if (value > maxHeight) {
            maxHeight = value;
            if (value >= max) {
                maxHeight = Infinity;
            }
            if (reversed) {
                let reversedPosition = tablIndividual[0].length - column - 1;
                visibleTrees.add([row, reversedPosition].join('-'));
            } else {
                visibleTrees.add([row, column].join('-'));
            }
        }

        return value;
    });
    if (reversed) {
        forestData[row] = forestData[row].reverse();
    }
}
let result1 = visibleTrees.size;

// PART 2

let result2 = 0;
tablIndividual.map((value, row) => value.map((value2, column) => treeHouseScore(row, column, value2)));

function treeHouseScore(row: number, column: number, max: number) {
    let scores = [];

    let upperForest = tablIndividual.slice(0, row);
    visibleTrees = new Set();
    verticalScenery2(upperForest, column, true, -1, max);
    scores.push(visibleTrees.size);

    let downsideForest = tablIndividual.slice(row + 1);
    visibleTrees = new Set();
    verticalScenery2(downsideForest, column, false, -1, max);
    scores.push(visibleTrees.size);

    let leftSideForest = tablIndividual.map((value) => value.slice(0, column));
    visibleTrees = new Set();
    horizontalScenery2(leftSideForest, row, true, -1, max);
    scores.push(visibleTrees.size);

    let rightSideForest = tablIndividual.map((value) => value.slice(column + 1));
    visibleTrees = new Set();
    horizontalScenery2(rightSideForest, row, false, -1, max);
    scores.push(visibleTrees.size);

    let scoref = scores.reduce((acc, cur) => acc * cur, 1);
    if (scoref > result2) {
        result2 = scoref;
    }
}

function horizontalScenery2(forestData: number[][], row: number, reversed: boolean = true, ini = -1, max = Infinity) {
    let done = false;
    if (reversed) {
        forestData[row] = forestData[row].reverse();
    }
    forestData[row].map((value, column) => {
        if (!done) {
            if (reversed) {
                let reversedPosition = tablIndividual[0].length - column - 1;
                visibleTrees.add([row, reversedPosition].join('-'));
            } else {
                visibleTrees.add([row, column].join('-'));
            }
            if (value >= max) {
                done = true;
            }
        }
        return value;
    });
    if (reversed) {
        forestData[row] = forestData[row].reverse();
    }
}

function verticalScenery2(forestData: number[][], row: number, reversed: boolean = true, ini = -1, max = Infinity) {
    let done = false;
    if (reversed) {
        forestData = forestData.reverse();
    }
    forestData.map((value, column) => {
        if (!done) {
            if (reversed) {
                let reversedPosition = tablIndividual[0].length - column - 1;
                visibleTrees.add([row, reversedPosition].join('-'));
            } else {
                visibleTrees.add([row, column].join('-'));
            }
            if (value[row] >= max) {
                done = true;
            }
        }
        return value;
    });
    if (reversed) {
        forestData = forestData.reverse();
    }
}

console.log(result1);
console.log(result2);
