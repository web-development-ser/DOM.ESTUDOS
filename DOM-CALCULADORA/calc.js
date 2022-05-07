function result() {
  
  //Variáveis com os ids das tags, pegando o valor digitado nos inputs...
  var n1 = 
  document.getElementById('n1').value
  var n2 = 
  document.getElementById('n2').value
  var sinaUn =
  document.getElementById('sinal').value
  
  //Escolha de qual sinal será rodado com a intenção de fazer a operação dos valores...
  switch (sinaUn) {
    case '+':
      var resul = Number(n1) + Number(n2)
      break;
    case '-':
      var resul = Number(n1) - Number(n2)
      brea;
    case '*':
      var resul = Number(n1) * Number(n2)
      break;
    case '/':
      var resul = Number(n1) / Number(n2)
      break;
  }
  
  //Local de resultado, onde será criado um parágrafo com a tag p, para resultado...
  var resultado = 
  document.createElement('p')
  resultado.innerHTML = "RESULTADO: " + resul
  
  resultado.setAttribute("id", "ress")
  
  document.getElementById('conteiner').appendChild(resultado)
  
}

//Remove o resultado, seleciona a tag p e deleta ela da tela web...
function remov() {
  var resultTs =
  document.getElementById('ress')
  conteiner.removeChild(ress)
  
  //Valor a ser deletado representado na tela antes de ser eliminado...
  var amaz = {
    numero: n1.value,
    nuneroUno: n2
  }
  alert("Hello " + amaz.numero)
  
  
}
