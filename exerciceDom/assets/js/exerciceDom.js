//Exercice 1 :

function changer_style(){
    var nouvStyle = document.getElementById("parag1");
    var list = nouvStyle.classList;
    list.add('couleur');
}

// Exercice 2 :

function getAttributes(){
    let lien = document.querySelector("a");
    let affiche = document.getElementById('affiche');
    let attrlien = lien.getAttributeNames();
    for(let attr of attrlien){
        let attrs = lien.getAttribute(attr);
        affiche.innerHTML += '- ' + attrs + '<br>';
    }
}

// Exercie 3 :

function getFormValue(){
    let link = document.querySelector("input");
    console.log(link);
    let affiche2 = document.getElementById('affiche2');
    console.log(affiche2);
    let vals = link.getAttributeNames();
    console.log(vals);
    for(let val of vals){
        let res = link.getAttribute(val);
        console.log(res);
        affiche2.innerHTML += '- ' + res + '<br>';
    }
}










