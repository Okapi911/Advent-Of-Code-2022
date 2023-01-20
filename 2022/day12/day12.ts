import * as fs from 'fs';

let ini = [0, 0];
let final = [0, 0];
let aPositions: string[] = [];
const tabl: number[][] = fs
    .readFileSync('./2022/day12/input12.in', 'utf-8')
    .split('\n')
    .map((value, index) =>
        value.split('').map((value2, index2) => {
            let height: number = value2.charCodeAt(0);
            if (height == 'S'.charCodeAt(0)) {
                ini = [index, index2];
                return 'a'.charCodeAt(0);
            }
            if (height == 'E'.charCodeAt(0)) {
                final = [index, index2];
                return 'z'.charCodeAt(0);
            }
            if (height == 'a'.charCodeAt(0)) {
                aPositions = aPositions.concat([index, index2].toString());
            }
            return height;
        })
    );
let dimProduct = [tabl.length, tabl[0].length];

let inReach = new Set<string>().add(final.toString());
let reached = new Set<string>();
let distance: any = {};
distance[final.toString()] = 0;

function firstItemOfSet(set: Set<string>): string {
    for (let element of set) {
        if (element) {
            return element;
        }
    }
    return '0,0';
}

while (inReach.size != 0) {
    let item = firstItemOfSet(inReach);
    inReach.delete(item);
    reached.add(item);
    reachNeighbors(item.split(',').map(Number));
}

function reachNeighbors(coords: number[]) {
    Array.from(Array(2).keys()).map((index) => {
        let neighbor1 = [...coords];
        neighbor1[index] = coords[index] + 1;
        if (neighbor1[index] < dimProduct[index]) {
            if (
                (!reached.has(neighbor1.toString()) ||
                    distance[neighbor1.toString()] > distance[coords.toString()] + 1) &&
                tabl[neighbor1[0]][neighbor1[1]] >= tabl[coords[0]][coords[1]] - 1
            ) {
                inReach.add(neighbor1.toString());
                distance[neighbor1.toString()] = distance[coords.toString()] + 1;
            }
        }
        neighbor1[index] = coords[index] - 1;
        if (neighbor1[index] >= 0) {
            if (
                (!reached.has(neighbor1.toString()) ||
                    distance[neighbor1.toString()] > distance[coords.toString()] + 1) &&
                tabl[neighbor1[0]][neighbor1[1]] >= tabl[coords[0]][coords[1]] - 1
            ) {
                inReach.add(neighbor1.toString());
                distance[neighbor1.toString()] = distance[coords.toString()] + 1;
            }
        }
    });
}

let nearestA = distance[ini.toString()];
console.log(nearestA);
nearestA = aPositions.reduce((acc: number, cur: string) => {
    if (distance[cur] < acc) {
        return distance[cur];
    }
    return acc;
}, nearestA);

console.log(nearestA);
