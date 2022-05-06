//Elemento pai que contém as informações como texto...
var conteiner = 
document.getElementById('conteiner');

//Elemento a ser criado, um parágrafo com texto...
var paragraph = 
document.createElement('p');
paragraph.innerHTML = "Hello"

//O parágrafo e as ações, serão executadas pelo onclick no botão...
function naTela() {
  
  //Colocando o parágrafo quando chamada a função...
  conteiner.appendChild(paragraph)[1]
  
  //Estilizando o parágrafo...
  paragraph.style.color = "red"
  paragraph.style.backgroundColor = "Gold"
  
  //Colocando um obj na tela da web, com arrays...
  
  //Essa parte de código, atrapalhará a execução do appendChil...
  //var textTwo = document.querySelector('teste');
  //conteiner.innerHTML = yes.play[1]
}

//Segunda função, ela remove a primeira função, que é o parágrafo com texto...
function naTelaUno() {
  conteiner.removeChild(paragraph)
  
}

//Obj que será chamara na função naTela...
var yes = {
  name: "Olá",
  idade: "19",
  play: [1, 7, 8]
}




//Outra forma de chamar uma função...
//var chamaTwo = document.getElementById('chamaTwo')
//A baixo, será selecionado pelo id o elemento pai...
var textThree = document.getElementById('conteinerTwo').addEventListener('click', chama)

//Função a ser chamada pelo elemento pai textTh...
function chama() {
  var paragraphThree = document.getElementById('paragraphThree')
  
  paragraphThree.innerHTML = "Chamamos a função de outra forma ebaaa"
  paragraphThree.style.textAlign = "center"
}
