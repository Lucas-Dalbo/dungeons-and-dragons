import Monster from './Monster';

class Dragon extends Monster {
  constructor(lifePoints = 999, strength = 250) {
    super(lifePoints, strength);
  }
}

export default Dragon;