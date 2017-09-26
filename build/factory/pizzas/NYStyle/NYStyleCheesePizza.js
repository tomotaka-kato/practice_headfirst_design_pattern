"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("../..//supers/Pizza");
class NYStyleCheesePizza extends Pizza_1.default {
    constructor() {
        super();
        this.name = 'ニューヨークスタイルのソース＆チーズピザ';
        this.dough = '薄いクラスト生地';
        this.sauce = 'マリナラソース';
        this.toppings.push('粉レッジャーノチーズ');
    }
}
exports.default = NYStyleCheesePizza;
