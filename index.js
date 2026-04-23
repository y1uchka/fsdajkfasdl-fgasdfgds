import { multiply } from "./multiply.js";

const nodeInputOne = document.querySelector(".inputOne");
const nodeInputTwo = document.querySelector(".inputTwo");
const nodeBtn = document.querySelector(".btn");
const result = document.querySelector('.result')


nodeBtn.addEventListener("click", ()=>{
    console.log(multiply(nodeInputOne.value, nodeInputTwo.value));
    result.innerHTML = `Результат: ${multiply(nodeInputOne.value, nodeInputTwo.value)}`;

});