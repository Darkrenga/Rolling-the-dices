function rollDice() {
    const die1 = document.getElementById('die1');
    const die2 = document.getElementById('die2');
    const result = document.getElementById('result');
    const d1 = Math.ceil(Math.random() * 6);
    const d2 = Math.ceil(Math.random() * 6);
    const diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    result.innerHTML = `You rolled ${diceTotal}.`;
    if (d1 === d2) {
      result.innerHTML += ' DOUBLES! You get a free turn!!';
    }
    if (d1 === 1 && d2 === 1) {
      result.innerHTML += ' and SNAKE EYES! You get a free turn!!';
    }
  }
  