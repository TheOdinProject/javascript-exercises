// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.setAttribute("style", "color: red");
p.textContent = "Hey I’m red!";
container.appendChild(p);

const h3Text = document.createElement("h1");
h3Text.setAttribute("style", "color: blue");
h3Text.textContent = "I’m a blue h3!";
container.appendChild(h3Text);

const div = document.createElement("div");
div.setAttribute(
	"style",
	"border: 1px solid black; background-color: pink; padding: 10px",
);

const h1 = document.createElement("h1");
h1.textContent = "I’m in a div";
div.appendChild(h1);

const divP = document.createElement("p");
divP.textContent = "ME TOO!";
div.appendChild(divP);

container.appendChild(div);

// the JavaScript file
const btn = document.querySelector("#btn");
// the JavaScript file
btn.addEventListener("click", function (e) {
	console.log(e);
	console.log(e.target);
	e.target.style.background = "blue";
});
