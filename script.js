console.log("Welcome to Advanced JavaScript Project");

export const app = document.getElementById("app");
export const btns = document.querySelectorAll("button");

const API_KEY = "66dfe78e14784d349f96980de7b0f3c1";

axios.defaults.baseURL = "https://api.humorapi.com";
axios.defaults.headers.common["x-api-key"] = API_KEY;

/**
 * Part1: fetching jockes
 */

export const jokes = [];
export async function getRandomJoke() {
  try {
    const req = await axios.get("/jokes/random")
    .then((res) => {
      console.log(res.data);
      const jokeObj = res.data;
      app.style.background = "lightgreen";
      app.innerHTML = `${jokeObj.joke}
        <!-- Favouriting and Voting -->
    <div style="display:flex; justify-content:center;align-items:center;margin:5px auto">
      <i id='voteUp' class="fa-regular fa-thumbs-up"></i>
      <i id='fav' style="margin:auto" class="fa-regular fa-heart"></i>
      <i id='voteDown' class="fa-regular fa-thumbs-down"></i>
    </div>`;
    });
  } catch (err) {
    console.error(err);
  }
}


//add thumbsUp event listener
async function thumbsUpHandler() {
  try {
    //post an UpVoting
  } catch (err) {
    console.error(err);
  }
}

//add thumbsDown event listener
async function thumbsDownHandler() {
  try {
    //post an downVoting
  } catch (err) {
    console.error(err);
  }
}

//add Favourites Event listener
const heartEl = document.getElementById("fav");
// heartEl.addEventListener('click',favHandler)
function favHandler() {
  try {
    heartEl.style.background = red;
    //push to favourites
  } catch (err) {
    console.error(err);
  }
}
