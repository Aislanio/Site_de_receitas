window.addEventListener("load", () =>{
  setTimeout(() =>{
    const loader = document.querySelector(".loader");
    loader.classList.add("hidden");
    document.querySelector("body").classList.add("hi");
    console.log("foi")
  }, 3000);
});
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("header").style.position = "fixed";
  } else {
    document.querySelector("header").style.position = "";
};
};

function abrirecita() {

  const button = event.currentTarget;
  console.log(button.dataset.img);

 (function (){
  'use strict';
  function setLocalStorage(){
      localStorage.clear()
      localStorage.setItem("porçoes",button.dataset.porçoes);
      localStorage.setItem("dificuldade",button.dataset.dificuldade);
      localStorage.setItem("img",button.dataset.img);
      localStorage.setItem("title",button.dataset.title);
      localStorage.setItem("tempo",button.dataset.tempo);
      localStorage.setItem("ingredientes",button.dataset.ingredientes);
      localStorage.setItem("mododepreparo",button.dataset.mododepreparo);
      localStorage.setItem("recheio",button.dataset.recheio);
      localStorage.setItem("categoria",button.dataset.categoria);
      localStorage.setItem("informaçoesadicionais",button.dataset.informaçoesadicionais);
  }
  setLocalStorage()

}());
  window.location.href = "Receita.html";
};




const Cards = document.querySelector(".cards");
const card = document.querySelector(".cards article");
let contador = 0 ;
const receitas = [
  {
    img:"assets/img/tapioca.jpg",
    title:"Tapioca",
    porçoes: "30 Porções ",
    categoria: "salgado",
    dificuldade: "Facil",
    tempo: "30 min",
    ingredientes: "<li>500 g de farinha para tapioca (bijou)</li> <li>água o suficiente para dar o ponto</li> <li>sal a gosto</li>",
    mododepreparo:"<li>Em uma tigela, coloque o polvilho e vá adicionando a água até fica umida.</li> <li>Agora Peneire  a massa</li> <li>Despeje a massa em uma frigideira quente ate que fique uma boa quantidade</li> <li>Espere alguns minutinhos ate que a massa endurece em baixo depois disso é so vira e espera endurece depois e so tira da frigideira e repetir esse processor ate a massa acabar</li>",
    recheio:"<li>Você pode rechear com o que quiser =)</li>",
    informaçoesadicionais: "A tapioca é uma farinha feita com a mandioca e que faz parte da história da culinária brasileira. Muito consumida pelos povos nativos do Brasil, a mandioca é explorada de diversas formas diferentes e a tapioca é, provavelmente, a mais conhecida delas. Por ter um sabor único e versátil, a tapioca ganhou várias versões e se espalhou pelo país, assumindo papel principal em várias receitas de muitas culinárias diferentes. Além disso, a tapioca é uma ótima opção para substituir carboidratos e farinhas, pois não contém glúten e é tão versátil quanto o pão. Dessa forma, ela virou a queridinha dos nutricionistas e de quem quer seguir uma alimentação mais regrada, mas sem perder sabor e qualidade de vida. Por ser rica em vitaminas, ácido fólico e uma excelente fonte de fibras, a tapioca também é muito prática de fazer, o que a faz ainda mais popular com quem vive na correria e não tem tanto tempo pra pensar refeições muito elaboradas no dia-a-dia.",
  },
  {
    img:"assets/img/bolo de fuba.jpg",
    title:"BOLO DE FUBÁ ",
    porçoes: "12 Porções ",
    categoria: "bolos",
    dificuldade: "Facil",
    tempo: "30 min",
    ingredientes: "<li>4 ovos</li> <li>2 xícaras (chá) de açúcar</li> <li>2 xícaras (chá) de trigo</li> <li>1 xícara (chá) de fubá</li> <li>3 colheres (sopa) de margarina</li> <li>1 xícara (chá) de leite</li> <li>4 colheres (chá) de fermento</li>",
    mododepreparo: "<li>Em uma batedeira, bata as claras em neve e acrescente o açúcar.</li> <li>Adicione as gemas, a margarina, o leite, a farinha de trigo, o fubá e continue batendo.</li> <li>Acrescente por último o fermento e misture com uma colher ou espátula.</li> <li>Despeje a massa em uma forma untada e deixe assar em forno médio (180° C), preaquecido, por aproximadamente 30 minutos.</li>",
    recheio:"<li>Você pode fazer uma cobertura de goiba.</li>",
    informaçoesadicionais: "",
  },
  {
    img:"assets/img/cookies.jpg",
    title:"COOKIES",
    porçoes: "30 Porções",
    categoria: "doces",
    dificuldade: "Facil",
    tempo: "15 MIN",
    ingredientes: "<li>1/2 xicara leite em pó</li> <li>1/2 xicara açúcar mascavo</li> <li>1/2 xicara açucar</li> <li>5 ovos</li> <li>2 xicaras de trigo</li> <li>200 a 300 g de chocolate picados, ou gotas de chocolates</li> <li>1 colher de chá de fermento em pó</li> <li>100 g de margarina</li> <li>50 g de coco ralado</li>",
    mododepreparo:"<li>Aqueça o forno.</li> <li>Misture os ingredientes na batedeira deixando para acrescentar o chocolate picado por último.</li> <li>Unte a forma.</li> <li>Coloque 1 colher de massa na forma.</li> <li>Deixe um pouco separados.</li> <li>Leve ao forno e espere ficarem um pouco dourados</li> <li>Depois de retirar do forno, espere até esfriar se não eles quebram.</li>",
    recheio:"",
    informaçoesadicionais: "",
  },

];



