"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PizzaStore_1 = require("../supers/PizzaStore");
const NYStyleCheesePizza_1 = require("../pizzas/NYStyle/NYStyleCheesePizza");
const NYStyleVeggiePizza_1 = require("../pizzas/NYStyle/NYStyleVeggiePizza");
class NYPizzaStore extends PizzaStore_1.default {
    constructor() {
        super(...arguments);
        this.menus = {
            CHEEZE: 'チーズ',
            VEGIE: '野菜'
        };
    }
    createPizza(item) {
        if (item === this.menus.CHEEZE)
            return new NYStyleCheesePizza_1.default();
        else if (item === this.menus.VEGIE)
            return new NYStyleVeggiePizza_1.default();
        else
            return null;
    }
}
exports.default = NYPizzaStore;
