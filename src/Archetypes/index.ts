import Archetype from './Archetype';
import Mage from './Mage';
import Necromancer from './Necromancer';
import Warrior from './Warrior';
import Ranger from './Ranger';

const archetypeCreate = {
  Mage: (name: string) => new Mage(name),
  Necromancer: (name: string) => new Necromancer(name),
  Warrior: (name: string) => new Warrior(name),
  Ranger: (name: string) => new Ranger(name),
};

type ArchetypeList = 'Mage' | 'Necromancer' | 'Warrior' | 'Ranger';

export default Archetype;
export { Mage, Necromancer, Warrior, Ranger, archetypeCreate, ArchetypeList };