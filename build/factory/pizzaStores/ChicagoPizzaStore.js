"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PizzaStore_1 = require("../supers/PizzaStore");
const ChicagoStyleCheezePizza_1 = require("../pizzas/ChicagoStyle/ChicagoStyleCheezePizza");
const ChicagoStyleVeggiePizza_1 = require("../pizzas/ChicagoStyle/ChicagoStyleVeggiePizza");
class NYPizzaStore extends PizzaStore_1.default {
    constructor() {
        super(...arguments);
        this.menus = {
            CHEEZE: 'チーズ',
            VEGIE: '野菜'
        };
    }
    createPizza(item) {
        if (item === 'チーズ')
            return new ChicagoStyleCheezePizza_1.default();
        else if (item === '野菜')
            return new ChicagoStyleVeggiePizza_1.default();
        else
            return null;
    }
}
exports.default = NYPizzaStore;
