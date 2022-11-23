const a: string = 'Hello Pitiful World';
console.log(a);
import * as fs from 'fs';
const tabl = fs.readFileSync('./Training/day2/input2.in', 'utf-8').split('\n');
//console.log(tabl);

const tab2 = tabl.map((element, i) => element.split(' '));
let tabOcc = tab2.map((element, i) => element[0]);
let tabLetter = tab2.map((element, i) => element[1]);
const tabPassword = tab2.map((element, i) => element[2]);
let tabOccSep = tabOcc.map((element, i) => element.split('-').map(Number));
console.log(tabOccSep);
tabLetter = tabLetter.map((element, i) => element.split(':')[0]);
console.log(tabLetter);
