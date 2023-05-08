import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _char: Fighter;
  private _enemies: (Fighter | SimpleFighter)[];

  constructor(char: Fighter, enemies: (Fighter | SimpleFighter)[]) {
    super(char);
    this._char = char;
    this._enemies = enemies;
  }

  fight(): number {
    this._enemies.forEach((enemy) => {
      while (this._char.lifePoints > 0 && enemy.lifePoints > 0) {
        if (PVE.isFighter(enemy)) {
          this._char.attack(enemy as Fighter);
        } else {
          this._char.attack(enemy as SimpleFighter);
        }
        enemy.attack(this._char);
      }
    });
    return super.fight();
  }

  private static isFighter(enemy: Fighter | SimpleFighter): enemy is Fighter {
    return 'defense' in enemy && 'levelUp' in enemy;
  }
}

export default PVE;