import Monster from './Monster';

class Dragon extends Monster {
  constructor(strength = 250, lifePoints = 999) {
    super(lifePoints, strength);
  }
}

export default Dragon;