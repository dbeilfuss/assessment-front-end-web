////  Variables  /////

const favoriteColor = "Purple";
const favoritePlace = "Michigan";
const favoriteRitual = "Morning Bible Study";
const bonusFavorites = [
  "Daffodils",
  "Green Meadows",
  "Skies full of Stars",
  "Raindrops on Roses",
  "Whiskers on Kittens",
  "Bright Copper Kettles",
  "Warm Woolen Mittens",
  "Brown Paper Packages Tied up with Strings",
  "Cream-colored Ponies",
  "Crisp Apple Streudels",
  "Doorbells",
  "Sleigh Bells",
  "Schnitzel with Noodles",
  "Wild Geese that Fly with the Moon on their Wings",
  "Girls in White Dresses with Blue satin Sashes",
  "Snowflakes that stay on my Nose and Eyelashes",
  "Silver-white Winters that Melt into Springs",
  "Christmas",
  "Bunny Rabits",
  "Chocolate Icing",
  "No School",
  "Pillow Fights",
  "Telegrams",
  "Birthday Presents",
  "Any Presents",
  "Lady Bugs",
  "Cats",
  "Rats",
  "A Good Sneaze",
];

const favoriteThings = [
  favoriteColor,
  favoritePlace,
  favoriteRitual,
  bonusFavorites,
];

const buttons = document.querySelectorAll("button");
const videoLocation = document.querySelector("#video");
const favoriteMessageP = document.getElementById("favorite-message");

/////  Functions /////

function randomItem(array) {
  const randomDigit = Math.floor(Math.random() * array.length);
  const item = array[randomDigit];
  return item;
}

function updateMessage(buttonMessage, favThing) {
  const message = `${buttonMessage} is ${favThing}.`;
  favoriteMessageP.textContent = message;
}

function buttonPressed(event) {
  //   console.log(event);
  const buttonMessage = event.target.textContent;
  const index = event.target.value;
  let favoriteThing = favoriteThings[index];
  //   console.log(buttonMessage, index, favoriteThing);

  /// index 3 contains an array - choose one
  videoLocation.classList.add("hidden");
  if (index === "3") {
    favoriteThing = randomItem(favoriteThing);
    videoLocation.classList.remove("hidden");
  }

  updateMessage(buttonMessage, favoriteThing);
}

/////  Event Listeners  /////
for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}
