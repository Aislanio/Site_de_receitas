
window.addEventListener("load", () =>{
  setTimeout(() =>{
  

    let loader = document.querySelector(".loader");
    loader.classList.add("hidden");
    document.querySelector("body").classList.add("hi");
    console.log("foi")
  }, 3000);
});
 document.querySelector(".titulo").innerHTML = localStorage.getItem('title');
  document.querySelector("#img_receita").src = localStorage.getItem('img');
  document.querySelector("#porções").innerHTML = localStorage.getItem('porçoes');
  document.querySelector("#Dificuldade").innerHTML = localStorage.getItem('dificuldade');
  document.querySelector("#min").innerHTML = localStorage.getItem('tempo');
  document.querySelector("#ingredientes").innerHTML = localStorage.getItem('ingredientes');
  document.querySelector("#mododepreparo").innerHTML = localStorage.getItem('mododepreparo');
  if (localStorage.getItem('recheio') == "") {
     document.querySelector("#recheio").parentNode.style.display = "none";
  }else{
    document.querySelector("#recheio").innerHTML = localStorage.getItem('recheio');
  }