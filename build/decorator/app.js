"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Espresso_1 = require("./drinks/Espresso");
const HouseBlend_1 = require("./drinks/HouseBlend");
const Mocha_1 = require("./condiments/Mocha");
const beverage = new Espresso_1.default();
console.log(`${beverage.getDescription()} $${beverage.cost()}`);
let beverage2 = new HouseBlend_1.default();
beverage2 = new Mocha_1.default(beverage2);
beverage2 = new Mocha_1.default(beverage2);
console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);
