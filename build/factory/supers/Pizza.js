"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    constructor() {
        this.toppings = [];
        this.prepare = () => {
            console.log(`${this.name}を下処理`);
            console.log(`生地をこねる…`);
            console.log(`ソースを追加…`);
            console.log(`トッピングを追加:`);
            this.toppings.forEach(topping => console.log(` ${topping}`));
        };
        this.bake = () => {
            console.log("350度で25分間焼く");
        };
        this.cut = () => {
            console.log('ピザを扇型に切り分ける');
        };
        this.box = () => {
            console.log('PizzaStoreの正式な箱にピザを入れる');
        };
        this.getName = () => this.name;
    }
}
exports.default = Pizza;
