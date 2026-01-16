document.addEventListener('DOMContentLoaded', function() {
//alert("bonjour")
    let screen = document.querySelector(".screen");
  screen.textContent="";
  let buttons = document.querySelectorAll(".button");
 

  let memoire = [];

  function estOperateur(valeur) {
  return valeur === "+" || valeur === "-" || valeur === "x" || valeur === "/";
}

  function pasOperateur(opperateur){
    return opperateur == "+" ||  opperateur !== "-"  || opperateur !== "x" || opperateur !== "/" //!==   // différent en valeur OU en type
  }

//console.log(estOperateur("+")) //la fonction return vraie ou faux 

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


 

const elementRecherche = '.';
const occurrences = memoire.filter(contenu => contenu === elementRecherche);
console.log(occurrences.length); 
nonbre_virgule = occurrences.length
console.log( nonbre_virgule >= 1) 

if (
  !estOperateur(dernier) &&
  nonbre_virgule >= 1 &&
  button.classList.contains("virgule")
) {
  return;
}



  //console.log(!estOperateur(dernier)) //donne "VRAIE": N'EST PAS UN OPPERATEUR


  memoire.push(nbre);
  console.log(memoire);
}

  });
});
























 });