let numbers = prompt("mano buta as cards");
let embaralharArray = [];
let numbersOfCards = [];
let turnCardOff = false;
let count = 0;
let putCards = document.querySelector(".parrot-game");
while (numbers < 4 || numbers > 14 || numbers % 2 !== 0 || numbers == null) {
  numbers = prompt("mano butaste as cards erradu");
}

function virarCard(whatAcard) {
  if (turnCardOff === true) {
    turnCardOff = false;
    return;
  } else {
    card1 = whatAcard;
    card2 = whatAcard;
    count += 1;
    let backCard = card1.querySelector(".card-game-back");
    let frontCard = card2.querySelector(".card-game-front");

    backCard.classList.add("card-game-back-turn");
    frontCard.classList.add("card-game-front-turn");
    numbersOfCards.push(whatAcard);
    chooseOnly2Cards(numbersOfCards);
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  for (let i = 0; i < numbers; i++) {
    putCards.innerHTML =
      putCards.innerHTML +
      `<div class="card-game "onclick="virarCard(this)">
      <div class="card-game-back">
        <img src="Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png">
      </div>
      <div class="card-game-front">
        <img value=${embaralharArray[i]} src="Arquivos Úteis - Projeto 04 - Parrot Card Game/${embaralharArray[i]}.gif">
      </div>
    </div>`;
  }

  return array;
}

function putCardsOnScreen() {
  for (let i = 0; i < numbers / 2; i++) {
    embaralharArray[i] = i + 1;
  }
  embaralharArray = embaralharArray.concat(embaralharArray);

  shuffle(embaralharArray);
}

function chooseOnly2Cards(card) {
  if (card.length == 2) {
    if (
      card[0].querySelector(".card-game-front").querySelector("img").attributes
        .value.value !==
      card[1].querySelector(".card-game-front").querySelector("img").attributes
        .value.value
    ) {
      turnCardOff = true;
      setTimeout(() => {
        card[0]
          .querySelector(".card-game-front")
          .classList.remove("card-game-front-turn");
        card[0]
          .querySelector(".card-game-back")
          .classList.remove("card-game-back-turn");
        card[1]
          .querySelector(".card-game-front")
          .classList.remove("card-game-front-turn");
        card[1]
          .querySelector(".card-game-back")
          .classList.remove("card-game-back-turn");
      }, 1000);
    }
    numbersOfCards = [];
  }
}
function userWin() {
  let allCards = document.querySelectorAll(".card-game-back-turn");
  if (allCards.length == 8) {
    setTimeout(() => {
      alert(`Você ganhou em ${count} jogadas!`);
    }, 1000);
  }
  return allCards;
}
putCardsOnScreen();
