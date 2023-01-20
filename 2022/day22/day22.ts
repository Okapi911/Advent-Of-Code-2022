/*
Formattage :

        labyrinthe :

        1- trouver taille max d'une ligne
        2- créer un tableau avec bon nombre de lignes et autant de colonnes que le max trouvé initialisé avec des " "
        3- pour tout élément de l'input (valeur, ligne, colonne) remplacer la valeur dans le tableau par l'élément
        4- Créer un dico pour identifier pour chaque ligne et colonne la première et dernière position existante (même mur)

        instructions :

        Tant que la longueur du tableau est non nulle,
            * en prendre le premier élément
            * si c'est un chiffre
                * concaténer à un accumulateur initialisé à ""
                * pop l'élément
            * si c'est une lettre
                * transformer l'accumulateur en nombre
                * ajouter le nombre dans une liste
                * réinitialiser accumulateur
                * ajouter lettre dans une autre liste   

Partie 1 : résolution

        Initialiser position et direction
        Tant que liste rotations non vide
            prendre premier nombre ; première rotation en les popant
            initialiser compteur à 0
            tant que compteur < nb pas
                déterminer la position après 1 pas
                si disponible
                    upgrade positions, incr compteur
                sinon
                    break
            update direction
        renvoyer position
        mettre en forme les données
*/

import * as fs from 'fs';

let tablOrigin: string[] = fs.readFileSync('./2022/day22/input22.in', 'utf-8').split('\n\n');

let tablLab: string[][] = tablOrigin[0].split('\n').map((value) => value.split(''));
let dicoLim: any = {};

let maxRowLength: number = 0;

tablLab.map((value, index) => {
    let leftLimit: number = Infinity;
    let rightLimit: number = 0;
    if (value.length > maxRowLength) {
        maxRowLength = value.length;
    }
    value.map((value2, index2) => {
        if (value2 != ' ' && index2 < leftLimit) {
            leftLimit = index2;
        }
        if (value2 != ' ' && index2 > rightLimit) {
            rightLimit = index2;
        }
        dicoLim['r'.concat(String(index))] = [leftLimit, rightLimit];
    });
});

Array.from(Array(maxRowLength).keys()).map((value, index) => {
    dicoLim['c'.concat(String(index))] = [Infinity, 0];
});

tablLab.map((value: string[], index) => {
    value.map((value2: string, index2) => {
        if (value2 != ' ' && index < dicoLim['c'.concat(String(index2))][0]) {
            dicoLim['c'.concat(String(index2))][0] = index;
        }
        if (value2 != ' ' && index > dicoLim['c'.concat(String(index2))][1]) {
            dicoLim['c'.concat(String(index2))][1] = index;
        }
    });
});

let tablCom: string[] = tablOrigin[1].split('');
let comList: string[] = [];
let stepsList: number[] = [];
let position: number = 0;
while (tablCom.length != position) {
    let current: string = tablCom[position];
    let acc: string = '';
    position += 1;
    while (current != 'L' && current != 'R' && tablCom.length != position) {
        acc = acc.concat(current);
        current = tablCom[position];
        position += 1;
    }
    if (acc != '') {
        stepsList.push(Number(acc));
    }
    if (current != 'L' && current != 'R') {
        stepsList.push(Number(current));
    } else {
        comList.push(current);
    }
}

let curPos: number[] = [0, dicoLim['r0'][0]];
comList = ['R'].concat(comList);
let dirNumber: number = 0;
while (comList.length != 0) {
    let dir: string = comList.splice(0, 1)[0];
    let steps: number = stepsList.splice(0, 1)[0];
    if (dir == 'R') {
        dirNumber = (dirNumber + 1) % 4;
    } else {
        dirNumber = (dirNumber + 3) % 4;
    }
    walk(dirNumber, steps);
}

function walk(dirNumber: number, steps: number): void {
    let walkedSteps = 0;
    while (walkedSteps < steps) {
        let row: number = curPos[0];
        let col: number = curPos[1];
        if (dirNumber == 1) {
            col += 1;
            if (col > dicoLim['r'.concat(String(row))][1]) {
                col = dicoLim['r'.concat(String(row))][0];
            }
        }
        if (dirNumber == 2) {
            row += 1;
            if (row > dicoLim['c'.concat(String(col))][1]) {
                row = dicoLim['c'.concat(String(col))][0];
            }
        }
        if (dirNumber == 3) {
            col += -1;
            if (col < dicoLim['r'.concat(String(row))][0]) {
                col = dicoLim['r'.concat(String(row))][1];
            }
        }
        if (dirNumber == 0) {
            row += -1;
            if (row < dicoLim['c'.concat(String(col))][0]) {
                row = dicoLim['c'.concat(String(col))][1];
            }
        }
        if (tablLab[row][col] != '.') {
            break;
        } else {
            curPos = [row, col];
            walkedSteps += 1;
        }
    }
}

console.log((curPos[0] + 1) * 1000 + 4 * (curPos[1] + 1) + ((dirNumber + 3) % 4));
