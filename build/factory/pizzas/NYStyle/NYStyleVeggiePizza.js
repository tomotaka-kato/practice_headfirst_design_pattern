"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pizza_1 = require("../..//supers/Pizza");
class NYStyleVeggiePizza extends Pizza_1.default {
    constructor() {
        super();
        this.name = 'ニューヨークスタイルのソース＆野菜ピザ';
        this.dough = '薄いクラスト生地';
        this.sauce = 'マリナラソース';
        this.toppings.push('色々な野菜');
    }
}
exports.default = NYStyleVeggiePizza;
