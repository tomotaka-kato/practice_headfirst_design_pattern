import Duck from './Duck';
import FlyNoWay from '../behaviors/flyBehaviors/FlyNoWay';
import Quack from '../behaviors/quackBehaviors/Quack';

export default class ModelDuck extends Duck {

  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  display ():void {
    console.log('模型のカモです');
  }

}