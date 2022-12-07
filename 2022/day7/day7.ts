import * as fs from 'fs';

let tabl: string[] = fs.readFileSync('./2022/day7/input7.in', 'utf-8').split('\n$ ');
tabl.splice(0, 1);

let tablPrettyCdLs = tabl.map((value, index) => {
    let contentOfDir: string[] = value.split('\n');
    let firstLine: string[] = contentOfDir.splice(0, 1);
    if (contentOfDir.length > 0) {
        tabl[index] = 'ls';
    } else {
        tabl[index] = firstLine[0].split(' ')[0];
        contentOfDir = [firstLine[0].split(' ')[1]];
    }
    return contentOfDir;
});

// PART 1

var dicoOfLightDir: any = { '/': 0 };
let path: string[] = ['/'];
let dirSet: Set<string> = new Set('/');

tabl.map((value, index) => {
    if (value == 'cd') {
        if (tablPrettyCdLs[index][0] != '..') {
            path.push(tablPrettyCdLs[index][0]);
            dirSet.add(path.join('/'));
            dicoOfLightDir[path.join('/')] = 0;
        } else {
            path.pop();
        }
    } else {
        tablPrettyCdLs[index].map((valueF) => {
            let dirOrSize: string = valueF.split(' ')[0];
            if (dirOrSize != 'dir') {
                path.map((dir, index2) => {
                    dicoOfLightDir[path.slice(0, index2 + 1).join('/')] += Number(dirOrSize);
                    return dir;
                });
            }
            return valueF;
        });
    }
    return value;
});

let result: number = 0;
dirSet.forEach(checkAndAdd);

function checkAndAdd(value: string): void {
    if (dicoOfLightDir[value] <= 100000) {
        result += dicoOfLightDir[value];
    }
}
console.log(result);

// PART 2

let remainingPlace: number = 70000000 - dicoOfLightDir['/'];

let result2: number = Infinity;
dirSet.forEach(checkAndReturn);
function checkAndReturn(value: string): void {
    let valueOfInterest: number = dicoOfLightDir[value];
    if (valueOfInterest >= 30000000 - remainingPlace) {
        if (valueOfInterest < result2) {
            result2 = valueOfInterest;
        }
    }
}
console.log(result2);
