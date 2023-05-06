import Race from './Race';

class Dwarf extends Race {
  public maxLifePoints: number;
  static numberOfInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.incrementRacesInstances();
  }

  static incrementRacesInstances() {
    this.numberOfInstances += 1;
  }

  static createdRacesInstances() {
    return this.numberOfInstances;
  }
}
export default Dwarf;