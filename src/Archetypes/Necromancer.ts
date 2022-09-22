import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _instancias = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';

    Necromancer._instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instancias;
  }

  get energyType(): EnergyType { return this._energy; }
}

export default Necromancer;