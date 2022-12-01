import * as fs from 'fs';

const tablOrigin: string[] = fs.readFileSync('./2022/day1/input1.in', 'utf-8').split('\n\n');

const tablOrganized: number[][] = tablOrigin.map((value, index) => value.split('\n').map(Number));
//console.log(tablOrganized);

const tablRations: number[] = tablOrganized.map((value, index) =>
    value.reduce((acc: number, cur: number) => acc + cur, 0)
);
//console.log(tablRations);

const result1: number = tablRations.reduce((acc, cur) => {
    if (acc > cur) {
        return acc;
    }
    return cur;
}, 0);
console.log(result1);

//Part 2 solution 1 : few lines of code, but bad complexity for few elves to search
let sortedRations: number[] = tablRations.sort((a, b) => b - a);
console.log(sortedRations[0] + sortedRations[1] + sortedRations[2]);

//Part 2 solution 2 : awful code, better complexity for three elves
const result2: number = tablRations.reduce((acc, cur) => {
    if (acc > cur || cur == result1) {
        return acc;
    }
    return cur;
}, 0);

const result3: number = tablRations.reduce((acc, cur) => {
    if (acc > cur || cur == result1 || cur == result2) {
        return acc;
    }
    return cur;
}, 0);
console.log(result1 + result2 + result3);

//Part 2 solution 3 : For three elves, the complexity is in O(n) but this program is
//worst than solution 2, especially if there were to be more than 3 elves to study.
//However, the code improves in quality with a lack of repetitions.

let firstRations = tablRations.splice(0, 3).sort();

const sum = (topRations: number[]): number => topRations.reduce((acc, cur) => acc + cur, 0);

let resultPart2: number = sum(
    tablRations.reduce((acc, cur) => {
        acc.push(cur);
        return best3Of4(acc);
    }, firstRations)
);

function best3Of4(numList: number[]): number[] {
    const betterList = numList.sort((a, b) => a - b);
    betterList.splice(0, 1);
    return betterList;
}

console.log(resultPart2);
