import Duck from './ducks/Duck';
import MallardDuck from './ducks/MallarDuck';
import ModelDuck from './ducks/ModelDuck';
import FlyRocketPowered from './behaviors/flyBehaviors/FlyRocketPowered';

const mallard: MallardDuck = new MallardDuck();
const model: ModelDuck = new ModelDuck();
const ducks = [mallard, model];

ducks.forEach(duck => {
  duck.performQuack();
  duck.performFly();
});

model.setFlyBehavior(new FlyRocketPowered());
model.performFly();