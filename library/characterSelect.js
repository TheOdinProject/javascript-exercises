// Initialize constructor functions
function Hero(name, level) {
	this.name = name;
	this.level = level;
}

function Warrior(name, level, weapon) {
	Hero.call(this, name, level);

	this.weapon = weapon;
}

function Healer(name, level, spell) {
	Hero.call(this, name, level);

	this.spell = spell;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function () {
	return `${this.name} says hello.`;
};

Warrior.prototype.attack = function () {
	return `${this.name} attacks with the ${this.weapon}.`;
};

Healer.prototype.heal = function () {
	return `${this.name} casts ${this.spell}.`;
};

// Initialize individual character instances
const hero1 = new Warrior("Bjorn", 1, "axe");
const hero2 = new Healer("Kanin", 1, "cure");

// Setup objects
const head = { glasses: { brand: "Ray-Ban", type: "sunglasses" } };
const pockets = { glasses: { brand: "Ray-Ban", type: "sunglasses" } };

// Number of iterations for reliable benchmarking
const iterations = 10000000;

// Benchmark for head.glasses
console.time("Benchmark: head.glasses");
for (let i = 0; i < iterations; i++) {
	const glasses = head.glasses;
}
console.timeEnd("Benchmark: head.glasses");

// Benchmark for pockets.glasses
console.time("Benchmark: pockets.glasses");
for (let i = 0; i < iterations; i++) {
	const glasses = pockets.glasses;
}
console.timeEnd("Benchmark: pockets.glasses");
