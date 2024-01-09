console.log("utils! is linked");
import { JokesHandler, fav, generatedObj } from "./script.js";

/**
 * Favourites:
 */
//icons selectors
const favIcon = document.getElementById("fav");
//FavIcon Event listener
favIcon.addEventListener("click", heartHandler);
//favourite icon handler
function heartHandler() {
  //push to favourites
  const isJokeExist = fav.find((element) => element.joke === generatedObj.joke);
  if (!isJokeExist) {
    favIcon.classList.replace("fa-regular", "fa-solid");
    favIcon.fontSize = "2rem";
    fav.push(generatedObj);
    console.log("A joke added to fav: ", fav);
  } else {
    favIcon.classList.replace("fa-solid", "fa-regular");
    fav.pop();
    console.log("joke is removed:", fav);
  }
}

/**
 * Random Joke reload: (GET request)
 */
const generateIcon = document.getElementById("generate");
//request a joke: generate new joke
generateIcon.addEventListener("click", ()=>{
  favIcon.classList.replace("fa-solid", "fa-regular");
  JokesHandler()});

/**
 * Vote up: POST request
 */
const thumbsUpIcon = document.getElementById("thumbsUp");
//thumbsUp event listener
thumbsUpIcon.addEventListener("click", thumbsUpHandler);
// thumbsUp handler that post upvoting
async function thumbsUpHandler() {
  try {
    //post an UpVoting
    console.log(generatedObj.id);
    const id = generatedObj.id;
    if(!id) throw new Error('Invalid ID post..')
    const voteUp = await axios
      .post(`/jokes/${id}/upvote`)
      .then((res) => console.log(res));
      console.log(message)
  } catch (err) {
    console.error(err);
  }
}

/**
 * Vote Down: POST request
 */
const thumbsDownIcon = document.getElementById("thumbsDown");
//thumbsDown event listener
thumbsDownIcon.addEventListener("click", thumbsDownHandler);
//add thumbsDown event listener
async function thumbsDownHandler() {
  try {
    //post an downVoting
    const upvote = await axios
      .post(`/jokes/${generatedObj.id}/downvote`)
      .then((res) => console.log(res.message));
  } catch (err) {
    console.error(err);
  }
}
