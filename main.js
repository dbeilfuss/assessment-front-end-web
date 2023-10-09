// console.log("hello world");

/////// Variables  //////
let form = document.querySelector("#contact");
let images = document.querySelectorAll(".squeaky-duck");
let alternateComplimentList = [
  "Your coding skills light up the binary world!",
  "When your code runs, even the servers cheer!",
  "Every function you write must have a secret ingredient: brilliance.",
  "In the story of code evolution, you're the groundbreaking chapter!",
  "Your commitment to learning is so inspiring, even seasoned developers take notes.",
];

//////  Functions  //////
function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form Submitted!");
}

function randomItem(array) {
  const randomDigit = Math.floor(Math.random() * array.length);
  return array[randomDigit];
}

function complimentUser() {
  const complimentsNodeList = document.querySelectorAll(".compliment");
  let complimentsArray = Array.from(complimentsNodeList).map((li) =>
    li.textContent.trim()
  );
  if (complimentsArray.length === 0) {
    complimentsArray = alternateComplimentList;
  }
  const compliment = randomItem(complimentsArray);
  alert(compliment);
}

//////  Event Listeners  //////
if (form !== null) {
  form.addEventListener("submit", handleSubmit);
}

for (let image of images) {
  image.addEventListener("mouseover", complimentUser);
}
