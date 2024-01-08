console.log("Welcome to Advanced JavaScript Project");

// import * as tools from "./utils"

export const app = document.getElementById("app");
export const btns = document.querySelectorAll("button");

const API_KEY = "66dfe78e14784d349f96980de7b0f3c1"

axios.defaults.baseURL = 'https://api.humorapi.com';
axios.defaults.headers.common['x-api-key'] = API_KEY;

/**
 * Part1: fitching jockes
 */



async function getRandomJoke(){
    const joke = await axios.get('/jokes/random').then((res)=>console.log(res.data))
}
getRandomJoke()