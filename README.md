# [**Advent of Code**](https://adventofcode.com)

# &nbsp;[**2022**](./2022/ts) **-** [**_AoC 2022_**](https://adventofcode.com/2022)

Mon objectif est de réaliser tous les problèmes des premières semaines, si possible le jour de leur sortie, puis un maximum d'exercices des deux dernières semaines selon le temps que je pourrai accorder au projet.
Je me propose de réaliser cet advent of code en utilisant javascript / typescript pour me familiariser à l'utilisation de ces langages que j'ai commencé à manipuler (en dehors des applications web) seulement une semaine avant le début du calendrier de l'avent.

Pour afficher une solution sur votre ordinateur, il vout suffit d'exécuter la commande `npm install` dans le répertoire racine, puis `npm run dayXX` où XX est le jour qui vous intéresse. La liste des jours traités peut être retrouvée dans le dossier 2022 : il s'agit des jours ayant un répertoire à leur nom.

---

## **_--- [Day 01: "Calorie Counting"](https://adventofcode.com/2022/day/1) ---_**

-   [Ma solution](./2022/day1/day1.ts)

-   Exemple d'entrée :

```
1000
2000
3000

4000

5000
6000
```

-   L'objectif de la première partie du problème est de déterminer quel elfe a le plus de rations en sommant les éléments séparés par un unique retour à la ligne. Ce problème peut être résolu rapidement dès lors qu'un bon formattage a été effectué, néanmoins cela m'a pris du temps pour maîtriser les fonctions et méthodes de javascript permettant ce formattage : ici split et deux maps imbriqués, l'un appelant la fonction Number sur tous les éléments. Dès lors, on parcourt linéairement le tableau des elfes en calculant la somme des rations et en updatant si nécessaire la valeur du maximum. C'était ma première utilisation de reduce pour appliquer une fonction un peu plus développée qu'un retour immédiat.

-   Pour la seconde partie du problème, c'est désormais les trois rations les plus élevées qui nous intéressent. Afin de m'essayer à différents outils de typescript, j'ai proposé 3 solutions de complexités différentes qui pourraient s'avérer plus ou moins utile si on cherchait désormais plus que 3 rations élevées. La première m'a permis de comprendre la méthode sort en mettant en place un tri rapide. La seconde m'a permis de réviser la formulation de conditions logiques en typescript, ici pour des blocs if. Enfin la troisième m'a permis de m'essayer à la manipulation de listes avec les outils splice et push. Dans l'ensemble ce premier jour a été très formatteur, et m'a donné la plupart des outils utilisés tout au long de l'aventure.

---
