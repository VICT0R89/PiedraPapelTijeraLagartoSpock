let playerCount = 0;
let pcCount = 0;

const choice = (e) => {

  let choice = e.target.alt
  let pcChoiceValue = parseInt(Math.random()*5+1);

  agregarImg(choice, pcChoiceValue);
  agregarMsj(choice, pcChoiceValue);
  calcularScore();
  imprimirScore();

}

const agregarImg = (choice, pcChoiceValue) => {
  console.log(pcChoiceValue);
  switch (choice) {
    case "piedra":
      img1P.classList.remove("active");
      img2P.classList.add("active");
      img3P.classList.add("active");
      img4P.classList.add("active");
      img5P.classList.add("active");
      break;
    case "papel":
      img1P.classList.add("active");
      img2P.classList.remove("active");
      img3P.classList.add("active");
      img4P.classList.add("active");
      img5P.classList.add("active");
      break;
    case "tijera":
      img1P.classList.add("active");
      img2P.classList.add("active");
      img3P.classList.remove("active");
      img4P.classList.add("active");
      img5P.classList.add("active");
      break;
    case "lagarto":
      img1P.classList.add("active");
      img2P.classList.add("active");
      img3P.classList.add("active");
      img4P.classList.remove("active");
      img5P.classList.add("active");
      break;
    case "spock":
      img1P.classList.add("active");
      img2P.classList.add("active");
      img3P.classList.add("active");
      img4P.classList.add("active");
      img5P.classList.remove("active");
      break;
  };
  switch (pcChoiceValue) {
    case 1:
      img1Pc.classList.add("active");
      img2Pc.classList.add("active");
      img3Pc.classList.remove("active");
      img4Pc.classList.add("active");
      img5Pc.classList.add("active");
      break;
    case 2:
      img1Pc.classList.add("active");
      img2Pc.classList.remove("active");
      img3Pc.classList.add("active");
      img4Pc.classList.add("active");
      img5Pc.classList.add("active");
      break;
    case 3:
      img1Pc.classList.remove("active");
      img2Pc.classList.add("active");
      img3Pc.classList.add("active");
      img4Pc.classList.add("active");
      img5Pc.classList.add("active");
      break;
    case 4:
      img1Pc.classList.add("active");
      img2Pc.classList.add("active");
      img3Pc.classList.add("active");
      img4Pc.classList.remove("active");
      img5Pc.classList.add("active");
      break;
    case 5:
      img1Pc.classList.add("active");
      img2Pc.classList.add("active");
      img3Pc.classList.add("active");
      img4Pc.classList.add("active");
      img5Pc.classList.remove("active");
      break;
  }
}

const agregarMsj = (choice, pcChoiceValue) =>{
  values.forEach((x)=>{
    let { name, win, lose } = x
    if(name == choice){
      if(win.includes(pcChoiceValue)){
        winMsj.innerHTML = "GANASTE"
      } else if (lose.includes(pcChoiceValue)){
        winMsj.innerHTML = "PERDISTE"
      } else {
        winMsj.innerHTML = "EMPATE"
      }
    }
  })
}

const calcularScore = () => {
  let msj = winMsj.innerText;
  if (msj == "GANASTE") playerCount = playerCount + 1;
  else if (msj == "PERDISTE") pcCount = pcCount + 1;
}

const imprimirScore = () => {
  score.innerText = "SCORE: " + playerName.value + ": " + playerCount + " PC: " + pcCount;
}

img1Player.addEventListener('click', choice);
img2Player.addEventListener('click', choice);
img3Player.addEventListener('click', choice);
img4Player.addEventListener('click', choice);
img5Player.addEventListener('click', choice);

const resetIntro = () => {
  playerName.value = "";
  msjNombre.classList.add("active");
}

const resetImg = () => {
  img1P.classList.add("active");
  img2P.classList.add("active");
  img3P.classList.add("active");
  img4P.classList.add("active");
  img5P.classList.add("active");
  img1Pc.classList.add("active");
  img2Pc.classList.add("active");
  img3Pc.classList.add("active");
  img4Pc.classList.add("active");
  img5Pc.classList.add("active");
}

const resetScore = () => {
  pcCount = 0;
  playerCount = 0;
  winMsj.innerHTML = "";
  imprimirScore();
}

