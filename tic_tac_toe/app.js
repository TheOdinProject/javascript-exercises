function GameBoard() {
	// const board = [];
	// const rows = 3;
	// const cols = 3;

	// for (let i = 0; i < rows; i++) {
	// 	board[i] = [];
	// 	for (let j = 0; j < cols; j++) {
	// 		board[i].push(Cell());
	// 	}
	// } *[first method]*

	const board = Array.from({ length: 3 }, () =>
		Array.from({ length: 3 }, () => Cell()),
	); // [*concise method of creating 3*3 grid]*

	const getBoard = () => board;

	const placeMark = (row, column, player) => {
		const cell = board[row][column];
		const cellValue = cell.getValue();

		if (cellValue !== null) return;

		cell.addMark(player);
	};

	return { getBoard, placeMark };
}

function Cell() {
	let value = null;

	const addMark = (player) => {
		value = player;
	};

	const getValue = () => value;
	const reset = () => {
		value = null;
	};

	return {
		addMark,
		getValue,
		reset,
	};
}

function GameController(playerOneName = "X", playerTwoName = "O") {
	const board = GameBoard();
	const players = [
		{
			name: playerOneName,
			mark: "x",
			playerScore: 0,
		},
		{
			name: playerTwoName,
			mark: "o",
			playerScore: 0,
		},
	];

	let activePlayer = players[0];

	const switchPlayerTurn = () => {
		activePlayer = activePlayer === players[0] ? players[1] : players[0];
	};

	const getActivePlayer = () => activePlayer;

	const incrementScore = () => getActivePlayer().playerScore++;

	const grid = board.getBoard();
	let gameOver = false;
	const checkGameOver = (result) => {
		const modal = document.getElementById("game-modal");
		const modalMessage = document.getElementById("modal-message");
		const closeModalBtn = document.getElementById("close-modal");

		closeModalBtn.onclick = () => {
			modal.classList.add("hidden");
		};

		if (result === "win") {
			incrementScore();
			modalMessage.textContent = `${getActivePlayer().name} wins! Please restart the game.`;
			modal.classList.remove("hidden");
		} else if (result === "tie") {
			modalMessage.textContent = "It's a draw!";
			modal.classList.remove("hidden");
		} else {
			console.error("Invalid game result:", result);
		}
	};

	// const isRowWin = (mark) => {
	// 	for (let i = 0; i < 3; i++) {
	// 		if (
	// 			grid[i][0].getValue() === mark &&
	// 			grid[i][1].getValue() === mark &&
	// 			grid[i][2].getValue() === mark
	// 		) {
	// 			gameOver = true;
	// 			winningCells = [
	// 				[i, 0],
	// 				[i, 1],
	// 				[i, 2],
	// 			];
	// 			checkGameOver("win");
	// 			return true;
	// 		}
	// 	}
	// };

	// const isColWin = (mark) => {
	// 	for (let i = 0; i < 3; i++) {
	// 		if (
	// 			grid[0][i].getValue() === mark &&
	// 			grid[1][i].getValue() === mark &&
	// 			grid[2][i].getValue() === mark
	// 		) {
	// 			gameOver = true;
	// 			winningCells = [
	// 				[0, i],
	// 				[1, i],
	// 				[2, i],
	// 			];
	// 			checkGameOver("win");
	// 			return true;
	// 		}
	// 	}
	// };

	// const isDiagWin = (mark) => {
	// 	if (
	// 		grid[0][0].getValue() === mark &&
	// 		grid[1][1].getValue() === mark &&
	// 		grid[2][2].getValue() === mark
	// 	) {
	// 		gameOver = true;
	// 		winningCells = [
	// 			[0, 0],
	// 			[1, 1],
	// 			[2, 2],
	// 		];
	// 		checkGameOver("win");
	// 		return true;
	// 	}
	// 	if (
	// 		grid[0][2].getValue() === mark &&
	// 		grid[1][1].getValue() === mark &&
	// 		grid[2][0].getValue() === mark
	// 	) {
	// 		gameOver = true;
	// 		winningCells = [
	// 			[0, 2],
	// 			[1, 1],
	// 			[2, 0],
	// 		];
	// 		checkGameOver("win");
	// 		return true;
	// 	}
	// };

	// const checkWinner = () => {
	// 	const playerMark = getActivePlayer().mark;
	// 	isRowWin(playerMark);
	// 	isColWin(playerMark);
	// 	isDiagWin(playerMark);
	// 	const isBoardFull = checkIfBoardIsFull();
	// 	if (isBoardFull) {
	// 		checkGameOver("tie");
	// 		return true;
	// 	}
	// }; [first method]

	let winningCells = [];
	const winningCombos = [
		[
			[0, 0],
			[0, 1],
			[0, 2],
		], // rows
		[
			[1, 0],
			[1, 1],
			[1, 2],
		],
		[
			[2, 0],
			[2, 1],
			[2, 2],
		],
		[
			[0, 0],
			[1, 0],
			[2, 0],
		], // columns
		[
			[0, 1],
			[1, 1],
			[2, 1],
		],
		[
			[0, 2],
			[1, 2],
			[2, 2],
		],
		[
			[0, 0],
			[1, 1],
			[2, 2],
		], // diagonals
		[
			[0, 2],
			[1, 1],
			[2, 0],
		],
	];

	const checkWinner = () => {
		const mark = getActivePlayer().mark;
		for (const line of winningCombos) {
			if (line.every(([rol, col]) => grid[rol][col].getValue() === mark)) {
				winningCells = line;
				gameOver = true;
				checkGameOver("win");
				return true;
			}
		}
		if (checkIfBoardIsFull()) {
			checkGameOver("tie");
			return true;
		}
	};

	const checkIfBoardIsFull = () => {
		for (let row = 0; row < grid.length; row++) {
			for (let col = 0; col < grid[row].length; col++) {
				if (grid[row][col].getValue() === null) {
					return false;
				}
			}
		}
		return true;
	};

	const playRound = (row, column) => {
		if (gameOver) return;
		if (grid[row][column].getValue() !== null) return;
		board.placeMark(row, column, getActivePlayer().mark);
		if (!checkWinner()) switchPlayerTurn();
	};

	const resetGame = () => {
		for (let row = 0; row < grid.length; row++) {
			for (let col = 0; col < grid[row].length; col++) {
				grid[row][col].reset();
			}
		}
		winningCells = [];
		activePlayer = players[0];
		gameOver = false;
	};

	const newGame = () => {
		resetGame();
		players[0].playerScore = 0;
		players[1].playerScore = 0;
	};

	const getWinningCells = () => winningCells;

	return {
		getActivePlayer,
		playRound,
		getBoard: board.getBoard,
		resetGame,
		newGame,
		getPlayers: () => players,
		getWinningCells,
	};
}

