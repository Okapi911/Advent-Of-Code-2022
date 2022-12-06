import * as fs from 'fs';

const tabl: string[] = fs.readFileSync('./2022/day6/input6.in', 'utf-8').split('');

function signalUpdateF(signal: Set<unknown>, index: number, newer: string, len: number): void {
    signal.delete(tabl[index - len]);
    Array.from(Array(len).keys()).map((value) => signal.add(tabl[index - value]));
    signal.add(newer);
}

function locateFirstId(len: number): number {
    let tablSpliced: string[] = fs.readFileSync('./2022/day6/input6.in', 'utf-8').split('');
    const messageIni: string[] = tablSpliced.splice(0, len);
    let result: number = 0;
    let messageSet: Set<unknown> = new Set();
    let resultFound: boolean = false;
    messageIni.map((value) => messageSet.add(value));

    tablSpliced.reduce((acc, cur) => {
        signalUpdateF(messageSet, acc, cur, len);
        if (messageSet.size == len && !resultFound) {
            result = acc + 1;
            resultFound = true;
        }
        return acc + 1;
    }, len);
    return result;
}

console.log(locateFirstId(4));
console.log(locateFirstId(14));
