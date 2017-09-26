"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PizzaStore {
    constructor() {
        this.orderPizza = (type) => {
            const pizza = this.createPizza(type);
            pizza.prepare();
            pizza.bake();
            pizza.cut();
            pizza.box();
            return pizza;
        };
    }
}
exports.default = PizzaStore;
