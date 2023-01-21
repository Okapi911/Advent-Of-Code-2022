# [**Advent of Code**](https://adventofcode.com)

# &nbsp;[**2022**](./2022/ts) **-** [**_AoC 2022_**](https://adventofcode.com/2022)

Mon objectif est de réaliser tous les problèmes des premières semaines, si possible le jour de leur sortie, puis un maximum d'exercices des deux dernières semaines selon le temps que je pourrai accorder au projet.
Je me propose de réaliser cet advent of code en utilisant javascript / typescript pour me familiariser à l'utilisation de ces langages que j'ai commencé à manipuler (en dehors des applications web) seulement une semaine avant le début du calendrier de l'avent.

Pour afficher une solution sur votre ordinateur, il vout suffit d'exécuter la commande `npm install` dans le répertoire racine, puis `npm run dayXX` où XX est le jour qui vous intéresse. La liste des jours traités peut être retrouvée dans le dossier 2022 : il s'agit des jours ayant un répertoire à leur nom.

---

## **_--- [Day 01: "Calorie Counting"](https://adventofcode.com/2022/day/1) ---_**

-   [Ma solution](./2022/day1/day1.ts)

-   L'objectif de la première partie du problème est de déterminer quel elfe a le plus de rations en sommant les éléments séparés par un unique retour à la ligne. Ce problème peut être résolu rapidement dès lors qu'un bon formattage a été effectué, néanmoins cela m'a pris du temps pour maîtriser les fonctions et méthodes de javascript permettant ce formattage : ici split et deux maps imbriqués, l'un appelant la fonction Number sur tous les éléments. Dès lors, on parcourt linéairement le tableau des elfes en calculant la somme des rations et en updatant si nécessaire la valeur du maximum. C'était ma première utilisation de reduce pour appliquer une fonction un peu plus développée qu'un retour immédiat.

-   Pour la seconde partie du problème, c'est désormais les trois rations les plus élevées qui nous intéressent. Afin de m'essayer à différents outils de typescript, j'ai proposé 3 solutions de complexités différentes qui pourraient s'avérer plus ou moins utile si on cherchait désormais plus que 3 rations élevées. La première m'a permis de comprendre la méthode sort en mettant en place un tri rapide. La seconde m'a permis de réviser la formulation de conditions logiques en typescript, ici pour des blocs if. Enfin la troisième m'a permis de m'essayer à la manipulation de listes avec les outils splice et push. Dans l'ensemble ce premier jour a été très formatteur, et m'a donné la plupart des outils utilisés tout au long de l'aventure.

---

## **_--- [Day 02: "Rock Paper Scissors"](https://adventofcode.com/2022/day/2) ---_**

-   [Ma solution](./2022/day2/day2.ts)

-   Utilisation d'appels de fonctions pour simplifier le plus possible les reduce utilisés pour chaque partie.
-   Découverte de string.charCodeAt qui donne le code ASCII du n ème caractère d'une chaîne, ce qui sera très utile pour le traitement de plusieurs autres problèmes. L'utilisation de cette méthode m'a également permis de réétudier la numérotation ASCII pour retenir les codes les plus notables. ('a' : 97 ; 'A' : 65 ; ' ' : 32 ; '.' : 46 ; '\n' : 10)
-   Utilisation de l'opérateur % pour le reste de la division euclidienne. Je note qu'en javascript un reste négatif est renvoyé si le dividende est négatif, il faut donc ajuster le code pour soit raisonner uniquement en terme de somme de termes positifs (par exemple pour passer de 2 à 1 mod 4 sans prendre de risque il vaut mieux ajouter 3 qu'ôter 1) soit sommer le résultat avec le diviseur après l'opérateur (pour passer de 0 à 3 par pas négatif :  (0-1) % 4 + 4)

---

## **_--- [Day 03: "Rucksack Reorganization"](https://adventofcode.com/2022/day/3) ---_**

-   [Ma solution](./2022/day3/day3.ts)

-   Première utilisation de la méthode Array.filter qui permet de ne conserver que les éléments vérifiant une condition donnée.
-   Découverte par inadvertance de la méthode slice quand je voulais en fait utiliser splice. slice permet de sélectionner et copier une section d'un array dans un autre, mais ne réalise pas de suppression dans l'array initial pour cela contrairement à splice.
-   Utilisation de Array.includes qui fonctionne très bien pour des valeurs numériques : l'objectif est de vérifier si une valeur donnée est dans un array à partir d'une certaine position.
-   Utilisation d'une boucle for pour travailler sur une range d'entiers consécutifs. J'ai hésité à créer cette range avec un Array.from pour éviter for et privilégier un map d'array.

---

## **_--- [Day 04: "Camp Cleanup"](https://adventofcode.com/2022/day/4) ---_**

-   [Ma solution](./2022/day4/day4.ts)

-   Meilleure familiarisation avec le formattage pour mettre en forme les données : il faut réaliser 3 splits dans le bon ordre en utilisant des map imbriqués.
-   De même, écriture de formules logiques un peu plus longues pour obtenir les booléens attestant ou non du respet d'une condition.

---

## **_--- [Day 05: "Supply Stacks"](https://adventofcode.com/2022/day/5) ---_**

-   [Ma solution](./2022/day5/day5.ts)

-   Forattage bien plus compliqué que pour les problèmes précédents : le bloc supérieur correspond à des piles de lettres se lisant en colonne (la partie inférieure reste classique, on split sur les mots clés et on rétablit les nombres). Dans le cadre de ce formattage, utilisation de Array.match pour reconnaître des paternes (m'a permis de réétudier la formulation d'expressions régulières) et de replace pour faire disparaître des ponctuations non voulues en évitant des split.
-   Première utilisation volontaire de slice qui se maîtrise rapidement comme j'avais déjà acquis la syntaxe des appels de splice et que ces derniers sont similaires.
-   Découverte de Array.reverse pour inverser l'ordre des valeurs d'un tableau. Après quelques erreurs je prends note qu'il faut encore affecter le nouveau tableau créé, cette méthode ne modifiant pas l'élément en profondeur.
-   Découverte de la méthode concat qui sera désormais toujours privilégiée à push car la concaténation est un outil plus puissant et qui peut s'appliquer à des tableaux comme à des chaînes de caractères. Avec concat néanmoins, il faut toujours affecter à une variable le nouvel objet.

---

## **_--- Jours 6 à 25 : Work In Progress, le ReadMe sera finalisé avant le samedi 21 janvier midi ---_**

