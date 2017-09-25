"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Duck {
    constructor() {
        this.performFly = () => {
            this.flyBehavior.fly();
        };
        this.performQuack = () => {
            this.quackBehavior.quack();
        };
        this.swim = () => {
            console.log('全ての鴨は浮かびます。囮の鴨でも!');
        };
        this.setFlyBehavior = (fb) => {
            this.flyBehavior = fb;
        };
        this.setQuackBehavior = (qb) => {
            this.quackBehavior = qb;
        };
    }
}
exports.default = Duck;