(function DisplayController() {
	const getUserName = prompt("Please enter your username", "").trim();
	const playerName = getUserName ? getUserName : "X";
	const game = GameController(playerName);
	const boardContainer = document.querySelector(".board");
	const headingTitle = document.querySelector(".turn");
	const scoreBoard = document.querySelector(".score-board");

	function renderUI() {
		boardContainer.textContent = "";
		const board = game.getBoard();

		const playersInfo = document.createElement("div");

		const [player1, player2] = game.getPlayers();
		playersInfo.innerHTML = `
	<p>${player1.name} (X) Score: ${player1.playerScore}</p>
	<p>${player2.name} (O) Score: ${player2.playerScore}</p>
`;

		headingTitle.textContent = `${game.getActivePlayer().name}'s Turn`;
		scoreBoard.textContent = "";
		scoreBoard.append(playersInfo);

		for (const row of board) {
			for (const cell of row) {
				const btn = document.createElement("button");
				btn.classList.add("cell");
				btn.dataset.rowId = board.indexOf(row);
				btn.dataset.column = row.indexOf(cell);
				btn.textContent = cell.getValue();

				const winning = game.getWinningCells();
				const rowIndex = Number.parseInt(btn.dataset.rowId);
				const colIndex = Number.parseInt(btn.dataset.column);
				if (
					winning.some(([rol, col]) => rol === rowIndex && col === colIndex)
				) {
					btn.classList.add("highlight");
				}
				boardContainer.appendChild(btn);
			}
		}

		const buttons = Array.from(document.querySelectorAll("button"));
		let index = 0;
		for (const btn of buttons) {
			btn.dataset.columnId = ++index;
			if (index % 2 === 0) btn.classList.add("middle");
		}
	}

	function handleClick(e) {
		const selectedRow = e.target.dataset.rowId;
		const selectedColumn = e.target.dataset.column;

		game.playRound(selectedRow, selectedColumn);

		renderUI();
	}

	const newGameBtn = document.querySelector(".new-game-button");
	newGameBtn.addEventListener("click", () => {
		game.newGame();
		renderUI();
	});

	const reStartBtn = document.querySelector(".reset-button");
	reStartBtn.addEventListener("click", () => {
		game.resetGame();
		renderUI();
	});
	boardContainer.addEventListener("click", handleClick);

	renderUI();
})();
