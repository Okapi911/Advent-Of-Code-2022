import * as fs from 'fs';

let tabl = fs
    .readFileSync('./2022/day13/input13.in', 'utf-8')
    .split('\n\n')
    .map((value) => value.split('\n'));

let tablFormatted = tabl.map((value) => value.map((value2) => JSON.parse(value2)));

let result1 = tablFormatted.reduce((acc, cur, index) => {
    let comparisonCur = compareLR(cur[0], cur[1], 0);
    if (comparisonCur != 0) {
        return acc + index + 1;
    }
    return acc;
}, 0);

function compareLR(left: any[], right: any[], index: number): number {
    if (index >= left.length) {
        if (index < right.length) {
            return 1;
        }
        return -1;
    }
    if (index >= right.length) {
        return 0;
    }
    if (left[index].length === undefined) {
        if (right[index].length === undefined) {
            if (left[index] < right[index]) {
                return 1;
            }
            if (left[index] > right[index]) {
                return 0;
            }
            return compareLR(left, right, index + 1);
        } else {
            let compInsides = compareLR([left[index]], right[index], 0);
            if (compInsides == -1) {
                return compareLR(left, right, index + 1);
            }
            return compInsides;
        }
    } else {
        if (right[index].length === undefined) {
            let compInsides = compareLR(left[index], [right[index]], 0);
            if (compInsides == -1) {
                return compareLR(left, right, index + 1);
            }
            return compInsides;
        } else {
            let compInsides = compareLR(left[index], right[index], 0);
            if (compInsides == -1) {
                return compareLR(left, right, index + 1);
            }
            return compInsides;
        }
    }
    return 100;
}

console.log(result1);

// PART 2

let classified: any[] = [[[2]], [[6]]];
let divider2 = 0;
let divider6 = 1;

let tabl2: string[] = fs.readFileSync('./2022/day13/input13.in', 'utf-8').replace(/\n\n/g, '\n').split('\n');
let tablFormatted2: any[] = tabl2.map((value) => JSON.parse(value));

tablFormatted2.map((value) => {
    let compWith2 = compareLR(value, [[2]], 0);
    if (compWith2 == 1) {
        classified.splice(0, 0, value);
        divider2 += 1;
        divider6 += 1;
    } else {
        let compWith6 = compareLR(value, [[6]], 0);
        if (compWith6 == 1) {
            classified.splice(divider6, 0, value);
            divider6 += 1;
        } else {
            classified.push(value);
        }
    }
});

console.log((divider2 + 1) * (divider6 + 1));
