const selectHTML = document.getElementById("background-select");
const buttonHTML = document.getElementById("background-button");
const toggleHTML = document.getElementById("background-toggle");
const containerHTML = document.getElementById("container");
const allTexter = document.querySelectorAll(".texter");

const allTexterArray = Array.from(allTexter);
console.log(allTexterArray);
const selectOptionsArray = Array.from(selectHTML.children);
selectOptionsArray.shift();
console.log(selectOptionsArray);
let i = 0;
let toggle = null;
const colorArray = ["green", "blue", "red"];
toggleHTML.addEventListener("click", () => {
  if (toggle === null) {
    toggle = setInterval(() => {
      containerHTML.style.backgroundColor = selectOptionsArray[i].value;
      allTexterArray.forEach((value, index) => {
        value.style.color = colorArray[i];
      });
      if (i > 1) {
        i = 0;
      } else {
        i++;
      }
    }, 0);
    toggleHTML.innerHTML = "Turn Off";
  } else {
    clearInterval(toggle);
    containerHTML.style.backgroundColor = "white";
    allTexterArray.forEach((value, index) => {
      value.style.color = "black";
    });
    toggleHTML.innerHTML = "Turn On";
    toggle = null;
  }
});

selectHTML.addEventListener("change", changeColor);

buttonHTML.addEventListener("click", changeColor);

function changeColor() {
  switch (selectHTML.value) {
    case "blue":
      containerHTML.style.backgroundColor = "blue";
      allTexterArray.forEach((value, index) => {
        value.style.color = "yellow";
      });
      //   containerHTML.style.color = "red";
      break;
    case "red":
      containerHTML.style.backgroundColor = "red";
      allTexterArray.forEach((value, index) => {
        value.style.color = colorArray[1];
      });
      break;
    case "green":
      containerHTML.style.backgroundColor = "green";
      allTexterArray.forEach((value, index) => {
        value.style.color = colorArray[2];
      });
      break;
  }
}
