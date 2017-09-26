"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("../../supers/Pizza");
class ChicagoStyleCheesePizza extends Pizza_1.default {
    constructor() {
        super();
        this.cut = () => {
            console.log('ピザを四角形に切り分ける');
        };
        this.name = 'シカゴスタイルのソース＆チーズピザ';
        this.dough = '厚いクラスト生地';
        this.sauce = 'マリナラソース';
        this.toppings.push('粉レッジャーノチーズ');
    }
}
exports.default = ChicagoStyleCheesePizza;
