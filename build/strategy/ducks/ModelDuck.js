"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Duck_1 = require("./Duck");
const FlyNoWay_1 = require("../behaviors/flyBehaviors/FlyNoWay");
const Quack_1 = require("../behaviors/quackBehaviors/Quack");
class ModelDuck extends Duck_1.default {
    constructor() {
        super();
        this.flyBehavior = new FlyNoWay_1.default();
        this.quackBehavior = new Quack_1.default();
    }
    display() {
        console.log('模型のカモです');
    }
}
exports.default = ModelDuck;
