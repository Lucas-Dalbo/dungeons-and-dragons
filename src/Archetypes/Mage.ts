import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static _instancias = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';

    Mage._instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._instancias;
  }

  get energyType(): EnergyType { return this._energy; }
}

export default Mage;