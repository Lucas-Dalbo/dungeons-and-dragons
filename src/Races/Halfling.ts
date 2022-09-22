import Race from './Race';

class Halfling extends Race {
  static _instancias = 0;
  private _maxLifePoints: number;

  constructor(name: string, dex: number) {
    super(name, dex);

    this._maxLifePoints = 60;

    Halfling._instancias += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instancias;
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }
}

export default Halfling;