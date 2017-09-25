"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MallarDuck_1 = require("./ducks/MallarDuck");
const ModelDuck_1 = require("./ducks/ModelDuck");
const FlyRocketPowered_1 = require("./behaviors/flyBehaviors/FlyRocketPowered");
const mallard = new MallarDuck_1.default();
const model = new ModelDuck_1.default();
const ducks = [mallard, model];
ducks.forEach(duck => {
    duck.performQuack();
    duck.performFly();
});
model.setFlyBehavior(new FlyRocketPowered_1.default());
model.performFly();
