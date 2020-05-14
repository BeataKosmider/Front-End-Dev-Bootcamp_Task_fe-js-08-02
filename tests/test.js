const { Apple, Fruit } = require('..');
const { toHaveAttribute, toBeInTheDocument } = require('@testing-library/jest-dom/matchers');

expect.extend({ toHaveAttribute, toBeInTheDocument });

beforeEach( () => {
});

describe('', () => {
  it('Stworzono klasę Fruit', async () => {
    const antonowka = new Fruit();
    expect(antonowka).toBeDefined;
  })

  it('Stworzono klasę Apple', async () => {
    const antonowka = new Apple();
    expect(antonowka).toBeDefined;
  })

  it('Poprawnie ustawiono parametry Fruit', async () => {
    const antonowka = new Fruit('antonowka', 'red', 5);
    expect(antonowka.name).toBe('antonowka');
    expect(antonowka.color).toBe('red');
    expect(antonowka.sweetness).toBe(5);
  })

  it('Poprawnie ustawiono parametry Apple', async () => {
    const antonowka = new Apple(true, false, 'macintosh', 'red', 7);
    expect(antonowka.goodForCider).toBe(true);
    expect(antonowka.goodForJuice).toBe(false);
    expect(antonowka.name).toBe('macintosh');
    expect(antonowka.color).toBe('red');
    expect(antonowka.sweetness).toBe(7);
  })
});
