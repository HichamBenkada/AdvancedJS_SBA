import { btns,app } from "./script.js";
console.log("nav! is linked");

// clear active class from the btns
function deactivateBtn() {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

//buttons click event handler;
function btnHandler(e) {
  deactivateBtn();
  e.preventDefault();
  e.stopPropagation();
  console.log(e.target.outerText);
  e.target.classList.toggle("active");
  //Do something when clicked
}

//adding toggle active class to btns
btns.forEach((btn) => {
  btn.addEventListener("click", btnHandler);
});

app.style.textAlign = "left";
