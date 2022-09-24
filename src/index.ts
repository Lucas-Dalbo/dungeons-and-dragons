import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Marvin', 'Halfling', 'Necromancer');
const player2 = new Character('Rebecca', 'Orc', 'Mage');
const player3 = new Character('Titan', 'Dwarf', 'Ranger');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster(20, 15);
const monster2 = new Dragon(50, 30);

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };