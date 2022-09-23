import Archetype, { archetypeCreate, ArchetypeList } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { raceCreate, RaceList } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name: string,
    race: RaceList = 'Elf',
    archetype: ArchetypeList = 'Mage',
  ) {
    this._race = raceCreate[race](name, getRandomInt(1, 10));
    this._archetype = archetypeCreate[archetype](name);
    this._maxLifePoints = Math.floor(this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race { return this._race; }
  public get archetype(): Archetype { return this._archetype; }
  public get lifePoints(): number { return this._lifePoints; }
  public get strength(): number { return this._strength; }
  public get defense(): number { return this._defense; }
  public get dexterity(): number { return this._dexterity; }
  public get energy(): Energy { return { ...this._energy }; }

  private damageCalculation(dmg: number): number {
    const newLifePoints = this._lifePoints - dmg;
    this._lifePoints = newLifePoints > 0 ? newLifePoints : -1;
    return this._lifePoints;
  }

  private LPVerificationOnLevelUp(): void {
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    return this.damageCalculation(damage > 0 ? damage : 0);
  }

  public attack(enemy: SimpleFighter): void {
    const attValue = this._strength;
    enemy.receiveDamage(attValue);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    this.LPVerificationOnLevelUp();
  }

  public special(enemy: SimpleFighter): void {
    this._energy.amount -= 2;
    const specialValue = Math
      .floor((this._defense / 2) + (this._dexterity / 2));
    
    enemy.receiveDamage(specialValue);
  }
}

export default Character;