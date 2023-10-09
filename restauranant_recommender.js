/////  Variables /////

const messageP = document.getElementById("restauranant-recommendation-message");
const restaurantElements = document.querySelectorAll(
  ".restaurant-recommendation"
);
const listOfRestaurants = [...restaurantElements].map((element) =>
  element.textContent.trim()
);
const restaurantButton = document.getElementById(
  "restaurant-recommendation-button"
);

/////  Functions /////

function randomItem(array) {
  const randomDigit = Math.floor(Math.random() * array.length);
  const item = array[randomDigit];
  return item;
}

function updateMessage(buttonMessage, favThing) {
  const message = `${buttonMessage} ${favThing}.`;
  messageP.textContent = message;
}

function buttonPressed() {
  const buttonMessage = "I recommend: ";
  const restaurant = randomItem(listOfRestaurants);
  updateMessage(buttonMessage, restaurant);
}

/////  Event Listeners  /////
restaurantButton.addEventListener("click", buttonPressed);