receitas.map((video) => {

   const card_clone = card.cloneNode(true);
  card_clone.querySelector("img").src = video.img;
  card_clone.querySelector(".titulo").innerHTML = video.title;
  card_clone.querySelector(".porções").innerHTML = video.porçoes;
  card_clone.querySelector("#Dificuldade").innerHTML = video.dificuldade;
  card_clone.querySelector("#min").innerHTML = video.tempo;
  card_clone.querySelector(".categoria").innerHTML = video.categoria;
  card_clone.setAttribute("data-img", video.img);
  card_clone.setAttribute("data-title", video.title);
  card_clone.setAttribute("data-porçoes", video.porçoes);
  card_clone.setAttribute("data-dificuldade", video.dificuldade);
  card_clone.setAttribute("data-tempo", video.tempo);
  card_clone.setAttribute("data-ingredientes", video.ingredientes);
  card_clone.setAttribute("data-mododepreparo", video.mododepreparo);
  card_clone.setAttribute("data-recheio", video.recheio);
  card_clone.setAttribute("recheio",video.recheio)
  card_clone.setAttribute("data-informaçoesadicionais", video.informaçoesadicionais);
  
  Cards.appendChild(card_clone);
  
});
card.remove();

//Filtro para pesquisas por ebooks
const filtro = document.getElementById("search");
const tabelamae = document.querySelectorAll(".titulo");
filtro.onkeyup = function () {
  const nomefiltro = filtro.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  for (var i = 0; i < tabelamae.length; ++i) {
   //pesquisar por ebooks

  const tabela = tabelamae[i].textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      console.log(tabela);
  const corresponde = tabela.indexOf(nomefiltro) >= 0;
      console.log(corresponde);
  if(corresponde === false){
    const cont = tabelamae[i].parentNode;
    const pai = cont.parentNode;
    pai.style.display = "none";
  } else if(corresponde === true){
     const cont = tabelamae[i].parentNode;
    const pai = cont.parentNode;
    pai.style.display = "";
  };
   if(nomefiltro.value == ""){
    document.querySelectorAll(".card").style.display = "";
  };
  //tabela[i].style.display= corresponde ? '' : 'none';
};
};

const categori = localStorage.getItem('categoria_selecionada');
const categorias_title = document.querySelectorAll(".categoria");
for (var i = 0; i < tabelamae.length; ++i) {
   //pesquisar por ebooks
  const tabela = categorias_title[i].textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const corresponde = tabela.indexOf(categori) >= 0;
       if(corresponde === false){
    const cont = tabelamae[i].parentNode;
    const pai = cont.parentNode;
    pai.style.display = "none";
  } else if(corresponde === true){
     const cont = tabelamae[i].parentNode;
    const pai = cont.parentNode;
    pai.style.display = "";
  };
  //tabela[i].style.display= corresponde ? '' : 'none';
};