import * as fs from 'fs';

let tabl = fs
    .readFileSync('./2022/day15/input15.in', 'utf-8')
    .split('\n')
    .map((value) =>
        value
            .replace('Sensor at x=', '')
            .split(': closest beacon is at x=')
            .map((value3) => value3.split(', y=').map(Number))
    );

tabl.sort((a, b) => a[0][0] - b[0][0]);

//console.log(tabl);

let leftLim = Infinity;
let rightLim = -Infinity;
let bottom = 0;
let sensors: string[] = [];
let distSensorsBeacons: any = {};

tabl.map((value) => {
    if (value[0][0] < leftLim) {
        leftLim = value[0][0];
    }
    if (value[1][0] < leftLim) {
        leftLim = value[1][0];
    }
    if (value[0][0] > rightLim) {
        rightLim = value[0][0];
    }
    if (value[1][0] > rightLim) {
        rightLim = value[1][0];
    }
    if (value[0][1] > bottom) {
        bottom = value[0][1];
    }
    if (value[1][1] > bottom) {
        bottom = value[1][1];
    }
    let position = value[0].join('-');
    sensors.push(position);
    distSensorsBeacons[position] = manhattan(value[0], value[1]);
});

//console.log(bottom, leftLim, rightLim);
console.log(sensors);

function manhattan(sensor: number[], landmark: number[]): any {
    return Math.abs(sensor[0] - landmark[0]) + Math.abs(sensor[1] - landmark[1]);
}

//console.log(distSensorsBeacons);

leftLim = -1000000;
rightLim = 8000000;
function addPositionsLine(line: number): number {
    let freePos = 0;
    let col = leftLim;
    let bip = 0;
    while (col < rightLim) {
        let indexSensor = 0;
        let minDist = Infinity;
        let minMan = Infinity;
        while (indexSensor < sensors.length) {
            let man = manhattan(sensors[indexSensor].split('-').map(Number), [col, line]);
            bip += 1;
            /*if (bip < 100) {
                console.log('--------------');
                console.log(indexSensor);
                console.log(man);
                console.log(distSensorsBeacons[sensors[indexSensor]]);
                console.log(col);
            }*/
            if (man <= distSensorsBeacons[sensors[indexSensor]]) {
                freePos += distSensorsBeacons[sensors[indexSensor]] - man + 1;
                if (freePos > rightLim - leftLim) {
                    freePos = rightLim - leftLim;

                    //console.log('###########');
                    //console.log(freePos);
                }
                col += distSensorsBeacons[sensors[indexSensor]] - man + 1;
                /*if (bip < 40 && bip > 20) {
                    console.log(col);
                    console.log('--------------');
                }*/
                break;
            } else {
                if (man < minMan) {
                    minDist = distSensorsBeacons[sensors[indexSensor]];
                    minMan = man;
                    //console.log(minDist);
                }
                if (indexSensor < sensors.length - 1) {
                    indexSensor += 1;
                    /*if (bip < 40 && bip > 20) {
                        console.log(col);
                        console.log(indexSensor);
                        console.log(sensors.length);
                        console.log('--------------');
                    }*/
                } else {
                    col += minMan - minDist;
                    /*console.log(minDist);
                    console.log(minMan);
                    console.log(col);
                    if (bip < 40 && bip > 20) {
                        console.log(col);
                        console.log('--------------');
                    }*/
                    break;
                }
            }
        }
    }
    return freePos;
}

console.log(addPositionsLine(10));
