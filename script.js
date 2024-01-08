console.log("Welcome to Advanced JavaScript Project");

const app = document.getElementById("app");
const navs = document.querySelectorAll("nav");
const btns = document.querySelectorAll("button");


// clear active btn
function deactivateBtn(){
    btns.forEach((btn)=>{
        btn.classList.remove('active')
    })
}
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target);
        deactivateBtn();
        e.target.classList.toggle('active');
    })
})

app.textContent +=
  " Feel free to discover the funniest jokes and memes of all time, save your favorets and post your own.";

app.style.textAlign = "left";

