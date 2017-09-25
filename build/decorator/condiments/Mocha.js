"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CondimentDecortor_1 = require("../CondimentDecortor");
class Mocha extends CondimentDecortor_1.default {
    constructor(b) {
        super();
        this.getDescription = () => `${this.beverage.getDescription()}、モカ`;
        this.cost = () => .20 + this.beverage.cost();
        this.beverage = b;
    }
}
exports.default = Mocha;
