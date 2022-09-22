import Race from './Race';

class Elf extends Race {
  static _instancias = 0;
  private _maxLifePoints: number;

  constructor(name: string, dex: number) {
    super(name, dex);

    this._maxLifePoints = 99;

    Elf._instancias += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instancias;
  }

  public get maxLifePoints(): number { return this._maxLifePoints; }
}

export default Elf;