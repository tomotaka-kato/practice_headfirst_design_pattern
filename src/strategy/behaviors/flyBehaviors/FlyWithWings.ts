import FlyBehavior from './FlyBehavior';

export default class FlyWithWings​​ implements FlyBehavior {
  public fly = (): void => {
    console.log('飛んています！！');
  }
}