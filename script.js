document.addEventListener('DOMContentLoaded', function() { 
//alert("bonjour")
    let screen = document.querySelector(".screen");
  //screen.textContent;


  let button = document.querySelectorAll(".button");
    

  let nbre = 7;
  button[0].addEventListener("click",()=>{
    screen.textContent += nbre;
  });

  
 
 });