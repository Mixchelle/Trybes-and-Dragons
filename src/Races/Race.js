"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Race {
    constructor(name, dexterity) {
        this._name = name;
        this._dexterity = dexterity;
    }
    get name() {
        return this._name;
    }
    get dexterity() {
        return this._dexterity;
    }
    static createdRacesInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Race;
