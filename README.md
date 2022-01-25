# 8.2

Poprzednio stworzona klasa jest dość prosta, poza tym analizując samą ich ideę, możemy domyśleć się, że klasa Apple może mieć wspólną klasę z innymi owocami. W końcu w każdym z nich możemy wyróżnić kolor, słodycz. Stworzymy więc bazową klasę Fruit, a nasza klasa Apple będzie tylko jej rozszerzeniem.

Stwórz klasę Fruit, która będzie miała wszystkie parametry, które obecnie miało Apple. Klasa Apple musi rozszerzać (extends) klasę Fruit, ale oprócz tego posiadać 2 nowe paramtery:

- goodForCider (typu Boolean)
- goodForJuice (typue Boolean)
  Które będą określać czy dany gatunek nadaje się do tworzenia cydrów lub/i soków.

Klasa musi być stworzona tak, że kiedy stworzymy jej instancje w ten sposób:

```javascript
const apple = new Apple(true, false, "antonowka", "yellow", 5);
```

to zdołamy odczytać wszystkie parametry w ten sposób:

```javascript
apple.goodForCider; // true
apple.goodForJuice; // false
apple.name; // "antonowka"
apple.color; // "yellow"
apple.sweetness; // 5
```

Zważ na kolejność parametrów (goodForCider i goodForJuice są przed name, color, i sweetness).
