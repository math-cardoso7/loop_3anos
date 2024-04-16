
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quem é o melhor amigo do Mario?");

    
    if (respostaTime.toLowerCase() === "Luigi") {
      alert("Boa! você acertou a resposta");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Brincadeira não é o Toad");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
