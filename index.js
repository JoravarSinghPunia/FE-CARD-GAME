const fruits = [
  "🥝",
  "🥝",
  "🍋",
  "🍋",
  "🍉",
  "🍉",
  "🍒",
  "🍒",
  "🍓",
  "🍓",
  "🍑",
  "🍑",
];
const randomFruits = fruits.sort(() => (Math.random() > 0.5 ? 1 : -1));

for (let i = 0; i < randomFruits.length; i++) {
  let box = document.createElement("div");
  box.className = "fruits";
  box.innerHTML = randomFruits[i];

  box.onclick = function () {
    this.classList.add("boxOpen");
    setTimeout(function () {
      if (document.querySelectorAll(".boxOpen").length > 1) {
        if (
          document.querySelectorAll(".boxOpen")[0].innerHTML ==
          document.querySelectorAll(".boxOpen")[1].innerHTML
        ) {
          document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");

          if (document.querySelectorAll(".boxMatch").length == fruits.length) {
            alert("You've won! Press ok and reset to play again!");
          }
        } else {
          document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
          document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
        }
      }
    }, 500);
  };
  document.querySelector(".game").appendChild(box);
}
