import * as fs from 'fs';

let occupied: Set<string> = new Set<string>();

let tabl: string[][] = fs
    .readFileSync('./2022/day23/input23.in', 'utf-8')
    .split('\n')
    .map((rowContent, row) =>
        rowContent.split('').map((item, col) => {
            if (item == '#') {
                occupied.add([row, col].toString());
            }
            return item;
        })
    );

let elfNumber: number = occupied.size;
let wantedPlaces: Set<string> = new Set<string>();
let queries: any = {};

function willToMove(elf: string): boolean {
    let hasNeighbors: boolean = false;
    [0, 1].map((axis) => {
        [-1, 1].map((dir) => {
            [-1, 0, 1].map((otherAxis) => {
                let position: number[] = elf.split(',').map(Number);
                position[axis] += dir;
                position[1 - axis] += otherAxis;
                if (occupied.has(position.toString())) {
                    hasNeighbors = true;
                }
            });
        });
    });
    if (hasNeighbors) {
        return true;
    }
    return false;
}

function whereToMove(elf: string, order: number) {
    let checkCount: number = 0;
    let runnning: boolean = true;
    let position: number[] = elf.split(',').map(Number);
    while (runnning && checkCount < 8) {
        if (checkCount >= order) {
            let okToMove: boolean = true;
            [-1, 0, 1].map((value) => {
                let neigh: number[] = [...position];
                neigh[0] -= 1;
                neigh[1] += value;
                if (occupied.has(neigh.toString())) {
                    okToMove = false;
                }
            });
            if (okToMove) {
                let whereToGoStr: string = [position[0] - 1, position[1]].toString();
                if (!wantedPlaces.has(whereToGoStr)) {
                    wantedPlaces.add(whereToGoStr);
                    queries[whereToGoStr] = [elf];
                } else {
                    queries[whereToGoStr] = queries[whereToGoStr].concat([elf]);
                }
                runnning = false;
                break;
            }
        }
        checkCount += 1;
        if (checkCount >= order) {
            let okToMove = true;
            [-1, 0, 1].map((value) => {
                let neigh = [...position];
                neigh[0] += 1;
                neigh[1] += value;
                if (occupied.has(neigh.toString())) {
                    okToMove = false;
                }
            });
            if (okToMove) {
                let whereToGoStr = [position[0] + 1, position[1]].toString();
                if (!wantedPlaces.has(whereToGoStr)) {
                    wantedPlaces.add(whereToGoStr);
                    queries[whereToGoStr] = [elf];
                } else {
                    queries[whereToGoStr] = queries[whereToGoStr].concat([elf]);
                }
                runnning = false;
                break;
            }
        }
        checkCount += 1;
        if (checkCount >= order) {
            let okToMove = true;
            [-1, 0, 1].map((value) => {
                let neigh = [...position];
                neigh[1] += -1;
                neigh[0] += value;
                if (occupied.has(neigh.toString())) {
                    okToMove = false;
                }
            });
            if (okToMove) {
                let whereToGoStr = [position[0], position[1] - 1].toString();
                if (!wantedPlaces.has(whereToGoStr)) {
                    wantedPlaces.add(whereToGoStr);
                    queries[whereToGoStr] = [elf];
                } else {
                    queries[whereToGoStr] = queries[whereToGoStr].concat([elf]);
                }
                runnning = false;
                break;
            }
        }
        checkCount += 1;
        if (checkCount >= order) {
            let okToMove = true;
            [-1, 0, 1].map((value) => {
                let neigh = [...position];
                neigh[1] += 1;
                neigh[0] += value;
                if (occupied.has(neigh.toString())) {
                    okToMove = false;
                }
            });
            if (okToMove) {
                let whereToGoStr = [position[0], position[1] + 1].toString();
                if (!wantedPlaces.has(whereToGoStr)) {
                    wantedPlaces.add(whereToGoStr);
                    queries[whereToGoStr] = [elf];
                } else {
                    queries[whereToGoStr] = queries[whereToGoStr].concat([elf]);
                }
                runnning = false;
                break;
            }
        }
        checkCount += 1;
    }
    if (runnning) {
        if (!wantedPlaces.has(elf)) {
            wantedPlaces.add(elf);
            queries[elf] = [elf];
        } else {
            queries[elf] = queries[elf].concat([elf]);
        }
    }
}

let order: number = 0;
let turn: number = 1;
let occupiedList: string[] = ['ini'];
let occupiedStr: string = 'ini';
let previouslyOccupiedStr: string = '';

while (turn <= 1000) {
    occupiedList = Array.from(occupied);
    occupiedStr = occupiedList.join('');
    if (occupiedStr == previouslyOccupiedStr) {
        break;
    }
    occupiedList.map((elf) => {
        turnElf(elf, order);
    });
    previouslyOccupiedStr = occupiedStr;
    occupied = new Set<string>();
    let newSpots: string[] = Array.from(wantedPlaces);
    newSpots.map((position: string) => {
        if (queries[position].length == 1) {
            occupied.add(position);
        } else {
            queries[position].map((elf: string) => {
                occupied.add(elf);
            });
        }
    });
    wantedPlaces = new Set<string>();
    queries = {};
    if (turn == 10) {
        let occupiedListBis: string[] = Array.from(occupied);
        let limits: number[][] = [
            [Infinity, -Infinity],
            [Infinity, -Infinity],
        ];
        occupiedListBis.map((value) => {
            let coords: number[] = value.split(',').map(Number);
            if (coords[0] < limits[0][0]) {
                limits[0][0] = coords[0];
            }
            if (coords[0] > limits[0][1]) {
                limits[0][1] = coords[0];
            }
            if (coords[1] < limits[1][0]) {
                limits[1][0] = coords[1];
            }
            if (coords[1] > limits[1][1]) {
                limits[1][1] = coords[1];
            }
        });
        console.log((limits[0][1] - limits[0][0] + 1) * (limits[1][1] - limits[1][0] + 1) - occupied.size);
    }
    turn += 1;
    order = (order + 1) % 4;
}

function turnElf(elf: string, order: number) {
    if (willToMove(elf)) {
        whereToMove(elf, order);
    } else {
        if (!wantedPlaces.has(elf)) {
            wantedPlaces.add(elf);
            queries[elf] = [elf];
        } else {
            queries[elf] = queries[elf].concat([elf]);
        }
    }
}

console.log(turn - 1);
