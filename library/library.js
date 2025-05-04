const myLibrary = [];

function Book(title, author, year, id, read = false) {
	if (!new.target) {
		throw Error("You must use the 'new' operator to call the constructor");
	}
	this.title = title;
	this.author = author;
	this.year = year;
	this.id = id;
	this.read = read;
}

Book.prototype.status = function () {
	if (typeof this.read === "boolean") {
		this.read = !this.read;
	} else {
		console.error("The property 'read' is not a boolean.");
	}
};

function addBookToLibrary(title, author, year) {
	const uuid = self.crypto.randomUUID();
	const newBook = new Book(title, author, year, uuid);
	myLibrary.push(newBook);
}

addBookToLibrary("book1", "tyler durden", "2023");
addBookToLibrary("book2", "christian bale", "2024");

function renderBooks() {
	const tableBody = document.getElementById("book-table-body");

	tableBody.innerHTML = "";
	for (const book of myLibrary) {
		const row = document.createElement("tr");

		row.innerHTML = `
                    <td class="book-title">${book.title}</td>
                    <td class="book-author">${book.author}</td>
                    <td class="book-year">${book.year}</td>
                    <td><button type="button" data-id="${book.id}" class="read-status read-${book.read}">${book.read ? "Read" : "Unread"}</button></td>
                    <td class="actions-cell">
                        <button class="delete-btn" data-index="${book.id}">Delete</button>
                    </td>
                `;

		tableBody.appendChild(row);
	}
}

document.getElementById("books-container").addEventListener("click", (e) => {
	if (e.target.classList.contains("delete-btn")) {
		const index = e.target.getAttribute("data-index");
		const startIndex = myLibrary.findIndex((book) => book.id === index);
		deleteBook(startIndex);
	}

	if (e.target.classList.contains("read-status")) {
		const id = e.target.getAttribute("data-id");
		const book = myLibrary.find((b) => b.id === id);
		book.status();
		e.target.textContent = book.read ? "Read" : "Unread";
		e.target.style.backgroundColor = book.read ? "#2ecc71" : "#e74c3c";
	}
});

function deleteBook(index) {
	if (window.confirm("Are you sure you want to delete this book?")) {
		myLibrary.splice(index, 1);
		renderBooks();
	}
}

const showButton = document.querySelector("#add-new-book_btn");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("#close");
const confirm = document.querySelector("#confirm");
const form = document.querySelector("form");

showButton.addEventListener("click", () => {
	dialog.showModal();
});

closeButton.addEventListener("click", () => {
	dialog.close();
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const value = e.target;
	addBookToLibrary(value.title.value, value.author.value, value.year.value);
	renderBooks();
	dialog.close();
});

window.onload = renderBooks;
