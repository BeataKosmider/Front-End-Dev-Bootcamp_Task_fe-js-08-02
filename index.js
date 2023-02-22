class Fruit {
  // kod tutaj
  constructor(name, color, sweetness) {
    this.name = "antonowka";
    this.color = "red";
    this.sweetness = 5;
  }
}

class Apple extends Fruit {
  // oraz tutaj :)
  constructor(goodForCider, goodForJuice, name, color, sweetness) {
    super(name, color, sweetness);
    this.goodForCider = true;
    this.goodForJuice = false;
  }
}

module.exports = {
  Apple,
  Fruit,
};
