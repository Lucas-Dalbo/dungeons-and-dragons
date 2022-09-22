import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static _instancias = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'stamina';

    Ranger._instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instancias;
  }

  get energyType(): EnergyType { return this._energy; }
}

export default Ranger;