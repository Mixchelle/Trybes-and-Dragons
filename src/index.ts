import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1: Character = new Character('Dobby');
const player2: Character = new Character('mimi');
const player3: Character = new Character('juju');

player1.levelUp();
player1.levelUp();
player1.levelUp();

export { player1, player2, player3 };

const monster1: Monster = new Monster();
const monster2: Monster = new Dragon();

export { monster1, monster2 };

const pvp: PVP = new PVP(player2, player3);

export { pvp };

const pve: PVE = new PVE(player1, [monster1, monster2]);

export { pve };

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    battle.fight();
  });
}
export { runBattles };