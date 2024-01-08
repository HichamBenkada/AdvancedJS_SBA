console.log("Welcome to Advanced JavaScript Project");

const app = document.getElementById("app");
const nav = document.getElementById("nav");

app.textContent +=
  " Feel free to discover the funniest jokes and memes of all time, save your favorets and post your own.";

app.style.textAlign = "left";

//navigation bar
nav.innerHTML = `
`;

const btn = document.querySelectorAll("button");
nav.addEventListener("click", (e) => {
  btn.classList.remove("active");
  console.log(e.target);
});

// const getFileStream = async (url) => {
//     // implementation
//   };

//   (async () => {
//     document.body.style.textAlign = "center"
//     app.style.width = "50%",
//     app.style.margin = "20 auto"
//     app.style.border = 1px solid black;

//     // const stream = await getFileStream("https://domain.name/path/file.ext");
//     // for await (const chunk of stream) {
//     //   console.log({ chunk });
//     // }
//   })();
