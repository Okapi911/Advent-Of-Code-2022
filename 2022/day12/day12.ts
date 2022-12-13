import * as fs from 'fs';

let ini = [0, 0];
let final = [0, 0];
const tabl: number[][] = fs
    .readFileSync('./2022/day12/inputTest12.in', 'utf-8')
    .split('\n')
    .map((value, index) =>
        value.split('').map((value2, index2) => {
            let height: number = value2.charCodeAt(0);
            if (height == 'S'.charCodeAt(0)) {
                ini = [index, index2];
                return 'a'.charCodeAt(0);
            }
            if (height == 'E'.charCodeAt(0)) {
                final = [index, index2];
                return 'z'.charCodeAt(0);
            }
            return height;
        })
    );
let dimProduct = tabl.length * tabl[0].length;

let graph = tabl.map((rowList, row) => {
    return rowList.map((localHeight, column) => {
        let neighbors: number[][] = [];
        if (row != 0) {
            neighbors.push([row - 1, column, tabl[row - 1][column]]);
        }
        if (row != tabl.length - 1) {
            neighbors.push([row + 1, column, tabl[row + 1][column]]);
        }
        if (column != 0) {
            neighbors.push([row, column - 1, tabl[row][column - 1]]);
        }
        if (column != tabl[0].length - 1) {
            neighbors.push([row, column - 1, tabl[row][column + 1]]);
        }
        return neighbors;
    });
});

console.log(graph[1]);

function dijkstra(dim: number, graphToStudy: number[][][][], startingPoint: number[]) {
    let P = [];
    let summit = [0, 0];
    let lengths = Array.from(Array(dim).keys()).map((value) => Array.from(Array(dim).keys()).map((value2) => Infinity));
    lengths[startingPoint[0]][startingPoint[1]] = 0;
    console.log(lengths);
    while (P.length < dim) {}
}

dijkstra(dimProduct, graph, ini);
