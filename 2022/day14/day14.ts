import * as fs from 'fs';
console.time('yeah');
let tabl: number[][][] = fs
    .readFileSync('./2022/day14/input14.in', 'utf-8')
    .split('\n')
    .map((value) => value.split(' -> ').map((value2) => value2.split(',').map(Number)));

let maxHeight: number = 0;
let minWidth: number = Infinity;
let maxWidth: number = 0;

let solidsPositions: Set<string> = new Set();

function solidPositionsIni() {
    tabl.map((barrier) => {
        let indexOfWall: number = 0;
        while (indexOfWall < barrier.length - 1) {
            drawWall(barrier[indexOfWall], barrier[indexOfWall + 1]);
            indexOfWall += 1;
        }
    });
}
solidPositionsIni();

function drawWall(point1: number[], point2: number[]): void {
    if (point1[0] < minWidth) {
        minWidth = point1[0];
    }
    if (point1[0] > maxWidth) {
        maxWidth = point1[0];
    }
    if (point2[0] < minWidth) {
        minWidth = point2[0];
    }
    if (point2[0] > maxWidth) {
        maxWidth = point2[0];
    }
    if (point1[1] > maxHeight) {
        maxHeight = point1[1];
    }
    if (point2[1] > maxHeight) {
        maxHeight = point2[1];
    }
    if (point1[0] == point2[0]) {
        let direction: number = (point1[1] - point2[1]) / Math.abs(point1[1] - point2[1]);
        Array.from(Array(Math.abs(point1[1] - point2[1]) + 1).keys()).map((value) => {
            solidsPositions.add([point1[0], point1[1] - direction * value].join('-'));
        });
    }
    if (point1[1] == point2[1]) {
        let direction: number = (point1[0] - point2[0]) / Math.abs(point1[0] - point2[0]);
        Array.from(Array(Math.abs(point1[0] - point2[0]) + 1).keys()).map((value) => {
            solidsPositions.add([point1[0] - direction * value, point1[1]].join('-'));
        });
    }
}

let sand: number = -1;
while (true) {
    sand += 1;
    let sandPosition: number[] = [500, 0];
    let breaker: boolean = moveSand(sandPosition);
    if (breaker) {
        break;
    }
}

function moveSand(sandPosition: number[]): boolean {
    if (sandPosition[0] < minWidth || sandPosition[0] > maxWidth || sandPosition[1] > maxHeight) {
        return true;
    }
    if (!solidsPositions.has([sandPosition[0], sandPosition[1] + 1].join('-'))) {
        return moveSand([sandPosition[0], sandPosition[1] + 1]);
    } else {
        if (!solidsPositions.has([sandPosition[0] - 1, sandPosition[1] + 1].join('-'))) {
            return moveSand([sandPosition[0] - 1, sandPosition[1] + 1]);
        }
        if (!solidsPositions.has([sandPosition[0] + 1, sandPosition[1] + 1].join('-'))) {
            return moveSand([sandPosition[0] + 1, sandPosition[1] + 1]);
        }
        solidsPositions.add(sandPosition.join('-'));
        return false;
    }
}

console.log(sand);

solidsPositions = new Set();
solidPositionsIni();
maxHeight += 2;
maxWidth = Infinity;
minWidth = -Infinity;
for (let index: number = 0; index < 10000; index++) {
    solidsPositions.add([index, maxHeight].join('-'));
    solidsPositions.add([-index, maxHeight].join('-'));
}

sand = 0;
while (!solidsPositions.has('500-0')) {
    sand += 1;
    let sandPosition: number[] = [500, 0];
    let breaker: boolean = moveSand(sandPosition);
}
console.log(sand);
console.timeEnd('yeah');
