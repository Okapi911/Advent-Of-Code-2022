import * as fs from 'fs';
import { compareIdentifiers } from 'semver';

const tabl = fs.readFileSync('./2022/day3/input3.in', 'utf-8').split('\n');
const tablAscii: number[][] = tabl.map((value, index) => value.split('').map((value) => value.charCodeAt(0)));

//PART 1

function score(charRepeated: number): number {
    if (charRepeated >= 'a'.charCodeAt(0)) {
        return charRepeated - 'a'.charCodeAt(0) + 1;
    }
    return charRepeated - 'A'.charCodeAt(0) + 27;
}

function searchChar(stock: number[]): number {
    const container1: number[] = stock.splice(0, stock.length / 2);
    const container2 = stock;
    return container1.filter((value) => container2.includes(value))[0];
}

const result1: number = tablAscii.reduce((acc, cur) => acc + score(searchChar(cur)), 0);

console.log(result1);

//PART 2

const tablAscii2: number[][] = tabl.map((value, index) => value.split('').map((value) => value.charCodeAt(0)));

let packs: number[][][] = new Array(tablAscii2.length / 3);
for (let i = 0; i < packs.length; i++) {
    packs[i] = tablAscii2.splice(0, 3);
}

const result2: number = packs.reduce((acc, cur) => acc + score(charInPack(cur)), 0);

function charInPack(pack: number[][]): number {
    return pack[0].filter((value) => pack[1].includes(value) && pack[2].includes(value))[0];
}

console.log(result2);
