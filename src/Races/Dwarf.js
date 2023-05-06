"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
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
Dwarf.numberOfInstances = 0;
exports.default = Dwarf;
