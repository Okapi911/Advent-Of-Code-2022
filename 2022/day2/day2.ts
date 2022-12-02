import * as fs from 'fs';

const tablOrigin: string[] = fs.readFileSync('./2022/day2/input2.in', 'utf-8').split('\n');
const tablPlayer1: string[] = tablOrigin.map((value, index) => value.split(' ')[0]);
const tablPlayer2: string[] = tablOrigin.map((value, index) => value.split(' ')[1]);

//PART 1
const score: number = tablPlayer2.reduce(
    (acc, cur, index) => acc + scoreMatch(cur, tablPlayer1[index]) + scoreItem(cur),
    0
);

function scoreMatch(player: string, adversary: string): number {
    const resultP: number = player.charCodeAt(0) - 23;
    const resultA: number = adversary.charCodeAt(0);
    const result: number = (resultP - resultA + 3) % 3; // 2 if defeat, 0 if equality, 1 if victory
    if (result == 2) {
        return 0;
    }
    if (result == 1) {
        return 6;
    }
    return 3;
}
function scoreItem(play: string) {
    return play.charCodeAt(0) - 'W'.charCodeAt(0);
}

console.log(score);

//PART 2

function scoreMatch2(objective: string, moveAdv: string) {
    let scoreAdv: number = moveAdv.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    if (objective == 'X') {
        const technicalScore: number = scoreAdv - 1;
        return ((technicalScore - 3) % 3) + 3;
    }
    if (objective == 'Y') {
        return scoreAdv + 3;
    } else {
        const technicalScore: number = scoreAdv + 1;
        return ((technicalScore - 6) % 3) + 9;
    }
}

const score2: number = tablPlayer2.reduce((acc, cur, index) => acc + scoreMatch2(cur, tablPlayer1[index]), 0);

console.log(score2);
