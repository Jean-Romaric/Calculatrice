document.addEventListener('DOMContentLoaded', function() { 
//alert("bonjour")
    let screen = document.querySelector(".screen");
  screen.textContent="";


  let button = document.querySelectorAll(".button");
//console.log(button);
button.forEach((element, index, array) => {
   console.log(element.innerText);
     let nbre = null;
     element.addEventListener("click",()=>{
      nbre = element.innerText;
      screen.textContent = screen.textContent + nbre;
     })
});    

  //let nbre = "7";
  //button[0].addEventListener("click",()=>{
    //screen.textContent += nbre;
  //});
  
 //let a = 2;
 //let b = null;
  
 //b += a;//b = b + a;
 //console.log(b);

 //b += a;//b = b + a;
 ///console.log(b);

 //console.log(""+ 13);
 
  //let nombre = "8";
  //button[1].addEventListener("click",()=>{
    //screen.textContent += nombre;
  //});
  
 });