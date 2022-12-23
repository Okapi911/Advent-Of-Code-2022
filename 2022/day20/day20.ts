import * as fs from 'fs';

let tablOrigin = fs.readFileSync('./2022/day20/input20.in', 'utf-8').split('\n').map(Number);
let repGrid = Array.from(Array(20000).keys()).map((value, index) => 0);
let tablOcc = tablOrigin.map((value) => {
    let composite = [value, repGrid[value + 10000]].join('//');
    repGrid[value + 10000] += 1;
    return composite;
});
let tablChanged = [...tablOcc];

function changeTab(tabl: string[], indexIni: number, value: string) {
    tabl.splice(indexIni, 1);
    let indexF: number = (indexIni + Number(value.split('//')[0])) % tabl.length;
    if (indexF == 0 && value != '0//0') {
        indexF = tabl.length;
    }
    tabl.splice(indexF, 0, value);
}

tablOcc.map((value) => {
    let indexIni = tablChanged.indexOf(value);
    changeTab(tablChanged, indexIni, value);
});

let indexOf0 = tablChanged.indexOf('0//0');
let result1 =
    Number(tablChanged[(1000 + indexOf0) % tablChanged.length].split('//')[0]) +
    Number(tablChanged[(2000 + indexOf0) % tablChanged.length].split('//')[0]) +
    Number(tablChanged[(3000 + indexOf0) % tablChanged.length].split('//')[0]);

console.log('Result 1');

console.log(result1);

// PART 2

repGrid = Array.from(Array(20000).keys()).map((value, index) => 0);
let tablOcc2 = tablOrigin.map((value) => {
    let composite = [value * 811589153, repGrid[value + 10000]].join('//');
    repGrid[value + 10000] += 1;
    return composite;
});

tablChanged = [...tablOcc2];

let iter = 0;
while (iter < 10) {
    tablOcc2.map((value) => {
        let indexIni = tablChanged.indexOf(value);
        changeTab(tablChanged, indexIni, value);
    });
    iter += 1;
}

indexOf0 = tablChanged.indexOf('0//0');
let result2 =
    Number(tablChanged[(1000 + indexOf0) % tablChanged.length].split('//')[0]) +
    Number(tablChanged[(2000 + indexOf0) % tablChanged.length].split('//')[0]) +
    Number(tablChanged[(3000 + indexOf0) % tablChanged.length].split('//')[0]);
console.log('Result 2');
console.log(result2);
