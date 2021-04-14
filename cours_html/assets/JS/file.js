// DOM : Document Object Model

// Utilise par les scripts pour modifier un document HTML en
// ajoutant un noeud
// modifiant un autre
// remplacant un premier par un deuxi`eme
// supprimant un autre

// selon l’identifiant
//Requête 1 :

console.log("Requête 1 : ");
var container = document.getElementById("container");

// Avec balises
console.log('Avec innerHTML')
console.log(container.innerHTML);

// Sans balises
console.log('Avec textContent')
console.log(container.textContent);

// Selon le nom de la balise
//Requête 2 :

console.log("Requête 2 : ");
var paragraphes = document.getElementsByTagName("p");
for (let par of paragraphes)
{
    console.log(par.innerHTML)
}
// Selon le nom de la balise
//Requête 3 :

console.log("Requête 3 : ");
var paragraphes = container.getElementsByTagName("p");
for (let par of paragraphes)
{
    console.log(par.innerHTML)
}

// Selon la valeur de l'attribut class
//Requête 4 :

console.log("Requête 4 : ");
var bleus = document.getElementsByTagName("blue");
for (let bleu of bleus){
    console.log(bleu.innerHTML);
}

//Requête 5 :

console.log("Requête 5 : ");
var parConteneurs = document.getElementsByName("parConteneurs");
for (let par of parConteneurs){
    console.log(par.innerHTML)
}

//Requête 6 :

console.log("Requête 6 : ");
var pbleus = document.querySelectorAll("p.blue");
for(let bleu of pbleus){
    console.log(bleu.innerHTML);
}

//Requête 7 :
// Récupérer le 1er élément selon un sélecteur CSS3
console.log("Requête 7 : ");
var pbleu = document.querySelector("p.blue");
console.log(pbleu.innerHTML);

//Requête 8 :
// Récupérer l'attribut d'un élément HTML
console.log("Requête 8 : ");
var lien = document.querySelector("a");
var href = lien.getAttribute('href');
console.log(href);

//Requête 9 :
// Modifier l'attribut d'un élément
console.log("Requête 9 : ");
lien.setAttribute('href', 'http://www.w3school.com');
console.log(lien);

//Requête 10 :
// Suprimer l'attribut d'un élément HTML
console.log("Requête 10 : ");
lien.removeAttribute('href');
// Requête 11
console.log("Requête 11 : ");
var container = document.getElementById('container');
console.log(container.className);

// Requête 12
console.log("Requête 12 : ");
var list = container.classList;
console.log(list);

// Requête 13
console.log("Requête 13 : ");
container.className = "blue";
console.log(container.className);
// Requête 14
console.log("Requête 14 : ");
container.className += " size";
console.log(container.className);
// Requête 15
console.log("Requête 15 : ");
container.className += " font";
console.log(container.className);

// Requête 16
console.log("Requête 16 : ");
console.log(list);

// Requête 17
// Ajouter une ou plusieurs classes
console.log("Requête 17 : ");
list.add('back', 'weight');

console.log(list);

// Requête 18
// Supprimer une ou plusieurs classes
console.log("Requête 18 : ");
list.remove('weight');

console.log(list);

// Requête 19
console.log("Requête 19 : ")
container.innerHTML += "<p> Hello </p>"
console.log(container.innerHTML);

// Requête 20
console.log("Requête 20 : ");
var parent = container.parentNode;
console.log(parent);

// Requête 21
console.log("Requête 21 : ");
console.log(parent.nodeName);

// Requête 22
console.log("Requête 22 : ")
var premierFils = container.firstElementChild;
console.log(premierFils.nodeName);

// Requête 23
console.log("Requête 23 : ")
var premierFils = container.firstChild;
console.log(premierFils.nodeName + "==>" + premierFils.textContent);

// Requête 24
console.log("Requête 24 : ")
var dernierFils = container.lastElementChild;
console.log(dernierFils.nodeName);

// Requête 25
console.log("Requête 25 : ")
var dernierFils = container.lastChild;
console.log(dernierFils.nodeName);



function myFunction(){
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}



















