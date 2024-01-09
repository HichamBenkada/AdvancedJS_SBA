console.log("Welcome to Advanced JavaScript Project");

/**
 * script
 */

export const content = document.getElementById("content");
export const btns = document.querySelectorAll("button");
const iconEl = document.querySelector(".icons");

const API_KEY = "66dfe78e14784d349f96980de7b0f3c1";

axios.defaults.baseURL = "https://api.humorapi.com";
axios.defaults.headers.common["x-api-key"] = API_KEY;

/**
 * Part1: jockes fetching
 */

const jokes = [];
const memes = [];

export const fav = [];
export let generatedObj;

//generate random joke
export async function JokesHandler() {
  //Making a request using Promise logic
  await axios.get("/jokes/random")
  .then((res) => {
      console.log(res.data);
      generatedObj = res.data;
      app.style.background = "lightgreen";
      content.textContent = `${generatedObj.joke}`;
      iconEl.classList.remove("hide");
    }).catch((err) => {
    console.error(err);
    });
}
