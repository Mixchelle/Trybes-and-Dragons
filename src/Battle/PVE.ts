import Battle from './Battle';
import Character from '../Character';
import Monster from '../Monster';
import Fighter, { SimpleFighter } from '../Fighter';

type BattleParticipant = Character | Monster | Fighter | SimpleFighter;

export default class PVE extends Battle {
  constructor(
    public player: Character,
    public monsters: BattleParticipant[],
  ) {
    super(player);
  }

  private _battles() {
    this.monsters.forEach((opponent) => {
      const continueBattle = () => 
        this.player.lifePoints > 0 && opponent.lifePoints > 0;
      while (continueBattle()) {
        opponent.attack(this.player);
        this.player.attack(opponent);
      }
    });
  }

  fight(): number {
    this._battles();

    return this.player.lifePoints > 0 ? 1 : -1;
  }
}