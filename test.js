/*let c = "Baanna";

for (let i = 0; i < c.length; i++) {
    if(c[i] === "a" && c[i+2] === "a") {
        console.log("error");
        break;
    
    } 
    console.log("azerty");
}
for (let i = 0; i < memoire.length; i++) {
            if(memoire[i] === button.classList.contains("opperateur") && memoire[i+1] === button.classList.contains("opperateur")){
              console.log("erreur");
            } else {
              memoire.push(nbre);
            } 
          }*/


let tab = []       

//console.log(tab[tab.length - 2] == undefined);
///*console.log(tab.includes("a"));
//console.log(tab[tab.length - 1])
//console.log(tab.includes(tab[tab.length - 1]) == "2")
//console.log(["+","-","x","/"].includes("x"))*/

//let memoire = ["3", "+", "2", "-5"]
/*let chaine = memoire.join(" ")
console.log(chaine)
console.log(parseInt(chaine))*/
//console.log(memoire.includes(memoire[memoire.length - 1]));
//console.log(memoire.at(-4) )

//while (memoire > 0){
  //console.log("true")
//}

//console.log(Math.sqrt(25));
//let chiffres = [ "2", ".", "2", "+", "2", "3", ".", "5", "+", "1", "2", "."]

/*function dernierOpperIndex(){
for(i = chiffres.length-1; i >=0 ; i--){
//console.log(i)
    if(chiffres[i] == "+"){
    //console.log(i)
    return i
    }
  }
}
//dernierOpperIndex()
let virgule = 0; 
let a = [];
function auMoinsVirgule(){
for(i = dernierOpperIndex(); i<= chiffres.length-1;  i++ ){
  //console.log(chiffres[i])
  if(chiffres[i] == "." ){
    virgule += 1;
    a.push(virgule);
  }
 }
  if (a.length >= 1){
    return true
  }
}

auMoinsVirgule();*/

/*let chiffres = ["2", ".", "2", "+", "2", "3", ".", "5", "+", "1", "2",];

function dernierOperateurIndex() {
  for (let i = chiffres.length - 1; i >= 0; i--) {
    if (chiffres[i] === "+") {
      return i;
    }
  }
  return -1; // Aucun + trouvé
}





function contientVirguleApresDernierPlus() {
  const index = dernierOperateurIndex();
  if (index === -1) return false; // Pas de + dans le tableau

  // Vérifier s’il y a une virgule après le dernier +
  for (let i = index + 1; i < chiffres.length; i++) {
    if (chiffres[i] === ".") {
      return true; // On a trouvé une virgule
    }
  }
  return false; // Pas de virgule trouvée
}
console.log(contientVirguleApresDernierPlus());

handleMobileChange(e)*/

//console.log(2+2/4+3-4);

/*let memoire = ["2", "x", "2", "+", "4", "x", "4" ]

for(i = 0; i<=memoire.length-1; i++){

  //console.log(memoire[i]);
  if(memoire[i] == "x"){
    memoire[i] = "*";
  }
    
}
console.log(memoire);*/

let nbre = Number("2.5 + 2");
console.log(nbre);