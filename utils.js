console.log("utils! is linked");
// import { fav, generatedObj } from "./script";

//icons selectors
const favIcon = document.getElementById("fav");
const thumbsUpIcon = document.getElementById("thumbsUp");
const thumbsDownIcon = document.getElementById("thumbsDown");
const generateIcon = document.getElementById("generate");



// thumbsUp handler that post upvoting
async function thumbsUpHandler() {
  try {
    //post an UpVoting
    const upvote = await axios
      .post(`/jockes/${generatedObj.id}/upvote`)
      .then((res) => console.log(res.message));
  } catch (err) {
    console.error(err);
  }
}
//thumbsUp event listener
thumbsUpIcon.addEventListener("click", thumbsUpHandler);

//thumbsDown event listener
thumbsDownIcon.addEventListener("click", thumbsDownHandler);
//add thumbsDown event listener
async function thumbsDownHandler() {
  try {
    //post an downVoting
    const upvote = await axios
      .post(`/jockes/${generatedObj.id}/downvote`)
      .then((res) => console.log(res.message));
  } catch (err) {
    console.error(err);
  }
}

//FavIcon Event listener
favIcon.addEventListener("click", heartHandler);
//favourite icon handler
function heartHandler() {
  //push to favourites
  const isJokeExist = fav.find((element) => element.joke === generatedObj.joke);
  if (!isJokeExist) {
    favIcon.style.color = "rgba(255,0,0,.75)";
    favIcon.fontSize = "2rem";
    fav.push(generatedObj);
    console.log("A joke added to fav: ", fav);
  } else {
    favIcon.style.color = "rgba(255,0,0,.25)";
    fav.pop();
    console.log("joke is removed:", fav);
  }
}





//GenerateIcon Event listener
// utils.generateIcon.addEventListener('click',JokeHandler)






/**
 * //Plan ahead of time:
 */

// async function sendRequest(request, num = 1) {
//     try {
//         if(url)throw new Error("invalide Input...Not a valid url");
//         if(num<1 && num >100) throw new Error("invalide Input...Number Out of Range");

//         const request = `url/`
//         const req = awiat axios(url);

//     } catch (err) {
//         console.error(err)
//     }
// }
/**
 * send a request to get a joke or multiple jokes
 * accept a number
 */
