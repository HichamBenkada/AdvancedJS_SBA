import { btns, JokeHandler } from "./script.js";
console.log("nav! is linked");

// clear active class from the btns
function deactivateBtn() {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

//adding toggle active class to btns
btns.forEach((btn) => {
  btn.addEventListener("click", btnHandler);
});

//buttons click event handler;
function btnHandler(e) {
  e.preventDefault();
  e.stopPropagation();
  deactivateBtn();
  e.target.classList.toggle("active");
  //Events handeling
  const clickedBtn = e.target.outerText;
  if(clickedBtn==="Jokes"){
    console.log(clickedBtn);
    //Generate a random joke
    JokeHandler();
  } else if(clickedBtn==="Memes"){
    console.log(clickedBtn);
    //do this
  }else if(clickedBtn==="Favourites"){
    console.log(clickedBtn);
    //do this
  }else{
    //back to home
    location.reload();
  }
}

