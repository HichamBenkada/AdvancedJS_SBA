import { btns,app, jokes } from "./script.js";
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
  e.target.classList.toggle("active");
  //Events handeling
  const clickedBtn = e.target.outerText;
  if(clickedBtn==="Jokes"){
    console.log(clickedBtn);
    //do this
  } else if(clickedBtn==="Jokes"){
    console.log(clickedBtn);
    //do this
  }else if(clickedBtn==="Memes"){
    console.log(clickedBtn);
    //do this
  }else if(clickedBtn==="Favourites"){
    console.log(clickedBtn);
    //do this
  }
}

//adding toggle active class to btns
btns.forEach((btn) => {
  btn.addEventListener("click", btnHandler);
});

app.style.textAlign = "left";
