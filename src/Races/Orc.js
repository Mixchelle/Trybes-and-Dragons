"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.maxLifePoints = 74;
        Orc.incrementRacesInstances();
    }
    static incrementRacesInstances() {
        this.numberOfInstances += 1;
    }
    static createdRacesInstances() {
        return this.numberOfInstances;
    }
}
Orc.numberOfInstances = 0;
exports.default = Orc;
