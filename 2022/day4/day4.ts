import * as fs from 'fs';

const tabl: string[] = fs.readFileSync('./2022/day4/input4.in', 'utf-8').split('\n');
const tablPairs: number[][][] = tabl.map((value) => value.split(',').map((value) => value.split('-').map(Number)));

// PART 1

const result1: number = tablPairs.reduce((acc: number, cur: number[][]) => acc + cover(cur[0], cur[1]), 0);

function cover(elf1: number[], elf2: number[]): number {
    let elfMin: boolean = elf1[0] - elf2[0] <= 0;
    let elfMax: boolean = elf1[1] - elf2[1] >= 0;
    if (elf1[0] == elf2[0] || elf1[1] == elf2[1]) {
        return 1;
    }
    if (elfMax == elfMin) {
        return 1;
    }
    return 0;
}
console.log(result1);

// PART 2

const result2: number = tablPairs.reduce((acc: number, cur: number[][]) => acc + cover2(cur[0], cur[1]), 0);

function cover2(elf1: number[], elf2: number[]): number {
    let elf1Cov: boolean = elf1[0] <= elf2[1] && elf1[0] >= elf2[0];
    let elf2Cov: boolean = elf1[1] >= elf2[0] && elf1[0] <= elf2[0];
    if (elf1Cov || elf2Cov) {
        return 1;
    }
    return 0;
}

console.log(result2);
