import{favIcon} from './utils.js'
console.log("Welcome to Advanced JavaScript Project");

/**
 * script
 */

export const content = document.getElementById("content");
export const btns = document.querySelectorAll("button");
const iconEl = document.querySelector(".icons");
export const generateIcon = document.getElementById("generate");
const thumbsUpIcon = document.getElementById("thumbsUp");
const thumbsDownIcon = document.getElementById("thumbsDown");

//Authentication:
const API_KEY = "66dfe78e14784d349f96980de7b0f3c1";
axios.defaults.baseURL = "https://api.humorapi.com";
axios.defaults.headers.common["x-api-key"] = API_KEY;

/**
 * Axios Req/Res Interceptors:
 */
axios.interceptors.request.use((request) => {
  console.log("Request sent...");
  request.metadata = request.metadata || {};
  request.metadata.startTime = new Date().getTime();

  return request;
});

axios.interceptors.response.use(
  (response) => {
    response.config.metadata.endTime = new Date().getTime();
    response.durationInMS =
      response.config.metadata.endTime - response.config.metadata.startTime;
    console.log("Successful response!");
    return response;
  },
  (error) => {
    console.log("Unsuccessful response...");
    throw error;
  }
);


/**
 * Part1: jockes fetching
 */
export const fav = [];
export let generatedObj;
//generate random joke
export async function JokesHandler() {
  //Making a request using Promise logic
  await axios
    .get("/jokes/random")
    .then((res) => {
      console.log(res.data);
      generatedObj = res.data;
      app.style.background = "lightgreen";
      content.innerHTML ="";
      content.textContent = `${generatedObj.joke}`;
      iconEl.classList.remove("hide");
    })
    .catch((err) => {
      console.error(err);
    });
}




/**
 * Fetching a meme:
 */
//generate random joke
export async function MemeHandler() {
  iconEl.classList.remove("hide");
  //Making a request using Promise logic
  await axios
    .get("/memes/random")
    .then((res) => {
      console.log(res.data);
      generatedObj = res.data;

      content.innerHTML ="";
      content.innerHTML += `<img src="${generatedObj.url}" alt="meme"/> `;
      
    })
    .catch((err) => {
      console.error(err);
    });
}

/**
 * Posting a voteUp
 */

//thumbsUp event listener
thumbsUpIcon.addEventListener("click", thumbsUpHandler);
// thumbsUp handler that post upvoting
async function thumbsUpHandler(e) {
  try {
    console.log(e.target.id);
    //post an UpVoting
    const id = generatedObj.id;
    if (!id) throw new Error("Invalid ID post..");
    await axios.post(`/jokes/${id}/upvote`).then((res) => {
      console.log(res.data.message);
    });
  } catch (err) {
    console.error(err);
  }
}

/**
 * Vote Down: POST request
 */

//thumbsDown event listener
thumbsDownIcon.addEventListener("click", thumbsDownHandler);
//add thumbsDown event listener
async function thumbsDownHandler() {
  try {
    //post an downVoting
    const voteDown = await axios
      .post(`/jokes/${generatedObj.id}/downvote`)
      .then((res) => {
        console.log(res.data.message);
      });
  } catch (err) {
    console.error(err);
  }
}
