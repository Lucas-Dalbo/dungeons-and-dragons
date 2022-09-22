import Race from './Race';
import Orc from './Orc';
import Dwarf from './Dwarf';
import Elf from './Elf';
import Halfling from './Halfling';

const raceCreate = {
  Elf: (name: string, dex: number) => new Elf(name, dex),
  Dwarf: (name: string, dex: number) => new Dwarf(name, dex),
  Halfling: (name: string, dex: number) => new Halfling(name, dex),
  Orc: (name: string, dex: number) => new Orc(name, dex),
};

type RaceList = 'Elf' | 'Dwarf' | 'Halfling' | 'Orc' ;

export default Race;
export { Orc, Dwarf, Elf, Halfling, raceCreate, RaceList };