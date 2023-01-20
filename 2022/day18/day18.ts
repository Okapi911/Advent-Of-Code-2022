import * as fs from 'fs';

let occupied = new Set();

let tabl: number[][] = fs
    .readFileSync('./2022/day18/input18.in', 'utf-8')
    .split('\n')
    .map((value) => value.split(',').map(Number));

tabl.map((value: number[]) => {
    occupied.add(value.toString());
});

let inReach: Set<string> = new Set<string>();

let result1: number = tabl.reduce((acc: number, cur: number[]) => {
    return freeNeighbors(cur) + acc;
}, 0);

function freeNeighbors(cur: number[]): number {
    let freeN: number = 0;
    Array.from(Array(3).keys()).map((index) => {
        let neighbor1: number[] = [...cur];
        neighbor1[index] = cur[index] + 1;
        if (!occupied.has(neighbor1.toString())) {
            freeN += 1;
        }
        neighbor1[index] = cur[index] - 1;
        if (!occupied.has(neighbor1.toString())) {
            freeN += 1;
        }
    });
    return freeN;
}

console.log(result1);

let xLimG: number = Infinity;
let xlimD: number = -Infinity;
let yLimG: number = Infinity;
let ylimD: number = -Infinity;
let zLimG: number = Infinity;
let zlimD: number = -Infinity;

tabl.map((value) => {
    if (value[0] < xLimG) {
        xLimG = value[0];
    }
    if (value[0] > xlimD) {
        xlimD = value[0];
    }
    if (value[1] < yLimG) {
        yLimG = value[1];
    }
    if (value[1] > ylimD) {
        ylimD = value[1];
    }
    if (value[2] < zLimG) {
        zLimG = value[2];
    }
    if (value[2] > zlimD) {
        zlimD = value[2];
    }
});

let limG: number[] = [xLimG, yLimG, zLimG];
let limD: number[] = [xlimD, ylimD, zlimD];

limG = limG.map((value) => value - 1);
limD = limD.map((value) => value + 1);

let position: Set<string> = new Set<string>().add([xLimG, yLimG, zLimG].toString());

while (position.size != 0) {
    let item: string = firstItemOfSet(position);
    position.delete(item);
    inReach.add(item);
    reachNeighbors(item.split(',').map(Number));
}

function firstItemOfSet(set: Set<string>): string {
    for (let element of set) {
        if (element) {
            return element;
        }
    }
    return '0, 0, 0';
}

function reachNeighbors(coords: number[]) {
    Array.from(Array(3).keys()).map((index) => {
        let neighbor1: number[] = [...coords];
        neighbor1[index] = coords[index] + 1;
        if (neighbor1[index] <= limD[index] && !occupied.has(neighbor1.toString())) {
            if (!inReach.has(neighbor1.toString())) {
                position.add(neighbor1.toString());
            }
        }
        neighbor1[index] = coords[index] - 1;
        if (neighbor1[index] >= limG[index] && !occupied.has(neighbor1.toString())) {
            if (!inReach.has(neighbor1.toString())) {
                position.add(neighbor1.toString());
            }
        }
    });
}

function freeNeighbors2(cur: number[]): number {
    let freeN: number = 0;
    Array.from(Array(3).keys()).map((index) => {
        let neighbor1: number[] = [...cur];

        neighbor1[index] = cur[index] + 1;
        if (!occupied.has(neighbor1.toString()) && inReach.has(neighbor1.toString())) {
            freeN += 1;
        }
        neighbor1[index] = cur[index] - 1;
        if (!occupied.has(neighbor1.toString()) && inReach.has(neighbor1.toString())) {
            freeN += 1;
        }
    });
    return freeN;
}

let result2: number = tabl.reduce((acc, cur) => {
    return freeNeighbors2(cur) + acc;
}, 0);

console.log(result2);
