import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  private battleCalculation(): number[] {
    this.player.attack(this._player2);
    this._player2.attack(this.player);
    
    return [this.player.lifePoints, this._player2.lifePoints];
  }

  private consoleLogLP(): void {
    console.log(`
    Player 1 LP: ${this.player.lifePoints} | \
    Player 2 LP: ${this._player2.lifePoints}`);
  }

  public fight(): number {
    this.consoleLogLP();
    const playersLP = this.battleCalculation();
    if (!playersLP.includes(-1)) {
      return this.fight();
    }

    this.consoleLogLP();
    return super.fight();
  }
}

export default PVP;