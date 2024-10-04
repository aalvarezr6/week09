// Three classes

class Card {  // Properties: suit & rank - Each class will have a suit & and rank. //Defines a single card
    constructor (suit, rank) { // Method to initialize the object's properties.
    this.suit = suit; // hearts, diamonds, spades, clubs
    this.rank = rank; // ace, 2, 3, 4, etc.
    }

}

class Deck { //Manages entire deck
    constructor() {
        this.deck = []; //stores the entire deck, 52 cards. Array will be filled with the card objects.
        this.ranks = [ //holds ranks of the cards.
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "jack",
            "Queen",
            "King"
        ];
        this.suits = ["hearts", "Diamonds", "Spades", "Clubs"]; //Holds the suits
    } //13 ranks times 4 suits = 52 cards

    createDeck() { 
        for (let suit of this.suits) { //goes over the four suits
            for (let rank of this.ranks) { //goes over the 13 ranks
                this.deck.push(new Card(suit, rank)); //new card object is created and adds a new card
            }
        }
    }

    shuffle() {
        for (let i = this.deck.length -1; i > 0; i--) { // moves backward through the array - 51 to 1
            const j = Math.floor(Math.random() * (i + 1)); //math.randown generates a random decimal between 0 and 1. Math.random rounds decimal down to whole numbers.
            [this.deck[i], this.deck[j]] = [this.deck [j], this.deck[i]]; //swaps two cards
        }
    }
    deal() { //distrubtes cards between players
        const halfDeck = this.deck.length / 2; //splits deck into two halves
        const player1Cards = this.deck.slice(0, halfDeck); // gives half of the deck to player 1
        const player2Cards = this.deck.slice(halfDeck, this.deck.length); // gives the other 26 to player 2
        return [player1Cards, player2Cards];
    }
}

class Player { //Each player has a name, hand and a score
    constructor(name) {
        this.name = name; //Player 1 or Player 2
        this.hand = []; // holds array of 26 cards
        this.score = 0; //keeps track of score
    }

    playCard() {
        return this.hand.shift(); //player draws
    }

    incrementScore() {
        this.score += 1; //Increases score by 1
    }
}

// New deck object is created
const myDeck = new Deck(); 
myDeck.createDeck(); //Deck is filled with 52 cards
myDeck.shuffle(); //Shuffles card order

const[player1Cards, player2Cards] = myDeck.deal(); //Splits the deck into two halves

const player1 = new Player("Player 1");
const player2 = new Player("Player 2");

player1.hand = player1Cards; //Creates players
player2.hand = player2Cards;

for (let i = 0; i < 26; i++) { // Loop iterates 26 times
    const player1Card = player1.playCard(); //Each player plays their top card
    const player2Card = player2.playCard();

//Prints each player's ranks and suits
    console.log(`Round ${i + 1}`); 
    console.log(`${player1.name} plays ${player1Card.rank} of ${player1Card.suit}`);
    console.log(`${player2.name} plays ${player2Card.rank} of ${player2Card.suit}`);


//Determines winner of each round
    if (player1Card.rank > player2Card.rank) {
        player1.incrementScore();
        console.log(`${player1.name} wins this round!`);

    } else if (player1Card.rank < player2Card.rank) {
        player2.incrementScore();
        console.log(`${player2.name} wins this round!`);

    } else {
        console.log("It's a tie!");
    }
//Final score after 26 rounds
    console.log(`Score - ${player1.name}: ${player1.score}, ${player2.name}: ${player2.score}`);
}
//Prints the winner
if (player1.score > player2.score) {
    console.log(`${player1.name} is the winner!!`);

} else if (player1.score < player2.score) {
    console.log(`${player2.name} is the winner!!`);

} else {
    console.log("The game is a tie!")
}


