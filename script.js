document.addEventListener('DOMContentLoaded', function() {
//alert("bonjour")
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".button");
  const mobileQuery = window.matchMedia('(max-width: 518px)');
  //console.log(window) a faire des recheches 
  console.log(mobileQuery)
  console.log(mobileQuery.matches)

  let memoire = [];
  

  function estOperateur(valeur) {
  return valeur === "+" || valeur === "-" || valeur === "x" || valeur === "/";
}
  buttons.forEach((button, index, array) => {
      button.addEventListener("click",(event)=>{
       let nbre = button.innerText;
        if (memoire.length === 0 )  {
            if(button.classList.contains("opperateur")
               && !button.classList.contains("moins")
               || button.classList.contains("virgule")
              ){
              return
            }else{
              memoire.push(nbre);
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
if(contientVirguleApresDernierPlus() && button.classList.contains("virgule") || dernierOperateurIndex() == -1 && memoire.includes(".") && button.classList.contains("virgule")){
  return
}

screen.textContent = memoire.join('').slice(-15); /* je dois dire si la taille de l'ecrant est max-width: 518px tu mets slice(-15) sinon slice(-17)*/
  memoire.push(nbre);
  console.log(memoire);
  
  }
 });
});


if(mobileQuery.matches){
  screen.textContent = memoire.join('').slice(-1);
}





















 });