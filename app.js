console.log("Ciao Mundo");

const pressed = [];
const secretCode = "nick";
const secretCode2 = "cage";
const easterEgg = document.getElementById("hiddenNick");
const easterEgg2 = document.getElementById("hiddenCage");

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);

  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  pressed.splice(-secretCode2.length - 1, pressed.length - secretCode2.length);

  if (pressed.join("").includes(secretCode)) {
    easterEgg.classList.remove("hide");
    cornify_add();
  } else if (pressed.join("").includes(secretCode2)) {
    easterEgg2.classList.remove("hide");
    cornify_add();
  }
  console.log(pressed);
});
