// # 1. 
// - Récupère la div dont l'id est #content
let div = document.querySelector('#content')
// - Ajoute un h2 dedans
let h2 = document.createElement('h2')
// - Ajout le texte suivant au h2 "Part 6 - Exercice 1" 
h2.innerHTML = "mon h2 creer"
div.appendChild(h2)

// # 2.
// - Créer un paragraphe avec du lorem ipsum
// - Ajoute le apres le h2
let lorem = document.createElement('p');
lorem.innerHTML ="lorem ipsum";
div.appendChild(lorem)

// # 3.
// - Créer un h1 
let h1 = document.createElement('h1')
// - Ajoute le texte suivant dedans "Le DOM - Création de HTML"
h1.innerHTML = "Le DOM - Création de HTML"
// - Place le en premier enfant de la div #content
div.prepend(h1)

// # 4.
// - Prend le contenu de la div #content
// - Copie le dans la div #secondaire
let divSecondaire = document.querySelector('#secondaire')
divSecondaire.innerHTML = div.innerHTML
// - Modifier Part 6 - Exercice 1 par Exercice 2 dans le h2 de la div secondaire
let sdjfhsdf = Array.from(divSecondaire.children);

divSecondaire.insertBefore(sdjfhsdf[1], sdjfhsdf[0])
// # 5.
// - Créer une nouvelle div #matiere
// - Créer une liste ordonnée des 3 dernières choses que tu as appris

let matiere = document.createElement('div')
matiere.setAttribute('id', "matiere")
let ul = document.createElement('ol')
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')
li1.innerHTML = "L'insertBefore"
li2.innerHTML = "Prepend"
li3.innerHTML = "des subtitilités parmi tant d'autres du DOM"
let allLi = [li1,li2,li3]
ul.prepend(...allLi)
matiere.appendChild(ul)
document.body.appendChild(matiere)