import Race from './Race';

class Orc extends Race {
  static _instancias = 0;
  private _maxLifePoints: number;

  constructor(name: string, dex: number) {
    super(name, dex);

    this._maxLifePoints = 74;

    Orc._instancias += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instancias;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}

export default Orc;