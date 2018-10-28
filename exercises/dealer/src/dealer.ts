/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

enum Suit {
  Clubs,
  Diamonds,
  Suits,
  Hearts
}

enum CardNumber {
  Ace,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King
}

type Card = [Suit, CardNumber];
class Dealer {
  cards: Card[];
  constructor() {
    this.cards = [];
    // TODO: find way to loop over enums that doesn't make you feel like you need a shower
    Object.values(Suit)
      //only keep the numbers
      .filter(val => typeof val === 'number')
      .forEach(suit => {
        Object.values(CardNumber)
          .filter(val => typeof val === 'number')
          .forEach(cardNumber => {
            this.cards.push([suit, cardNumber]);
          });
      });
    shuffleArray(this.cards)
  }

  readCard(card: Card): string {
    const [suit, number] = card;
    return `${CardNumber[number]} of ${Suit[suit]}`;
  }
  getLength(): number {
    return this.cards.length;
  }
  dealHand(num: number): Card[] {
    if (num <= this.cards.length && num > 0) {
      return this.cards.splice(0, num);
    }
    throw new Error('invalid number of cards requested');
  }
}

export { Suit, CardNumber, Dealer };
