import * as fs from 'fs';

const tabl: string[] = fs.readFileSync('./2022/day10/input10.in', 'utf-8').split('\n');

let X = 1;
let turn = 0;
let result1 = 0;
let result2 = Array.from(Array(6).keys()).map((value) => Array.from(Array(40).keys()).map((value) => '.'));

function execCom(memory: number, commandBloc: string, repeat: boolean = false): void {
    let row = Math.floor(turn / 40);
    let column = turn % 40;
    if (Math.abs(column - X) <= 1) {
        result2[row][column] = result2[row][column].replace('.', '#');
    }
    turn += 1;
    if (turn % 40 == 20) {
        result1 += X * turn;
    }
    X += memory;
    let command = commandBloc.split(' ');
    if (command.length != 1 && !repeat) {
        execCom(Number(command[1]), commandBloc, true);
    }
}

tabl.map((cur: string) => {
    execCom(0, cur);
});

console.log(result1);
console.log(result2);
