import * as fs from 'fs';

const tabl: string[][] = fs
    .readFileSync('./2022/day11/inputTest11.in', 'utf-8')
    .split('\n\n')
    .map((value) => value.split('\n'));

let betterTabl: string[][][] = tabl.map((value) => {
    let monkey: string[] = [value[0].split(' ')[1].replace(':', '')];
    let items: string[] = value[1].split(': ')[1].split(', ');
    let completeOp: string = value[2].split('= ')[1];
    let op: string[] = completeOp.split(' ');
    let test: string[] = [value[3].split('by ')[1]];
    let condTrue: string[] = [value[4].split('key ')[1]];
    let condFalse: string[] = [value[5].split('key ')[1]];
    return [monkey, items, op, test, condTrue, condFalse];
});

let condProduct: number = betterTabl.reduce((acc, cur) => acc * Number(cur[3][0]), 1);

let objectsPerMonkey: number[] = Array.from(Array(betterTabl.length).keys()).map((value) => 0);

function finalTabl(calm: number = 3, rounds: number = 20): void {
    let fTabl: string[][][] = Array.from(Array(rounds).keys()).reduce((acc, cur) => {
        betterTabl.map((value, index) => {
            let newStressLevels: string[] = acc[index][1].map((value2) => {
                objectsPerMonkey[index] += 1;
                let increment: string = value[2][2];
                if (value[2][2] == 'old') {
                    increment = value2;
                }
                if (value[2][1] == '+') {
                    return Math.floor((Number(value2) + (Number(increment) % condProduct)) / calm).toString();
                }
                return Math.floor(((Number(value2) * Number(increment)) % condProduct) / calm).toString();
            });
            acc[index][1] = [];
            acc = distribution(newStressLevels, acc, Number(value[3]), Number(value[4]), Number(value[5]));
        });
        return acc;
    }, betterTabl);
}

function distribution(
    stock: string[],
    monkeyTab: string[][][],
    cond: number,
    positive: number,
    negative: number
): string[][][] {
    stock.map((value3) => {
        if (Number(value3) % cond == 0) {
            monkeyTab[positive][1] = monkeyTab[positive][1].concat([value3]);
        } else {
            monkeyTab[negative][1] = monkeyTab[negative][1].concat([value3]);
        }
        return value3;
    });
    return monkeyTab;
}

finalTabl(3, 20);
objectsPerMonkey.sort((a, b) => b - a);
console.log(objectsPerMonkey[0] * objectsPerMonkey[1]);

// PART 2

betterTabl = tabl.map((value) => {
    let monkey: string[] = [value[0].split(' ')[1].replace(':', '')];
    let items: string[] = value[1].split(': ')[1].split(', ');
    let completeOp: string = value[2].split('= ')[1];
    let op: string[] = completeOp.split(' ');
    let test: string[] = [value[3].split('by ')[1]];
    let condTrue: string[] = [value[4].split('key ')[1]];
    let condFalse: string[] = [value[5].split('key ')[1]];
    return [monkey, items, op, test, condTrue, condFalse];
});
objectsPerMonkey = Array.from(Array(betterTabl.length).keys()).map((value) => 0);
finalTabl(1, 10000);
objectsPerMonkey.sort((a, b) => b - a);
console.log(objectsPerMonkey[0] * objectsPerMonkey[1]);
