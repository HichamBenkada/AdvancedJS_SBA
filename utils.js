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
  generateIcon.style.transform='rotate(90deg)';
  favIcon.classList.replace("fa-solid", "fa-regular");
  thumbsUpIcon.classList.replace("fa-solid", "fa-regular");
  thumbsUpIcon.classList.replace("fa-solid","fa-regular");
  JokesHandler()});

/**
 * Vote up: POST request
 */

const votes= new Array();
const thumbsUpIcon = document.getElementById("thumbsUp");
//thumbsUp event listener
thumbsUpIcon.addEventListener("click", thumbsUpHandler);
// thumbsUp handler that post upvoting
async function thumbsUpHandler(e) {
  try {
    console.log(e.target.id)
    //post an UpVoting
    const id = generatedObj.id;
    if(!id) throw new Error('Invalid ID post..')
    await axios
      .post(`/jokes/${id}/upvote`)
      .then((res) => {
        console.log(res.data.message)
        votes.push(res.data)
      });
      //
      const isVotedUp =votes.find((element)=>element.id === id);
      if(!isVotedUp){
      thumbsUpIcon.classList.replace("fa-regular","fa-solid");
      }else{
      console.log(isVotedUp)
      votes.pop()
      thumbsUpIcon.classList.replace("fa-solid","fa-regular");
      }
  } catch (err) {
    console.error(err);
  }
}

/**---(COMBINE ME WITH THUMBS UP)-----
//  * Vote Down: POST request  
//  */
// const thumbsDownIcon = document.getElementById("thumbsDown");
// //thumbsDown event listener
// thumbsDownIcon.addEventListener("click", thumbsDownHandler);
// //add thumbsDown event listener
// async function thumbsDownHandler() {
//   try {
//     //post an downVoting
//     const voteDown = await axios
//       .post(`/jokes/${generatedObj.id}/downvote`)
//       .then((res) => {
//         console.log(res.data.message);
//         votes.push(res.data)
//       });
//       //
//       const isVotedUp =votes.find((element)=>element.id === id);
//       if(!isVotedUp){
//       thumbsUpIcon.classList.replace("fa-regular","fa-solid");
//       }else{
//       votes.pop()
//       thumbsUpIcon.classList.replace("fa-solid","fa-regular");
//       }
//   } catch (err) {
//     console.error(err);
//   }
// }

/**
 * navigation Arrows 
 */

const leftEl = document.querySelector(".fa-circle-left");
leftEl.addEventListener('click', ()=> {
  console.log('leftArrow is clicked');
  //know the location...
  //This is better to create with CAROUSEL Carousel,....
  // or as you like Check for whys


})
