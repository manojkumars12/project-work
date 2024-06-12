const number = document.querySelector(".element");
const generate = document.querySelector(".button");

generate.addEventListener("click",generateRandom);

function generateRandom(){
    const rand = Math.floor(Math.random() * 100);
    number.innerHTML = rand;
}