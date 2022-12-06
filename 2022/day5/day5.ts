import * as fs from 'fs';

const tabl: string[] = fs.readFileSync('./2022/day5/input5.in', 'utf-8').split('\n\n');

let tablForm = Array.from({ length: 9 }, (v, i) => ['']);

const tablIni = tabl[0].split('\n').map((value) => {
    let res = value.match(/.{1,4}/g) ?? [];
    let resLegible = res.map((value2, index) => {
        let valNew = value2.replace(' ', '').replace('[', '').replace(']', '');
        if (valNew.length < 2) {
            tablForm[index].push(valNew);
        }
        return valNew;
    });
    return resLegible;
});

const tablCommand = tabl[1]
    .split('\n')
    .map((value) => value.replace('move ', '').replace(' from ', ',').replace(' to ', ',').split(',').map(Number));

function spliceAndRet(toShorten: string[], len: number) {
    return toShorten.splice(0, len);
}

// PART 1

let rev = true;
let tablForm3 = tablForm.map((value) => value.slice(1));
let result2: string[][] = tablForm3;
function resultF2(reverse: boolean, ini: string[][]) {
    return tablCommand.reduce((acc, value) => {
        let toChange = spliceAndRet(acc[value[1] - 1], Math.min(value[0], acc[value[1] - 1].length));
        if (reverse) {
            toChange = toChange.reverse();
        }
        toChange = toChange.concat(acc[value[2] - 1]);
        acc[value[2] - 1] = toChange;
        return acc;
    }, ini);
}

let resultFinal1 = resultF2(rev, result2).map((value) => value[0]);
console.log(resultFinal1);

//PART 2

console.log('----------------');
rev = false;
let tablForm1 = tablForm.map((value) => value.slice(1));
let result1: string[][] = tablForm1;
let resultFinal2 = resultF2(rev, result1).map((value) => value[0]);
console.log(resultFinal2);
