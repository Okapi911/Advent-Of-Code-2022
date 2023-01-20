import * as fs from 'fs';

let tablOrigin: string[][] = fs
    .readFileSync('./2022/day25/input25.in', 'utf-8')
    .split('\n')
    .map((value) => value.split(''));

function numberConv(char: string): number {
    if (char === '-') {
        return -1;
    }
    if (char === '=') {
        return -2;
    }
    return Number(char);
}

let result1Base10: number = tablOrigin.reduce(
    (acc, cur) => acc + cur.reduce((acc2, cur2) => 5 * acc2 + numberConv(cur2), 0),
    0
);

console.log(result1Base10);

function base5(decimal: number): number[] {
    if (decimal < 5) {
        return [decimal];
    }
    let value: number = decimal % 5;
    return base5((decimal - value) / 5).concat([value]);
}

let result1Base5: number[] = base5(result1Base10);
console.log(result1Base5);

function snafuCoder(numberBase5: number[]): string {
    let copyOfNumber: number[] = [...numberBase5];
    copyOfNumber.reverse();
    let snafu: string = '';
    copyOfNumber.reduce((acc, cur) => {
        let numericValue: number = cur + acc;
        if (numericValue == 3) {
            snafu = '='.concat(snafu);
            return 1;
        }
        if (numericValue == 4) {
            snafu = '-'.concat(snafu);
            return 1;
        }
        if (numericValue == 5) {
            snafu = '0'.concat(snafu);
            return 1;
        }
        snafu = String(numericValue).concat(snafu);
        return 0;
    }, 0);
    return snafu;
}
let result: string = snafuCoder(result1Base5);
console.log(result);
