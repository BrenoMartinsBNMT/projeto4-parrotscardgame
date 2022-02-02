let numbers = prompt("mano buta as cards");
let a = [];
let putCards = document.querySelector(".parrot-game");
while (numbers < 4 || numbers > 14 || numbers % 2 !== 0 || numbers == null) {
  numbers = prompt("mano butaste as cards erradu");
}

function virarCard(whatAcard) {
  card1 = whatAcard;
  card2 = whatAcard;

  let backCard = card1.querySelector(".card-game-back");
  let frontCard = card2.querySelector(".card-game-front");

  backCard.classList.add("card-game-back-turn");
  frontCard.classList.add("card-game-front-turn");
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
        <img src="Arquivos Úteis - Projeto 04 - Parrot Card Game/${a[i]}.gif">
      </div>
    </div>`;
  }

  return array;
}

function putCardsOnScreen() {
  for (let i = 0; i < numbers / 2; i++) {
    a[i] = i + 1;
  }
  a = a.concat(a);

  shuffle(a);
}
putCardsOnScreen();
