import * as fs from 'fs';

import v8 from 'v8';
v8.setFlagsFromString('--stack-size=2000');

const tabl: string[][] = fs
    .readFileSync('./2022/day9/input9.in', 'utf-8')
    .split('\n')
    .map((value) => value.split(' '));

let uniqueLocations = new Set().add('0/0');
var headLoc = [0, 0];
var tailLoc = [0, 0];
let complete = false;

type dictionary = {
    [key: number]: string;
};
let locations: dictionary = { 0: '0/0' };
let movements = 1;

tabl.map((value) => {
    moveExe(value);
});

function moveExe(value: string[]) {
    let orientation = 1;
    switch (value[0]) {
        case 'U':
            headLoc[0] += Number(value[1]);
            break;
        case 'D':
            headLoc[0] -= Number(value[1]);
            orientation = -1;
            break;
        case 'L':
            headLoc[1] -= Number(value[1]);
            orientation = -1;
            break;
        case 'R':
            headLoc[1] += Number(value[1]);
            break;
    }
    while (!complete) {
        tailUpdate(orientation);
    }
    complete = false;
}

function tailUpdate(orientation: number) {
    if (Math.abs(headLoc[0] - tailLoc[0]) > 1) {
        tailLoc[0] += orientation;
        tailLoc[1] = headLoc[1];
        locations[movements] = tailLoc.join('/');
        movements += 1;
    } else {
        if (Math.abs(headLoc[1] - tailLoc[1]) > 1) {
            tailLoc[1] += orientation;
            tailLoc[0] = headLoc[0];
            locations[movements] = tailLoc.join('/');
            movements += 1;
        } else {
            complete = true;
        }
    }
}

Array.from(Array(movements).keys()).map((value) => uniqueLocations.add(locations[value]));
console.log(uniqueLocations.size);

// PART 2

Array.from(Array(8).keys()).map((value) => {
    let locationsAhead = Array.from(Array(movements).keys()).map((value) => locations[value]);
    locations = { 0: '0/0' };
    movements = 1;
    tailLoc = [0, 0];
    locationsAhead.map((value) => {
        headLoc = value.split('/').map(Number);
        let orientation = 1;
        if (headLoc[0] - tailLoc[0] < -1 || headLoc[1] - tailLoc[1] < -1) {
            orientation = -1;
        }
        tailUpdate(orientation);
    });
});

uniqueLocations = new Set().add('0/0');
Array.from(Array(movements).keys()).map((value) => uniqueLocations.add(locations[value]));
console.log(uniqueLocations.size);
