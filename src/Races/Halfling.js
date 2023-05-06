"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this.maxLifePoints = 60;
        Halfling.incrementRacesInstances();
    }
    static incrementRacesInstances() {
        this.numberOfInstances += 1;
    }
    static createdRacesInstances() {
        return this.numberOfInstances;
    }
}
Halfling.numberOfInstances = 0;
exports.default = Halfling;
