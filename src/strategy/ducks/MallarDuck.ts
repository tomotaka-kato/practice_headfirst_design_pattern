import Duck from './Duck';
import Quack from '../behaviors/quackBehaviors/Quack';
import FlyWithWings from '../behaviors/flyBehaviors/FlyWithWings';

export default class MallarDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display():void { console.log('本物のマガモです。') }
  hoge(): void { console.log('hoge') }
}