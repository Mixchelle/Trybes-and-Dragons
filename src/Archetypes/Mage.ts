import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static numberOfInstances = 0;
  private _energyType: EnergyType;

  constructor(_name: string) {
    super(_name);
    Mage.incrementArchetypeInstances();
    this._energyType = 'mana';
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

export default Mage;