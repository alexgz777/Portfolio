/* const carrousel = document.querySelector(".carrousel");
const point = document.querySelectorAll(".point");

point.forEach((p, i) => {
  point[i].addEventListener("click", () => {
    let position = i;
    let operation = position * -50;

    carrousel.getElementsByClassName.transform = `translateX(${operation}%)`;
    point.forEach((p, i) => {
      point[i].classList.remove("active");
    });
    point[i].classList.add("active");
  });
});
 */
/* 
import { projects } from "../projects";

const $backButton = document.querySelector('#back')
const $goButton = document.querySelector('#go')
const $carrousel__item = document.querySelector('#"carrousel__item"')
let currentPosition=0;
let backItem=()=>{
  currentPosition>= projects.length-1?currentPosition=0:currentPosition++;
  renderItem();
};
let goItem=()=>{
  currentPosition<= 0?currentPosition=projects.length-1:currentPosition--;
  renderItem();
};
let renderItem=()=>{
  $carrousel__item.style.backgroundImage=`url(${projects[currentPosition.image]})`
};
 */