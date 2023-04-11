const playerName = document.getElementById("name");
const msjNombre = document.getElementById("msj-nombre");
const player = document.getElementById("player-name");
const playerChoice = document.getElementById("player-choice");
const pcChoice = document.getElementById("pc-choice");
const winMsj = document.getElementById("win-msj");
const score = document.getElementById("score");
const img1Player = document.getElementById("img1-player");
const img2Player = document.getElementById("img2-player");
const img3Player = document.getElementById("img3-player");
const img4Player = document.getElementById("img4-player");
const img5Player = document.getElementById("img5-player");
const img1P = document.getElementById("img1-p");
const img2P = document.getElementById("img2-p");
const img3P = document.getElementById("img3-p");
const img4P = document.getElementById("img4-p");
const img5P = document.getElementById("img5-p");
const img1Pc = document.getElementById("img1-pc");
const img2Pc = document.getElementById("img2-pc");
const img3Pc = document.getElementById("img3-pc");
const img4Pc = document.getElementById("img4-pc");
const img5Pc = document.getElementById("img5-pc");

const values = [
  {
    name : "piedra", // 3
    win : [1,4],
    lose : [2,5]
  },
  {
    name : "papel", // 2
    win : [3,5],
    lose : [1,4]
  },
  {
    name : "tijera", // 1
    win : [2,4],
    lose : [3,5]
  },
  {
    name : "lagarto", // 4
    win : [2,5],
    lose : [1,3]
  },
  {
    name : "spock", //5
    win : [1,3],
    lose : [2,4]
  },
];