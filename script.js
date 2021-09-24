/**
 * id das cores: 0 - verde, 1 - vermelho, 2 - azul e 3 - amarelo
 */

let order = [];
let clickedOrder = [];
let score = 0;

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

/** Sorteia ordem */
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1)
  }
}

/** Acende a proxima cor */
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected');
    setTimeout(() => {
      element.classList.remove('selected')
    }, 250)
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected')
  }, 500);
}

/** Verifica se ordem de click é igual a ordem gerada no jogo */
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]){
      gameOver();
      break;
    }
  }
  if(clickedOrder.length == order.length){
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo level!`);
    nextLevel();
  }
}

/** Função para o click do usuario */
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder();
  }, 250);
}

/** Função que retorna a cor */
let createColorElement = (color) => {
  if (color == 0){
    return green;
  } else if (color == 1) {
    return red;
  } else if (color == 2) {
    return blue;
  } else if (color == 3) {
    return yellow;
  }
}

/** Proximo nível do jogo */
let nextLevel = () => {
  score++;
  shuffleOrder();  
}

/** Game Over */
let gameOver = () => {
  alert(`Pontuação total: ${score}\nVocê perdeu o jogo! Click em OK para iniciar uma nova partida.`);
  order = [];
  clickedOrder = [];

  playGame();
}

/** Start game */
let playGame = () => {
  alert('Bem vindo ao Genius! Iniciando novo jogo.')
  score = 0;

  nextLevel();
}

/** Evento de click do usuário */
green.onclick = () => click(0)
red.onclick = () => click(1)
blue.onclick = () => click(2)
yellow.onclick = () => click(3)

/** Inicio */
playGame();