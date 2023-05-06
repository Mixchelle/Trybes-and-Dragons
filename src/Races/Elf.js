"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.maxLifePoints = 99;
        Elf.incrementRacesInstances();
    }
    static incrementRacesInstances() {
        this.numberOfInstances += 1;
    }
    static createdRacesInstances() {
        return this.numberOfInstances;
    }
}
Elf.numberOfInstances = 0;
exports.default = Elf;
