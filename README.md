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

-   Formattage bien plus compliqué que pour les problèmes précédents : le bloc supérieur correspond à des piles de lettres se lisant en colonne (la partie inférieure reste classique, on split sur les mots clés et on rétablit les nombres). Dans le cadre de ce formattage, utilisation de Array.match pour reconnaître des paternes (m'a permis de réétudier la formulation d'expressions régulières) et de replace pour faire disparaître des ponctuations non voulues en évitant des split.
-   Première utilisation volontaire de slice qui se maîtrise rapidement comme j'avais déjà acquis la syntaxe des appels de splice et que ces derniers sont similaires.
-   Découverte de Array.reverse pour inverser l'ordre des valeurs d'un tableau. Après quelques erreurs je prends note qu'il faut encore affecter le nouveau tableau créé, cette méthode ne modifiant pas l'élément en profondeur.
-   Découverte de la méthode concat qui sera désormais toujours privilégiée à push car la concaténation est un outil plus puissant et qui peut s'appliquer à des tableaux comme à des chaînes de caractères. Avec concat néanmoins, il faut toujours affecter à une variable le nouvel objet.

---

## **_--- [Day 06: "Tuning Trouble"](https://adventofcode.com/2022/day/6) ---_**

-   [Ma solution](./2022/day6/day6.ts)

-   Utilisation de split('') pour séparer tous les caractères d'une chaîne.
-   Découverte et première utilisations des Set (ensembles) en typescript. Ces structures ne peuvent pas contenir de doublons, ce qui se révèle très utile pour compter ou repérer des valeurs distinctes. Elles possèdent différentes méthodes propres à ce type, notamment add pour ajouter un élément, has pour déterminer si un élément est dans un set, et delete pour supprimer une valeur. En dehors du cadre de l'exercice, j'ai également expérimenté certaines autres fonctionnalités des ensembles : la méthode foreach appliquant une fonction à tous les éléments ; la manière de procéder pour copier un Set à une adresse différente (objets séparés).

---

## **_--- [Day 07: "No Space Left On Device"](https://adventofcode.com/2022/day/7) ---_**

-   [Ma solution](./2022/day7/day7.ts)

-   Première utilisation de console.time et console.timeEnd qu'un camarade avait évoqué en classe. Ces outils permettent de déterminer le temps de calcul nécessaire pour réaliser un échantillon de code. Je note que les print (console.log en typescript) ralentissent très fortement les opérations, il faut donc les limiter au strictement nécessaire avant d'étudier l'efficacité temporelle.
-   Afin de repérer pour chaque path la taille de ses fichiers et dossiers,  j'ai décidé d'utiliser des dictionnaires. Ces outils n'existent pas naturellement en typescript, mais se mettent en place facilement en créant un objet vide avec {} puis en lui ajoutant des champs (ex : dico['key']=value). L'écriture typescript impose d'avoir précédemment décrit le typage du dictionnaire. Pour stocker les clés du dictionnaire, j'utilise un Set car cela empêche les doublons et me permet de vérifier si une clé existe déjà dans le dictionnaire (avec has), et je peux également la supprimer si besoin sans toucher au dictionnaire (avec delete).
-   Premières manipulations avec Array.join pour recréer des chaînes de caractères à partir d'une liste de chaînes de caractères.

---

## **_--- [Day 08: "Treetop Tree House"](https://adventofcode.com/2022/day/8) ---_**

-   [Ma solution](./2022/day8/day8.ts)

-   Dans ce problème le sens de parcours en ligne et en colonne est important pour rechercher la position idéale de la cabane. Pour adapter les fonctions sans avoir besoin de blocs if/else, j'ajoute des arguments optionnels en entrée qui servent à progresser différemment dans le tableau.
-   Pour éviter d'utiliser des boucles for à chaque fois que je souhaite itérer sur une range d'entiers, je commence à utiliser la syntaxe Array.from(Array(length).keys()) qui me permet alors de réaliser un map sur un tableau de bonne taille.
-   Pour la seconde partie de l'exercice j'ajoute une condition d'arrêt à mes fonctions de parcours se basant sur une comparaison à la taille de l'arbre initial. Cela me permet d'arrêter le parcours dès qu'un arbre plus grand a été atteint. C'est le premier problème un peu complexe de cet advent of code, non pas parce qu'il est difficile, mais parce que je comprenais mal les consignes et ai du adapter de multiples fois mon code dès que je comprenais un attendu supplémentaire. Je n'ai également pas réussi à adapter ma partie 1 pour traiter les 2 questions du jour avec les mêmes fonctions.

## **_--- [Day 09: "Rope Bridge"](https://adventofcode.com/2022/day/9) ---_**

-   [Ma solution](./2022/day9/day9.ts)

-  Essais infructueux pour augmenter la limite de récursion en typescript en utilisant le module v8 de nodeJS.
-  Mise en place d'un switch pour reconnaître plus facilement la direction du mouvement de la tête en évitant des blocs if/else.
-  Pour simplifier la seconde partie de l'exercice je change toutes les directions en chiffres lors du formattage. Les fonctions de la première partie update la queue à chaque fois qu'elle devient trop éloignée de la tête et stockent dans un dictionnaire les positions successives de la queue. Dans la seconde partie je reprends ces positions sucessives pour déterminer quels mouvements ont été effectués et déterminer celles prises par la queue suivante, jusqu'à connaître les mouvements de la dixième.

---

## **_--- [Day 10: "Cathode-Ray Tube"](https://adventofcode.com/2022/day/10) ---_**

