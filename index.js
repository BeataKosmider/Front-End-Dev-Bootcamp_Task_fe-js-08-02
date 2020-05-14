class Fruit {
  constructor(name, color, sweetness) {
    this.name = name;
    this.color = color;
    this.sweetness = sweetness;
  }
};

class Apple extends Fruit {
  constructor(goodForCider, goodForJuice, ...args) {
    super(...args)
    this.goodForCider = goodForCider;
    this.goodForJuice = goodForJuice;
  }
};

module.exports = {
  Apple,
  Fruit,
};
