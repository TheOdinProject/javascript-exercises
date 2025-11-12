// your JavaScript file
const container = document.querySelector("#container");


redText = document.createElement("p");
redText.textContent = "Hey, I’m red!";
redText.style.color = "red";

container.appendChild(redText);


blueH3 = document.createElement("h3");
blueH3.textContent = "I’m a blue h3!";
blueH3.setAttribute("style", "color: blue")

container.appendChild(blueH3);


div = document.createElement("div");
div.style.cssText = "background: pink; border: 3px solid black;";


h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";

divP = document.createElement("p");
divP.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(divP);

container.appendChild(div);

const btn = document.querySelector("#btn");

// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);
