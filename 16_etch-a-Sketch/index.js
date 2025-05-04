let color = "";
function createBoard(cellSize = 25) {
	const container = document.querySelector(".container");
	const slider = document.getElementById("selectRange");
	const rangeGiven = document.getElementById("range");

	slider.oninput = function () {
		rangeGiven.innerText = `${this.value} x ${this.value}`;
		createBoard(this.value);
	};

	let h = window.innerHeight;
	let w = window.innerWidth;

	const cols = Math.floor(w / cellSize);
	const rows = Math.floor(h / cellSize);

	const totalCells = cols * rows;

	container.innerHTML = "";
	container.classList.add("flex-box");

	for (let i = 0; i < totalCells; i++) {
		const div = document.createElement("div");
		div.style.width = `${cellSize}px`;
		div.style.height = `${cellSize}px`;
		div.classList.add("cell");

		div.addEventListener("mouseenter", () => {
			color = `hsl(${Math.random() * 360}, 60%, 70%)`;
			div.style.backgroundColor = color;
		});
		container.appendChild(div);
	}
}
createBoard();

const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", () => createBoard());
