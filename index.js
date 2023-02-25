class Fruit {
  // kod tutaj
  constructor(name, color, sweetness) {
    this.name = name;
    this.color = color;
    this.sweetness = sweetness;
  }
}

class Apple extends Fruit {
  // oraz tutaj :)
  constructor(goodForCider, goodForJuice, name, color, sweetness) {
    super(name, color, sweetness);
    this.goodForCider = goodForCider;
    this.goodForJuice = goodForJuice;
  }
}

module.exports = {
  Apple,
  Fruit,
};