-   [Ma solution](./2022/day10/day10.ts)

-   Journée plutôt facile, il suffit de simuler un tour de jeu puis de mettre à jour les paramètres et de recommencer autant de fois que nécessaire. La seule difficulté est de bien comprendre où chaque commande opère dans le tableau.

---

## **_--- [Day 11: "Monkey in the Middle"](https://adventofcode.com/2022/day/11) ---_**

-   [Ma solution](./2022/day11/day11.ts)

-   Le formattage des données pour récupérer les informations utiles est long mais peu difficile, il faut split aux bons endroits et faire disparaître quelques ponctuations avec replace.
-   Lors de l'écriture de la fonction simulant un tour de jeu d'un singe, il faut prendre garde à la valeur 'old' qui réfère à la valeur initiale de stress en début de tour et qui peut intervenir plusieurs fois dans la mise à jour du niveau de stress.
-   Utilisation de Math.floor dans la partie 1 pour diviser proprement les niveaux de stress par 3 en fin de tour.
-   Première utilisation de toString pour recréer des chaînes à partir de listes, je privilégierai désormais cette syntaxe à join.
-   Pour éviter des valeurs démesurément grandes en seconde partie, on ne garde les valeurs de stress en fin de tour que modulo le produit de tous les paliers conditionnels des singes.

## **_--- [Day 12: "Hill Climbing Algorithm"](https://adventofcode.com/2022/day/12) ---_**

-   [Ma solution](./2022/day12/day12.ts)
-   Lors du formattage je repère immédiatement les positions d'intérêt pour les deux parties : source, arrivée, et tous les 'a'.
-   Je mets alors en place une variante de l'algorithme du plus court chemin : en partant de l'arrivée (ou d'un autre point par la suite), je le supprime des points à explorer, je l'ajoute aux points explorés, je vérifie pour chacun de ses voisins si je peux l'emprunter (conditions d'escalade mais dans le sens inverse : je peux monter autant que je veux, mais descendre de max 1), si cela a déjà été fait (grâce au set des explorés) et si le parcours couramment en cours d'étude est plus court (grâce à un dictionnaire). Si ces conditions sont vérifiées, j'update l'entrée dans le dictionnaire et ajoute le point dans l'ensemble de ceux à explorer. Je recommence alors au point suivant jusqu'à avoir vidé les points à explorer.

## **_--- [Day 13: "Distress Signal"](https://adventofcode.com/2022/day/13) ---_**

-   [Ma solution](./2022/day13/day13.ts)
-   Après quelques difficultés pour essayer de parser les données du jour, j'ai fait quelques recherches de documentation et ai découvert JSON.parse, qui trivialise ce formattage. Le problème du jour n'est alors que la mise en place d'une fonction de comparaison particulière sur des listes imbriquées, qui profite d'appels récursifs pour prendre en compte la profondeur inconnue du tableau.

---

## **_--- [Day 14: "Regolith Reservoir"](https://adventofcode.com/2022/day/14) ---_**

-   [Ma solution](./2022/day14/day14.ts)
-   La première partie de l'exercice consiste à mettre en place une fonction traçant effectivement les murs indiqués dans l'input dans un espace non borné. Pour cela on ajoute chaque position de mur dans un ensemble, et on conserve de côté les valeurs extrêmes de l'espace présenant des murs.
-   La chûte de sable est alors simple à simuler en vérifiant à chaque fois quel mouvement est possible en premier, en l'effectuant si possible ou en passant au grain suivant si aucun mouvement n'est possible.
-   Avec les fonctions de la première partie, on peut créer le mur "infini" tel que souhaité et indiquer la condition d'arrêt voulue sans problème supplémentaire.

---

## **_--- [Day 15: "Beacon Exclusion Zone"](https://adventofcode.com/2022/day/15) ---_**

-   [Ma solution](./2022/day15/day15.ts)
-   Premier échec de cet advent of code, je n'ai pas réussi à implémenter un programme fonctionnant sans erreur pour trouver le nombre de positions possibles sur la ligne en partie 1, bien que fonctionnant sur l'exemple, et sur quelques inputs un peu plus gros que j'ai traités simultanément sur ordinateur et à la main pour confirmer. Je ne me suis pas renseigné sur les moyens de mettre en place cet exercice car j'espère toujours pouvoir y revenir par la suite.

---

## **_--- [Day 18: "Boiling Boulders"](https://adventofcode.com/2022/day/18) ---_**

-   [Ma solution](./2022/day18/day18.ts)
-   Mon échec au jour 15 m'a grandement fait perdre en motivation au moment où la difficulté des problèmes était quant-à-elle croissante. De ce fait, et également pour des raisons personnelles sur cette deuxième partie du mois, à partir de ce point les exercices n'ont plus été traités le jour de leur parution.
-   La première partie de l'exercice est immédiate : pour chaque cube de l'input on vérifie pour chacun de ses 6 voisins directs s'il est occuppé par de l'air (par opposition à de la lave) et si c'est le cas on incrémente de 1 le résultat.
-   Pour la seconde partie, on détermine les coins du pavé droit contenant la goutte et on détermine par un algorithme de proche en proche en partant de cette bordure quelles sont les positions de tous les blocs d'air accessibles par la vapeur. En reprenant la fonction de comptage de l'exercice 1, il faut maintenant ajouter la condition que le compteur ne s'incrémente que si le bloc d'air au contact est accessible pour la vapeur.  

---


## **_--- Jours 20 à 25 : Work In Progress, le ReadMe sera finalisé avant le samedi 21 janvier midi ---_**

