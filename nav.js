import { btns,generateIcon, JokesHandler,MemeHandler } from "./script.js";
console.log("nav! is linked");

const prev = document.getElementById('prev');
const next = document.getElementById('next');

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
    //Generate a random jokes
    JokesHandler();
    //request a joke: generate new joke
generateIcon.addEventListener("click", () => {
  generateIcon.style.transform = "rotate(90deg)";
  favIcon.classList.replace("fa-solid", "fa-regular");
  thumbsUpIcon.classList.replace("fa-solid", "fa-regular");
  thumbsUpIcon.classList.replace("fa-solid", "fa-regular");
  JokesHandler();
});

  } else if(clickedBtn==="Memes"){
    console.log(clickedBtn);
    //Generate 
    MemeHandler();
    /**
 * Regenerate joke or meme (GET request)
 */

//request a joke: generate new meme
generateIcon.addEventListener("click", () => {
  generateIcon.style.transform = "rotate(90deg)";
  favIcon.classList.replace("fa-solid", "fa-regular");
  thumbsUpIcon.classList.replace("fa-solid", "fa-regular");
  thumbsUpIcon.classList.replace("fa-solid", "fa-regular");
  MemeHandler();
});


  }else if(clickedBtn==="Favourites"){
    console.log(clickedBtn);
    // could not get iteration to work

    // //do this
    // fav.forEach((item)=>{
    //   if(joke in item){
    //     content.textContent = item.joke
    //   }
    //   content.innerHTML = `<img src="${item.url}" alt="meme"/>`
    // })
    // next.addEventListener('click',(e)=>{
    //   const currentItemIndex = fav.findIndex((item)=>item.id ===e.target.id)
    //   document.slide.src = fav[currentItemIndex]
    // })
  }else{
    //back to home
    location.reload();
  }
}

