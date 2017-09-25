"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Beverage_1 = require("../Beverage");
class HouseBlend extends Beverage_1.default {
    constructor() {
        super();
        this.cost = () => .89;
        this.description = 'ハウスブレンドコーヒー';
    }
}
exports.default = HouseBlend;
