// DOM Manipulation
// Document Object Model

//console.log(document);

//const grandParent = document.getElementById("grandparent");
const parent = document.getElementsByClassName("parent");
//const children = document.getElementsByClassName("child");
const grandParent = document.querySelector("#grandparent");

//console.log(children);

const whiteMaker = (element) => {
	element.style.backgroundColor = "white";
};

const collectionWhiteMaker = (coll) => {
	for (let i = 0; i < coll.length; i++) {
		whiteMaker(coll[i]);
	}
};

//whiteMaker(grandParent);

//collectionWhiteMaker(children);

//grandParent.classList.add("child");

const newElement = document.createElement("h1");
newElement.innerText = "Dette er en H1 tag";
newElement.classList.add("child");
grandParent.appendChild(newElement);

const text = document.createElement("p");
text.style.color = "white";
text.style.fontSize = `${Math.floor(Math.random() * 32) + 10}px`;
text.innerText = "Random font size 🔥";
grandParent.prepend(text);

const fruits = ["Kiwi", "Apple", "Pear", "Melon", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
	const fruit = document.createElement("p");
	fruit.innerText = fruits[i];
	document.body.appendChild(fruit);
}
