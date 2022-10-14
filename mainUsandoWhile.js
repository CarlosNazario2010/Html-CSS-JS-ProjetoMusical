const botoes = document.querySelectorAll(".tecla");

function tocaSom(indice) {
  document.querySelector(indice).play();
}

let i = 0;

while (i < botoes.length) {
  const tecla = botoes[i];
  // class="tecla tecla_###"
  const som = tecla.classList[1]; // indice0 = classe tecla, indice1 = tecla_###

  const idSom = `#som_${som}`; //template string

  // const idSom = `#som_${botoes[i].classList[1]}  >>> pega o idSom em um linha d codigo`

  botoes[i].onclick = function () {
    tocaSom(idSom);
  };
  i++;
}
