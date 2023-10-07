console.log("hello world");

/////// Variables  //////
let form = document.querySelector("#contact");
let images = document.querySelectorAll(".image");

//////  Functions  //////
function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form Submitted!");
}

function randomItem(array) {
  const randomDigit = Math.floor(Math.random() * array.length);
  console.log(randomDigit);
  return array[randomDigit];
}

function complimentUser(evt) {
  const complimentsNodeList = document.querySelectorAll(".compliment");
  const complimentsArray = Array.from(complimentsNodeList).map((li) =>
    li.textContent.trim()
  );
  const compliment = randomItem(complimentsArray);
  alert(compliment);
}

//////  Event Listeners  //////
form.addEventListener("submit", handleSubmit);
console.log(images);
for (let image of images) {
  image.addEventListener("mouseover", complimentUser);
}
