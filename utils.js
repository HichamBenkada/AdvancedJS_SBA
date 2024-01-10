import { JokesHandler, fav, generatedObj } from "./script.js";

console.log("utils! is linked");

/**
 * Favourites:
 */
//icons selectors
export const favIcon = document.getElementById("fav");
//FavIcon Event listener
favIcon.addEventListener("click", heartHandler);
//favourite icon handler
function heartHandler() {
  //push to favourites
  const idx = fav.findIndex((element) => element.joke === generatedObj.joke);
  if (idx === -1) {
    favIcon.classList.replace("fa-regular", "fa-solid");
    favIcon.fontSize = "2rem";
    fav.push(generatedObj);
    console.log("A joke added to fav: ", fav);
  } else {
    favIcon.classList.replace("fa-solid", "fa-regular");
    fav.splice(idx, 1);
    console.log("joke is removed:", fav);
  }
}

