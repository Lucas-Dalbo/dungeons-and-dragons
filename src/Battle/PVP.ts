import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player2 = player2;
  }

  private battleCalculation(): number[] {
    const player1LP = this.player.receiveDamage(this._player2.strength);
    const player2LP = this._player2.receiveDamage(this.player.strength);
    console.log(`Player 1 LP: ${player1LP} | Player 2 LP: ${player2LP}`);

    return [player1LP, player2LP];
  }

  public fight(): number {
    const playersLP = this.battleCalculation();
    if (!playersLP.includes(-1)) return this.fight();

    return super.fight();
  }
}

export default PVP;