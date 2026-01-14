document.addEventListener('DOMContentLoaded', function() {
//alert("bonjour")
    let screen = document.querySelector(".screen");
  screen.textContent="";


  let buttons = document.querySelectorAll(".button");
  let opperateur =  document.getElementsByClassName("opperateur");


  let division = opperateur[0].textContent;
  let multiplication = opperateur[1].textContent;
  let moins = opperateur[2].textContent;
  let plus = opperateur[3].textContent;


  let memoire = [];


  buttons.forEach((button, index, array) => {
      button.addEventListener("click",(event)=>{
        nbre = button.innerText;
        


         //if(memoire[memoire.length - 1] == "-" || memoire[memoire.length - 1] =="x" || memoire[memoire.length - 1] =="+" || memoire[memoire.length - 1] == "/"){
          // memoire.pop()
        //};


        //console.log(memoire[memoire.length - 1] == "-" || memoire[memoire.length - 1] =="x" || memoire[memoire.length - 1] =="+" || memoire[memoire.length - 1] == "/")
        //console.log(division);



        if (memoire.length === 0 )  {
            if(button.classList.contains("opperateur")
               && !button.classList.contains("moins")
               || button.classList.contains("vircule")
              ){
              return
            }else{
              memoire.push(nbre);
              console.log(memoire);
            }
        }else{
          
          if(memoire.includes("+") && memoire[memoire.length-1] == "+" && event.target.classList.contains("opperateur")){
            return
          } else if(memoire.includes("-") && memoire[memoire.length-1] == "-" &&  event.target.classList.contains("opperateur")) {
             return
          } else if (memoire.includes("x") && memoire[memoire.length-1] == "x" &&  event.target.classList.contains("opperateur")) {
            return
          }else if(memoire.includes("/") && memoire[memoire.length-1] == "/" &&  event.target.classList.contains("opperateur")) {
            return
          }else {
            memoire.push(nbre);
           console.log(memoire);
          }





          
         
           

           //console.log( memoire[memoire.length - 1] == memoire[memoire.length - 2])



        }
          //console.log("true");






        if (button.classList.contains("opperateur")) {
          //console.log("c'est un opérateur");
        }


      });
  });
























 });