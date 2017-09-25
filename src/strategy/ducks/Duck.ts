import FlyBehavior from '../behaviors/flyBehaviors/FlyBehavior';
import QuackBehavior from '../behaviors/quackBehaviors/QuackBehavior';

export default abstract class Duck {

  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  public abstract display():void;

  public performFly = (): void => {
    this.flyBehavior.fly();
  }

  public performQuack = ():void => {
    this.quackBehavior.quack();
  }

  public swim = (): void => {
    console.log('全ての鴨は浮かびます。囮の鴨でも!');
  }

  setFlyBehavior = (fb: FlyBehavior):void => {
    this.flyBehavior = fb;
  }
  setQuackBehavior = (qb: QuackBehavior): void => {
    this.quackBehavior = qb;
  }

}