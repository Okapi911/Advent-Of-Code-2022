/*
 * @author Lucas Kloubert
 */

import * as fs from 'fs';

const tabl = fs.readFileSync('./Training/day2/input2.in', 'utf-8').split('\n');

const tab2 = tabl.map((element, i) => element.split(' '));
let tabOcc = tab2.map((element, i) => element[0]);
let tabLetter = tab2.map((element, i) => element[1]);
const tabPassword = tab2.map((element, i) => element[2]);

let tabOccSep = tabOcc.map((element, i) => element.split('-').map(Number));
//console.log(tabOccSep);

tabLetter = tabLetter.map((element, i) => element.split(':')[0]);
//console.log(tabLetter);

const nb_occ = (letter: string, pw: string): number => pw.split('').filter((value: string) => value == letter).length;

let tabPassIte: number[] = tabPassword.map((value, index) => nb_occ(tabLetter[index], value));

//console.log(tabPassIte);

const correct_occ = (occ: number[], pwOcc: number): boolean => occ[1] >= pwOcc && occ[0] <= pwOcc;

let correctNb = tabPassIte.filter((value: number, index: number) => correct_occ(tabOccSep[index], value)).length;

console.log(correctNb);

const correct_pw = (pos: number[], pw: string, index: number): boolean =>
    (pw[pos[0] - 1] == tabLetter[index] && pw[pos[1] - 1] != tabLetter[index]) ||
    (pw[pos[0] - 1] != tabLetter[index] && pw[pos[1] - 1] == tabLetter[index]);

let correctNb2 = tabPassword.filter((value: string, index: number) =>
    correct_pw(tabOccSep[index], value, index)
).length;

console.log(correctNb2);
