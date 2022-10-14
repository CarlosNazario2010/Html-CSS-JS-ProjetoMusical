// lista dos ids dos sons
//const listaSons = ["#som_tecla_pom", "#som_tecla_clap", "#som_tecla_tim",
//                    "#som_tecla_puff", "#som_tecla_splash", "#som_tecla_toim",
//                    "#som_tecla_psh", "#som_tecla_tic", "#som_tecla_tom"];

// pega todos os elementos que possuem a classe .tecla
const botoes = document.querySelectorAll(".tecla");

// cria a funcao que recebe o indice da lista de sons como parametro e executando o metodo play
function tocaSom(indice) {
  document.querySelector(indice).play();
}

// itera sobre a quantidade de botoes
for (let i = 0; i < botoes.length; i++) {
  // template string do som do botao
  // const idSom = `#som_${botoes[i].classList[1]}`

  // botao recebe o evento de clique e executa a funcao anonima que contem a funcao tocaSom recebendo o indice da lista de sons
  botoes[i].onclick = function () {
    tocaSom(`#som_${botoes[i].classList[1]}`);
  };
  // tocaSom, se executado fora da funcao anonioma sera invocado diretamnete ja que possui paramentos
  // violando o protocolo do navegador que impede a execucao de metodos andtes do usuario interagir com a pagina
}
