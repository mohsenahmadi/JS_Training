// Create a dictionary of French Joke
var dictionaryJoke = {
  0: "No Joke",
  1: "Julien demande 10 euros à son père. \n -C\'est pour quoi faire? \n\-Pour donner à une vieille dame !",
  2: "\"Ecoute\", dit la maman à sa petite fille, \"si tu es sage, tu iras au ciel,et si tu n\’es pas sage, tu iras en enfer.\"\n\-\"Et qu\'est-ce que je dois faire pour aller au cirque ?\"",
  3: "Pierre raconte une histoire à Paul.\nPierre: Hier, en allant chez ma grand-mere, j\’ai vu des chevals.\nPaul: Des chevaux !\nPierre: Tais-toi, c\’est moi qui raconte.",
  4: "C'est l\'histoire de deux pommes de terre. \nUne d\'elles se fait écraser et l\'autre s\'écrie :\n-Oh purée !",
  5: "Qu\'est\-ce qui est. petit, rond, vert, et qui monte et qui descend ?\n-Un petit pois dans un ascenseur.",
  6: "\-Papa, pourquoi le monsieur fait peur à la dame avec son bâton ?\n-Il ne veut pas lui faire peur, c\'est le chef d\’orchestre.\n-Alors pourquoi la dame, elle crie ?",
  7: "\-Je pense qu\'il est vrai que la télé peut entraîner de la violence, dit Etienne.\n-Qu\'est ce qui te fait dire ça ? lui demande son copain.\n\-Et bien chaque fois que j\'allume, mon père me crie dessus !",
  8: "La maîtresse dit à son élève :\n-\"Jules ! je t\'ai dit de dessiner ton animal préféré ! Et tu n\'as rien fait ! \"\nJules répond :\n\"Mais si, Madame ! J\'ai dessiné mon chat noir en pleine nuit !",
  9: "Une maman citron dit à ses enfants :\n-Pour vivre longtemps, il ne faut jamais être pressé !",
  10: "La maman demande à Julie:\n-Que fais-tu ?\n-Rien !\n-Et ton frère ?\n-Il m\’aide…",
};
// Generate the Random number integer from 1-10
var number = Math.floor(Math.random() * 11);
// Set the random number to print the Joke
console.log("Random Number is: " + number + "\nJoke is: \n" + dictionaryJoke[number]);