import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static _instancias = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';

    Warrior._instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instancias;
  }

  get energyType(): EnergyType { return this._energy; }
}

export default Warrior;