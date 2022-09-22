import Race from './Race';

class Dwarf extends Race {
  static _instancias = 0;
  private _maxLifePoints: number;

  constructor(name: string, dex: number) {
    super(name, dex);

    this._maxLifePoints = 80;

    Dwarf._instancias += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instancias;
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }
}

export default Dwarf;