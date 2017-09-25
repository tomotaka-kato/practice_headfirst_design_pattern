"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Beverage_1 = require("../Beverage");
class Espresso extends Beverage_1.default {
    constructor() {
        super();
        this.cost = () => 1.99;
        this.description = 'エスプレッソ';
    }
}
exports.default = Espresso;
