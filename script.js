document.addEventListener('DOMContentLoaded', function() {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".button");
  let suprimer = document.querySelector(".remove");
  let egal = document.querySelector(".divEgal");

  screen.innerHTML = "Flavio🖕"
  //console.log(egal);
  
  //[const mobileQuery = window.matchMedia('(max-width: 518px)');
  //console.log(window) a faire des recheches 
  //console.log(mobileQuery) 
  //console.log(mobileQuery.matches)] Pour adaapter sur mobile

  let memoire = [];
  ''
  /*if(mobileQuery.matches){
  screen.textContent = memoire.join('').slice(-0);
}*/
  function estOperateur(valeur) {
  return valeur === "+" || valeur === "-" || valeur === "x" || valeur === "/";
}
  buttons.forEach((button, index, array) => {
      button.addEventListener("click",(_event)=>{
       let nbre = button.innerText;
        if (memoire.length === 0 )  {
            if(button.classList.contains("opperateur")
               && !button.classList.contains("moins")
               || button.classList.contains("virgule")
              ){
              return
            }else{
              memoire.push(nbre);
              screen.textContent = memoire.join('').slice(-15); //pp
              console.log(memoire);
            }
        }else {


  let dernier = memoire[memoire.length - 1];
  if (estOperateur(dernier) && button.classList.contains("opperateur")) {

    return;
  }
   if (estOperateur(dernier) && button.classList.contains("virgule")) {
    return;
  }
   if (dernier == "." && button.classList.contains("opperateur")) {
    return;
  }
  if (dernier === "." && button.classList.contains("virgule")) {
    return;
  }

function dernierOperateurIndex() {
  for (let i = memoire.length - 1; i >= 0; i--) {
    if (estOperateur(memoire[i])) {
      return i;
    }
  }
  return -1; //pas d'operateur
}

function contientVirguleApresDernierPlus() {
  const index = dernierOperateurIndex();
  if (index === -1) return false; // Pas de + dans le tableau

  // Vérifier s’il y a une virgule après le dernier +
  for (let i = index + 1; i < memoire.length; i++) {
    if (memoire[i] === ".") {
      return true; // On a trouvé une virgule
    }
  }
  return false; // Pas de virgule trouvée
}
if(contientVirguleApresDernierPlus() && 
button.classList.contains("virgule") || 
dernierOperateurIndex() == -1  
&& memoire.includes(".") 
&& button.classList.contains("virgule")){
  return
}

 /* je dois dire si la taille de l'ecrant est max-width: 518px tu mets slice(-15) sinon slice(-17)*/
  memoire.push(nbre);
  screen.textContent = memoire.join('').slice(-15);
  console.log(memoire);
  
  }
  });
 });


//Suppresion
suprimer.addEventListener("click",(_event)=>{
 if(memoire.length === 0){
  return
 }else{
  memoire.pop();
  screen.textContent = memoire.join('').slice(-15);
  console.log(memoire);
 }
});

//Calcule "="
egal.addEventListener("click",(_event)=>{
  let dernier = memoire[memoire.length - 1];
  let erreur = "Erreur";// c'est du text prute que je met dans div, je p pas styliser directement.
  //console.log(erreur);
  if(memoire.length === 0 ){
    return;
  } else if(estOperateur(dernier) || dernier === "." ){
    return;
  } else {
   for(i = 0; i<=memoire.length-1; i++){
    //console.log(memoire[i]);
    if(memoire[i] == "x"){
      memoire[i] = "*";
    }
  } 
   let opperation = memoire.join("");
   //opperation.toString;
   //console.log(opperation)
   let resultat = eval(opperation);
   //console.log(resultat); //eval elavue une chaine comme du code.

   screen.innerHTML = "<span style>" + resultat.toString().slice(-15) +"<span/>"
   memoire.splice(0, memoire.length);

  }
});

//Probleme d'affichage mobile
//Probleme d'affichage ordinateeur debornement 
//Ajuster un fontSize correcte
//Afficher le resultat à gauche 
//Ajuster les resultats trop long
//Fait clignoté le curseur 

// Genre de resultat 4.E11
//Opperationde se genre 0.OO5+1 "bug"


});