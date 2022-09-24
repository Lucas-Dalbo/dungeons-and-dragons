import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);

    if (!monsters.length) throw new Error('Monsters not found');

    this._monsters = monsters;
  }

  private monsterDMGCalculation(): number {
    const monsterDmg = this._monsters.reduce((att, crr) => {
      if (crr.lifePoints > 0) return att + crr.strength;
      return att;
    }, 0);
    return monsterDmg;
  }

  private monstersLPCalculation(): number {
    const monstersLP = this._monsters.reduce((att, crr) => {
      if (crr.lifePoints > 0) return att + crr.lifePoints;
      return att;
    }, 0);

    return monstersLP > 0 ? monstersLP : -1;
  }

  private playerAttack(): void {
    for (let i = 0; i < this._monsters.length; i += 1) {
      const monster = this._monsters[i];
      if (monster.lifePoints > 0) return this.player.attack(monster);
    }
  }

  private battleCalculation(): number[] {
    this.playerAttack();

    const monsterDmg = this.monsterDMGCalculation();

    const playerLP = this.player.receiveDamage(monsterDmg);

    const monstersLP = this.monstersLPCalculation();

    return [playerLP, monstersLP];
  }

  private consoleLogLP(): void {
    console.log(`
    Player LP: ${this.player.lifePoints} | \
    Monsters LP: ${this.monstersLPCalculation()}`);
  }

  public fight(): number {
    this.consoleLogLP();
    const playerAndMonsterLP = this.battleCalculation();
    if (!playerAndMonsterLP.includes(-1)) {
      return this.fight();
    }

    this.consoleLogLP();
    return super.fight();
  }
}

export default PVE;