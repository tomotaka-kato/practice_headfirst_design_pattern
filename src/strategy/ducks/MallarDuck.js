"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Duck_1 = require("./Duck");
const Quack_1 = require("../behaviors/quackBehaviors/Quack");
const FlyWithWings_1 = require("../behaviors/flyBehaviors/FlyWithWings");
class MallarDuck extends Duck_1.default {
    constructor() {
        super();
        this.quackBehavior = new Quack_1.default();
        this.flyBehavior = new FlyWithWings_1.default();
    }
    display() { console.log('本物のマガモです。'); }
    hoge() { console.log('hoge'); }
}
exports.default = MallarDuck;
