const appIntro = document.getElementById("app-intro-container");
const appGame = document.getElementById("app-game-container");
const startBtn = document.getElementById("start-btn");
const exitBtn = document.getElementById("exit-btn");

const regExp = /^[a-zA-ZÀ-ÿ\s]{2,20}$/;

let validar = () => {
  if(regExp.test(playerName.value)){
    appIntro.classList.add("active");
    appGame.classList.remove("active");
    player.innerHTML = playerName.value;
    imprimirScore();
  } else {
    msjNombre.classList.remove("active");
  }
};

const exitGame = () => {
  appIntro.classList.remove("active");
  appGame.classList.add("active");
  resetScore();
  resetImg();
  resetIntro();
};

startBtn.addEventListener('click', validar);
exitBtn.addEventListener('click', exitGame);

/* opciones = {
  1: "piedra",
  2: "papel",
  3: "tijera",
  4: "lagarto",
  5: "spock",
  6: "Mostrar Puntaje",
  7: "salir"
}

ganadores = {
  piedra : ["tijera", "lagarto"],
  papel : ["piedra", "spock"],
  tijera : ["papel", "lagarto"],
  lagarto : ["papel", "spock"],
  spock : ["piedra", "tijera"]
}

let puntajeUsuario = 0
let puntajePc = 0
let puntajeTotal = 0
let ganaUsuario = 0
let ganaPc = 0 */