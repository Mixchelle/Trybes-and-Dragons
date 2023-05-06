import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  static numberOfInstances = 0;
  private _energyType: EnergyType;

  constructor(_name: string) {
    super(_name);
    Ranger.incrementArchetypeInstances();
    this._energyType = 'stamina';
  }

  static incrementArchetypeInstances() {
    this.numberOfInstances += 1;
  }

  static createdArchetypeInstances() {
    return this.numberOfInstances;
  } 

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;