// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";
// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardThree);

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];


function checkForMatch() {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {

	// let cardOne = cards[0]; 
	// cardsInPlay.push(cards[0]);
	// console.log("User flipped " + cardOne);

	// let cardTwo = cards[2];
	// cardsInPlay.push(cardTwo);
	// console.log("User flipped " + cardTwo);

	cardsInPlay.push(cards[cardId]);

	console.log("User flipped " + cards[cardId]);

	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);








